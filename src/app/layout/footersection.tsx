'use client';
import React from 'react';
import { Navbar, NavbarItem, Link } from '@nextui-org/react';

export default function footer() {
	return (
		<main>
			<section>
				<div className='flex flex-row flex-wrap justify-center items-center border-t-2 sm:justify-between'>
					<div className='ml-0 mt-2 sm:ml-10 sm:mt-0'>
						<p>© 2024 Made with Next UI by Muhammad Ridho.</p>
					</div>
					<div>
						<Navbar>
							<NavbarItem>
								<Link
									color='foreground'
									href='#skills'
									className='hover:text-gray-500'
								>
									Skills
								</Link>
							</NavbarItem>
							<NavbarItem>
								<Link
									color='foreground'
									href='#certSect'
									className='hover:text-gray-500'
								>
									Certification
								</Link>
							</NavbarItem>
							<NavbarItem>
								<Link
									color='foreground'
									href='#aboutSect'
									className='hover:text-gray-500'
								>
									About
								</Link>
							</NavbarItem>
							<NavbarItem>
								<Link
									color='foreground'
									href='#contactSect'
									className='hover:text-gray-500'
								>
									Contact
								</Link>
							</NavbarItem>
						</Navbar>
					</div>
				</div>
			</section>
		</main>
	);
}
