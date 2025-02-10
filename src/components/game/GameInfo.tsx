import { useGameStore } from '@/store/game/useGameStore'
import { ListOrdered, Trophy } from 'lucide-react'

interface Props {
	currentQuestionIndex: number
}
function GameInfo({ currentQuestionIndex }: Props) {
	const { questions, score } = useGameStore()

	return (
		<section className='flex w-full flex-row items-center justify-center gap-x-4 px-4 text-white select-none md:max-w-2xl lg:max-w-3xl'>
			<span className='inline-flex items-center gap-x-2 rounded-md bg-white/5 p-3 text-2xl font-normal shadow-sm shadow-white/20 transition-transform duration-200 hover:scale-103'>
				<Trophy className='size-6' />
				{score}/100
			</span>
			<span className='inline-flex items-center gap-x-2 rounded-md bg-black/40 p-3 text-2xl font-normal shadow-sm shadow-black/50 transition-transform duration-200 hover:scale-103'>
				<ListOrdered className='size-6' />
				{currentQuestionIndex + 1}/{questions.length}
			</span>
		</section>
	)
}

export default GameInfo
