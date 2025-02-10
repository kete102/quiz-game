import { CreateSupabaseClerkClient } from '@/db'
import { UserStats } from '@/models/Stats/types'
import {
	GetUserStats,
	UpdateUserStats,
} from '@/services/game/stats/GameStatsService'
import { useSession } from '@clerk/clerk-react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useMemo } from 'react'

export function useUserStats() {
	const { session } = useSession()
	const queryClient = useQueryClient()

	const supabaseClerkClient = useMemo(() => {
		if (!session) return null
		return CreateSupabaseClerkClient(session)
	}, [session])

	// Fetch User Stats
	const { data, isLoading, error } = useQuery({
		queryKey: ['user-stats', session?.user.id],
		queryFn: async () => {
			if (!supabaseClerkClient) throw new Error('No Supabase Client found')
			return await GetUserStats(supabaseClerkClient)
		},
		enabled: !!session,
		staleTime: 5 * 60 * 1000, // 5 mins cache
	})

	// Update User Stats Mutation
	const { mutate: updateUserStats, isPending: isUpdating } = useMutation({
		mutationFn: async (newStats: {
			streak: number
			bestStreak: number
			totalGames: number
			correctAnswers: number
			wrongAnswers: number
			userId: string
		}) => {
			if (!supabaseClerkClient) throw new Error('No Supabase Client found')
			return await UpdateUserStats({
				supabaseClerkClient,
				newStats,
			})
		},
		onSuccess: (updatedStats) => {
			queryClient.setQueryData(
				['user-stats', session?.user.id],
				(prevStats: UserStats) => ({
					...prevStats,
					...updatedStats, // <-- Actualizamos el cache sin necesidad de hacer refetch
				})
			)
		},
	})

	return {
		userStats: data,
		isLoading,
		isUpdating,
		error,
		updateUserStats,
	}
}
