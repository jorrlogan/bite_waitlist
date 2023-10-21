'use client'

import Head from 'next/head'
import Image from 'next/image'
import { SignUpForm } from './SignUpForm'

export default function Home() {
  return (
    // <div>
    //   <Head>
    //     <title>My page title</title>
    //     <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    //   </Head>
    //   <main className="flex h-screen flex-col pl-64 pr-32 pt-8">
    //     <div className='flex justify-start items-center h-5/6'>
    //       <div className='basis-1/2 flex justify-end pr-36'>
    //         <Image src="https://versity-images.s3.us-west-2.amazonaws.com/bite-app.png"
    //           width="350"
    //           height="400"
    //         ></Image>
    //       </div>
    //       <div>
    //         <Image src='https://versity-images.s3.us-west-2.amazonaws.com/bite-logo-red.png'
    //           width="180"
    //           height="100"></Image>
    //         <p className='font-semibold text-6xl font-sans pb-2'>Find the right dental<br></br>shift, right away</p>
    //         <p className='font-medium text-3xl font-sans'>All around America.</p>
    //         <p className='pt-8'>On-demand shifts for dental hygienists, assistants, and receptionists.<br></br>Set your own hours, pay and location with Bite.</p>
    //         <div className='flex flex-col pt-8'>
    //           <SignUpForm />
    //         </div>
    //       </div>
    //     </div>
    //   </main>
    // </div>

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
      <div>
        <p className='pt-8 text-center'>On-demand shifts for dental hygienists, assistants, and receptionists.<br></br>Set your own hours, pay and location with Bite.</p>
      </div>
      <div>
        <SignUpForm />
      </div>
    </main>

    // <main className="flex h-screen flex-col pl-64 pr-32 pt-8">
    //   <div className='flex justify-start items-center h-5/6'>
    //     <div className='basis-1/2 flex justify-end pr-36'>
    //       <Image src="https://versity-images.s3.us-west-2.amazonaws.com/bite-app.png"
    //         width="350"
    //         height="400"
    //       ></Image>
    //     </div>
    //     <div>
    //       <Image src='https://versity-images.s3.us-west-2.amazonaws.com/bite-logo-red.png'
    //         width="180"
    //         height="100"></Image>
    //       <p className='font-semibold text-6xl font-sans pb-2'>Find the right dental<br></br>shift, right away</p>
    //       <p className='font-medium text-3xl font-sans'>All around America.</p>
    //       <p className='pt-8'>On-demand shifts for dental hygienists, assistants, and receptionists.<br></br>Set your own hours, pay and location with Bite.</p>
    //       <div className='flex flex-col pt-8'>
    //         <SignUpForm />
    //       </div>
    //     </div>
    //   </div>
    // </main>
  )
}
