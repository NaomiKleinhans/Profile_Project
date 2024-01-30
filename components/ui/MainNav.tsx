import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const MainNav = () => {
	const [projectsClicked, setProjectsClicked] = useState(false)

	const handleProjectsClick = () => {
		setProjectsClicked(true)
	}

	return (
		<header className='fixed w-full px-4 lg:px-6 h-20 flex justify-between space-x-4 bg-[#000] text-textColor'>
			<Link
				className='flex items-center justify-start'
				href='#'
			>
				<div>
					<Image
						src='/logo.png'
						alt='Logo Image'
						width='250'
						height='250'
					/>
				</div>

				<span className='sr-only'>Frontend Developer</span>
			</Link>
			<nav className='ml-auto flex items-center gap-4 sm:gap-6 justify-end'>
				<Link
					className='text-xl font-medium hover:underline underline-offset-4'
					href='#'
				>
					Home
				</Link>
				<Link
					className={`text-xl font-medium ${
						projectsClicked ? 'underline' : ''
					} underline-offset-4`}
					href='#featured-projects'
					onClick={handleProjectsClick}
				>
					Projects
				</Link>
				<Link
					className='text-xl font-medium hover:underline underline-offset-4'
					href='#'
				>
					About
				</Link>
				<Link
					className='text-xl font-medium hover:underline underline-offset-4'
					href='#'
				>
					Contact
				</Link>
			</nav>
		</header>
	)
}
export default MainNav
