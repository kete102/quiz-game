import { useGameStore } from '@/store/game/store'
import CountdownTimer from './CountownTimer'
import { useEffect, useState } from 'react'
import GameInfo from './GameInfo'
import AnswerButton from './AnswerButton'

function Game() {
	const [timer, setTimer] = useState<number>(300)
	const {
		correctAnswers,
		incorrectAnswers,
		currentQuestionIndex,
		totalQuestions,
	} = useGameStore()

	useEffect(() => {
		const interval = setInterval(() => {
			setTimer((prev) => {
				if (prev <= 0) {
					clearInterval(interval)
					return 0
				}
				return prev - 1
			})
		}, 1000)

		return () => clearInterval(interval)
	}, [])

	return (
		<div className='flex h-screen w-full flex-col items-center justify-start gap-y-10'>
			<div className='mt-10 flex max-h-fit min-h-100 w-full flex-col justify-evenly rounded-lg bg-white/5 p-6 shadow-md shadow-gray-500/50 md:mt-2 md:max-w-2xl md:p-10 lg:max-w-3xl'>
				{/* Pregunta */}
				<section className='grid w-full place-content-center'>
					<p className='text-center text-2xl leading-9 font-medium text-pretty md:text-2xl lg:text-3xl'>
						Which Of The Worlds Continents Has The Highest Population?
					</p>
				</section>
				<div className='my-3 h-[2.5px] w-full rounded-full bg-zinc-100/30 md:my-5'></div>

				{/* Opciones */}
				<section className='mt-3 flex w-full flex-col items-start gap-y-4 px-2'>
					<AnswerButton answer='Africa' />
					<AnswerButton answer='North America' />
					<AnswerButton answer='Europe' />
					<AnswerButton answer='Asia' />
				</section>

				<div className='mt-4 flex w-full flex-col items-center justify-center gap-y-6 px-2 md:mt-8 md:flex-row'>
					<CountdownTimer time={timer} />
					<GameInfo
						currentQuestionIndex={currentQuestionIndex}
						totalQuestions={totalQuestions}
						correctAnswers={correctAnswers}
						incorrectAnswers={incorrectAnswers}
					/>
					{/* Progreso y Resultados */}
				</div>
			</div>
		</div>
	)
}

export default Game
