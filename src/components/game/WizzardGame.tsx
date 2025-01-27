import { useGameStore } from '../../store/game/store'

function WizzardGame() {
	const { setIsGameActive } = useGameStore()

	const handleQuitGame = () => {
		setIsGameActive(false)
	}

	return (
		<div className='w-full space-y-2 h-full flex flex-col'>
			<section className='w-full px-2 flex justify-between items-center'>
				<h2 className='font-normal text-2xl md:text-3xl'>Game preferences</h2>
				<button
					className='font-normal select-none tracking-tight text-white/60 hover:text-white text-lg px-4 py-3 rounded-md bg-white/5 transition-all hover:shadow-xl hover:scale-105 border-none cursor-pointer hover:border-white'
					onClick={handleQuitGame}
				>
					Quit game
				</button>
			</section>
			{/* <div className='h-[2px] my-2 bg-white/50 rounded-full px-4'></div> */}
			<section className='flex-1  p-2 flex flex-col justify-start items-center pt-10 rounded-md'></section>
		</div>
	)
}

export default WizzardGame
