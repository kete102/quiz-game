import { create } from 'zustand'
import { Question } from '@/models/Question/types'

interface State {
	questions: Question[]
	userAnswers: { questionId: string; isCorrect: boolean }[]
	currentQuestionIndex: number
	isGameActive: boolean
	score: number
}

interface Actions {
	startGame: (questions: Question[]) => void
	selectAnswer: ({
		questionId,
		isCorrect,
	}: {
		questionId: string
		isCorrect: boolean
	}) => void
	nextQuestion: () => void
	addPoints: () => void
	endGame: () => void
	resetGame: () => void
}

const initialState: State = {
	questions: [],
	userAnswers: [],
	currentQuestionIndex: 0,
	isGameActive: false,
	score: 0,
}

export const useGameStore = create<State & Actions>((set) => ({
	...initialState,

	startGame: (newQuestions: Question[]) => {
		set({
			questions: newQuestions,
			currentQuestionIndex: 0,
			userAnswers: [],
			isGameActive: true,
		})
	},
	endGame: () => set({ isGameActive: false }),
	addPoints: () =>
		set((state) => ({
			score: state.score + 10,
		})),
	nextQuestion: () =>
		set((state) => ({
			currentQuestionIndex: state.currentQuestionIndex + 1,
		})),
	selectAnswer: ({
		questionId,
		isCorrect,
	}: {
		questionId: string
		isCorrect: boolean
	}) =>
		set((state) => ({
			...state,
			selectedAnswers: [...state.userAnswers, { questionId, isCorrect }],
		})),
	resetGame: () =>
		set({
			questions: [],
			currentQuestionIndex: 0,
			userAnswers: [],
			score: 0,
		}),
}))
