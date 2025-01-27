import { SignedIn, UserButton } from '@clerk/clerk-react'

function Header() {
	return (
		<header className='w-full mx-auto max-w-screen-xl dark:bg-black/30 bg-white/50 mt-2 flex items-center justify-between p-4 rounded-lg'>
			<SignedIn>
				<UserButton
					appearance={{
						elements: {
							avatarBox: { width: 45, height: 45 },
						},
					}}
				/>
			</SignedIn>
			<h1 className='text-2xl text-black dark:text-white font-bold tracking-wide'>
				Quizz Game
			</h1>
		</header>
	)
}

export default Header
