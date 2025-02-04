import { SignedOut, SignInButton } from '@clerk/clerk-react'
import { Link, useNavigate } from '@tanstack/react-router'

function Login() {
	const navigate = useNavigate()

	const handleStartGuestGame = () => {
		navigate({ to: '/game-setup' })
	}

	return (
		<section className='mt-10 w-full max-w-md space-y-8 rounded-lg bg-black/30 p-8 text-center shadow-xl md:px-8 md:py-10'>
			<p className='text-2xl font-semibold text-white'>
				Log in to save your progress
			</p>

			{/* Sign In Button */}
			<SignedOut>
				<SignInButton mode='modal'>
					<button className='w-full cursor-pointer rounded-lg bg-gradient-to-r from-violet-500 to-violet-900 px-6 py-3 text-lg text-white shadow-lg transition-all hover:scale-105 hover:shadow-2xl'>
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
				Play as Guest
			</button>
		</section>
	)
}

export default Login
