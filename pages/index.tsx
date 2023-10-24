import MainNavbar from "./components/MainNavbar.tsx/MainNavbar"
import React from 'react'
import { PlusIcon } from "./components/SvgIcons/SvgIcons"
import Head from "next/head"


const ProfilePage = () => {
	return (
		<>
			<MainNavbar></MainNavbar>
			<div className='container mx-auto'>
				<Head>
					<title>About Me - Naomi Kleinhans</title>
				</Head>
				<div className='p-4'>
					<h1 className='text-4xl font-bold'>
						Hello, It&apos;s Me <br />{' '}
						<p className='text-6xl'>Naomi Kleinhans</p> And I&apos;m a Frontend
						Developer
					</h1>
					<p className='mt-4'>
						I&apos;m a dedicated front-end web developer
						specializing in turning ideas into functional, user-friendly
						websites. With expertise in HTML, CSS, and JavaScript, I focus on
						the technical implementation of web projects. My commitment to
						clean, responsive code, innovative problem-solving, and a love for
						the latest web technologies drives me to create web solutions that
						perform flawlessly. I thrive in collaborative environments and am
						always eager to take on new challenges.
					</p>
				</div>
			</div>

			<div className='flex-shrink-0'>
				<button
					type='button'
					className='relative inline-flex items-center gap-x-1.5 rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'
				>
					<PlusIcon
						className='-ml-0.5 h-5 w-5'
						aria-hidden='true'
					/>
					New Job
				</button>
			</div>
		</>
	)
}

export default ProfilePage
