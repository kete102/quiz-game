import { useGameStore } from '../store/game/store'

function Overview() {
	const { setIsGameActive } = useGameStore()
	const handleStartGame = () => {
		setIsGameActive(true)
	}
	return (
		<div className='w-full h-full grid place-content-center'>
			<section>
				<h1>Last games</h1>
			</section>
			<button
				className='font-normal select-none tracking-tight text-white/60 hover:text-white text-3xl px-4 py-3 rounded-md bg-white/5 transition-all hover:shadow-xl hover:scale-105 border-none cursor-pointer hover:border-white'
				onClick={handleStartGame}
			>
				Start a new game!
			</button>
		</div>
	)
}

export default Overview
