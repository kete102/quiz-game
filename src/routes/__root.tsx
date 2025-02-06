import * as React from 'react'
import { Outlet, createRootRouteWithContext } from '@tanstack/react-router'
import NotFound from '@/components/NotFound'
import { createClient } from '@supabase/supabase-js'
import { Database } from '@/services/game/stats/types/supabase'

interface Context {
	supabaseClerkClient: ReturnType<typeof createClient<Database>>
}

export const Route = createRootRouteWithContext<Context>()({
	component: RootComponent,
	notFoundComponent: NotFound,
})

function RootComponent() {
	return (
		<React.Fragment>
			<Outlet />
		</React.Fragment>
	)
}
