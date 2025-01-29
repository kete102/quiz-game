import { Check } from 'lucide-react'
import { Difficulty } from '../../services/api/types'
import { DIFFICULTIES } from '../../utils/constants'

function Difficultypicker() {
	return (
		<section className='w-full p-2'>
			<h2 className='text-2xl font-semibold opacity-80 md:text-3xl'>
				Difficulty
			</h2>
			<p className='text-lg text-zinc-400'>
				Playing with <i className='font-medium'>noraml difficulty</i> by default
			</p>
			<div className='mt-4 flex w-full max-w-xl flex-wrap items-center gap-2'>
				{DIFFICULTIES.map((difficulty: Difficulty) => (
					<button
						key={difficulty.id}
						className='inline-flex cursor-pointer items-center gap-x-2 rounded-md border-2 border-white/50 p-2 text-[1rem] active:border-green-800'
					>
						<span className='flex items-center gap-x-1'>
							{difficulty.name} {difficulty.icon}
						</span>
						<Check className='size-4' />
					</button>
				))}
			</div>
		</section>
	)
}

export default Difficultypicker
