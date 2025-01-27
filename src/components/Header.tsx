import { SignedIn, UserButton } from '@clerk/clerk-react'

function Header() {
	return (
		<header className='w-full min-h-20 select-none mx-auto px-2 md:px-4 dark:bg-black/30 bg-white/50 mt-2 flex items-center justify-between p-4 rounded-lg'>
			<h1 className='text-2xl text-black dark:text-white font-bold tracking-wide'>
				Quizz Game
			</h1>
			<SignedIn>
				<UserButton
					appearance={{
						elements: {
							avatarBox: { width: 45, height: 45 },
						},
					}}
				/>
			</SignedIn>
		</header>
	)
}

export default Header
