import { Check } from 'lucide-react'
import { Difficulty } from '../../services/game/questions/types'
import { DIFFICULTIES } from '../../utils/constants'
import { useGameStore } from '@/store/game/store'
import { DifficultiesApiValue } from '@/services/game/questions/types'
import clsx from 'clsx'

function useDifficulties() {
	const { setDifficulty } = useGameStore()
	const handleAddDifficulties = (
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
	return { handleAddDifficulties }
}

function Difficultypicker() {
	const { handleAddDifficulties } = useDifficulties()
	const { difficulty: storeDifficulty } = useGameStore()

	return (
		<section className='w-full p-2'>
			<h2 className='text-2xl font-semibold text-white opacity-80 md:text-3xl'>
				Difficulty
			</h2>
			<p className='text-lg font-medium text-zinc-400'>
				Playing with <i className='font-semibold'>noraml difficulty</i> by
				default
			</p>
			<div className='mt-4 flex w-full max-w-xl flex-wrap items-center gap-2'>
				{DIFFICULTIES.map((difficulty: Difficulty) => (
					<button
						id={difficulty.apiValue}
						key={difficulty.id}
						onClick={(e) => handleAddDifficulties(e)}
						className={clsx(
							`inline-flex transform cursor-pointer items-center gap-x-2 rounded-md border-2 border-white/50 p-2 text-[1rem] font-medium text-white transition-all duration-200 active:scale-95`,
							{
								'selected-easy-difficulty':
									storeDifficulty === difficulty.apiValue &&
									difficulty.apiValue === 'easy',
							},

							{
								'selected-medium-difficulty':
									storeDifficulty === difficulty.apiValue &&
									difficulty.apiValue === 'medium',
							},

							{
								'selected-hard-difficulty':
									storeDifficulty === difficulty.apiValue &&
									difficulty.apiValue === 'hard',
							}
						)}
					>
						<span className='flex items-center gap-x-1'>{difficulty.name}</span>
						<Check className='size-4' />
					</button>
				))}
			</div>
		</section>
	)
}

export default Difficultypicker
