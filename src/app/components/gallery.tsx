import Image from 'next/image';

export default function gallery() {
	return (
		<main>
			<div className='flex flex-col max-w-[250px] rounded-xl border-8 border-black md:flex-row md:max-w-[950px]'>
				<div>
					<Image
						width={800}
						height={800}
						alt='cute'
						src='/images/hero.jpg'
						priority={true}
						className='w-96 object-cover h-[500px] hover:w-full '
					></Image>
				</div>
				<div>
					<Image
						width={800}
						height={800}
						alt='cute'
						src='/images/hero.jpg'
						priority={true}
						className='w-96 object-cover h-[500px] hover:w-full'
					></Image>
				</div>
				<div>
					<Image
						width={800}
						height={800}
						alt='cute'
						src='/images/hero.jpg'
						priority={true}
						className='w-96 object-cover h-[500px] hover:w-full'
					></Image>
				</div>
				<div>
					<Image
						width={800}
						height={800}
						alt='cute'
						src='/images/hero.jpg'
						priority={true}
						className='w-96 object-cover h-[500px] hover:w-full'
					></Image>
				</div>
				<div>
					<Image
						width={800}
						height={800}
						alt='cute'
						src='/images/hero.jpg'
						priority={true}
						className='w-96 object-cover h-[500px] hover:w-full'
					></Image>
				</div>
			</div>
		</main>
	);
}
