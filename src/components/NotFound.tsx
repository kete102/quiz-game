import { Link } from '@tanstack/react-router'
import { ArrowRight, HeartCrack } from 'lucide-react'

function NotFound() {
	return (
		<div className='grid h-screen w-full place-content-center space-y-6 bg-black/80 pt-20'>
			<h1 className='inline-flex items-center justify-center gap-x-2 text-center font-medium md:text-3xl'>
				Oop, this is not what your were looking for
				<HeartCrack className='size-6' />
			</h1>
			<img
				className='rounded-md'
				width={700}
				height={450}
				src='https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExeTF1emo1YnlkdDQ1MmU2d3ZsenRveXhsMG5mNnN0ZnJxcnloMGtnOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1MzKjWBamP58Q/giphy.gif'
			/>
			<Link
				to='/'
				className='inline-flex w-full items-center justify-center gap-x-2 underline underline-offset-2 md:text-4xl'
			>
				Go home <ArrowRight className='size-5' />
			</Link>
		</div>
	)
}
export default NotFound
