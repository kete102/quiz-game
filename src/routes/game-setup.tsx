import Footer from '@/components/Footer'
import Wizzard from '@/components/game/Wizzard'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/game-setup')({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<div className='mx-auto flex h-screen w-full max-w-4xl flex-col md:pt-10'>
			<Wizzard />
			<Footer />
		</div>
	)
}
