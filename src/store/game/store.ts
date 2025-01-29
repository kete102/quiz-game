import { create } from 'zustand'
import { Category, Difficulty } from '../../services/api/types'

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
	categories: Category['apiValue'][]

	setQuestion: (questions: Question[]) => void
	setCurrentQuestionIndex: (index: number) => void
	setSelectedAnswers: (asnwers: string[]) => void
	setCategories: (category: Category['apiValue']) => void
	setScore: (score: number) => void
	setTimeRemaining: (time: number) => void
	setIsGameActive: (isActive: boolean) => void
}

export const useGameStore = create<GameStore>((set) => ({
	questions: null,
	currentQuestionIndex: 0,
	selectedAnswers: null,
	categories: ['general_knowledge'],
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
	setCategories: (category: Category['apiValue']) =>
		set((state) => {
			let updatedCategories: Category['apiValue'][] = []

			if (category === 'general_knowledge') {
				// Si el usuario selecciona 'general_knowledge', eliminamos todas las demás categorías
				updatedCategories = ['general_knowledge']
			} else {
				// Alternamos la selección de la categoría
				const isAlreadySelected = state.categories.includes(category)
				updatedCategories = isAlreadySelected
					? state.categories.filter((cat) => cat !== category) // Quitar categoría si ya estaba
					: [
							...state.categories.filter((cat) => cat !== 'general_knowledge'),
							category,
						] // Agregar nueva categoría y quitar 'general_knowledge'

				// Si no quedan categorías, volvemos a 'general_knowledge'
				if (updatedCategories.length === 0) {
					updatedCategories = ['general_knowledge']
				}
			}

			return {
				...state,
				categories: updatedCategories,
			}
		}),
}))
