import { SignedIn, useAuth } from '@clerk/clerk-react'
import { createFileRoute, Navigate } from '@tanstack/react-router'
import Hero from '@/components/login/Hero'
import Login from '@/components/login/Login'
import Github from '@/components/icons/Github'

export const Route = createFileRoute('/login')({
	component: RouteComponent,
})

function RouteComponent() {
	const { isSignedIn } = useAuth()

	return (
		<div className='mx-auto h-screen w-full pt-20'>
			{!isSignedIn && (
				<div className='flex h-full w-full flex-col items-center justify-start gap-y-5 p-6 md:gap-y-10'>
					{/* Header Section */}
					<Hero />
					{/* Login Section */}
					<Login />
				</div>
			)}
			<section className='absolute right-10 bottom-10'>
				<a
					href='https://github.com/kete102/quiz-game'
					className='inline-flex items-center gap-x-2 rounded-lg bg-white/5 p-3 underline shadow-2xl transition-all hover:scale-103'
				>
					Check the code here <Github className='size-5' />
				</a>
			</section>
			<SignedIn>
				<Navigate to='/dashboard' />
			</SignedIn>
		</div>
	)
}
