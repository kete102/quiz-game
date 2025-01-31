import Footer from '@/components/Footer'
import Wizzard from '@/components/game/Wizzard'
import Header from '@/components/Header'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/game-setup')({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<div className='mx-auto flex h-screen w-full max-w-5xl flex-col p-2 md:pt-10'>
			<Header />
			<Wizzard />
			<Footer />
		</div>
	)
}
