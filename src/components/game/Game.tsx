import { Question, useGameStore } from '@/store/game/store'
import CountdownTimer from './CountownTimer'
import GameInfo from './GameInfo'
import AnswerButton from './AnswerButton'
import { LogOut } from 'lucide-react'
import { useNavigate } from '@tanstack/react-router'

function Game({ questions }: { questions: Question[] }) {
	const { currentQuestionIndex, nextQuestion } = useGameStore()
	const navigate = useNavigate()

	const handleQuitGame = () => {
		navigate({ to: '/' })
	}

	return (
		<div className='flex h-screen w-full flex-col items-center justify-start gap-y-10'>
			<div className='mt-10 flex max-h-fit min-h-100 w-full flex-col justify-evenly rounded-lg bg-white/5 p-6 shadow-md shadow-gray-500/50 md:mt-2 md:max-w-2xl md:p-10 lg:max-w-3xl'>
				{/* Pregunta */}
				<section className='grid w-full place-content-center'>
					<p className='text-center text-2xl leading-9 font-medium text-pretty text-white md:text-2xl lg:text-3xl'>
						{questions[currentQuestionIndex].question.text}
					</p>
				</section>
				<div className='my-3 h-[2.5px] w-full rounded-full bg-zinc-100/30 md:my-5'></div>

				{/* Opciones */}
				<section className='mt-3 flex w-full flex-col items-start gap-y-4 px-2'>
					{[
						...questions[currentQuestionIndex].incorrectAnswers,
						questions[currentQuestionIndex].correctAnswer,
					]
						.sort(() => Math.random() - 0.5)
						.map((answer, index) => (
							<AnswerButton
								answer={answer}
								handleNextQuestion={nextQuestion}
								key={`${questions[currentQuestionIndex].id}-${index}}`}
							/>
						))}
				</section>

				<div className='mt-4 flex w-full flex-col items-center justify-center gap-y-6 px-2 md:mt-8 md:flex-row'>
					<CountdownTimer />
					<GameInfo currentQuestionIndex={currentQuestionIndex} />
					{/* Progreso y Resultados */}
				</div>
				<button
					className='my-6 inline-flex w-full transform cursor-pointer items-center justify-center gap-x-2 rounded-md border-none bg-red-800/80 px-4 py-3 text-xl font-semibold tracking-wide text-red-300 transition-all duration-200 select-none hover:scale-102 hover:border-white hover:shadow-xl active:scale-95 md:text-2xl'
					onClick={handleQuitGame}
				>
					Quit game <LogOut className='size-6' />
				</button>
			</div>
		</div>
	)
}

export default Game
