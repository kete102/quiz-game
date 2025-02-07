import { DBUserStats, UserStats } from '../types/types'

export const mapDataFromDb = (data: DBUserStats): UserStats => {
	return {
		streak: data.streak,
		bestStreak: data.best_streak,
		correctAnswers: data.correct_answers,
		wrongAnswers: data.wrong_answers,
		winRatio: data.win_ratio,
		totalGames: data.total_games,
		lastPlayed: data.last_played_at,
	}
}
