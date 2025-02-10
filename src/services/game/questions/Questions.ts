import { z } from 'zod'
import {
	APIQuestion,
	CategoriesApiValueSchema,
	DifficultiesApiValueSchema,
	Question,
} from '@/models/Question/types'
import {
	CategoriesApiValue,
	DifficultiesApiValue,
} from '@/models/Question/types'
import { createAdapatedQuestion } from './adapters/createAdaptedQuestion'

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

		return createAdapatedQuestion(questions)
	} catch (error) {
		console.log('Error fetching questions: ', error)
		return null
	}
}
