import { createFileRoute } from '@tanstack/react-router'
import Wizzard from '../components/game/Wizzard'
import { ArrowRight } from 'lucide-react'
import { SignInButton } from '@clerk/clerk-react'
import Footer from '@/components/Footer'

export const Route = createFileRoute('/guest-game')({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<div className='mx-auto flex h-screen w-full max-w-4xl flex-col space-y-2 pt-2 select-none'>
			<section className='w-full text-center'>
				<SignInButton mode='modal'>
					<button className='mb-2 inline-flex w-full cursor-pointer items-center justify-center gap-x-2 rounded-lg bg-white/5 px-5 py-3 text-center text-2xl font-medium shadow-xs shadow-neutral-300/50 transition-all hover:scale-103 hover:shadow-md md:text-2xl'>
						Sign in to save your progress <ArrowRight />
					</button>
				</SignInButton>
			</section>
			<Wizzard />
			<Footer />
		</div>
	)
}
