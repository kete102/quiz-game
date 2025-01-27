import { Github } from './icons/Github'

function Footer() {
	return (
		<footer className='w-full flex justify-center py-4 mb-2'>
			<h3 className='cursor-pinter'>
				Made by
				<a
					href='#'
					className='underline inline-flex items-center gap-x-2 underline-offset-1'
				>
					Flavius Catalin
					<Github className='size-5' />
				</a>
			</h3>
		</footer>
	)
}

export default Footer
