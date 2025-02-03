import {
	SignedIn,
	SignedOut,
	SignInButton,
	UserButton,
} from '@clerk/clerk-react'
import { ArrowRight } from 'lucide-react'
import logo from '@/assets/logo-mind-rush.webp'

function Header() {
	return (
		<header className='mx-auto mt-2 flex min-h-15 w-full items-center justify-between rounded-lg bg-white/5 p-4 px-4 shadow-2xl select-none md:px-4 lg:max-w-6xl'>
			<section className='flex items-center gap-x-2'>
				<img
					src={logo}
					width={50}
					height={50}
				/>
				<h1 className='text-2xl font-bold tracking-wide text-white'>
					MindRush
				</h1>
			</section>
			<SignedIn>
				<UserButton
					appearance={{
						elements: {
							avatarBox: { width: 45, height: 45 },
						},
					}}
				/>
			</SignedIn>
			<SignedOut>
				<SignInButton mode='modal'>
					<button className='inline-flex cursor-pointer items-center gap-x-2 text-xl text-white transition-all hover:scale-103 hover:font-semibold active:scale-95 active:font-semibold'>
						Sign in <ArrowRight className='size-5' />
					</button>
				</SignInButton>
			</SignedOut>
		</header>
	)
}

export default Header
