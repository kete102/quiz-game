import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import NotFound from '@/components/NotFound'

export const Route = createRootRoute({
	component: RootComponent,
	notFoundComponent: NotFound,
})

function RootComponent() {
	return (
		<React.Fragment>
			<Outlet />
			<TanStackRouterDevtools />
		</React.Fragment>
	)
}
