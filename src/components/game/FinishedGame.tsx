import { useGameStore } from '@/store/game/useGameStore'
import { MESSAGES } from '@/utils/constants'
import { SignedIn } from '@clerk/clerk-react'
import { Link } from '@tanstack/react-router'
import { ArrowRight, RotateCcw } from 'lucide-react'

const getMessage = (score: number, total: number) => {
	const ratio = score / total
	return (
		MESSAGES.find(({ min, max }) => ratio >= min && ratio <= max)?.text ||
		'⚠️ Error en la puntuación.'
	)
}

export const FinishedGame = () => {
	const { questions, score } = useGameStore()

	return (
		<section className='flex h-full w-full flex-col items-center justify-center space-y-10 text-white'>
			<div className='space-y-4 text-center'>
				<h3 className='text-5xl font-bold text-slate-900/70'>
					Score: {score}/100
				</h3>
				<p className='text-xl font-medium text-pretty text-gray-400 italic'>
					{getMessage(score, questions.length)}
				</p>
			</div>
			<div className='flex w-full max-w-lg flex-col gap-y-4'>
				<Link
					to='/game-setup'
					className='inline-flex w-full transform cursor-pointer items-center justify-center gap-x-2 rounded-md border-none bg-blue-800/80 px-4 py-3 text-xl font-semibold tracking-wide text-blue-300 transition-all duration-200 select-none hover:scale-102 hover:border-white hover:shadow-xl active:scale-95 md:text-2xl'
				>
					Play again
					<RotateCcw className='size-6' />
				</Link>
				<SignedIn>
					<Link
						to='/'
						className='inline-flex w-full transform cursor-pointer items-center justify-center gap-x-2 rounded-md border-none bg-white/5 px-4 py-3 text-xl font-medium tracking-wide text-white transition-all duration-200 select-none hover:scale-102 hover:shadow-xl active:scale-95 md:text-2xl'
					>
						Go home <ArrowRight className='size-6' />
					</Link>
				</SignedIn>
			</div>
		</section>
	)
}
