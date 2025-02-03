import { Plus } from 'lucide-react'
import { CATEGORIES } from '../../utils/constants'
import clsx from 'clsx'
import { CategoriesApiValueSchema } from '@/services/game/questions/types'

interface Props {
	categories: CategoriesApiValueSchema[]
	selectCategories: (category: CategoriesApiValueSchema) => void
}

function CategoryPicker({ selectCategories, categories }: Props) {
	return (
		<section className='w-full p-2'>
			<h2 className='text-2xl font-semibold text-white opacity-80 md:text-3xl'>
				Categories
			</h2>
			<p className='text-lg font-medium text-zinc-400'>
				Playing with <i className='font-semibold'>general knowledge</i> by
				default
			</p>
			<div className='mt-4 flex w-full max-w-xl flex-wrap items-center gap-2'>
				{CATEGORIES.map((category) => (
					<button
						id={category.apiValue}
						onClick={() => selectCategories(category.apiValue)}
						key={category.id}
						className={clsx(
							'tranform inline-flex cursor-pointer items-center gap-x-2 rounded-md border-2 border-white/50 p-2 text-[1rem] font-medium text-white transition-all duration-200 focus:scale-103 active:scale-95',
							{
								'selected-category': categories.includes(category.apiValue),
							}
						)}
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
