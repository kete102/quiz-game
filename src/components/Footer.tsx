import { Github } from './icons/Github'

function Footer() {
	return (
		<footer className='mb-2 flex w-full justify-center py-4 text-white'>
			<h3 className='cursor-pinter'>
				Made by{' '}
				<a
					href='#'
					className='inline-flex items-center gap-x-2 font-medium italic underline underline-offset-1'
				>
					Flavius Catalin
					<Github className='size-5' />
				</a>
			</h3>
		</footer>
	)
}

export default Footer
