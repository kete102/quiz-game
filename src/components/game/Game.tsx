import { useGameStore } from '@/store/game/store'
import { ThumbsDownIcon, ThumbsUpIcon } from 'lucide-react'

function Game() {
	const {
		correctAnswers,
		incorrectAnswers,
		currentQuestionIndex,
		totalQuestions,
	} = useGameStore()

	return (
		<div className='mt-20 flex h-full w-full flex-col items-center justify-start'>
			<div className='mt-6 flex max-h-fit min-h-100 w-full flex-col justify-evenly rounded-md bg-white/5 p-6 md:max-w-2xl md:p-15 lg:max-w-3xl'>
				{/* Question section*/}
				<section className='grid w-full place-content-center'>
					<p className='text-2xl font-medium md:text-2xl'>
						¿Cual es la capital de Francia?
					</p>
				</section>
				<div className='h-[2.5px] w-full rounded-full bg-zinc-100/30 md:my-5'></div>
				{/* Answers section*/}
				<section className='mt-3 flex w-full flex-col items-start gap-y-4 px-2'>
					<AnswerButton answer={'Lyion'} />
					<AnswerButton answer={'Paris'} />
					<AnswerButton answer={'Marsella'} />
				</section>
				{/* Progress section*/}
			</div>
			<section className='my-4 flex w-full flex-col items-center px-4 md:max-w-2xl lg:max-w-3xl'>
				<div className='flex w-full items-center justify-center gap-x-3'>
					<h3 className='rounded-md bg-black/30 p-3 text-2xl font-semibold transition-all hover:scale-103 hover:bg-black/70'>
						{currentQuestionIndex}/{totalQuestions}
					</h3>
					<p className='flex items-center gap-x-3 text-2xl font-medium'>
						<span className='inline-flex items-center gap-x-2 rounded-md bg-green-700/40 p-3 transition-all hover:scale-103 hover:bg-green-900'>
							<ThumbsUpIcon className='size-5' />
							{correctAnswers}
						</span>
						<span className='inline-flex items-center gap-x-2 rounded-md bg-red-700/40 p-3 transition-all hover:scale-103 hover:bg-red-900'>
							<ThumbsDownIcon className='size-5' />
							{incorrectAnswers}
						</span>
					</p>
				</div>
			</section>
		</div>
	)
}

function AnswerButton({ answer }: { answer: string }) {
	return (
		<button className='tranistion-all inline-flex w-full transform cursor-pointer items-center gap-x-2 rounded-md bg-black/20 p-2 pl-3 duration-200 hover:bg-black/50 active:scale-95'>
			<span className='text-xl font-medium text-pretty'>{answer}</span>
		</button>
	)
}

export default Game
