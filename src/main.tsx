import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ClerkProvider, SignedIn, UserButton } from '@clerk/clerk-react'
import { clerkApiKey } from './utils/constants.ts'

if (!clerkApiKey) throw new Error('Clerk Error: Missing publishable key')

createRoot(document.getElementById('root')!).render(
	<ClerkProvider publishableKey={clerkApiKey}>
		<StrictMode>
			<header className='w-full mx-auto max-w-screen-xl dark:bg-black bg-white/50 mt-2 flex items-center justify-between p-4 rounded-lg'>
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
			<App />
		</StrictMode>
	</ClerkProvider>
)
