import { Dot } from 'lucide-react'

interface Props {
	answer: string
	handleNextQuestion: () => void
}
function AnswerButton({ answer, handleNextQuestion }: Props) {
	return (
		<button
			onClick={handleNextQuestion}
			className={`inline-flex w-full transform cursor-pointer items-center gap-x-2 rounded-md bg-teal-950/20 p-2 pl-3 text-white transition-all duration-200 hover:bg-teal-950 active:scale-97`}
		>
			<span className='inline-flex items-center gap-x-2 text-start text-lg leading-5 font-normal text-pretty italic md:leading-8 lg:text-2xl'>
				<Dot className='size-8 lg:size-10' />
				{answer}
			</span>
		</button>
	)
}

export default AnswerButton
