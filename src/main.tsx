import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ClerkProvider } from '@clerk/clerk-react'
import { VITE_CLERK_PUBLISHABLE_KEY } from './utils/config.ts'
import App from './App.tsx'

if (!VITE_CLERK_PUBLISHABLE_KEY)
	throw new Error('Clerk Error: Missing publishable key')

console.log(VITE_CLERK_PUBLISHABLE_KEY)
createRoot(document.getElementById('root')!).render(
	<ClerkProvider publishableKey={VITE_CLERK_PUBLISHABLE_KEY}>
		<StrictMode>
			<App />
		</StrictMode>
	</ClerkProvider>
)
