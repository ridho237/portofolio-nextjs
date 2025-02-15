'use client';

import { useState, useRef, useEffect } from 'react';
import KeenSlider from 'keen-slider';
import 'keen-slider/keen-slider.min.css';
import { Card, CardHeader, CardFooter, Image, Button } from '@heroui/react';

export default function Project() {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [loaded, setLoaded] = useState(false);
	const sliderRef = useRef<HTMLDivElement | null>(null);
	const [sliderInstance, setSliderInstance] = useState<any>(null);

	useEffect(() => {
		if (sliderRef.current) {
			const instance = new KeenSlider(sliderRef.current, {
				loop: true,
				mode: 'snap',
				slides: { perView: 1, spacing: 15 },
				created: () => setLoaded(true),
				slideChanged: (slider) => setCurrentSlide(slider.track.details.rel),
			});
			setSliderInstance(instance);
		}
	}, []);

	useEffect(() => {
		if (!sliderInstance) return;

		const interval = setInterval(() => {
			sliderInstance.moveToIdx((currentSlide + 1) % data.length);
		}, 5000);

		return () => clearInterval(interval);
	}, [sliderInstance, currentSlide]);

	const data = [
		{
			src: '/images/waifu/1.jpg',
			title: 'Tsu-Drive',
			desc: 'FullStack Penyimpanan File Berbasis Web',
			link: 'https://github.com/ridho237/tsu-drive',
		},
		{
			src: '/images/waifu/2.jpg',
			title: 'PortoFolio',
			desc: 'FullStack Portofolio Berbasis Web',
			link: 'https://github.com/ridho237/portofolio-nextjs',
		},
		{
			src: '/images/waifu/9.jpg',
			title: 'Tsu-List',
			desc: 'FullStack List Anime/Drama Berbasis Web',
			link: 'https://github.com/ridho237/tsuList-frontend',
		},
		{
			src: '/images/waifu/3.jpg',
			title: 'Tansyitul Finansial',
			desc: 'Backend Pencatatan SPP Berbasis Android Bersama kelompok',
			link: 'https://github.com/Team3PPPL/back_end',
		},
		{
			src: '/images/waifu/4.jpg',
			title: 'Booking App',
			desc: 'Backend Booking App Berbasis Web Bersama Kelompok',
			link: 'https://github.com/pb-susukan/rpl2-kel1',
		},
		{
			src: '/images/waifu/5.jpg',
			title: 'Watermark App',
			desc: 'FullStack Watermark App untuk menambah watermark pada gambar Berbasis Web',
			link: 'https://github.com/ridho237/watermark-app',
		},
		{
			src: '/images/waifu/6.jpg',
			title: 'API Cancer Prediction',
			desc: 'Backend Prediksi cancer dengan model yang sudah diberikan',
			link: 'https://github.com/ridho237/cancer-predict-api',
		},
		{
			src: '/images/waifu/7.jpg',
			title: 'API Bookshelf App',
			desc: 'Backend Bookshelf App dengan Frontend yang sudah diberikan',
			link: 'https://github.com/ridho237/bookshelf-API-Hapi',
		},
		{
			src: '/images/waifu/8.jpg',
			title: 'API Note App',
			desc: 'Backend Note App dengan Frontend yang sudah diberikan',
			link: 'https://github.com/ridho237/note-app-backend-express',
		},
	];

	return (
		<main className='flex flex-col items-center justify-center p-2 sm:p-10 bg-gray-200 dark:bg-gray-800'>
			<div
				ref={sliderRef}
				className='keen-slider w-[420px] h-[320px]'
			>
				{data.map((item, index) => (
					<div
						key={index}
						className='keen-slider__slide flex justify-center'
					>
						<Card
							isFooterBlurred
							className='flex w-[300px] sm:w-1/2 h-[300px] shadow-md'
						>
							<CardHeader className='absolute z-10 top-1 flex-col items-start'>
								<p className='bg-white/50  text-tiny text-black/60 uppercase font-bold border-1 border-black px-2 py-1 rounded-md shadow-lg'>
									{item.title}
								</p>
							</CardHeader>
							<Image
								removeWrapper
								alt='Project Image'
								className='z-0 w-full h-full object-cover'
								src={item.src}
							/>
							<CardFooter className='absolute bg-white/50 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between'>
								<p className='text-black text-tiny w-1/2'>{item.desc}</p>
								<Button
									className='text-tiny bg-gray-600 text-white'
									radius='sm'
									size='sm'
									onPress={() => window.open(item.link, '_blank')}
								>
									View
								</Button>
							</CardFooter>
						</Card>
					</div>
				))}
			</div>

			{loaded && (
				<div className='flex gap-3 mt-4'>
					{data.map((_, index) => (
						<button
							key={index}
							onClick={() => sliderInstance?.moveToIdx(index)}
							className={`h-3 w-3 rounded-full ${
								currentSlide === index ? 'bg-gray-600' : 'bg-gray-300'
							}`}
						></button>
					))}
				</div>
			)}
		</main>
	);
}
