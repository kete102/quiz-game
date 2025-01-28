import { Check } from 'lucide-react'
import { Difficulty } from '../../services/api/types'
import { DIFFICULTIES } from '../../utils/constants'

function Difficultypicker() {
	return (
		<section className='p-2 w-full'>
			<h2 className='text-2xl font-semibold opacity-60'>Difficulty</h2>
			<div className='flex mt-4 items-center flex-wrap gap-2 w-full max-w-xl'>
				{DIFFICULTIES.map((difficulty: Difficulty) => (
					<button
						key={difficulty.id}
						className='text-[1rem] active:border-green-800 inline-flex items-center gap-x-2 cursor-pointer border-2 border-white/50 p-2 rounded-md'
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
