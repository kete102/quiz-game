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
			<main className='container max-w-[1200px] flex-1 rounded-lg  mt-8 mx-auto text-4xl font-semibold '>
				<div className='w-full h-full p-2 grid place-content-center'>
					{!isGameActive && <Overview />}
					{isGameActive && <Wizzard />}
				</div>
			</main>
			<Footer />
		</div>
	)
}

export default App
