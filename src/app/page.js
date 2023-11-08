'use client'

import Head from 'next/head'
import Image from 'next/image'
import { SignUpForm } from './SignUpForm'

export default function Home() {
  return (
    <div>
      <div className="desktop">
        <main className="md:flex md:h-screen md:flex-col md:pl-64 md:pr-32 md:pt-8">
          <div className='md:flex md:justify-start md:items-center md:h-5/6'>
            <div className='md:basis-1/2 md:flex md:justify-end md:pr-36'>
              <Image src="https://versity-images.s3.us-west-2.amazonaws.com/bite-app-v3.png"
                height="400"
              ></Image>
            </div>
            <div>
              <Image src='https://versity-images.s3.us-west-2.amazonaws.com/bite-logo-red.png'
                width="180"
                height="100"></Image>
              <p className='md:font-semibold md:text-6xl md:font-sans md:pb-2'>Find the right dental<br></br>shift, right away</p>
              <p className='md:font-medium md:text-3xl md:font-sans'>All around America.</p>
              <p className='md:pt-8'>On-demand shifts for dental hygienists, assistants, and receptionists.<br></br>Set your own hours, pay and location with Bite.</p>
              <p className='md:pt-8'>Sign up on the waitlist to get updates and information on<br></br>joining Bite as a contracted dental worker.</p>
              <div className='md:flex md:flex-col md:pt-8'>
                <SignUpForm />
              </div>
            </div>
          </div>
        </main>
      </div>

      <div className='mobile'>
        <main className='pl-8 pr-8'>
          <div className='flex justify-center'>
            <Image src='https://versity-images.s3.us-west-2.amazonaws.com/bite-logo-red.png'
              width="150"
              height="50"></Image>
          </div>
          <div>
            <p className='font-semibold text-3xl font-sans pb-2 text-center'>Find the right dental<br></br>shift, right away</p>
            <p className='font-medium text-2xl font-sans pb-4 text-center'>All around America.</p>
          </div>
          <div className='flex justify-center'>
            <Image src="https://versity-images.s3.us-west-2.amazonaws.com/bite-app.png"
              width="350"
              height="400"
            ></Image>
          </div>
          <div className='flex justify-center'>
            <p className='pt-8 pl-2 pr-2 text-center md:w-96'>On-demand shifts for dental hygienists, assistants, and receptionists. Set your own hours, pay and location with Bite.</p>
          </div>
          <div className='flex justify-center'>
            <p className='pt-8 pl-2 pr-2 text-center md:w-96'>Sign up on the waitlist to get updates and information on joining Bite as a contracted dental worker.</p>
          </div>
          <div>
            <SignUpForm />
          </div>
        </main>
      </div>
    </div>

  )
}
