import { createClient } from '@supabase/supabase-js'
import { Database } from './services/game/stats/types/supabase'
import { SUPABASE_URL, SUPABASE_KEY } from './utils/config'
import { ActiveSessionResource } from '@clerk/types'

export function CreateSupabaseClerkClient(
	session: ActiveSessionResource | null | undefined
) {
	return createClient<Database>(SUPABASE_URL!, SUPABASE_KEY!, {
		global: {
			fetch: async (url, options = {}) => {
				const clerkToken = await session?.getToken({
					template: 'supabase',
				})

				if (!clerkToken) {
					console.log('Error Clerk token')
					throw new Error('Failed to get Clerk token')
				}

				const headers = new Headers(options?.headers)
				headers.set('Authorization', `Bearer ${clerkToken}`)

				return fetch(url, {
					...options,
					headers,
				})
			},
		},
	})
}
