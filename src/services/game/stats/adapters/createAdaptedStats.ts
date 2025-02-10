import { DBUserStats, UserStats } from '@/models/Stats/types'

export const createAdaptedStats = (data: DBUserStats): UserStats => {
	const formatedStats: UserStats = {
		streak: data.streak,
		bestStreak: data.best_streak,
		correctAnswers: data.correct_answers,
		wrongAnswers: data.wrong_answers,
		winRatio: data.win_ratio,
		totalGames: data.total_games,
		lastPlayed: data.last_played_at,
	}

	return formatedStats
}
