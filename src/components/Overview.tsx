import { ArrowRight } from 'lucide-react'
import PlayerStats from './game/PlayerStats'
import { Link } from '@tanstack/react-router'
import { useUserStats } from '@/hooks/game/useUserStats'

function Overview() {
	const { userStats } = useUserStats()

	console.log(userStats)

	return (
		<div className='h-full w-full space-y-2 select-none'>
			<section className='flex w-full flex-col items-center gap-y-2 md:flex-row md:justify-between'>
				<Link
					to='/game-setup'
					className='inline-flex w-full transform cursor-pointer items-center justify-center gap-x-2 rounded-lg border-none bg-black/10 px-4 py-3 text-2xl font-medium tracking-normal text-white shadow-md transition-all duration-200 hover:scale-103 hover:shadow-2xl active:scale-97 active:shadow-2xl md:w-fit'
				>
					Start a new game! <ArrowRight />
				</Link>
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
