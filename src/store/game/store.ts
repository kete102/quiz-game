import { create } from 'zustand'
import { Category, Difficulty } from '../../services/game/questions/types'

export interface Question {
	id: string
	category: Category
	correctAnswer: string
	incorrectAnswers: string[]
	question: {
		text: string
	}
	difficulty: Difficulty
}

interface State {
	questions: Question[]
	userAnswers: { questionId: string; isCorrect: boolean }[]
	currentQuestionIndex: number
	isGameActive: boolean
}

interface Actions {
	startGame: (questions: Question[]) => void
	selectAnswer: (questionId: string, isCorrect: boolean) => void
	nextQuestion: () => void
	endGame: () => void
	resetGame: () => void
}

const initialState: State = {
	questions: [],
	userAnswers: [],
	currentQuestionIndex: 0,
	isGameActive: false,
}

export const useGameStore = create<State & Actions>((set) => ({
	...initialState,

	startGame: (newQuestions: Question[]) => {
		console.log('State: ', newQuestions)
		set({
			questions: newQuestions,
			currentQuestionIndex: 0,
			userAnswers: [],
			isGameActive: true,
		})
	},
	endGame: () => set({ isGameActive: false }),
	nextQuestion: () =>
		set((state) => ({
			currentQuestionIndex: state.currentQuestionIndex + 1,
		})),
	selectAnswer: (answers) =>
		set((state) => ({ ...state, selectedAnswers: answers })),
	resetGame: () =>
		set({
			questions: [],
			currentQuestionIndex: 0,
			userAnswers: [],
		}),
}))
