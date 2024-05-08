'use client';

import React from 'react';
import Image from 'next/image';

export default function herosection() {
	return (
		<main>
			<div className='flex flex-wrap'>
				<div className='w-full sm:w-8/12 mb-10'>
					<div className='container mx-auto h-full sm:p-10'>
						<nav className='flex px-4 justify-between'></nav>
						<header className='container items-center px-4 lg:flex mt-10 h-full lg:mt-0'>
							<div className='w-full item'>
								<h1 className='text-4xl lg:text-6xl font-bold mb-5'>
									Welcome <span className='text-gray-500'>Guest!!</span>
								</h1>
								<p className='text-xl mb-8'>
									Berikut website portofolio saya, menggunakan framework Next
									JS, diweb portofolio sederhana ini menampilkan beberapa hal
									tentang diri saya.
								</p>
								<p className='text-md mb-4'>Powered by</p>
								<button className='bg-white mr-5 text-black text-xl font-medium px-4 py-2 rounded shadow'>
									Next JS
								</button>
								<button className='bg-gray-500 text-white text-xl font-medium px-4 py-2 rounded shadow'>
									Next UI
								</button>
							</div>
						</header>
					</div>
				</div>
				<Image
					width={800}
					height={800}
					alt='cute'
					src='/images/hero.jpg'
					priority={true}
					className='w-full object-cover h-[500px] sm:h-screen sm:w-4/12'
				/>
			</div>
		</main>
	);
}
