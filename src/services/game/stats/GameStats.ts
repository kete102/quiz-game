import { supabase } from '@/db'
import { ApiResponse, DBUserStats, UserStats } from './types/types'
import { PostgrestError } from '@supabase/supabase-js'

export function GameStats() {
	const getUserStats = async ({
		userId,
	}: {
		userId: string
	}): Promise<ApiResponse<UserStats>> => {
		try {
			const { data, error } = await supabase
				.from('user_stats')
				.select('')
				.eq('user_id', userId)
				.single<DBUserStats>()

			if (error) {
				return {
					success: false,
					message: 'Error fetching user stats',
					error: error.message,
				}
			}

			const transformedData: UserStats = {
				userId: data.user_id,
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
			const { data, error } = await supabase
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
				.eq('user_id', newStats.userId)
				.single<DBUserStats>()

			if (error) {
				return {
					success: false,
					message: 'Error updating user stats',
					error: error.message,
				}
			}

			const transformedData: UserStats = {
				userId: data.user_id,
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
