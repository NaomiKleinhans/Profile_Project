import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { HamburgerIcon } from '../SvgIcons/HamburgerIcon'

const MobileMainNav = () => {
	const [isMenuOpen, setMenuOpen] = useState(false)

	const toggleMenu = () => {
		setMenuOpen(!isMenuOpen)
	}

	return (
		<>
			<header className='fixed md:hidden lg:hidden w-full px-4 h-24 bg-[#000] text-textColor'>
				<div className='flex items-center justify-between'>
					<Link
						className='p-2'
						href='#'
					>
						<div>
							<Image
								src='/logo.png'
								alt='Logo Image'
								width='200'
								height='200'
							/>
						</div>
					</Link>
					<button
						className='p-2 focus:outline-none'
						onClick={toggleMenu}
						aria-label='Toggle Menu'
					>
						<div className='w-12 h-12'>
							<HamburgerIcon />
						</div>
					</button>
				</div>
				{isMenuOpen && (
					<nav className='fixed p-4 right-0 flex flex-col rounded-lg bg-[#121212]'>
						<Link
							className='text-2xl font-medium hover:underline underline-offset-4 p-2'
							href='#'
						>
							Home
						</Link>
						<Link
							className='text-2xl font-medium hover:underline underline-offset-4 p-2'
							href='#'
						>
							Projects
						</Link>
						<Link
							className='text-2xl font-medium hover:underline underline-offset-4 p-2'
							href='#'
						>
							About
						</Link>
						<Link
							className='text-2xl font-medium hover:underline underline-offset-4 p-2'
							href='#'
						>
							Contact
						</Link>
					</nav>
				)}
			</header>
		</>
	)
}

export default MobileMainNav
