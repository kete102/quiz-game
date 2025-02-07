import { CreateSupabaseClerkClient } from '@/db'
import GameStatsService from '@/services/game/stats/GameStats'
import { useSession } from '@clerk/clerk-react'

export function useUserStats() {
	const { session } = useSession()
	const supabaseClerkClient = CreateSupabaseClerkClient(session)

	const updateUserStats = async () => {
		if (!session) {
			return
		}

		try {
			const response = await GameStatsService({
				supabaseClerkClient,
			}).updateUserStats({
				bestStreak: 3,
				correctAnswers: 9,
				streak: 3,
				totalGames: 3,
				wrongAnswers: 1,
				userId: session.user.id,
			})

			if (!response.success) {
				console.log('Error updating users stats: ', response.error)
			}
			if (response.success) {
				console.log('User stats updated: ', response.data)
			}
		} catch (error) {
			console.error(error)
		}
	}

	return {
		updateUserStats,
	}
}
