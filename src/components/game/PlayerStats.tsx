import { ReactNode } from 'react'

function PlayerStats({ children }: { children: ReactNode }) {
	return (
		<article className='min-h-52 max-h-fit rounded-md w-full grid place-content-center shadow-2xl border-[1px] border-white/30 p-2'>
			{children}
		</article>
	)
}

export default PlayerStats
