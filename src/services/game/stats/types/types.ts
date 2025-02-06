import { Database } from './supabase'

export interface UserStats {
	userId: string
	correctAnswers: number
	wrongAnswers: number
	winRatio: number
	streak: number
	bestStreak: number
	lastPlayed: string
	totalGames: number
}

export type DBUserStats = Database['public']['Tables']['user_stats']['Row']

interface SuccessResponse<T> {
	success: true
	message: string
	data: T
}

interface ErrorResponse {
	success: false
	message: string
	error: string
}

export type ApiResponse<T> = SuccessResponse<T> | ErrorResponse
