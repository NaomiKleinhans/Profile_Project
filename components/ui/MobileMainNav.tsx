import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { HamburgerIcon } from '../SvgIcons/HamburgerIcon'
import MobileMainNavLinks from './MobileMainNavLinks'
import { CloseXIcon } from '../SvgIcons/CloseXIcon'

const MobileMainNav = () => {
	const [isMenuOpen, setMenuOpen] = useState(false)

	const toggleMenu = () => {
		setMenuOpen(!isMenuOpen)
	}

	return (
		<>
			<header className='fixed md:hidden lg:hidden w-full px-4 h-14 bg-[#000] text-textColor'>
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
						<div className='w-10 h-10'>
							{isMenuOpen ? <CloseXIcon /> : <HamburgerIcon />}
						</div>
					</button>
				</div>
				{isMenuOpen && <MobileMainNavLinks />}
			</header>
		</>
	)
}

export default MobileMainNav
