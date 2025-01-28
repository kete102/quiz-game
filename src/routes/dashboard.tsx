import { createFileRoute } from '@tanstack/react-router'
import Header from '../components/Header'
import Overview from '../components/Overview'
import Wizzard from '../components/game/Wizzard'
import { useGameStore } from '../store/game/store'
import Footer from '../components/Footer'

export const Route = createFileRoute('/dashboard')({
	component: RouteComponent,
})

function RouteComponent() {
	const { isGameActive } = useGameStore()

	return (
		<div className='w-full min-h-screen flex flex-col'>
			<Header />
			<main className='container h-full max-w-[1100px] grow rounded-lg p-2 mt-8 mx-auto text-4xl font-semibold '>
				{!isGameActive && <Overview />}
				{isGameActive && <Wizzard />}
			</main>
			<Footer />
		</div>
	)
}
