import { Check } from 'lucide-react'
import {
	DifficultiesApiValueSchema,
	Difficulty,
} from '../../services/game/questions/types'
import { DIFFICULTIES } from '../../utils/constants'
import clsx from 'clsx'

interface Props {
	difficulty: DifficultiesApiValueSchema
	selectDifficulty: (
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => void
}

function Difficultypicker({ difficulty, selectDifficulty }: Props) {
	return (
		<section className='w-full p-2'>
			<h2 className='text-2xl font-semibold text-white opacity-80 md:text-3xl'>
				Difficulty
			</h2>
			<p className='text-lg font-medium text-zinc-400'>
				Playing with <i className='font-semibold'>normal difficulty</i> by
				default
			</p>
			<div className='mt-4 flex w-full max-w-xl flex-wrap items-center gap-2'>
				{DIFFICULTIES.map((newDifficulty: Difficulty) => (
					<button
						id={newDifficulty.apiValue}
						key={newDifficulty.id}
						onClick={(e) => selectDifficulty(e)}
						className={clsx(
							`inline-flex transform cursor-pointer items-center gap-x-2 rounded-md border-2 border-white/50 p-2 text-[1rem] font-medium text-white transition-all duration-200 active:scale-95`,
							{
								'selected-easy-difficulty':
									difficulty === newDifficulty.apiValue &&
									newDifficulty.apiValue === 'easy',
							},

							{
								'selected-medium-difficulty':
									difficulty === newDifficulty.apiValue &&
									newDifficulty.apiValue === 'medium',
							},

							{
								'selected-hard-difficulty':
									difficulty === newDifficulty.apiValue &&
									newDifficulty.apiValue === 'hard',
							}
						)}
					>
						<span className='flex items-center gap-x-1'>
							{newDifficulty.name}
						</span>
						<Check className='size-4' />
					</button>
				))}
			</div>
		</section>
	)
}

export default Difficultypicker
