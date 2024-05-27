import Image from 'next/image';
import { skills } from '../data/skills';

export default function SkillSection() {
	return (
		<main>
			<section id='skills'>
				<div className='flex flex-wrap mx-0 bg-gray-200'>
					<div className='w-full px-4'>
						<div className='mx-auto mb-12 max-w-[512px] text-center lg:mb-20'>
							<h2 className='mb-10 mt-10 text-3xl font-bold leading-[1.2] text-black sm:text-4xl md:text-[40px]'>
								MY SKILLS
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
				<div className='flex flex-row justify-center flex-wrap bg-gray-200 pb-20'>
					{skills.map((item) => (
						<div
							key={item.title}
							className='p-4 w-[230px]'
						>
							<div className='h-full border-1 border-gray-200 border-opacity-60'>
								<Image
									width={300}
									height={300}
									src={item.img}
									alt={item.title}
									className='h-48 w-full object-cover object-center'
								/>
								<div className='p-5 h-36'>
									<h2 className='text-xs title-font font-medium text-gray-500 mb-1'>
										{item.author}
									</h2>
									<h1 className='truncate title-font text-lg font-medium text-gray-900 mb-3'>
										{item.title}
									</h1>
									<p className='mb-3 h-19 line-clamp-3'>{item.desc}</p>
								</div>
								<div className='p-6 mx-0'>
									<a
										href={item.link}
										className='text-gray-500 inline-flex items-center hover:text-black'
									>
										Read More
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</section>
		</main>
	);
}
