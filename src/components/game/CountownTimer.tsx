import clsx from 'clsx'
import { Timer } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'

interface Props {
	time: number
	padding?: number
	duration?: number
}

function CountdownTimer({ time: value, padding = 3, duration = 0.5 }: Props) {
	if (value == 0) {
		return (
			<span className='w-full text-center text-4xl font-bold md:text-3xl'>
				Time finished 🚨
			</span>
		)
	}

	const displayValues = value.toString().padStart(padding, '0').split('')
	return (
		<AnimatePresence mode='popLayout'>
			<section className='flex w-full items-center justify-center gap-1 md:justify-start'>
				<Timer className='mx-2 size-10 stroke-white/50' />
				{displayValues.map((number, index) => (
					<motion.span
						initial={{ y: 12, filter: 'blur-[12px]', opacity: 0 }}
						animate={{ y: 0, opacity: 100 }}
						exit={{ y: -12, filter: 'blur-[12px]', opacity: 0 }}
						transition={{
							type: 'spring',
							stiffness: 150,
							damping: 20,
							duration: duration,
						}}
						className={clsx(
							'inline-block rounded-md font-sans text-4xl font-bold tabular-nums transition-all md:text-5xl',
							{ 'text-green-600/60': value >= 150 },
							{ 'text-orange-600/60': value >= 50 && value <= 149 },
							{ 'text-red-600/60': value >= 11 && value <= 49 },
							{ 'animate-pulse text-red-400': value <= 11 }
						)}
						layout
						key={`${number}-${index}`}
					>
						{number}
					</motion.span>
				))}
			</section>
		</AnimatePresence>
	)
}

export default CountdownTimer
