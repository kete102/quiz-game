import { ArrowRight } from 'lucide-react'
import { useGameStore } from '../store/game/store'
import PlayerStats from './game/PlayerStats'

function Overview() {
	const { setIsGameActive } = useGameStore()
	const handleStartGame = () => {
		setIsGameActive(true)
	}
	return (
		<div className='w-full h-full space-y-4'>
			<section className='w-full flex items-center justify-between'>
				<h1 className='opacity-80 tracking-wider text-3xl md:text-4xl'>
					Overview
				</h1>
				<button
					className='font-normal hover:font-medium inline-flex items-center gap-x-1.5 select-none tracking-tight text-white/60 hover:text-white text-xl px-4 py-3 rounded-md bg-white/5 transition-all hover:shadow-xl hover:scale-105 border-none cursor-pointer hover:border-white'
					onClick={handleStartGame}
				>
					Start a new game! <ArrowRight />
				</button>
			</section>
			<section className='grid gap-4 grid-cols-1 md:grid-cols-2 md:grid-rows-2 p-2'>
				<PlayerStats />
				<PlayerStats />
				<PlayerStats />
				<PlayerStats />
			</section>
		</div>
	)
}

export default Overview
