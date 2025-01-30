import { createFileRoute } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'
import { SignInButton, useAuth } from '@clerk/clerk-react'
import Footer from '@/components/Footer'
import Wizzard from '@/components/game/Wizzard'

export const Route = createFileRoute('/guest/')({
	component: RouteComponent,
})

function RouteComponent() {
	const { isSignedIn } = useAuth()

	return (
		<div className='mx-auto flex h-screen w-full max-w-4xl flex-col space-y-2 pt-2 select-none'>
			<section className='w-full text-center'>
				{!isSignedIn && (
					<SignInButton mode='modal'>
						<button className='tranform mb-2 inline-flex w-full cursor-pointer items-center justify-center gap-x-2 rounded-lg bg-white/5 px-5 py-3 text-center text-2xl font-medium shadow-xs shadow-neutral-300/50 transition-all duration-200 hover:scale-103 hover:shadow-md active:scale-95 md:text-2xl'>
							Sign in to save your progress <ArrowRight />
						</button>
					</SignInButton>
				)}
			</section>
			<Wizzard />
			<Footer />
		</div>
	)
}
