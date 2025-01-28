import { Plus } from 'lucide-react'
import { CATEGORIES } from '../../utils/constants'

function CategoryPicker() {
	return (
		<section className='p-2 w-full'>
			<h2 className='text-2xl font-semibold opacity-60'>Categories</h2>
			<div className='flex mt-4 items-center flex-wrap gap-2 w-full max-w-xl'>
				{CATEGORIES.map((category) => (
					<button
						key={category.id}
						className='text-[1rem] active:border-green-800 inline-flex items-center gap-x-2 cursor-pointer border-2 border-white/50 p-2 rounded-md'
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
