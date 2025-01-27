import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ClerkProvider } from '@clerk/clerk-react'
import { clerkApiKey } from './utils/constants.ts'

if (!clerkApiKey) throw new Error('Clerk Error: Missing publishable key')

createRoot(document.getElementById('root')!).render(
	<ClerkProvider publishableKey={clerkApiKey}>
		<StrictMode>
			<App />
		</StrictMode>
	</ClerkProvider>
)
