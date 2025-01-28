import { createFileRoute, Navigate } from '@tanstack/react-router'
import { RedirectToSignIn, SignedIn, SignedOut } from '@clerk/clerk-react'
import React from 'react'

export const Route = createFileRoute('/')({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<React.Fragment>
			<SignedOut>
				<RedirectToSignIn redirectUrl={'/login'} />
			</SignedOut>
			<SignedIn>
				<Navigate to='/dashboard' />
			</SignedIn>
		</React.Fragment>
	)
}
