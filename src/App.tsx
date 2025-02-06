import { createRouter, RouterProvider } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import { createClient } from '@supabase/supabase-js'
import { Database } from './services/game/stats/types/supabase'
import { useSession } from '@clerk/clerk-react'
import { useMemo } from 'react'
import { CreateSupabaseClerkClient } from './db'

// Register the router instance for type safety
declare module '@tanstack/react-router' {
	interface Register {
		router: typeof router
		context: {
			supabaseClerkClient?: ReturnType<typeof createClient<Database>>
		}
	}
}

const router = createRouter({
	routeTree,
	context: {
		supabaseClerkClient: undefined!,
	},
})

function App() {
	const { session } = useSession()
	const supabaseClerkClient = useMemo(() => {
		return CreateSupabaseClerkClient(session)
	}, [session])

	return (
		<RouterProvider
			router={router}
			context={{ supabaseClerkClient }}
		/>
	)
}

export default App
