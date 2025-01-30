import { useGameStore } from '@/store/game/store'
import { SignedOut, SignInButton } from '@clerk/clerk-react'
import { Link } from '@tanstack/react-router'

function Login() {
	const { setIsGameActive } = useGameStore()

	const handleStartGuestGame = () => {
		setIsGameActive(true)
	}
	return (
		<section className='mt-10 w-full max-w-md space-y-8 rounded-lg bg-black/30 p-8 text-center shadow-xl md:px-8 md:py-10'>
			<p className='text-2xl font-semibold text-white'>
				Log in to save your progress
			</p>

			{/* Sign In Button */}
			<SignedOut>
				<SignInButton mode='modal'>
					<button className='w-full cursor-pointer rounded-lg bg-blue-600 px-6 py-3 text-lg text-white shadow-lg transition-all hover:scale-105 hover:shadow-2xl'>
						Sign In
					</button>
				</SignInButton>
			</SignedOut>

			{/* Or Divider */}
			<div className='flex items-center justify-center space-x-4'>
				<span className='h-px w-1/3 bg-gray-500'></span>
				<span className='font-medium text-gray-400'>or</span>
				<span className='h-px w-1/3 bg-gray-500'></span>
			</div>

			{/* Play as Guest */}
			<button
				onClick={handleStartGuestGame}
				className='w-full cursor-pointer rounded-lg bg-gray-700 px-6 py-3 text-lg text-gray-300 shadow-lg transition-all hover:scale-105 hover:bg-gray-600'
			>
				<Link to='/guest'>Play as Guest</Link>
			</button>
		</section>
	)
}

export default Login
