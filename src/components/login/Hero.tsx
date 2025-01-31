import logo from '@/assets/logo-mind-rush.webp'

function Hero() {
	return (
		<section className='space-y-4 text-center'>
			<section className='flex items-center justify-center gap-x-2'>
				<img
					src={logo}
					width={80}
					height={80}
				/>
				<h1 className='text-3xl font-bold tracking-wide text-white'>
					MindRush
				</h1>
			</section>
			<p className='text-xl text-gray-200 opacity-80 md:text-2xl'>
				Think fast. Play smart. Have fun!
			</p>
		</section>
	)
}

export default Hero
