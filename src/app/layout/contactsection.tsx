'use client';
import { useState } from 'react';
import { Input, RadioGroup, Radio, Textarea } from '@heroui/react';
import Github from '../../app/icon/github';
import Gmail from '../../app/icon/gmail';
import Call from '../../app/icon/call';
import { SendHorizontal } from 'lucide-react';

export default function Contact() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		address: '',
		rating: '5',
		description: '',
	});

	// Fungsi untuk menangani perubahan input
	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	// Fungsi untuk menangani pemilihan radio button
	const handleRatingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, rating: e.target.value });
	};

	// Fungsi untuk menangani submit form
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const { name, email, address, rating, description } = formData;
		const recipient = 'mridhoo2303@gmail.com'; // Ganti dengan email Anda

		// Format isi email
		const subject = encodeURIComponent(`New Contact Form Submission from ${name}`);
		const body = encodeURIComponent(
			`Name: ${name}\nEmail: ${email}\nAddress: ${address}\nRating: ${rating}\nMessage: ${description}`
		);

		// Redirect ke email client menggunakan mailto
		window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
	};

	return (
		<main>
			<section
				id='contactSect'
				className='mb-20'
			>
				<div className='flex flex-wrap mx-4'>
					<div className='w-full px-4'>
						<div className='mx-auto mb-12 max-w-[512px] text-center'>
							<h2 className='mb-10 mt-10 text-3xl font-bold leading-[1.2] text-black dark:text-white sm:text-4xl md:text-[40px]'>
								CONTACT ME
							</h2>
							<p className='text-gray-500 dark:text-gray-300'>
								Jika Anda ingin terhubung atau berdiskusi lebih lanjut, jangan ragu
								untuk menghubungi saya. Saya terbuka untuk peluang kolaborasi dan
								selalu siap berbagi wawasan seputar Front-end Development,
								Networking, maupun aspek teknis lainnya.
							</p>
						</div>
					</div>
				</div>
				<div className='flex flex-wrap flex-row justify-center'>
					{/* Contact Information */}
					<div className='w-[512px] p-5 border-2 border-b-0 border-black lg:border-r-0 lg:border-b-2'>
						<div className='flex flex-col gap-5 bg-black p-10 h-full text-white border rounded-xl'>
							<h1>Contact Information</h1>
							<p>
								Fill up the form and our Team will get back to you within 24 hours.
							</p>
							<div className='flex flex-col gap-3'>
								<div className='flex flex-row items-center'>
									<Call />
									<p className='ml-3'>+62 857 8036 0004</p>
								</div>
								<div className='flex flex-row items-center'>
									<Gmail />
									<p className='ml-3'>mridhoo2303@gmail.com</p>
								</div>
								<div className='flex flex-row items-center'>
									<Github />
									<p className='ml-3'>ridho237</p>
								</div>
							</div>
						</div>
					</div>

					{/* Form */}
					<form
						onSubmit={handleSubmit}
						className='flex flex-wrap flex-col gap-5 p-5 w-[512px] border-2 border-t-0 border-black lg:border-2 lg:border-l-0'
					>
						<div className='flex w-full flex-wrap md:flex-nowrap gap-4'>
							<Input
								type='text'
								label='Name'
								name='name'
								value={formData.name}
								onChange={handleChange}
								required
							/>
							<Input
								type='email'
								label='Email'
								name='email'
								placeholder='Enter your email'
								value={formData.email}
								onChange={handleChange}
								required
							/>
						</div>
						<Input
							type='text'
							label='Address'
							name='address'
							value={formData.address}
							onChange={handleChange}
						/>

						<RadioGroup
							label='Rate this website'
							orientation='horizontal'
							value={formData.rating}
							onChange={handleRatingChange}
						>
							<Radio value='5'>5</Radio>
							<Radio value='4'>4</Radio>
							<Radio value='3'>3</Radio>
							<Radio value='2'>2</Radio>
							<Radio value='1'>1</Radio>
						</RadioGroup>

						<Textarea
							label='Message'
							name='description'
							placeholder='Enter your description'
							value={formData.description}
							onChange={handleChange}
						/>

						<div className='flex justify-center md:justify-end'>
							<button
								type='submit'
								className='flex flex-row gap-2 justify-center items-center bg-black text-white text-sm font-medium px-2 py-2 rounded-xl shadow'
							>
								<SendHorizontal />
								Send
							</button>
						</div>
					</form>
				</div>
			</section>
		</main>
	);
}
