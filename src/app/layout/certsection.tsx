import Card from '../components/card';

export default function certsect() {
	return (
		<main>
			<section id='certSect'>
				<div className='flex flex-wrap mx-4'>
					<div className='w-full px-4'>
						<div className='mx-auto mb-12 max-w-[512px] text-center'>
							<h2 className='mb-10 mt-10 text-3xl font-bold leading-[1.2] text-black sm:text-4xl md:text-[40px]'>
								CERTIFICATION
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
				<Card></Card>
			</section>
		</main>
	);
}
