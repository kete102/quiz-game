import { z } from 'zod'

const env = import.meta.env

const EnvSchema = z.object({
	VITE_CLERK_PUBLISHABLE_KEY: z.string(),
})

const processEnv = EnvSchema.parse(env)

export const VITE_CLERK_PUBLISHABLE_KEY = processEnv.VITE_CLERK_PUBLISHABLE_KEY
