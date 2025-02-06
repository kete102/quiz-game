import { useGameStore } from '@/store/game/gameStore'
import { useNavigate } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

export function useGame() {
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
	const currentQuestion = questions[currentQuestionIndex]
	const navigate = useNavigate()

	// Shuffle answers solo cuando cambia la pregunta
	useEffect(() => {
		if (currentQuestion) {
			const answers = [
				...currentQuestion.incorrectAnswers,
				currentQuestion.correctAnswer,
			]
			setShuffledAnswers(answers.sort(() => Math.random() - 0.5))
		}
	}, [currentQuestion])

	const handleAnswerSubmit = (userAnswer: string) => {
		if (!currentQuestion || currentQuestionIndex >= questions.length) {
			endGame()
			return
		}

		// Determinar si la respuesta es correcta
		const isCorrect = userAnswer === currentQuestion.correctAnswer
		if (isCorrect) addPoints()

		// Actualizar estado y store
		selectAnswer({ questionId: currentQuestion.id, isCorrect })
		setAnswerSelected(userAnswer)
		setDisabledBtn(true) // Deshabilitar botones
		setShowResult(true) // Mostrar feedback visual
	}

	const handleNextQuestion = () => {
		// Resetear estado para la siguiente pregunta
		setAnswerSelected('')
		setDisabledBtn(false)
		setShowResult(false)

		// Avanzar a siguiente pregunta o terminar juego
		if (currentQuestionIndex + 1 < questions.length) {
			nextQuestion()
		} else {
			endGame()
		}
	}

	const handleQuitGame = () => {
		endGame()
	}

	const handlePlayAgain = () => {
		navigate({ to: '/game-setup' })
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
		handlePlayAgain,
	}
}
