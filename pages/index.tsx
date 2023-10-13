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
						Hello, It&apos;s Me <br /> <p className="text-6xl">Naomi Kleinhans</p> And
						I&apos;m a Frontend Developer
					</h1>
					<p className='mt-4'>
						I&apos;m Naomi Kleinhans, a passionate front-end developer based in
						South Africa. I love creating interactive and user-friendly web
						experiences that make a difference. My journey in web development
						started when...
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
