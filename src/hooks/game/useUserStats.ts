import { CreateSupabaseClerkClient } from '@/db'
import GameStatsService from '@/services/game/stats/GameStatsService'
import { useSession } from '@clerk/clerk-react'
import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'

export function useUserStats() {
	const { session } = useSession()
	const supabaseClerkClient = useMemo(() => {
		if (!session) return null
		return CreateSupabaseClerkClient(session)
	}, [session])

	const {
		data: userStats,
		isLoading,
		error,
		refetch,
	} = useQuery({
		queryKey: ['user-stats', session?.user.id],
		queryFn: async () => {
			if (!supabaseClerkClient) return
			const response =
				await GameStatsService(supabaseClerkClient).getUserStats()

			if (!response.success) throw new Error(response.error)

			return response.data
		},
		enabled: !!session, // Only fetches de stats if session exists
		staleTime: 5 * 60 * 1000, // 5 mins in cache
	})
	const updateUserStats = async () => {
		if (!session || !supabaseClerkClient) return
		try {
			const response = await GameStatsService(
				supabaseClerkClient
			).updateUserStats({
				bestStreak: 3,
				correctAnswers: 9,
				streak: 3,
				totalGames: 3,
				wrongAnswers: 1,
				userId: session.user.id,
			})

			if (!response.success) {
				throw new Error(response.error)
			}

			if (response.success) {
				console.log('User stats updated: ', response.data)
				refetch() // Refetches de user stats is the update is succesfull
			}

			return response.data
		} catch (error) {
			console.error(error)
		}
	}

	return {
		userStats,
		isLoading,
		error,
		updateUserStats,
	}
}
