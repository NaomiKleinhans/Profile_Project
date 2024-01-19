/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/NwKYlkeNkOm
 */
import Link from 'next/link'
import { CardTitle, CardHeader, CardContent, Card } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { JSX,SVGProps } from 'react'
import MainNav from '@/components/ui/MainNav'
import MobileMainNav from '@/components/ui/MobileMainNav'

const Home = () => {
	return (
		<div
			key='1'
			className='flex flex-col min-h-screen'
		>
			<div className='sm:hidden'>
				<MainNav />
			</div>
			<div className='md:hidden lg:hidden'>
				<MobileMainNav />
			</div>
			<main className='flex-1'>
				<section className='w-full pt-12 md:pt-24 lg:pt-32 bg-[#181818]'>
					<div className='px-4 md:px-6 space-y-10 xl:space-y-16'>
						<div className='grid max-w-[1300px] mx-autogap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16'>
							<div>
								<h1 className='my-32 lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] text-themeColorMain'>
									Welcome to my portfolio
								</h1>
							</div>
							<div className='flex flex-col items-start space-y-4'>
								<p className='mx-auto max-w-[700px] text-[#f2f2f2] md:text-xl dark:text-gray-400'>
									I am a frontend developer with a passion for creating
									beautiful and functional web applications. Explore my projects
									and get in touch if you would like to work together.
								</p>
							</div>
						</div>
					</div>
				</section>
				<section className='w-full py-12 md:py-24 lg:py-32 bg-[#181818]'>
					<div className='container space-y-12 px-4 md:px-6'>
						<div className='flex flex-col items-center justify-center space-y-4 text-center'>
							<div className='space-y-2'>
								<h2 className='text-3xl font-bold tracking-tighter sm:text-5xl text-themeColorMain'>
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
								<h2 className='text-3xl font-bold tracking-tighter sm:text-5xl text-themeColorMain'>
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

function CodeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
	return (
		<svg
			{...props}
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		>
			<polyline points='16 18 22 12 6' />
			<polyline points='8 6 2 12 18' />
		</svg>
	)
}

export default Home
