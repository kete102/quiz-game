import { useGameStore } from '@/store/game/store'
import clsx from 'clsx'
import { Timer } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useState, useEffect } from 'react'

interface Props {
	padding?: number
	duration?: number
}

function CountdownTimer({ padding = 3, duration = 0.5 }: Props) {
	const { endGame } = useGameStore()
	const [timer, setTimer] = useState<number>(600)

	useEffect(() => {
		const interval = setInterval(() => {
			setTimer((prev) => {
				if (prev <= 0) {
					clearInterval(interval)
					return 0
				}
				return prev - 1
			})
		}, 1000)

		return () => clearInterval(interval)
	}, [])

	if (timer == 0) {
		endGame()
	}

	const displayValues = timer.toString().padStart(padding, '0').split('')

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
							{ 'text-green-600/60': timer >= 150 },
							{ 'text-orange-600/60': timer >= 50 && timer <= 149 },
							{ 'text-red-600/60': timer >= 11 && timer <= 49 },
							{ 'animate-pulse text-red-400': timer <= 11 }
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
