import { DBUserStats, UserStats } from '@/models/Stats/types'
import { createAdaptedStats } from './adapters/createAdaptedStats'

import { PostgrestError, SupabaseClient } from '@supabase/supabase-js'
import { calculateWinRatio } from '@/hooks/game/helpers/calculateWinRation'

/**
 * @param error
 * @return Throws an error
 */
const handleError = (error: unknown): never => {
	throw new Error(
		error instanceof PostgrestError
			? `DB error: ${error.message}`
			: `Unexpected error: ${(error as Error).message || 'Unknown error'}`
	)
}
export const GetUserStats = async (
	supabaseClerkClient: SupabaseClient
): Promise<UserStats> => {
	try {
		const { data, error } = await supabaseClerkClient
			.from('user_stats')
			.select()
			.single<DBUserStats>()

		if (error?.code === 'PGRST116')
			return {
				bestStreak: 0,
				correctAnswers: 0,
				lastPlayed: new Date().toLocaleDateString(),
				streak: 0,
				totalGames: 0,
				winRatio: 0,
				wrongAnswers: 0,
			}

		if (!data) {
			return {
				bestStreak: 0,
				correctAnswers: 0,
				lastPlayed: new Date().toLocaleDateString(),
				streak: 0,
				totalGames: 0,
				winRatio: 0,
				wrongAnswers: 0,
			}
		}

		return createAdaptedStats(data)
	} catch (error) {
		return handleError(error)
	}
}

export const UpdateUserStats = async ({
	supabaseClerkClient,
	newStats,
}: {
	supabaseClerkClient: SupabaseClient
	newStats: {
		streak: number
		bestStreak: number
		totalGames: number
		correctAnswers: number
		wrongAnswers: number
		userId: string
	}
}): Promise<UserStats> => {
	try {
		const { data, error } = await supabaseClerkClient
			.from('user_stats')
			.upsert(
				{
					user_id: newStats.userId,
					best_streak: newStats.bestStreak,
					total_games: newStats.totalGames,
					streak: newStats.streak,
					correct_answers: newStats.correctAnswers,
					wrong_answers: newStats.wrongAnswers,
					win_ratio: calculateWinRatio({
						correctAnswers: newStats.correctAnswers,
						totalGames: newStats.totalGames,
					}),
					last_played_at: new Date().toISOString(),
				},
				{ onConflict: 'user_id' }
			)
			.single<DBUserStats>()

		if (error) return handleError(error)
		if (!data) return handleError(new Error('Error updating user stats'))

		return createAdaptedStats(data)
	} catch (error) {
		return handleError(error)
	}
}
