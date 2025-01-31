import { createFileRoute, useNavigate } from '@tanstack/react-router'
import Header from '@/components/Header'
import Overview from '@/components/Overview'
import Footer from '@/components/Footer'
import { useAuth } from '@clerk/clerk-react'
import React from 'react'

export const Route = createFileRoute('/')({
	component: RouteComponent,
})

function RouteComponent() {
	const { isSignedIn, isLoaded } = useAuth()
	const navigate = useNavigate()

	React.useEffect(() => {
		if (isLoaded && !isSignedIn) navigate({ to: '/login' })
	}, [isLoaded, isSignedIn, navigate])
	return (
		<div className='flex min-h-screen w-full flex-col p-2'>
			<Header />
			<main className='container mx-auto mt-8 h-full max-w-[1100px] grow rounded-lg p-2 text-4xl font-semibold'>
				<Overview />
			</main>
			<Footer />
		</div>
	)
}
