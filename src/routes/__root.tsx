import * as React from 'react'
import { createRootRoute, Outlet } from '@tanstack/react-router'
import NotFound from '@/components/NotFound'

export const Route = createRootRoute({
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
