import { Database } from './types/supabase'
import { ApiResponse, DBUserStats, UserStats } from './types/types'
import { createClient, PostgrestError } from '@supabase/supabase-js'

function GameStatsService({
	supabaseClerkClient,
}: {
	supabaseClerkClient: ReturnType<typeof createClient<Database>>
}) {
	const getUserStats = async (): Promise<ApiResponse<UserStats>> => {
		try {
			const { data, error } = await supabaseClerkClient
				.from('user_stats')
				.select()
				.single()

			if (error) {
				return {
					success: false,
					message: 'Error fetching user stats',
					error: error.message,
				}
			}

			const transformedData: UserStats = {
				totalGames: data.total_games,
				winRatio: data.win_ratio,
				correctAnswers: data.correct_answers,
				wrongAnswers: data.wrong_answers,
				streak: data.streak,
				bestStreak: data.best_streak,
				lastPlayed: data.last_played_at,
			}

			return {
				success: true,
				message: 'User stats fetched successfully',
				data: transformedData,
			}
		} catch (error) {
			if (error instanceof PostgrestError) {
				return {
					success: false,
					message: 'DB error',
					error: error.message,
				}
			}
			return {
				success: false,
				message: 'Unexpected error ocurred',
				error: (error as Error).message,
			}
		}
	}

	const updateUserStats = async ({
		newStats,
	}: {
		newStats: UserStats
	}): Promise<ApiResponse<UserStats>> => {
		try {
			const { data, error } = await supabaseClerkClient
				.from('user_stats')
				.update({
					best_streak: newStats.bestStreak,
					total_games: newStats.totalGames,
					streak: newStats.streak,
					correct_answers: newStats.correctAnswers,
					wrong_answers: newStats.wrongAnswers,
					win_ratio:
						newStats.correctAnswers /
						(newStats.correctAnswers + newStats.wrongAnswers),
					last_played_at: newStats.lastPlayed,
				})
				.single<DBUserStats>()

			if (error) {
				return {
					success: false,
					message: 'Error updating user stats',
					error: error.message,
				}
			}

			const transformedData: UserStats = {
				totalGames: data.total_games,
				winRatio: data.win_ratio,
				correctAnswers: data.correct_answers,
				wrongAnswers: data.wrong_answers,
				streak: data.streak,
				bestStreak: data.best_streak,
				lastPlayed: data.last_played_at,
			}

			return {
				success: true,
				message: 'User stats updated successfully',
				data: transformedData,
			}
		} catch (error) {
			if (error instanceof PostgrestError) {
				return {
					success: false,
					message: 'DB error',
					error: error.message,
				}
			}
			return {
				success: false,
				message: 'Unexpected error ocurred',
				error: (error as Error).message,
			}
		}
	}

	return {
		getUserStats,
		updateUserStats,
	}
}

export default GameStatsService
