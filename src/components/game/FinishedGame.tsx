import { useGameStore } from '@/store/game/store'
import { RotateCcw } from 'lucide-react'

const messages = [
	{ min: 0, max: 39, text: '😢 Keep going! You can do better, try again.' },
	{ min: 40, max: 69, text: '😊 Well played! But you can still improve.' },
	{ min: 70, max: 99, text: '🔥 Amazing! Almost perfect, keep it up!' },
	{
		min: 1,
		max: 1,
		text: "🎉 Incredible! You got the highest score, you're a pro!",
	},
]

const getMessage = (score: number, total: number) => {
	const ratio = score / total
	return (
		messages.find(({ min, max }) => ratio >= min && ratio <= max)?.text ||
		'⚠️ Error en la puntuación.'
	)
}

interface Props {
	handlePlayAgain: () => void
}

export const FinishedGame = ({ handlePlayAgain }: Props) => {
	const { questions, score } = useGameStore()
	return (
		<section className='flex h-full w-full flex-col items-center justify-center space-y-10 text-white'>
			<div className='space-y-4 text-center'>
				<h1 className='text-4xl font-extrabold tracking-wider text-gray-300'>
					{' '}
					Time finished 🚨
				</h1>
				<h3 className='text-3xl font-bold text-gray-300'>Score: {score}/100</h3>
				<p className='text-xl font-medium text-pretty text-gray-400 italic'>
					{getMessage(score, questions.length)}
				</p>
			</div>
			<button
				className='inline-flex w-full transform cursor-pointer items-center justify-center gap-x-2 rounded-md border-none bg-blue-800/80 px-4 py-3 text-xl font-semibold tracking-wide text-blue-300 transition-all duration-200 select-none hover:scale-102 hover:border-white hover:shadow-xl active:scale-95 md:text-2xl'
				onClick={handlePlayAgain}
			>
				Play again <RotateCcw className='size-6' />
			</button>
		</section>
	)
}
