export type Category = {
	id: number
	name: string
	icon: string
	apiValue:
		| 'music'
		| 'sport_and_leisure'
		| 'film_and_tv'
		| 'arts_and_literature'
		| 'history'
		| 'society_and_culture'
		| 'science'
		| 'geography'
		| 'food_and_drink'
		| 'general_knowledge'
}

export type Difficulty = {
	id: number
	name: string
	icon: string
	apiValue: 'easy' | 'medium' | 'hard'
}

export interface APIQuestion {
	id: string
	category: Category
	correctAnswer: string
	incorrectAnswers: string[]
	question: {
		text: string
	}
	tags: string[]
	type: string
	difficulty: Difficulty
	regions: string[]
	isNiche: boolean
}
