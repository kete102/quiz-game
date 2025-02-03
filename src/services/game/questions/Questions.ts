import { z } from 'zod'
import {
	APIQuestion,
	CategoriesApiValueSchema,
	DifficultiesApiValueSchema,
} from './types'
import {
	CategoriesApiValue,
	DifficultiesApiValue,
} from '@/services/game/questions/types'
import { Question } from '@/store/game/store'

const BASE_URL = 'https://the-trivia-api.com/v2/questions'
interface Props {
	categories: CategoriesApiValueSchema[]
	difficulty: DifficultiesApiValueSchema
}

export async function FetchQuestions({
	categories,
	difficulty,
}: Props): Promise<Question[] | null> {
	try {
		console.log({ categories, difficulty })
		if (!categories) throw new Error('Required Categories missing')
		if (!difficulty) throw new Error('Required difficulty missing')

		const categorySchema = z.array(CategoriesApiValue)
		const parsedCategories = categorySchema.safeParse(categories)
		const parsedDifficulty = DifficultiesApiValue.safeParse(difficulty)

		if (!parsedCategories.success) {
			throw new Error(parsedCategories.error?.message)
		}

		if (!parsedDifficulty.success) {
			throw new Error(parsedDifficulty.error?.message)
		}

		const params = new URLSearchParams()

		params.append('categories', parsedCategories.data.join(','))
		params.append('difficulties', parsedDifficulty.data)

		const response = await fetch(`${BASE_URL}?${params.toString()}`)
		const questions: APIQuestion[] = await response.json()

		if (!questions) return null

		return questions.map((question) => ({
			category: question.category,
			correctAnswer: question.correctAnswer,
			incorrectAnswers: question.incorrectAnswers,
			difficulty: question.difficulty,
			question: question.question,
			id: question.id,
		}))
	} catch (error) {
		console.log('Error fetching questions: ', error)
		return null
	}
}
