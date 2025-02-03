import { create } from 'zustand'
import {
	Category,
	DifficultiesApiValueSchema,
	Difficulty,
} from '../../services/game/questions/types'

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
	questions: Question[] | null
	difficulty: DifficultiesApiValueSchema
	isGameActive: boolean
	categories: Category['apiValue'][]
	currentQuestionIndex: number
	selectedAnswers: string[] | null
	score: number
	correctAnswers: number
	incorrectAnswers: number
	totalQuestions: number
}

interface Actions {
	setQuestion: (questions: Question[]) => void
	setDifficulty: (difficulty: DifficultiesApiValueSchema) => void
	setCurrentQuestionIndex: (index: number) => void
	setSelectedAnswers: (asnwers: string[]) => void
	setCategories: (category: Category['apiValue']) => void
	setScore: (score: number) => void
	setIsGameActive: (isActive: boolean) => void
	resetState: () => void
}

const initialState: State = {
	questions: null,
	difficulty: 'medium',
	isGameActive: false,
	categories: ['general_knowledge'],
	currentQuestionIndex: 0,
	selectedAnswers: null,
	score: 0,
	correctAnswers: 0,
	incorrectAnswers: 0,
	totalQuestions: 0,
}

export const useGameStore = create<State & Actions>((set) => ({
	...initialState,

	setQuestion: (questions) => set((state) => ({ ...state, questions })),
	setDifficulty: (newDifficulty) =>
		set((state) => ({
			difficulty: state.difficulty === newDifficulty ? 'medium' : newDifficulty,
		})),
	resetState: () => set(initialState),
	setCurrentQuestionIndex: (index) =>
		set((state) => ({ ...state, currentQuestionIndex: index })),
	setSelectedAnswers: (answers) =>
		set((state) => ({ ...state, selectedAnswers: answers })),
	setScore: (score) => set((state) => ({ ...state, score })),
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
