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
				`inline-flex w-full transform cursor-pointer items-center gap-x-2 rounded-md border-[2px] border-gray-950/50 p-2 pl-3 text-white transition-all duration-200 hover:scale-105 active:scale-97`,
				{
					'bg-green-600': showAsCorrect,
					'bg-red-600': showAsIncorrect,
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
