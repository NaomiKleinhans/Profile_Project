import Image from "next/image"
import Link from "next/link"

const MainNav = () => {
	return (
		<header className='fixed w-full px-4 lg:px-6 h-24 flex justify-between bg-[#000] text-textColor'>
			<Link
				className='flex items-center justify-start'
				href='#'
			>
				<Image
					src='/logo.png'
					alt='Logo Image'
					width='300'
					height='300'
				/>
				<span className='sr-only'>Frontend Developer</span>
			</Link>
			<nav className='ml-auto flex items-center gap-4 sm:gap-6 justify-end'>
				<Link
					className='text-2xl font-medium hover:underline underline-offset-4'
					href='#'
				>
					Home
				</Link>
				<Link
					className='text-2xl font-medium hover:underline underline-offset-4'
					href='#'
				>
					Projects
				</Link>
				<Link
					className='text-2xl font-medium hover:underline underline-offset-4'
					href='#'
				>
					About
				</Link>
				<Link
					className='text-2xl font-medium hover:underline underline-offset-4'
					href='#'
				>
					Contact
				</Link>
			</nav>
		</header>
	)
}
export default MainNav