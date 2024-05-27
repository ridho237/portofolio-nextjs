'use client';
import { Input, RadioGroup, Radio, Textarea } from '@nextui-org/react';
import Github from '../../app/icon/github';
import Gmail from '../../app/icon/gmail';
import Call from '../../app/icon/call';
import { SendHorizontal } from 'lucide-react';

export default function Contact() {
	return (
		<main>
			<section
				id='contactSect'
				className='mb-20'
			>
				<div className='flex flex-wrap mx-4'>
					<div className='w-full px-4'>
						<div className='mx-auto mb-12 max-w-[512px] text-center'>
							<h2 className='mb-10 mt-10 text-3xl font-bold leading-[1.2] text-black sm:text-4xl md:text-[40px]'>
								CONTACT ME
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
				<div className='flex flex-wrap flex-row justify-center'>
					<div
						className='w-[512px] p-5 border-2 border-b-0 border-black
                                    lg:border-r-0 lg:border-b-2'
					>
						<div className='flex flex-col gap-5 bg-black p-10 h-full text-white border rounded-xl'>
							<h1>Contact Information</h1>
							<p>
								Fill up the form and our Team will get back to you within 24
								hours.
							</p>
							<div className='flex flex-col gap-3'>
								<div className='flex flex-row items-center'>
									<Call />
									<p className='ml-3'>+62 812 9141 7962</p>
								</div>
								<div className='flex flex-row items-center'>
									<Gmail />
									<p className='ml-3'>ridho@gmail.com</p>
								</div>
								<div className='flex flex-row items-center'>
									<Github />
									<p className='ml-3'>ridho237</p>
								</div>
							</div>
						</div>
					</div>
					<form
						method='POST'
						className='flex flex-wrap flex-col gap-5 p-5 w-[512px] border-2 border-t-0 border-black 
                                                        lg:border-2 lg:border-l-0'
					>
						<div className='flex w-full flex-wrap md:flex-nowrap gap-4'>
							<Input
								type='name'
								label='Name'
							/>
							<Input
								type='email'
								label='Email'
								placeholder='Enter your email'
							/>
						</div>
						<Input
							type='address'
							label='Address'
						/>
						<RadioGroup
							label='Rate this website'
							orientation='horizontal'
						>
							<Radio value='mostFantastic'>5</Radio>
							<Radio value='moreFantastic'>4</Radio>
							<Radio value='fantastic'>3</Radio>
							<Radio value='notBad'>2</Radio>
							<Radio value='soBad'>1</Radio>
						</RadioGroup>
						<Textarea
							label='Description'
							placeholder='Enter your description'
						/>
						<div className='flex justify-center md:justify-end'>
							<button
								type='submit'
								className='flex flex-row gap-2 justify-center items-center bg-black 
                                        text-white text-sm font-medium px-2 py-2 rounded-xl shadow'
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
