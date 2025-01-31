import Footer from '@/components/Footer'
import Game from '@/components/game/Game'
import Header from '@/components/Header'
import { useGameStore } from '@/store/game/store'
import { useUser } from '@clerk/clerk-react'
import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react'

export const Route = createFileRoute('/game')({
	component: RouteComponent,
})

function RouteComponent() {
	const { isSignedIn } = useUser()
	console.log('Game Page: ', isSignedIn)
	const { resetState } = useGameStore()

	useEffect(() => {
		return () => resetState()
	}, [resetState])

	return (
		<div className='flex h-screen w-full flex-col items-center justify-between p-2'>
			<Header />
			<Game />
			<Footer />
		</div>
	)
}
