import { Dot } from 'lucide-react'

function AnswerButton({ answer }: { answer: string }) {
	return (
		<button
			className={`inline-flex w-full transform cursor-pointer items-center gap-x-2 rounded-md bg-teal-950/20 p-2 pl-3 transition-all duration-200 hover:bg-teal-950 active:scale-97`}
		>
			<span className='inline-flex items-center gap-x-2 text-start text-lg leading-5 font-normal text-pretty italic md:leading-8 lg:text-2xl'>
				<Dot className='size-6 lg:size-8' />
				{answer} orem Ipsum es simplemente el texto de relleno de las imprentas
			</span>
		</button>
	)
}

export default AnswerButton
