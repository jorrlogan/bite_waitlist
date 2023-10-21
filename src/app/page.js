'use client'

import Image from 'next/image'
import { SignUpForm } from './SignUpForm'

export default function Home() {
  return (
    <main className="flex h-screen flex-col pl-64 pr-64 pt-8">
      <div className='w-full flex justify-center'>
        <div className='flex justify-between w-full'>

          {/* <p className='text-red-600 font-bold text-4xl'>BITE</p> */}
          <div className='basis-1/2 w-full flex justify-start pl-32'>
            {/* 
            <Image src='https://versity-images.s3.us-west-2.amazonaws.com/bite-logo-red.png'
              width="70"
              height="20"></Image> */}
          </div>
          {/* <div className='flex'>
            <p className='text-red-600 pr-16'>Become a Dental Partner</p>
          </div> */}
        </div>
      </div>
      <div className='flex justify-start items-center h-5/6'>
        <div className='basis-1/2 flex justify-end pr-36'>
          <Image src="https://versity-images.s3.us-west-2.amazonaws.com/bite-app.png"
            width="350"
            height="400"
          ></Image>
        </div>
        <div>
          <Image src='https://versity-images.s3.us-west-2.amazonaws.com/bite-logo-red.png'
            width="180"
            height="100"></Image>
          <p className='font-semibold text-6xl font-sans pb-2'>Find the right dental<br></br>shift, right away</p>
          <p className='font-medium text-3xl font-sans'>All around America.</p>
          <p className='pt-8'>On-demand shifts for dental hygienists, assistants, and receptionists.<br></br>Set your own hours, pay and location with Bite.</p>
          <div className='flex flex-col pt-8'>
            <SignUpForm />
            {/* <input placeholder='Email' />
            <input placeholder='Work Position' />
            <input placeholder='Zip Code' /> */}
          </div>
        </div>
      </div>
    </main>
  )
}
