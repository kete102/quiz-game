import { Database } from '@/models/DB/supabase.types'

export interface UserStats {
	correctAnswers: number
	wrongAnswers: number
	winRatio: number
	streak: number
	bestStreak: number
	lastPlayed: string
	totalGames: number
}
export type DBUserStats = Database['public']['Tables']['user_stats']['Row']
