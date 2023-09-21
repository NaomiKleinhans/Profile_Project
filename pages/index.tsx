import MainNavbar from "./components/MainNavbar.tsx/MainNavbar"
import React from 'react'

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
      <h1>Hello</h1>
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
		</div>
		</>
	)
}

export default ProfilePage
