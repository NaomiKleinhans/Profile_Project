import React, { useEffect, useRef } from 'react'
import { CardTitle, CardHeader, CardContent, Card } from '@/components/ui/Card'

const About = () => {
	const containerRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const container = containerRef.current

		if (!container) {
			return
		}
	}, [])

	return (
		<div className='container mt-24 px-4 md:px-6'>
			<div className='flex flex-col items-center justify-center space-y-4 text-center'>
				<div className='space-y-2'>
					<h2 className='lg:text-5xl md:text-4xl text-center mx-4 sm:text-3xl font-bold mb-24 text-themeColorMain'>
						About Me
					</h2>
				</div>
			</div>
			<div className='grid items-center gap-8 md:grid-cols-2 md:gap-12 lg:grid-cols-3 text-black'>
			
			</div>
		</div>
	)
}

export default About