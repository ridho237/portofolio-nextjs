'use client';
import {
	Image,
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	Button,
	ModalFooter,
} from '@heroui/react';

import { useState } from 'react';
import NextImage from 'next/image';
import Marquee from 'react-fast-marquee';
import Project from '../components/project';
import {
	Briefcase,
	GraduationCap,
	Laptop,
	Network,
	Cloud,
	Code,
} from 'lucide-react';

export default function Aboutsection() {
	const [isOpen, setIsOpen] = useState(false);

	const onOpen = () => setIsOpen(true);
	const onOpenChange = () => setIsOpen(!isOpen);

	const handleDownload = () => {
		const link = document.createElement('a');
		link.href = '/doc/resume.pdf';
		link.download = 'Resume.pdf';
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	return (
		<main>
			<section
				id='aboutSect'
				className='bg-gray-200 dark:bg-gray-800'
			>
				<div className='w-full 	flex flex-wrap justify-center'>
					<div className='w-full mx-4'>
						<div className='mx-auto mb-12 max-w-[512px] text-center'>
							<h2 className='mb-10 mt-10 text-3xl font-bold leading-[1.2] text-black dark:text-white sm:text-4xl md:text-[40px]'>
								ABOUT ME
							</h2>
							<p className='text-gray-500 dark:text-gray-300'>
								Saya adalah seorang Front-end Web Developer yang juga memiliki minat
								di bidang Networking serta pemahaman dasar tentang Back-End
								Development. Dengan kombinasi keterampilan ini, saya terus belajar
								dan berkembang untuk menciptakan solusi teknologi yang efisien dan
								inovatif.
							</p>
						</div>
					</div>
				</div>
				<div className='flex flex-row flex-wrap justify-center items-center '>
					<Image
						as={NextImage}
						height={200}
						width={200}
						src='/images/profile.jpeg'
						alt='Literally me'
						className='object-cover h-[280px] border-3 rounded-xl border-black'
					/>
					<div className='flex flex-col justify-center gap-4 mt-12 ml-2 sm:w-1/2 px-6 sm:mt-0 md:px-12 sm:px-12'>
						<div>
							<h1 className='font-bold text-2xl text-black dark:text-white text-center sm:text-start'>
								Muhammad Ridho
							</h1>
						</div>
						<div>
							<p className='text-gray-500 dark:text-gray-300 text-center sm:text-start'>
								I am an informatics undergraduate student. With an educational
								background in informatics, I have an interest and commitment to
								deepen his knowledge in cloud technology.
							</p>
						</div>
						<div>
							<div className='flex justify-center sm:justify-start'>
								<Button
									onPress={onOpen}
									className='flex flex-row gap-2 justify-center items-center bg-gray-500 text-white text-sm font-medium px-2 py-2 rounded-xl shadow'
								>
									More Info
								</Button>
							</div>
						</div>
					</div>

					<Modal
						isOpen={isOpen}
						onOpenChange={onOpenChange}
						size='5xl'
						scrollBehavior='inside'
					>
						<ModalContent>
							{(onClose) => (
								<>
									<ModalHeader className='flex flex-col items-center gap-1'>
										<Image
											as={NextImage}
											height={200}
											width={200}
											src='/images/profile.jpeg'
											alt='Literally me'
											className=' object-cover h-[280px] border-3 rounded-xl border-black'
										/>
										<h2 className='dark:text-white text-3xl font-bold'>
											Muhammad Ridho
										</h2>
										<p className='text-gray-500'>Informatics Student</p>
									</ModalHeader>
									<ModalBody>
										{/* About Me */}
										<section className='mt-6'>
											<h3 className='dark:text-white text-xl font-semibold mb-2'>
												DATA PRIBADI
											</h3>
											<div className='text-gray-700 dark:text-gray-300 leading-relaxed'>
												<p>
													<strong>Tempat, Tgl Lahir:</strong> Jakarta, 23 April 2003
												</p>
												<p>
													<strong>Jenis Kelamin:</strong> Laki – Laki
												</p>
												<p>
													<strong>Status:</strong> Belum Menikah
												</p>
												<p>
													<strong>Alamat:</strong> Jl. Pulo No.1A, Bogor Regency
												</p>
												<p>
													<strong>Agama:</strong> Islam
												</p>
												<p>
													<strong>Kewarganegaraan:</strong> Indonesia
												</p>
												<p>
													<strong>Telephone:</strong> 085780360004
												</p>
												<p>
													<strong>Email:</strong> mridhoo2303@gmail.com
												</p>
											</div>
										</section>

										{/* Experience */}
										<section className='mt-6'>
											<h3 className='dark:text-white text-xl font-semibold mb-2 flex items-center gap-2'>
												<Briefcase className='w-5 h-5 text-gray-700 dark:text-white ' />{' '}
												Experience
											</h3>
											<ul className='list-disc list-inside text-gray-700 dark:text-gray-300'>
												<li>
													<strong>PT. Multidata Rencana Prima</strong> - Internship
													as IT Support (2019)
												</li>
												<li>
													<strong>Bangkit Academy 2024</strong> - Creating Cloud
													Infrastructure & REST API with Node.js (Feb 2024 - Jul
													2024)
												</li>
											</ul>
										</section>

										{/* Education */}
										<section className='mt-6'>
											<h3 className='dark:text-white text-xl font-semibold mb-2 flex items-center gap-2'>
												<GraduationCap className='w-5 h-5 text-gray-700 dark:text-white ' />{' '}
												Education
											</h3>
											<ul className='list-disc list-inside text-gray-700 dark:text-gray-300'>
												<li>
													<strong>Gunadarma University</strong> - Bachelor of
													Informatics (GPA: 3.73 / 4.00)
												</li>
												<li>
													<strong>SMK Wisata Indonesia</strong> - Network & Computer
													Technology
												</li>
											</ul>
										</section>

										{/* Skills */}
										<section className='mt-6'>
											<h3 className='dark:text-white text-xl font-semibold mb-2 flex items-center gap-2'>
												<Laptop className='w-5 h-5 text-gray-700 dark:text-white' />{' '}
												Skills
											</h3>
											<div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
												<div className='flex items-center gap-2'>
													<Network className='w-5 h-5 text-blue-500' />
													<p className='text-gray-700 dark:text-gray-300'>
														Networking (Cisco, Mikrotik)
													</p>
												</div>
												<div className='flex items-center gap-2'>
													<Cloud className='w-5 h-5 text-green-500' />
													<p className='text-gray-700 dark:text-gray-300'>
														Cloud Computing (GCP)
													</p>
												</div>
												<div className='flex items-center gap-2'>
													<Code className='w-5 h-5 text-purple-500' />
													<p className='text-gray-700 dark:text-gray-300'>
														Frontend (React, Next.js, Tailwind)
													</p>
												</div>
												<div className='flex items-center gap-2'>
													<Code className='w-5 h-5 text-red-500' />
													<p className='text-gray-700 dark:text-gray-300'>
														Backend (Node.js, Express.js)
													</p>
												</div>
											</div>
										</section>
									</ModalBody>
									<ModalFooter>
										<Button
											variant='light'
											onPress={onClose}
										>
											Close
										</Button>
										<Button onPress={handleDownload}>Download CV</Button>
									</ModalFooter>
								</>
							)}
						</ModalContent>
					</Modal>

					<Marquee
						speed={20}
						gradient={false}
						className='mt-10 py-2'
					>
						<div className='flex items-center px-4 gap-12 min-w-max '>
							{Array(10)
								.fill('My Project')
								.map((text, index) => (
									<h1
										key={index}
										className='text-xl sm:text-2xl font-bold text-black dark:text-white'
									>
										{text}
									</h1>
								))}
						</div>
					</Marquee>
				</div>
				<Project></Project>
				<Marquee
					speed={20}
					gradient={false}
					className='mt-10 py-2'
				>
					<div className='flex items-center px-4 gap-12 min-w-max '>
						{Array(10)
							.fill('My Project')
							.map((text, index) => (
								<h1
									key={index}
									className='text-xl sm:text-2xl font-bold text-black dark:text-white'
								>
									{text}
								</h1>
							))}
					</div>
				</Marquee>
			</section>
		</main>
	);
}
