import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ClerkProvider } from '@clerk/clerk-react'
import { clerkApiKey } from './utils/constants.ts'
import Header from './components/Header.tsx'
import Github from './components/icons/Github.tsx'

if (!clerkApiKey) throw new Error('Clerk Error: Missing publishable key')

createRoot(document.getElementById('root')!).render(
	<ClerkProvider publishableKey={clerkApiKey}>
		<StrictMode>
			<Header />
			<App />
			<footer className='w-full flex justify-center mt-4 mb-2'>
				<h3 className='cursor-pinter'>
					Made by{' '}
					<a
						href='#'
						className='underline inline-flex items-center gap-x-2 underline-offset-1'
					>
						Flavius Catalin
						<Github className='size-5' />
					</a>
				</h3>
			</footer>
		</StrictMode>
	</ClerkProvider>
)
