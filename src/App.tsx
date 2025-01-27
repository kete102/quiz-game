import Footer from './components/Footer'
import Wizzard from './components/game/Wizzard'
import Header from './components/Header'
import Overview from './components/Overview'
import { useGameStore } from './store/game/store'

function App() {
	const { isGameActive } = useGameStore()

	return (
		<div className='w-full min-h-screen flex flex-col'>
			<Header />
			<main className='container h-full max-w-[1100px] grow rounded-lg p-2 mt-8 mx-auto text-4xl font-semibold '>
				{!isGameActive && <Overview />}
				{isGameActive && <Wizzard />}
			</main>
			<Footer />
		</div>
	)
}

export default App
