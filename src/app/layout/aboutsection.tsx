import Beckendicon from '../icon/beckend';
import Fronticon from '../icon/front';
import Networkicon from '../icon/network';
import Gallery from '../components/gallery';
import DownIcon from '../icon/download';
import { Image } from '@nextui-org/react';
import NextImage from 'next/image';

export default function Aboutsection() {
	return (
		<main>
			<section id='aboutSect'>
				<div className='flex flex-wrap mx-4 bg-gray-200'>
					<div className='w-full px-4'>
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
								<button className='flex flex-row justify-center items-center bg-gray-500 text-white text-sm font-medium px-4 py-2 rounded shadow'>
									<DownIcon></DownIcon>Download CV
								</button>
							</div>
						</div>
					</div>

					<div className='flex flex-col my-10 pl-1 justify-center gap-5 w-[300px] md:pl-14 sm:pl-20'>
						<div className='flex flex-row items-center'>
							<Fronticon></Fronticon>
							<p className='font-semibold ml-3'>Front-End Developer</p>
						</div>
						<div className='flex flex-row items-center'>
							<Beckendicon></Beckendicon>
							<p className='font-semibold ml-3'>Back-End Developer</p>
						</div>
						<div className='flex flex-row items-center'>
							<Networkicon></Networkicon>
							<p className='font-semibold ml-3'>Cloud Computing</p>
						</div>
					</div>
				</div>
				<div className='flex flex-col items-center mt-8 bg-gray-200 pb-10'>
					<Gallery></Gallery>
				</div>
			</section>
		</main>
	);
}
