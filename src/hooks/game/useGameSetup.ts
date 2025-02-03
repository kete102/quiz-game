import {
	CategoriesApiValueSchema,
	DifficultiesApiValueSchema,
	DifficultiesApiValue,
} from '@/services/game/questions/types'
import { useState } from 'react'

export function useGameSetup() {
	const [categories, setCategories] = useState<CategoriesApiValueSchema[]>([
		'general_knowledge',
	])
	const [difficulty, setDifficulty] =
		useState<DifficultiesApiValueSchema>('medium')

	const handleSelectCategories = (category: CategoriesApiValueSchema) => {
		setCategories((prev) => {
			let updatedCategories: CategoriesApiValueSchema[] = []

			if (category === 'general_knowledge') {
				updatedCategories = ['general_knowledge']
			} else {
				const isAlreadySelected = prev.includes(category)

				if (isAlreadySelected) {
					updatedCategories = prev.filter((cat) => cat !== category)
				} else {
					updatedCategories = [
						...prev.filter((cat) => cat !== 'general_knowledge'),
						category,
					]
				}

				if (updatedCategories.length === 0) {
					updatedCategories = ['general_knowledge']
				}
			}

			return updatedCategories
		})
	}

	const handleSelectDifficulty = (
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		const button = event.currentTarget
		const { success, data: newDifficulty } = DifficultiesApiValue.safeParse(
			button.id
		)
		if (success) {
			setDifficulty(newDifficulty)
		} else {
			console.log('Difficulty incorrect')
		}
	}

	return {
		categories,
		difficulty,
		handleSelectCategories,
		handleSelectDifficulty,
	}
}
