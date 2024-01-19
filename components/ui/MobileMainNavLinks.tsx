import Link from "next/link"

const MobileMainNavLinks = () => {


	return (
		<>
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
</>
	)
}
	export default MobileMainNavLinks