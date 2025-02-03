import Footer from '@/components/Footer'
import Game from '@/components/game/Game'
import Header from '@/components/Header'
import { FetchQuestions } from '@/services/game/questions/Questions'
import {
	CategoriesApiValueSchema,
	DifficultiesApiValueSchema,
} from '@/services/game/questions/types'
import { useGameStore } from '@/store/game/store'
import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react'

export const Route = createFileRoute('/game')({
	validateSearch: ({
		categories,
		difficulty,
	}: {
		categories: CategoriesApiValueSchema[]
		difficulty: DifficultiesApiValueSchema
	}) => ({
		categories,
		difficulty,
	}),
	beforeLoad: async ({ search }) => {
		const questions = await FetchQuestions({
			categories: search.categories as CategoriesApiValueSchema[],
			difficulty: search.difficulty as DifficultiesApiValueSchema,
		})

		if (!questions) throw new Error('Failed to fetch questions')

		return { questions }
	},
	component: RouteComponent,
})

function RouteComponent() {
	const { questions } = Route.useRouteContext()
	const { resetGame } = useGameStore()

	useEffect(() => {
		return () => resetGame()
	}, [resetGame])

	return (
		<div className='flex h-screen w-full flex-col items-center justify-between p-2 md:gap-y-10'>
			<Header />
			<Game questions={questions} />
			<Footer />
		</div>
	)
}
