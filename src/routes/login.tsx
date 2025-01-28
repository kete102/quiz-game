import { SignedIn, SignedOut, SignInButton, useAuth } from '@clerk/clerk-react'
import { createFileRoute, Link, Navigate } from '@tanstack/react-router'
import React from 'react'
import Footer from '../components/Footer'
import { useGameStore } from '../store/game/store'

export const Route = createFileRoute('/login')({
	component: RouteComponent,
})

function RouteComponent() {
	const { setIsGameActive } = useGameStore()
	const { isSignedIn } = useAuth()

	const handleStartGuestGame = () => {
		setIsGameActive(true)
	}

	return (
		<React.Fragment>
			{!isSignedIn && (
				<div className='w-full h-screen flex flex-col justify-center items-center p-6'>
					{/* Header Section */}
					<section className='text-center space-y-4'>
						<h1 className='font-bold text-5xl text-white'>
							Welcome to the Quiz Game 🤔
						</h1>
						<p className='opacity-80 text-lg text-gray-300'>
							Think fast. Play smart. Have fun!
						</p>
					</section>

					{/* Login Section */}
					<section className='mt-10 text-center shadow-xl bg-black/40 rounded-lg p-8 md:p-16 space-y-8 w-full max-w-md'>
						<p className='text-2xl text-white font-semibold'>
							Log in to save your progress
						</p>

						{/* Sign In Button */}
						<SignedOut>
							<SignInButton mode='modal'>
								<button className='w-full text-lg px-6 py-3 bg-blue-600 cursor-pointer text-white rounded-lg transition-all hover:scale-105 shadow-lg hover:shadow-2xl'>
									Sign In
								</button>
							</SignInButton>
						</SignedOut>

						{/* Or Divider */}
						<div className='flex items-center justify-center space-x-4'>
							<span className='w-1/3 h-px bg-gray-500'></span>
							<span className='text-gray-400 font-medium'>or</span>
							<span className='w-1/3 h-px bg-gray-500'></span>
						</div>

						{/* Play as Guest */}
						<button
							onClick={handleStartGuestGame}
							className='w-full text-lg px-6 py-3 bg-gray-700 text-gray-300 cursor-pointer  rounded-lg transition-all hover:scale-105 hover:bg-gray-600 shadow-lg'
						>
							<Link to='/guest-game'>Play as Guest</Link>
						</button>
					</section>
				</div>
			)}
			<SignedIn>
				<Navigate to='/dashboard' />
			</SignedIn>
			<Footer />
		</React.Fragment>
	)
}
