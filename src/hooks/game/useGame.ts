import { useGameStore } from '@/store/game/useGameStore'
import { useSession } from '@clerk/clerk-react'
import { useEffect, useState } from 'react'
import { useUserStats } from './useUserStats'

export function useGame() {
	const { session } = useSession()
	const [shuffledAnswers, setShuffledAnswers] = useState<string[]>([])
	const [answerSelected, setAnswerSelected] = useState<string>('')
	const [disableBtn, setDisabledBtn] = useState(false)
	const [showResult, setShowResult] = useState(false)
	const {
		nextQuestion,
		selectAnswer,
		endGame,
		questions,
		currentQuestionIndex,
		addPoints,
	} = useGameStore()
	const { updateUserStats } = useUserStats()
	const { userStats } = useUserStats()
	const currentQuestion = questions[currentQuestionIndex]

	// Shuffle answers only when the quesiton changes
	useEffect(() => {
		if (currentQuestion) {
			const answers = [
				...currentQuestion.incorrectAnswers,
				currentQuestion.correctAnswer,
			]
			setShuffledAnswers(answers.sort(() => Math.random() - 0.5))
		}
	}, [currentQuestion])

	// Checks the selected unswers
	const handleAnswerSubmit = (userAnswer: string) => {
		if (!currentQuestion || currentQuestionIndex >= questions.length) {
			endGame()
			return
		}

		// Checks if is the right answer
		const isCorrect = userAnswer === currentQuestion.correctAnswer
		if (isCorrect) addPoints()

		// Update the store
		selectAnswer({ questionId: currentQuestion.id, isCorrect })
		setAnswerSelected(userAnswer)
		setDisabledBtn(true)
		setShowResult(true)
	}

	// Handles the finished game flow
	const handleGameFinished = async () => {
		// If the user isn't signed in it just returns
		if (!session?.user) {
			endGame()
			return
		}

		//If the user is signed in, updates de user stats
		try {
			updateUserStats({
				bestStreak: (userStats?.bestStreak ?? 0) + 1,
				correctAnswers: (userStats?.correctAnswers ?? 0) + 1,
				streak: (userStats?.streak ?? 0) + 1,
				totalGames: (userStats?.totalGames ?? 0) + 1,
				wrongAnswers: (userStats?.wrongAnswers ?? 0) + 1,
				userId: session.user.id,
			})
			endGame()
		} catch (error) {
			console.error('Error updating  user stats: ', error)
		}
	}

	// Handles the logic to pass to the next question
	const handleNextQuestion = () => {
		// Resets the state for the next question
		setAnswerSelected('')
		setDisabledBtn(false)
		setShowResult(false)

		// Checks if it's the last question
		if (currentQuestionIndex + 1 < questions.length) {
			nextQuestion()
		} else {
			handleGameFinished()
		}
	}

	// User quit the game
	const handleQuitGame = () => {
		endGame()
	}

	return {
		currentQuestion,
		shuffledAnswers,
		showResult,
		disableBtn,
		answerSelected,
		handleAnswerSubmit,
		handleNextQuestion,
		handleQuitGame,
	}
}
