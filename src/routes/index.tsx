import { createFileRoute, Navigate } from '@tanstack/react-router'
import Header from '@/components/Header'
import Overview from '@/components/Overview'
import Footer from '@/components/Footer'
import { SignedOut } from '@clerk/clerk-react'

export const Route = createFileRoute('/')({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<div className='flex min-h-screen w-full flex-col p-2'>
			<Header />
			<main className='container mx-auto mt-4 h-full max-w-[1100px] grow rounded-lg p-2 text-4xl font-semibold md:mt-8'>
				<Overview />
			</main>
			<Footer />
			<SignedOut>
				<Navigate to='/login' />
			</SignedOut>
		</div>
	)
}
