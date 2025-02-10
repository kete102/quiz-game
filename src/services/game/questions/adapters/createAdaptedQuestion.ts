import { APIQuestion, Question } from '@/models/Question/types'

export const createAdapatedQuestion = (questions: APIQuestion[]) => {
	const formatedQuestion: Question[] = questions.map(
		(question: APIQuestion) => ({
			category: question.category,
			correctAnswer: question.correctAnswer,
			incorrectAnswers: question.incorrectAnswers,
			difficulty: question.difficulty,
			question: question.question,
			id: question.id,
		})
	)
	return formatedQuestion
}
