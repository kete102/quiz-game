import { supabase } from '@/db'
import { useUser } from '@clerk/clerk-react'
import { UserResource } from '@clerk/types'
import { useEffect, useState } from 'react'

export function useSync() {
	const { isSignedIn, isLoaded, user } = useUser()
	const [userData, setUserData] = useState({})

	useEffect(() => {
		if (isLoaded && isSignedIn && user) {
			syncClerkUserWithSupabase(user)
		}
	}, [isLoaded, isSignedIn, user])

	const syncClerkUserWithSupabase = async (clerkUser: UserResource) => {
		if (!clerkUser.id) {
			console.error('No clerkUser.id found')
			return
		}

		if (!clerkUser.username && !clerkUser.firstName) {
			console.error('Missing both username and firstName')
			return
		}

		const primaryEmail = clerkUser.emailAddresses.find(
			(email) => email.id === clerkUser.primaryEmailAddressId
		)?.emailAddress

		if (!primaryEmail) {
			console.error('No email found for user')
			return
		}

		const { data, error } = await supabase
			.from('users')
			.upsert({
				clerk_id: clerkUser.id,
				user_name: clerkUser.username || clerkUser.firstName || '',
				user_email: primaryEmail,
			})
			.select()

		if (error) {
			console.error('Error syncing user: ', error)
			return
		}

		setUserData(data)
	}

	return {
		userData,
	}
}
