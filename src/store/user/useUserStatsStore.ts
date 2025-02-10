import { UserStats } from '@/models/Stats/types'
import { create } from 'zustand'

interface UserStateStats {
	userStats: UserStats
	setUserStats: (stats: UserStats) => void
}

export const useUserStatsStore = create<UserStateStats>((set) => ({
	userStats: {
		bestStreak: 0,
		correctAnswers: 0,
		lastPlayed: new Date().toLocaleDateString(),
		streak: 0,
		totalGames: 0,
		winRatio: 0,
		wrongAnswers: 0,
	},
	setUserStats: (stats) =>
		set({
			userStats: stats,
		}),
}))
