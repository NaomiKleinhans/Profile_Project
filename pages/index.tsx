import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { CardTitle, CardHeader, CardContent, Card } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { JSX, SVGProps } from 'react'
import MainNav from '@/components/ui/MainNav'
import MobileMainNav from '@/components/ui/MobileMainNav'
import Image from 'next/image'

const Home = () => {
	return (
		<div
			key='1'
			className='flex flex-col bg-[#181818]'
		>
			<div className='sm:hidden z-50'>
				<MainNav />
			</div>
			<div className='md:hidden lg:hidden z-50'>
				<MobileMainNav />
			</div>

			<main className=''>
				<section className='w-full h-screen md:space-y-20 sm:space-y-10 lg:space-y-28 bg-[#181818]'>
					<h1 className='mt-32 sm:mb-8 lg:text-5xl md:text-4xl text-center mx-4 sm:text-3xl font-bold text-themeColorMain'>
						Welcome to my portfolio
					</h1>
					<div className='text-center lg:text-xl md:text-lg sm:text-sm mx-4'>
						<p>
							I am a frontend developer with a passion for creating beautiful
							and functional web applications.
						</p>
						<p>
							Explore my projects and get in touch if you would like to work
							together.
						</p>
					</div>
					<div className='sm:hidden mt-20'>
						<div
							style={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								height: '30vh'
							}}
						>
							<div
								style={{
									border: '6px solid #5A75CE',
									borderRadius: '50%',
									overflow: 'hidden'
								}}
							>
								<Image
									src='/profile-pic.png'
									alt='Profile Picture'
									width='300'
									height='300'
								/>
							</div>
						</div>
					</div>
					<div className='lg:hidden md:hidden mt-16'>
						<div
							style={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								height: '30vh'
							}}
						>
							<div
								style={{
									border: '6px solid #5A75CE',
									borderRadius: '50%',
									overflow: 'hidden'
								}}
							>
								<Image
									src='/profile-pic.png'
									alt='Profile Picture'
									width='150'
									height='150'
								/>
							</div>
						</div>
					</div>
				</section>
				<section className='w-full h-screen flex justify-center bg-[#181818]'>
					<div className='container space-y-12 px-4 md:px-6'>
						<div className='flex flex-col items-center justify-center space-y-4 text-center'>
							<div className='space-y-2'>
								<h2 className='lg:text-5xl md:text-4xl text-center mx-4 sm:text-3xl font-bold text-themeColorMain'>
									Featured Projects
								</h2>
							</div>
						</div>
						<div className='mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3 text-black'>
							<Card>
								<CardHeader>
									<CardTitle className='text-black'>Project 1</CardTitle>
								</CardHeader>
								<CardContent>
									<p className='text-sm text-black'>
										A description of the first project.
									</p>
								</CardContent>
							</Card>
							<Card>
								<CardHeader>
									<CardTitle>Project 2</CardTitle>
								</CardHeader>
								<CardContent>
									<p className='text-sm'>
										A description of the second project.
									</p>
								</CardContent>
							</Card>
							<Card>
								<CardHeader>
									<CardTitle>Project 3</CardTitle>
								</CardHeader>
								<CardContent>
									<p className='text-sm'>A description of the third project.</p>
								</CardContent>
							</Card>
						</div>
					</div>
				</section>
				<section className='w-full py-12 md:py-24 lg:py-32 bg-[#181818]'>
					<div className='container space-y-12 px-4 md:px-6'>
						<div className='flex flex-col items-center justify-center space-y-4 text-center'>
							<div className='space-y-2'>
								<h2 className='lg:text-5xl md:text-4xl text-center mx-4 sm:text-3xl font-bold text-themeColorMain'>
									Contact Me
								</h2>
							</div>
						</div>
						<div className='space-y-4'>
							<div className='grid grid-cols-2 gap-4'>
								<div className='space-y-2'>
									<Label htmlFor='first-name'>First name</Label>
									<Input
										id='first-name'
										placeholder='Enter your first name'
									/>
								</div>
								<div className='space-y-2'>
									<Label htmlFor='last-name'>Last name</Label>
									<Input
										id='last-name'
										placeholder='Enter your last name'
									/>
								</div>
							</div>
							<div className='space-y-2'>
								<Label htmlFor='email'>Email</Label>
								<Input
									id='email'
									placeholder='Enter your email'
									type='email'
								/>
							</div>
							<div className='space-y-2'>
								<Label htmlFor='message'>Message</Label>
								<Textarea
									className='min-h-[100px]'
									id='message'
									placeholder='Enter your message'
								/>
							</div>
							<Button>Send message</Button>
						</div>
					</div>
				</section>
			</main>
			<footer className='flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t'>
				<p className='text-xs text-gray-500 dark:text-gray-400'>
					© 2024 Frontend Developer. All rights reserved.
				</p>
				<nav className='sm:ml-auto flex gap-4 sm:gap-6'>
					<Link
						className='text-xs hover:underline underline-offset-4'
						href='#'
					>
						Terms of Service
					</Link>
					<Link
						className='text-xs hover:underline underline-offset-4'
						href='#'
					>
						Privacy
					</Link>
				</nav>
			</footer>
		</div>
	)
}

export default Home
