import Image from 'next/image';

export default function gallery() {
	return (
		<main>
			<div className='flex flex-col max-w-[250px] rounded-xl border-8 border-black md:flex-row md:max-w-[940px]'>
				<div>
					<Image
						width={800}
						height={800}
						alt='cute'
						src='/images/waifu/1.jpeg'
						priority={true}
						className='w-72 object-cover h-[550px] hover:w-full'
					></Image>
				</div>
				<div>
					<Image
						width={800}
						height={800}
						alt='cute'
						src='/images/waifu/2.jpeg'
						priority={true}
						className='w-72 object-cover h-[550px] hover:w-full'
					></Image>
				</div>
				<div>
					<Image
						width={800}
						height={800}
						alt='cute'
						src='/images/waifu/3.jpeg'
						priority={true}
						className='w-72 object-cover h-[550px] hover:w-full'
					></Image>
				</div>
				<div>
					<Image
						width={800}
						height={800}
						alt='cute'
						src='/images/waifu/4.jpeg'
						priority={true}
						className='w-full object-cover h-[550px] hover:w-96'
					></Image>
				</div>
				<div>
					<Image
						width={800}
						height={800}
						alt='cute'
						src='/images/waifu/5.jpeg'
						priority={true}
						className='w-full object-cover h-[550px] hover:w-96'
					></Image>
				</div>
			</div>
		</main>
	);
}
