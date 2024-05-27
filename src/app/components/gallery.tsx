'use client';
import { ArrowBigLeft, ArrowBigRight } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

export default function Gallery() {
	const [currentImg, setCurrentImg] = useState(0);
	const [carouselSize, setCarouselSize] = useState({ width: 0, height: 0 });
	const carouselRef = useRef<HTMLDivElement>(null);

	// useEffect to get the initial carousel size
	useEffect(() => {
		let elem = carouselRef.current as HTMLDivElement;
		let { width, height } = elem.getBoundingClientRect();
		if (carouselRef.current) {
			setCarouselSize({
				width,
				height,
			});
		}
	}, []);

	const data = [
		{
			src: '/images/waifu/1.jpg',
		},
		{
			src: '/images/waifu/2.jpg',
		},
		{
			src: '/images/waifu/3.jpg',
		},
		{
			src: '/images/waifu/4.jpg',
		},
		{
			src: '/images/waifu/5.jpg',
		},
	];

	return (
		<main>
			<div>
				{/* Carousel container */}
				<div className='relative h-[600px] w-[970px] overflow-hidden rounded-xl'>
					{/* Image container */}
					<div
						ref={carouselRef}
						style={{
							left: -currentImg * carouselSize.width,
						}}
						className='absolute flex h-full w-full transition-all duration-300'
					>
						{/* Map through data to render images */}
						{data.map((v, i) => (
							<div
								key={4}
								className='relative h-full w-full shrink-0'
							>
								<Image
									style={{ objectFit: 'cover' }}
									className='pointer-events-none'
									fill
									alt={`carousel-image-${i}`}
									src={v.src}
								/>
							</div>
						))}
					</div>
				</div>

				{/* Navigation buttons */}
				<div className='mt-3 flex w-full rounded-full justify-between bg-gray-300'>
					<button
						disabled={currentImg === 0}
						onClick={() => setCurrentImg((prev) => prev - 1)}
						className={`flex justify-center w-full border px-4 py-2 font-bold ${
							currentImg === 0 && 'opacity-50'
						}`}
					>
						<ArrowBigLeft />
					</button>
					<button
						disabled={currentImg === data.length - 1}
						onClick={() => setCurrentImg((prev) => prev + 1)}
						className={`flex justify-center w-full border px-4 py-2 font-bold ${
							currentImg === data.length - 1 && 'opacity-50'
						}`}
					>
						<ArrowBigRight />
					</button>
				</div>
			</div>
		</main>
	);
}
