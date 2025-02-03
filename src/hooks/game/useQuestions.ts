import { useGameStore } from '@/store/game/store'
import { FetchQuestions } from '@/services/game/questions/Questions'

export function useQuestions() {
	const { difficulty, categories, setQuestion } = useGameStore()

	const getQuestions = async () => {
		const questions = await FetchQuestions({ categories, difficulty })
		if (!questions) {
			console.error('Error fetching questions')
		} else {
			setQuestion(questions)
		}
	}

	return {
		getQuestions,
	}
}
