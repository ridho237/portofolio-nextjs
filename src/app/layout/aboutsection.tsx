import { Image } from '@nextui-org/react';
import {
	ArrowDownToLine,
	Cloud,
	Network,
	Server,
	Wallpaper,
} from 'lucide-react';
import NextImage from 'next/image';
import Gallery from '../components/gallery';

export default function Aboutsection() {
	return (
		<main>
			<section id='aboutSect'>
				<div className='flex flex-wrap justify-center bg-gray-200'>
					<div className='w-full'>
						<div className='mx-auto mb-12 max-w-[512px] text-center'>
							<h2 className='mb-10 mt-10 text-3xl font-bold leading-[1.2] text-black sm:text-4xl md:text-[40px]'>
								ABOUT ME
							</h2>
							<p className='text-gray-500'>
								Aku bukan hanya seorang Front-end Web Developer, namun aku juga
								mendalami bidang Networking, dan sedikit mengetahui cara kerja
								seorang Back-End Developer. Dibawah ini mungkin beberapa artikel
								tentang Skills yang aku dalami.
							</p>
						</div>
					</div>
				</div>
				<div className='flex flex-row flex-wrap justify-center items-center bg-gray-200'>
					<Image
						as={NextImage}
						height={500}
						width={200}
						src='/images/profile.jpeg'
						alt='Literally me'
						className='object-cover h-[220px] border-3 rounded-xl border-black'
					/>
					<div className='flex flex-col justify-center gap-4 mt-12 ml-2 w-[450px] px-6 sm:mt-0 md:px-12 sm:px-12'>
						<div>
							<h1 className='font-bold text-2xl'>Muhammad Ridho</h1>
						</div>
						<div>
							<p className='text-gray-500'>
								I am an informatics undergraduate student. With an educational
								background in informatics, I have an interest and commitment to
								deepen his knowledge in cloud technology.
							</p>
						</div>
						<div>
							<div>
								<button className='flex flex-row gap-2 justify-center items-center bg-gray-500 text-white text-sm font-medium px-2 py-2 rounded-xl shadow'>
									<ArrowDownToLine />
									Download CV
								</button>
							</div>
						</div>
					</div>

					<div className='flex flex-col my-10 pl-1 justify-center gap-5 w-[300px] md:pl-14 sm:pl-20'>
						<div className='flex flex-row items-center'>
							<Wallpaper />
							<p className='font-semibold ml-3'>Front-End Developer</p>
						</div>
						<div className='flex flex-row items-center'>
							<Server />
							<p className='font-semibold ml-3'>Back-End Developer</p>
						</div>
						<div className='flex flex-row items-center'>
							<Cloud />
							<p className='font-semibold ml-3'>Cloud Computing</p>
						</div>
						<div className='flex flex-roe items-center'>
							<Network />
							<p className='font-semibold ml-3'>Networking</p>
						</div>
					</div>
				</div>
				<div className='flex justify-center pt-10 bg-gray-200'>
					<h2 className='text-3xl font-bold text-black sm:text-4xl md:text-[40px]'>
						MY INTEREST
					</h2>
				</div>
				<div className='flex flex-col items-center pt-5 bg-gray-200 pb-10'>
					<Gallery></Gallery>
				</div>
			</section>
		</main>
	);
}
