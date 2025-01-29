import { CategoriesApiValue } from '@/services/api/types.ts'
import { useGameStore } from '@/store/game/store'

export function useCategories() {
	const { setCategories } = useGameStore()

	const handleAddCategory = (
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		const button = event.currentTarget
		const { success, data: newCategory } = CategoriesApiValue.safeParse(
			button.id
		)
		if (success) {
			setCategories(newCategory)
		} else {
			console.log('Categoria incorrecta')
		}
	}

	return {
		handleAddCategory,
	}
}
