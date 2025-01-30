import { createFileRoute } from '@tanstack/react-router'
import Header from '../components/Header'
import Overview from '../components/Overview'
import Footer from '@/components/Footer'

export const Route = createFileRoute('/dashboard')({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<div className='flex min-h-screen w-full flex-col'>
			<Header />
			<main className='container mx-auto mt-8 h-full max-w-[1100px] grow rounded-lg p-2 text-4xl font-semibold'>
				<Overview />
			</main>
			<Footer />
		</div>
	)
}
