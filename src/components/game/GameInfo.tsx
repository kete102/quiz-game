import { ListOrdered, ThumbsUp, ThumbsDown } from 'lucide-react'

interface Props {
	currentQuestionIndex: number
	totalQuestions: number
	correctAnswers: number
	incorrectAnswers: number
}
function GameInfo({
	currentQuestionIndex,
	totalQuestions,
	correctAnswers,
	incorrectAnswers,
}: Props) {
	return (
		<section className='flex w-full flex-col items-center px-4 md:max-w-2xl lg:max-w-3xl'>
			<div className='flex w-full items-center justify-center gap-x-3'>
				<h3 className='inline-flex items-center gap-x-2 rounded-md bg-black/50 p-3 text-2xl font-semibold transition-all hover:scale-103'>
					<ListOrdered className='size-6' />
					{currentQuestionIndex}/{totalQuestions}
				</h3>
				<p className='flex items-center gap-x-3 text-2xl font-medium'>
					<span className='inline-flex items-center gap-x-2 rounded-md bg-green-800 p-3 transition-all hover:scale-103'>
						<ThumbsUp className='size-5' />
						{correctAnswers}
					</span>
					<span className='inline-flex items-center gap-x-2 rounded-md bg-red-800 p-3 transition-all hover:scale-103'>
						<ThumbsDown className='size-5' />
						{incorrectAnswers}
					</span>
				</p>
			</div>
		</section>
	)
}

export default GameInfo
