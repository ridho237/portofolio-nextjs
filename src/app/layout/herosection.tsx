'use client';

import React from 'react';
import { Image } from '@heroui/react';

export default function herosection() {
	return (
		<main>
			<div className='flex flex-wrap'>
				<div className='w-full mb-10 sm:w-1/2'>
					<div className='container mx-auto h-full sm:p-10'>
						<header className='container flex items-center px-4 mt-10 h-full lg:mt-0'>
							<div className='w-full items-center'>
								<h1 className='text-4xl lg:text-6xl font-bold mb-5 text-center sm:text-start dark:text-white'>
									Welcome{' '}
									<span className='text-gray-600 dark:text-gray-300'>Guest!!</span>
								</h1>
								<p className='text-sm sm:text-xl mb-8 text-center sm:text-start dark:text-white'>
									Berikut website portofolio saya, menggunakan framework Next JS,
									diweb portofolio sederhana ini menampilkan beberapa hal tentang
									diri saya.
								</p>
								<p className='text-md mb-4 text-center sm:text-start dark:text-white'>
									Powered by
								</p>
								<div className='flex flex-wrap justify-center sm:justify-start gap-3'>
									<button className='bg-white text-black text-xl font-medium px-4 py-2 rounded shadow'>
										Next JS
									</button>
									<button className='bg-gray-500 text-white text-xl font-medium px-4 py-2 rounded shadow'>
										Next UI
									</button>
								</div>
							</div>
						</header>
					</div>
				</div>
				<div className='flex justify-center items-center sm:w-1/2 w-full h-[500px] sm:h-screen'>
					<Image
						isBlurred
						width={500}
						height={500}
						alt='cute'
						src='/images/hero.png'
						className='w-[290px] sm:w-[400px] object-cover rounded-xxl border-black dark:border-white border-3 shadow-lg'
					/>
				</div>
			</div>
		</main>
	);
}
