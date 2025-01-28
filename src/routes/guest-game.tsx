import { createFileRoute } from '@tanstack/react-router'
import Wizzard from '../components/game/Wizzard'
import { ArrowRight } from 'lucide-react'
import { SignInButton } from '@clerk/clerk-react'

export const Route = createFileRoute('/guest-game')({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<div className='w-full select-none space-y-2 h-screen grid place-content-evenly'>
			<Wizzard />
			<section className='w-full text-center'>
				<SignInButton>
					<button className='text-lg cursor-pointer tracking-wide hover:scale-103 px-6 py-4 hover:shadow-2xl bg-white/5 rounded-lg transition-all font-medium inline-flex items-center underline underline-offset-2 gap-x-2'>
						Sign in to save your progress <ArrowRight />
					</button>
				</SignInButton>
			</section>
		</div>
	)
}
