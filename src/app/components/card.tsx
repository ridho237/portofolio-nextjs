'use client';
import React from 'react';
import { Card, CardBody, CardFooter, Image } from '@heroui/react';
import { cert } from '../data/cert';

export default function card() {
	return (
		<div className='flex flex-row flex-wrap justify-center m-auto max-w-[1080px]'>
			{cert.map((item) => (
				<Card
					className='flex w-80 mx-5 my-5 sm:my-5'
					shadow='sm'
					key={item.title}
					isPressable
					onPress={() => console.log('item pressed')}
				>
					<CardBody className='overflow-visible p-0'>
						<Image
							shadow='sm'
							radius='lg'
							width='100%'
							alt={item.title}
							className='w-full object-cover h-[250px]'
							src={item.img}
						/>
					</CardBody>
					<CardBody className='flex flex-col text-md'>
						<b className='truncate h-8 mt-4 mx-3'>{item.title}</b>
						<CardFooter className='flex justify-between mt-2'>
							<p className='font-medium '>{item.platform}</p>
							<p className='text-default-500'>Done {item.finished}</p>
						</CardFooter>
					</CardBody>
				</Card>
			))}
		</div>
	);
}
