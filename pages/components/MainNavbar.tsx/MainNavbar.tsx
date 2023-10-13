import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon, PlusIcon } from '../SvgIcons/SvgIcons'

const user = {
	name: 'Tom Cook',
	email: 'tom@example.com',
	imageUrl:
		'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOj12MDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
}

const navigation = [
	{ name: 'Home', href: '#', current: true },
	{ name: 'About', href: '#', current: false },
	{ name: 'Skills', href: '#', current: false },
	{ name: 'Portfolio', href: '#', current: false },
	{ name: 'Contact', href: '#', current: false }
]

export default function Example() {
	return (
		<Disclosure
			as='nav'
			className='bg-gray-800'
		>
			{({ open }) => (
				<>
					<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
						<div className='flex h-28 justify-between items-center'>
							<div className='flex items-center'>
								<div className='-ml-2 mr-2 flex items-center md:hidden'>
									<Disclosure.Button className='relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
										<span className='absolute -inset-0.5' />
										<span className='sr-only'>Open main menu</span>
										{open ? (
											<XMarkIcon
												className='block h-6 w-6'
												aria-hidden='true'
											/>
										) : (
											<Bars3Icon
												className='block h-6 w-6'
												aria-hidden='true'
											/>
										)}
									</Disclosure.Button>
								</div>
								<div className='flex justify-start items-center'>
									<img
										className='h-8 w-auto'
										src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500'
										alt='Your Company'
									/>
								</div>
							</div>

							<div className='hidden md:flex md:items-center md:space-x-6 ml-auto'>
								{navigation.map((item) => (
									<a
										key={item.name}
										href={item.href}
										className={`${
											item.current
												? 'bg-gray-900 text-white'
												: 'text-gray-300 hover:bg-gray-700 hover:text-white'
										} rounded-md px-3 py-2 text-xl font-medium`}
										aria-current={item.current ? 'page' : undefined}
									>
										{item.name}
									</a>
								))}
							</div>
						</div>
					</div>

					<Disclosure.Panel className='md:hidden'>
						<div className='space-y-1 px-2 pb-3 pt-2 sm:px-3'>
							{navigation.map((item) => (
								<Disclosure.Button
									key={item.name}
									as='a'
									href={item.href}
									className={`${
										item.current
											? 'bg-gray-900 text-white'
											: 'text-gray-300 hover:bg-gray-700 hover:text-white'
									} block rounded-md px-3 py-2 text-base font-medium`}
									aria-current={item.current ? 'page' : undefined}
								>
									{item.name}
								</Disclosure.Button>
							))}
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	)
}
