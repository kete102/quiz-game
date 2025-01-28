import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createRouter, RouterProvider } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen.ts'
import { ClerkProvider } from '@clerk/clerk-react'
import { clerkApiKey } from './utils/constants.ts'

const router = createRouter({ routeTree })

// Register the router instance for type safety
declare module '@tanstack/react-router' {
	interface Register {
		router: typeof router
	}
}

if (!clerkApiKey) throw new Error('Clerk Error: Missing publishable key')

createRoot(document.getElementById('root')!).render(
	<ClerkProvider publishableKey={clerkApiKey}>
		<StrictMode>
			<RouterProvider router={router} />
		</StrictMode>
	</ClerkProvider>
)
