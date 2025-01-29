import { Plus } from 'lucide-react'
import { CATEGORIES } from '../../utils/constants'
import { useGameStore } from '@/store/game/store'
import { CategoriesApiValue } from '@/services/api/types.ts'

function CategoryPicker() {
	const { categories, setCategories } = useGameStore()

	const handleAddCategory = (
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		const { success, data: newCategory } = CategoriesApiValue.safeParse(
			event.currentTarget.id
		)
		if (success) {
			setCategories(newCategory)
		} else {
			console.log('Categoria incorrecta')
		}
	}

	console.log({ categories })

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
						className='inline-flex cursor-pointer items-center gap-x-2 rounded-md border-2 border-white/50 p-2 text-[1rem] active:border-green-800'
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
