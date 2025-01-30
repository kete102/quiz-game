import { ArrowRight } from 'lucide-react'
import PlayerStats from './game/PlayerStats'
import { useUser } from '@clerk/clerk-react'
import { useNavigate } from '@tanstack/react-router'

function Overview() {
	const { user } = useUser()
	const navigate = useNavigate()

	const handleStartGame = () => navigate({ to: '/game-setup' })

	return (
		<div className='h-full w-full space-y-4'>
			<section className='flex w-full flex-col justify-between space-y-4 md:flex-row md:items-center'>
				<h1 className='text-3xl tracking-wider opacity-80 md:text-4xl'>
					Hi, {user?.firstName}👋
				</h1>
				<button
					className='inline-flex cursor-pointer items-center gap-x-1.5 rounded-md border-none bg-white/5 px-4 py-3 text-xl font-normal tracking-tight text-white/60 transition-all select-none hover:scale-105 hover:border-white hover:font-medium hover:text-white hover:shadow-xl'
					onClick={handleStartGame}
				>
					Start a new game! <ArrowRight />
				</button>
			</section>
			<section className='grid grid-cols-1 gap-4 p-2 md:grid-cols-2 md:grid-rows-2'>
				<PlayerStats>
					<h3 className='text-center text-3xl opacity-50'>100 games played</h3>
					<div className='mt-8 flex items-center justify-center gap-x-4'>
						<h4 className='text-2xl text-green-400'>10 wins 🎉</h4>
						<h4 className='text-2xl text-rose-400'>7 losses 😨</h4>
					</div>
				</PlayerStats>
				<PlayerStats>
					<h3 className='text-center text-3xl opacity-50'>Favorite topics</h3>
					<div className='mt-8 flex w-full items-center'>
						<h4 className='text-green-400'>10 wins</h4>
						<h4 className='text-rose-400'>7 losses</h4>
					</div>
				</PlayerStats>
				<PlayerStats>
					<h3 className='text-center text-3xl opacity-50'>Achivements</h3>
					<div className='mt-8 flex w-full items-center'>
						<h4 className='text-green-400'>10 wins</h4>
						<h4 className='text-rose-400'>7 losses</h4>
					</div>
				</PlayerStats>
				<PlayerStats>
					<h3 className='text-center text-3xl opacity-50'>Average score</h3>
					<h4 className='my-2 text-center'>7</h4>
					<p className='text-xl font-normal italic opacity-30'>
						Correct answers increases this score
					</p>
				</PlayerStats>
			</section>
		</div>
	)
}

export default Overview
