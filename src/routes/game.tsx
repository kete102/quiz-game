import Game from '@/components/game/Game'
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
		<div className='flex h-full w-full flex-col items-center justify-start'>
			<Game />
		</div>
	)
}
