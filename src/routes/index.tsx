import { createFileRoute, Navigate } from '@tanstack/react-router'
import Header from '@/components/Header'
import Overview from '@/components/Overview'
import Footer from '@/components/Footer'
import { SignedOut } from '@clerk/clerk-react'
import GameStatsService from '@/services/game/stats/GameStats'

export const Route = createFileRoute('/')({
	beforeLoad: async ({ context }) => {
		if (!context.supabaseClerkClient)
			throw new Error('Client not authenticated')

		const response = await GameStatsService({
			supabaseClerkClient: context.supabaseClerkClient,
		}).getUserStats()
		console.log('User Stats: ', response)
	},
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
