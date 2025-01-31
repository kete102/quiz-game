import { Category, Difficulty } from '../services/api/types'

export const CATEGORIES: Category[] = [
	{ id: 0, name: 'Music', icon: '🎹', apiValue: 'music' },
	{ id: 1, name: 'Sports', icon: '⚽', apiValue: 'sport_and_leisure' },
	{ id: 2, name: 'Film and TV', icon: '📽️', apiValue: 'film_and_tv' },
	{
		id: 3,
		name: 'Arts and Literature',
		icon: '🎨',
		apiValue: 'arts_and_literature',
	},
	{ id: 4, name: 'History', icon: '📜', apiValue: 'history' },
	{
		id: 5,
		name: 'Society and Culture',
		icon: '🌍',
		apiValue: 'society_and_culture',
	},
	{ id: 6, name: 'Science', icon: '🔬', apiValue: 'science' },
	{ id: 7, name: 'Geography', icon: '🗾', apiValue: 'geography' },
	{ id: 8, name: 'Food and Drink', icon: '🍔', apiValue: 'food_and_drink' },
	{
		id: 9,
		name: 'General knowledge',
		icon: '💡',
		apiValue: 'general_knowledge',
	},
]

export const DIFFICULTIES: Difficulty[] = [
	{ id: 0, name: 'Easy', icon: '🙂', apiValue: 'easy' },
	{ id: 1, name: 'Medium', icon: '😐', apiValue: 'medium' },
	{ id: 2, name: 'Hard', icon: '😣', apiValue: 'hard' },
]
