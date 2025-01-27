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
			<h2 className='opacity-80 tracking-wider text-3xl md:text-4xl'>
				Game preferences
			</h2>
			<section className='flex-1 p-2 flex flex-col md:flex-row justify-start  md:items-start w-full space-y-4  pt-4 rounded-md'>
				<CategoryPicker />
				<Difficultypicker />
			</section>
			<section className='w-full p-2 flex flex-col md:flex-row justify-center gap-2 items-center'>
				<button
					className='font-normal bg-emerald-400/50 hover:bg-emerald-400 text-green-300  focus:bg-emerald-400 select-none tracking-tight w-full md:text-xl lg:max-w-xl  hover:text-green-800 text-lg px-4 py-3 rounded-md  hover:font-medium transition-all hover:shadow-xl hover:scale-102 border-none cursor-pointer hover:border-white'
					onClick={handleQuitGame}
				>
					Start game
				</button>
				<button
					className='font-normal select-none bg-rose-400/50 hover:bg-rose-400 tracking-tight w-full md:text-xl lg:max-w-xl text-red-300 hover:text-red-800 hover:font-medium focus:bg-rose-400 text-lg px-4 py-3 rounded-md  transition-all hover:shadow-xl hover:scale-102 border-none cursor-pointer hover:border-white'
					onClick={handleQuitGame}
				>
					Quit game
				</button>
			</section>
		</div>
	)
}

export default Wizzard
