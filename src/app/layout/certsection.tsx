import Card from '../components/card';

export default function certsect() {
	return (
		<main>
			<section id='certSect'>
				<div className='flex flex-wrap mx-4'>
					<div className='w-full px-4'>
						<div className='mx-auto mb-12 max-w-[512px] text-center'>
							<h2 className='mb-10 mt-10 text-3xl font-bold leading-[1.2] text-black dark:text-white sm:text-4xl md:text-[40px]'>
								CERTIFICATION
							</h2>
							<p className=' text-gray-500 dark:text-gray-300'>
								Saya memiliki berbagai sertifikasi yang mendukung keahlian saya di
								bidang Front-end Development, Networking, dan pemahaman dasar
								Back-End Development. Sertifikasi ini mencerminkan keterampilan yang
								telah saya pelajari dan kuasai.
							</p>
						</div>
					</div>
				</div>
				<Card></Card>
			</section>
		</main>
	);
}
