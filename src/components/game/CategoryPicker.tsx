import { Plus } from 'lucide-react'
import { CATEGORIES } from '../../utils/constants'
import { useGameStore } from '@/store/game/store'
import { CategoriesApiValue } from '@/services/api/types.ts'

function useCategories() {
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

function CategoryPicker() {
	const { handleAddCategory } = useCategories()
	const { categories } = useGameStore()

	return (
		<section className='w-full p-2'>
			<h2 className='text-2xl font-semibold opacity-80 md:text-3xl'>
				Categories
			</h2>
			<p className='text-lg text-zinc-400'>
				Playing with <i className='font-medium'>general knowledge</i> by default
			</p>
			<div className='mt-4 flex w-full max-w-xl flex-wrap items-center gap-2'>
				{CATEGORIES.map((category) => (
					<button
						id={category.apiValue}
						onClick={handleAddCategory}
						key={category.id}
						className={`inline-flex cursor-pointer items-center gap-x-2 rounded-md border-2 border-white/50 p-2 text-[1rem] transition-all focus:scale-103 ${categories.includes(category.apiValue) ? 'selected-category' : ''}`}
					>
						<span className='flex items-center gap-x-1'>
							{category.name} {category.icon}
						</span>
						<Plus className='size-4' />
					</button>
				))}
			</div>
		</section>
	)
}

export default CategoryPicker
