import { z } from 'zod'

/*
 * Category
 * */
export const CategoriesApiValue = z.enum([
	'music',
	'sport_and_leisure',
	'film_and_tv',
	'arts_and_literature',
	'history',
	'society_and_culture',
	'science',
	'geography',
	'food_and_drink',
	'general_knowledge',
])

export type CategoriesApiValueSchema = z.infer<typeof CategoriesApiValue>

export const CategorySchema: z.ZodType<Category> = z.object({
	id: z.number(),
	name: z.string(),
	icon: z.string(),
	apiValue: CategoriesApiValue,
})

export type Category = {
	id: number
	name: string
	icon: string
	apiValue: CategoriesApiValueSchema
}

/*
 * Difficulty
 * */
const DifficultiesApiValue = z.enum(['easy', 'medium', 'hard'])

export type DifficultiesApiValueSchema = z.infer<typeof DifficultiesApiValue>

export const DifficultySchema: z.ZodType<Difficulty> = z.object({
	id: z.number(),
	name: z.string(),
	icon: z.string(),
	apiValue: DifficultiesApiValue,
})

export type Difficulty = {
	id: number
	name: string
	icon: string
	apiValue: DifficultiesApiValueSchema
}

/*
 * Question
 * */
export interface APIQuestion {
	id: string
	category: Category
	correctAnswer: string
	incorrectAnswers: string[]
	question: {
		text: string
	}
	tags: string[]
	type: string
	difficulty: Difficulty
	regions: string[]
	isNiche: boolean
}
