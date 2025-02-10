import GameInfo from './GameInfo'
import AnswerButton from './AnswerButton'
import { LogOut } from 'lucide-react'
import { FinishedGame } from './FinishedGame'
import { useGame } from '@/hooks/game/useGame'
import React from 'react'
import { Question, useGameStore } from '@/store/game/useGameStore'

function Game({ questions }: { questions: Question[] }) {
	const { currentQuestionIndex, isGameActive } = useGameStore()
	const {
		currentQuestion,
		shuffledAnswers,
		answerSelected,
		disableBtn,
		showResult,
		handleAnswerSubmit,
		handleNextQuestion,
		handleQuitGame,
	} = useGame()

	return (
		<div className='flex h-full w-full flex-col items-center justify-start gap-y-10'>
			<div className='mt-10 h-full w-full flex-1 flex-col justify-between rounded-lg bg-white/5 p-6 shadow-md shadow-gray-500/50 md:mt-2 md:max-w-2xl md:p-10 lg:max-w-3xl'>
				{isGameActive && questions.length > 0 ? (
					<React.Fragment>
						<section className='grid max-h-fit w-full place-content-center'>
							<p className='text-center text-2xl leading-9 font-medium text-pretty text-white md:text-2xl lg:text-3xl'>
								{currentQuestion.question.text}
							</p>
						</section>
						<div className='my-3 h-[2.5px] w-full rounded-full bg-zinc-100/30 md:my-5'></div>

						<section className='my-6 flex w-full flex-col items-start gap-y-4 px-2'>
							{shuffledAnswers.map((answer, index) => (
								<AnswerButton
									answer={answer}
									handleSelectAnswer={handleAnswerSubmit}
									key={`${currentQuestion.id}-${index}}`}
									currentQuestion={currentQuestion}
									answerSelected={answerSelected}
									showResult={showResult}
									disabled={disableBtn}
								/>
							))}
						</section>

						<div className='my-8 flex w-full flex-col items-center justify-center gap-y-6 px-2 md:flex-row'>
							<GameInfo currentQuestionIndex={currentQuestionIndex} />
							{/* Progreso y Resultados */}
						</div>
						<div className='my-4 flex flex-col gap-y-3'>
							<button
								disabled={!answerSelected}
								className='inline-flex w-full transform cursor-pointer items-center justify-center gap-x-2 rounded-md border-none bg-blue-800/80 px-4 py-3 text-xl font-semibold tracking-wide text-blue-200 transition-all duration-200 select-none hover:scale-102 hover:border-white hover:shadow-xl active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 md:text-2xl'
								onClick={handleNextQuestion}
							>
								Next
							</button>
							<button
								className='inline-flex w-full transform cursor-pointer items-center justify-center gap-x-2 rounded-md border-none bg-red-800/80 px-4 py-3 text-xl font-semibold tracking-wide text-red-200 transition-all duration-200 select-none hover:scale-102 hover:border-white hover:shadow-xl active:scale-95 md:text-2xl'
								onClick={handleQuitGame}
							>
								Quit game <LogOut className='size-6' />
							</button>
						</div>
					</React.Fragment>
				) : (
					<FinishedGame />
				)}
			</div>
		</div>
	)
}

export default Game
