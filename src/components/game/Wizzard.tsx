import { useGameStore } from '../../store/game/store'
import CategoryPicker from './CategoryPicker'
import Difficultypicker from './DifficultyPicker'

function Wizzard() {
	const { setIsGameActive } = useGameStore()

	const handleQuitGame = () => {
		setIsGameActive(false)
	}

	return (
		<div className='w-full space-y-2 h-full flex flex-col'>
			<h2 className='font-semibold  opacity-80 tracking-wider text-3xl md:text-4xl'>
				Game preferences
			</h2>
			<section className='flex-1 p-2 flex flex-col justify-start  md:items-center w-full space-y-4  pt-4 rounded-md'>
				<CategoryPicker />
				<Difficultypicker />
			</section>
			<section className='w-full p-2 flex justify-center items-center'>
				<button
					className='font-normal select-none tracking-tight w-full md:text-xl lg:max-w-xl text-white/60 hover:text-white text-lg px-4 py-3 rounded-md bg-white/5 transition-all hover:shadow-xl hover:scale-105 border-none cursor-pointer hover:border-white'
					onClick={handleQuitGame}
				>
					Quit game
				</button>
			</section>
		</div>
	)
}

export default Wizzard
