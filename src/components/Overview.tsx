import { ArrowRight } from 'lucide-react'
import { useGameStore } from '../store/game/store'
import PlayerStats from './game/PlayerStats'
import { useUser } from '@clerk/clerk-react'

function Overview() {
	const { user } = useUser()
	const { setIsGameActive } = useGameStore()
	const handleStartGame = () => {
		setIsGameActive(true)
	}

	return (
		<div className='w-full h-full space-y-4'>
			<section className='w-full flex items-center justify-between'>
				<h1 className='opacity-80 tracking-wider text-3xl md:text-4xl'>
					Hi, {user?.username} kete 👋
				</h1>
				<button
					className='font-normal hover:font-medium inline-flex items-center gap-x-1.5 select-none tracking-tight text-white/60 hover:text-white text-xl px-4 py-3 rounded-md bg-white/5 transition-all hover:shadow-xl hover:scale-105 border-none cursor-pointer hover:border-white'
					onClick={handleStartGame}
				>
					Start a new game! <ArrowRight />
				</button>
			</section>
			<section className='grid gap-4 grid-cols-1 md:grid-cols-2 md:grid-rows-2 p-2'>
				<PlayerStats>
					<h3 className='opacity-50 text-3xl text-center'>100 games played</h3>
					<div className='mt-8 flex items-center justify-center gap-x-4'>
						<h4 className='text-green-400 text-2xl '>10 wins 🎉</h4>
						<h4 className='text-rose-400 text-2xl'>7 losses 😨</h4>
					</div>
				</PlayerStats>
				<PlayerStats>
					<h3 className='opacity-50 text-3xl text-center'>Favorite topics</h3>
					<div className='mt-8 w-full flex items-center'>
						<h4 className='text-green-400'>10 wins</h4>
						<h4 className='text-rose-400'>7 losses</h4>
					</div>
				</PlayerStats>
				<PlayerStats>
					<h3 className='opacity-50 text-3xl text-center'>Achivements</h3>
					<div className='mt-8 w-full flex items-center'>
						<h4 className='text-green-400'>10 wins</h4>
						<h4 className='text-rose-400'>7 losses</h4>
					</div>
				</PlayerStats>
				<PlayerStats>
					<h3 className='opacity-50 text-3xl text-center'>Average score</h3>
					<h4 className='text-center my-2'>7</h4>
					<p className='italic opacity-30 text-xl font-normal'>
						Correct answers increases this score
					</p>
				</PlayerStats>
			</section>
		</div>
	)
}

export default Overview
