import { useGameStore } from '@/store/game/store'
import { ListOrdered, ThumbsUp, ThumbsDown } from 'lucide-react'

interface Props {
	currentQuestionIndex: number
}
function GameInfo({ currentQuestionIndex }: Props) {
	const { userAnswers, questions } = useGameStore()

	return (
		<section className='flex w-full flex-col items-center px-4 text-white md:max-w-2xl lg:max-w-3xl'>
			<div className='flex w-full items-center justify-center gap-x-3'>
				<h3 className='inline-flex items-center gap-x-2 rounded-md bg-black/50 p-3 text-2xl font-semibold transition-all hover:scale-103'>
					<ListOrdered className='size-6' />
					{currentQuestionIndex}/{questions.length}
				</h3>
				<p className='flex items-center gap-x-3 text-2xl font-medium'>
					<span className='inline-flex items-center gap-x-2 rounded-md bg-green-800 p-3 transition-all hover:scale-103'>
						<ThumbsUp className='size-5' />
						{userAnswers.length}
					</span>
					<span className='inline-flex items-center gap-x-2 rounded-md bg-red-800 p-3 transition-all hover:scale-103'>
						<ThumbsDown className='size-5' />
						{userAnswers.length}
					</span>
				</p>
			</div>
		</section>
	)
}

export default GameInfo
