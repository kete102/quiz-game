export const calculateWinRatio = ({
	totalGames,
	correctAnswers,
}: {
	totalGames: number
	correctAnswers: number
}) => {
	if (!totalGames || !correctAnswers) return 0
	const currentTotalGames = totalGames + 1
	return totalGames > 0 ? ((correctAnswers + 1) / currentTotalGames) * 100 : 0
}
