import CategoryPicker from './CategoryPicker'
import Difficultypicker from './DifficultyPicker'
import { LogOut, Rocket } from 'lucide-react'
import { useNavigate } from '@tanstack/react-router'
import { useAuth } from '@clerk/clerk-react'

function Wizzard() {
	const { isSignedIn } = useAuth()
	const navigate = useNavigate()

	const handleQuitGame = () => {
		console.log('Quit game: ', isSignedIn)
		navigate({ to: '/' })
	}

	const handleStartGame = () => navigate({ to: '/game' })

	return (
		<div className='flex h-full w-full flex-col items-center justify-start'>
			<h2 className='my-4 w-full text-center text-4xl font-bold tracking-wider opacity-80 md:text-4xl lg:my-6'>
				Game preferences
			</h2>
			<section className='my-3 flex w-full flex-col justify-start space-y-4 rounded-md p-2 md:flex-row md:items-start'>
				<CategoryPicker />
				<Difficultypicker />
			</section>
			<section className='flex w-full flex-col items-center justify-center gap-2 p-2 md:flex-row'>
				<button
					className='inline-flex w-full transform cursor-pointer items-center justify-center gap-x-2 rounded-md border-none bg-blue-800/50 px-4 py-3 text-xl font-semibold tracking-wide text-blue-300 transition-all duration-200 select-none hover:scale-102 hover:border-white hover:shadow-xl active:scale-95 md:text-2xl'
					onClick={handleStartGame}
				>
					Let's play! <Rocket className='size-6' />
				</button>
				<button
					className='inline-flex w-full transform cursor-pointer items-center justify-center gap-x-2 rounded-md border-none bg-red-800/50 px-4 py-3 text-xl font-semibold tracking-wide text-red-300 transition-all duration-200 select-none hover:scale-102 hover:border-white hover:shadow-xl active:scale-95 md:text-2xl'
					onClick={handleQuitGame}
				>
					Quit game <LogOut className='size-6' />
				</button>
			</section>
		</div>
	)
}

export default Wizzard
