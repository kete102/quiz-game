import { mapDataFromDb } from './helpers/MapDataFromDB'
import { Database } from './types/supabase'
import { ApiResponse, UserStats } from './types/types'
import { createClient, PostgrestError } from '@supabase/supabase-js'

function GameStatsService({
	supabaseClerkClient,
}: {
	supabaseClerkClient: ReturnType<typeof createClient<Database>>
}) {
	// Función para manejar los errores
	const handleError = (error: unknown): ApiResponse<UserStats> => {
		if (error instanceof PostgrestError) {
			return {
				success: false,
				message:
					error instanceof PostgrestError ? 'DB error' : 'Unexpedted error',
				error: error.message,
			}
		}
		return {
			success: false,
			message: 'Unexpected error occurred',
			error: (error as Error).message,
		}
	}

	const getUserStats = async (): Promise<ApiResponse<UserStats>> => {
		try {
			const { data, error } = await supabaseClerkClient
				.from('user_stats')
				.select()
				.maybeSingle()

			if (error) {
				return handleError(error)
			}

			if (!data) {
				return {
					success: true,
					message: 'No stats found for user',
					data: null,
				}
			}

			const transformedData = mapDataFromDb(data)

			return {
				success: true,
				message: 'User stats fetched successfully',
				data: transformedData,
			}
		} catch (error) {
			return handleError(error)
		}
	}

	const updateUserStats = async ({
		bestStreak,
		totalGames,
		streak,
		correctAnswers,
		wrongAnswers,
		userId,
	}: {
		bestStreak: number
		totalGames: number
		streak: number
		correctAnswers: number
		wrongAnswers: number
		userId: string
	}): Promise<ApiResponse<UserStats>> => {
		try {
			const { data, error } = await supabaseClerkClient
				.from('user_stats')
				.upsert(
					{
						user_id: userId,
						best_streak: bestStreak,
						total_games: totalGames,
						streak: streak,
						correct_answers: correctAnswers,
						wrong_answers: wrongAnswers,
						win_ratio: correctAnswers / (correctAnswers + wrongAnswers),
						last_played_at: new Date().toISOString(),
					},
					{
						onConflict: 'user_id',
					}
				)
				.single()

			if (error) {
				return handleError(error)
			}

			const mappedData = mapDataFromDb(data)

			return {
				success: true,
				message: 'User stats updated successfully',
				data: mappedData,
			}
		} catch (error) {
			return handleError(error)
		}
	}

	return {
		getUserStats,
		updateUserStats,
	}
}

export default GameStatsService
