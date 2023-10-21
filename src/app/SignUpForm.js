'use client'

import { useId } from 'react'
import React, { useState } from 'react';


// import { Button } from '@/components/Button'

export function SignUpForm() {
    let id = useId()

    const [email, setEmail] = useState('');
    const [position, setPosition] = useState('');
    const [zipcode, setZipcode] = useState('')
    const [message, setMessage] = useState('Join Waitlist');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch('https://sk4f9ec69i.execute-api.us-west-2.amazonaws.com/v1/save_contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, position, zipcode }),
        });

        if (response.ok) {
            setMessage('Thank You')
            console.log('User created successfully');
        } else {
            console.error('Failed to create user');
        }
    };

    if (message === 'Join Waitlist') {
        return (
            // <div>
            //     <form className="relative isolate mt-8 flex items-center pr-1" onSubmit={handleSubmit}>
            //         <label htmlFor={id} className="sr-only">
            //             Email address
            //         </label>
            //         <input
            //             required
            //             type="email"
            //             autoComplete="email"
            //             name="email"
            //             id={id}
            //             placeholder="Email address"
            //             value={email}
            //             onChange={(e) => setEmail(e.target.value)}
            //             className="peer w-0 flex-auto bg-transparent px-4 py-2.5 text-base text-black placeholder:text-gray-500 focus:outline-none sm:text-[0.8125rem]/6"
            //         />
            //         <input
            //             required
            //             type="text"
            //             autoComplete=""
            //             name="position"
            //             id={id}
            //             placeholder="Work Position"
            //             value={position}
            //             onChange={(e) => setPosition(e.target.value)}
            //             className="peer w-0 flex-auto bg-transparent px-4 py-2.5 text-base text-black placeholder:text-gray-500 focus:outline-none sm:text-[0.8125rem]/6"
            //         />
            //         <input
            //             required
            //             type="text"
            //             autoComplete="zipcode"
            //             name="zipcode"
            //             id={id}
            //             placeholder="Zip code"
            //             value={zipcode}
            //             onChange={(e) => setZipcode(e.target.value)}
            //             className="peer w-0 flex-auto bg-transparent px-4 py-2.5 text-base text-black placeholder:text-gray-500 focus:outline-none sm:text-[0.8125rem]/6"
            //         />
            //         <button type="submit" arrow className='p-2 m-2 bg-red-600 text-white font rounded'>
            //             {message}
            //         </button>
            //         <div className="absolute inset-0 -z-10 rounded-lg transition peer-focus:ring-4 peer-focus:ring-sky-300/15" />
            //         <div className="absolute inset-0 -z-10 rounded-lg bg-white/2.5 ring-1 ring-white/15 transition peer-focus:ring-sky-300" />
            //     </form>
            // </div>

            <div className='pb-20'>
            <form className="flex flex-col mt-8 flex items-center pr-1" onSubmit={handleSubmit}>
                <label htmlFor={id} className="sr-only">
                    Email address
                </label>
                <input
                    required
                    type="email"
                    autoComplete="email"
                    name="email"
                    id={id}
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border rounded-lg p-2 m-2 w-10/12 md:w-96"
                />
                <input
                    required
                    type="text"
                    autoComplete=""
                    name="position"
                    id={id}
                    placeholder="Work Position"
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                    className="border rounded-lg p-2 m-2 w-10/12 md:w-96"
                />
                <input
                    required
                    type="text"
                    autoComplete="zipcode"
                    name="zipcode"
                    id={id}
                    placeholder="Zip code"
                    value={zipcode}
                    onChange={(e) => setZipcode(e.target.value)}
                    className="border rounded-lg p-2 m-2 w-10/12 md:w-96"
                />
                <button type="submit" arrow className='p-2 m-2 bg-red-600 text-white font rounded'>
                    {message}
                </button>
            </form>
        </div>
        )
    } else {
        return (
            <div className='pt-4'>
                <p className='text-black'>Thank you, we&apos;ll keep you updated on our launch date!</p>
            </div>
        )
    }
}


