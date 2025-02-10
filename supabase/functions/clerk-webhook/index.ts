// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

// Setup type definitions for built-in Supabase Runtime APIs
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import 'jsr:@supabase/functions-js/edge-runtime.d.ts'

Deno.serve(async (req) => {
	if (req.method !== 'POST') {
		return new Response('Method not allowed', { status: 405 })
	}

	const body = await req.json()

	// 1. Obtener variables de entorno correctamente
	const supabaseUrl = Deno.env.get('SUPABASE_URL')!
	const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!

	// 2. Validar que existan las variables
	if (!supabaseUrl || !supabaseKey) {
		return new Response('Missing environment variables', { status: 500 })
	}

	// 3. Pasar correctamente los parámetros a createClient
	const supabase = createClient(supabaseUrl, supabaseKey)

	if (body.type === 'user.created') {
		const clerkId = body.data.id
		const userName = body.data.username || body.data.first_name || 'NoName'
		const userEmail = body.data.email_addresses[0]?.email_address || ''
		const createdAt = new Date().toISOString() // Fecha de creación actual

		// Insertar usuario en Supabase
		const { error } = await supabase.from('users').insert([
			{
				clerk_id: clerkId,
				user_name: userName,
				user_email: userEmail,
				created_at: createdAt,
			},
		])

		if (error) {
			return new Response('Error creating user', { status: 500 })
		}

		return new Response('User created successfully', { status: 200 })
	}

	if (body.type === 'user.deleted') {
		const clerkId = body.data.id

		// Eliminar usuario en Supabase
		const { error } = await supabase
			.from('users')
			.delete()
			.eq('clerk_id', clerkId)

		if (error) {
			return new Response('Error deleting user', { status: 500 })
		}

		return new Response('User deleted successfully', { status: 200 })
	}

	return new Response('Ignored Clerk event', { status: 200 })
})

/* To invoke locally:

  1. Run `supabase start` (see: https://supabase.com/docs/reference/cli/supabase-start)
  2. Make an HTTP request:

  curl -i --location --request POST 'http://127.0.0.1:54321/functions/v1/clerk-webhook' \
    --header 'Authorization: Bearer ' \
    --header 'Content-Type: application/json' \
    --data '{"name":"Functions"}'

*/
