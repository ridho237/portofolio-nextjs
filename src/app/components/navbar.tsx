'use client';
import { useState } from 'react';
import Link from 'next/link';
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenuToggle,
	NavbarMenu,
	Input,
} from '@nextui-org/react';
import SearchIcon from '../icon/search';

export default function Navbars() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [searchQuery, setSearchQuery] = useState('');

	const characters = [
		{ id: 'skills', name: 'Skills' },
		{ id: 'certSect', name: 'Certification' },
		{ id: 'aboutSect', name: 'About' },
		{ id: 'contactSect', name: 'Contact' },
	];

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(e.target.value);
	};

	const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			e.preventDefault();
			const query = searchQuery.trim();
			if (query) {
				const character = characters.find((c) => c.id === query);
				if (character) {
					const sectionElement = document.getElementById(character.id);
					if (sectionElement) {
						sectionElement.scrollIntoView({ behavior: 'smooth' });
					}
				}
			}
		}
	};

	return (
		<Navbar
			isBordered
			maxWidth='full'
			onMenuOpenChange={setIsMenuOpen}
		>
			<NavbarContent>
				<NavbarMenuToggle
					aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
					className='sm:hidden'
				/>
				<NavbarBrand>
					<p className='font-bold text-inherit'>Ridho Sites</p>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent
				className='hidden sm:flex gap-4'
				justify='center'
			>
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
			</NavbarContent>
			<NavbarContent justify='end'>
				<Input
					value={searchQuery}
					onChange={handleInputChange}
					onKeyDown={handleKeyPress} // Use onKeyDown instead of onKeyPress
					classNames={{
						base: 'max-w-full sm:max-w-[10rem] h-10',
						mainWrapper: 'h-full',
						input: 'text-small',
						inputWrapper:
							'h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20',
					}}
					placeholder='Type to search...'
					size='sm'
					startContent={<SearchIcon />}
					type='search'
				/>
			</NavbarContent>
			<NavbarMenu className='flex justify-center items-center gap-9'>
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
			</NavbarMenu>
		</Navbar>
	);
}
