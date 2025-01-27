import { create } from 'zustand'
import { Category, Difficulty } from '../../services/api/types'
import { CATEGORIES } from '../../utils/constants'

interface Question {
	id: string
	category: Category
	correctAnswer: string
	incorrectAnswers: string[]
	question: {
		text: string
	}
	difficulty: Difficulty
}

interface GameStore {
	questions: Question[] | null
	currentQuestionIndex: number
	selectedAnswers: string[] | null
	score: number
	timeRemaining: number
	isGameActive: boolean
	categories: Category[] | null

	setQuestion: (questions: Question[]) => void
	setCurrentQuestionIndex: (index: number) => void
	setSelectedAnswers: (asnwers: string[]) => void
	setCategories: (categories: Category[] | null) => void
	setScore: (score: number) => void
	setTimeRemaining: (time: number) => void
	setIsGameActive: (isActive: boolean) => void
}

export const useGameStore = create<GameStore>((set) => ({
	questions: null,
	currentQuestionIndex: 0,
	selectedAnswers: null,
	categories: null,
	score: 0,
	timeRemaining: 0,
	isGameActive: false,

	setQuestion: (questions) => set((state) => ({ ...state, questions })),
	setCurrentQuestionIndex: (index) =>
		set((state) => ({ ...state, currentQuestionIndex: index })),
	setSelectedAnswers: (answers) =>
		set((state) => ({ ...state, selectedAnswers: answers })),
	setScore: (score) => set((state) => ({ ...state, score })),
	setTimeRemaining: (timeRemaining) =>
		set((state) => ({ ...state, timeRemaining })),
	setIsGameActive: (isGameActive) =>
		set((state) => ({ ...state, isGameActive })),
	setCategories: (categories) =>
		set((state) => ({
			...state,
			categories: categories ? categories : CATEGORIES,
		})),
}))
