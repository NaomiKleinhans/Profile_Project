import MainNavbar from "./components/MainNavbar.tsx/MainNavbar"
import React from 'react'
import { PlusIcon } from "./components/SvgIcons/SvgIcons"

const projects = [
	{ name: 'Project 1', link: 'https://example.com/project1' },
	{ name: 'Project 2', link: 'https://example.com/project2' },
	{ name: 'Project 3', link: 'https://example.com/project3' }
	// Add more projects as needed
]

const ProfilePage = () => {
	return (
		<>
			<MainNavbar></MainNavbar>
			<div className='container mx-auto p-6'>
				<header className='text-center mb-8'>
					<h1 className='text-3xl font-bold'>Your Name</h1>
					<p className='text-lg'>Web Developer</p>
				</header>
				<div>
					<h2 className='text-xl font-bold mb-4'>About Me</h2>
					<p>
						Write a brief description about yourself here. You can include your
						skills, interests, and experience.
					</p>
				</div>
				<div className='mt-8'>
					<h2 className='text-xl font-bold mb-4'>Projects</h2>
					<div className='space-y-2'>
						{projects.map((project, index) => (
							<a
								key={index}
								href={project.link}
								className='block text-blue-600 hover:underline'
							>
								{project.name}
							</a>
						))}
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
			</div>
		</>
	)
}

export default ProfilePage
