import { Question } from '@/store/game/store'
import clsx from 'clsx'

interface Props {
	answer: string
	currentQuestion: Question
	answerSelected: string
	handleSelectAnswer: (userAnswer: string) => void
	showResult: boolean
	disabled: boolean
}
function AnswerButton({
	answer,
	currentQuestion,
	answerSelected,
	handleSelectAnswer,
	showResult,
	disabled,
}: Props) {
	const isCorrect = answer === currentQuestion.correctAnswer
	const isSelected = answer === answerSelected
	const showAsCorrect = showResult && isCorrect
	const showAsIncorrect = showResult && isSelected && !isCorrect

	return (
		<button
			id='answer-button'
			disabled={disabled}
			onClick={() => handleSelectAnswer(answer)}
			className={clsx(
				`inline-flex w-full transform cursor-pointer items-center justify-center gap-x-2 rounded-md bg-gray-400/50 p-3 text-xl font-medium text-white italic transition-all duration-200 hover:scale-105 active:scale-97`,
				{
					'bg-green-600 text-green-200 opacity-100': showAsCorrect,
					'bg-red-600 text-red-300 opacity-80': showAsIncorrect,
					'ring-2 ring-blue-400': !showResult && isSelected,
					'cursor-not-allowed opacity-50': disabled,
				}
			)}
		>
			{answer}
		</button>
	)
}

export default AnswerButton
