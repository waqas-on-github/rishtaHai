'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import UserForm from './userForm';


type imageType = string[]

const images: imageType = [
    '/image1.jpg',
    '/image2.jpg',
    '/image3.jpg',
    '/image4.jpg',
    '/image5.jpg'
];

const message = `RishtaHai platform is dedicated to helping individuals connect with compatible partners and make it easier to Meet and Interact with Them. Start Your Search Today Because `;
const qoute = `"Yahi'n Aap Ka RishtaHai"`




export function Hero() {


    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);




    return (
        <div className="relative h-screen overflow-hidden">
            {/* Background images */}
            {images && images?.map((image, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
                >
                    <Image
                        src={image}
                        alt={`Background ${index + 1}`}
                        layout="fill"
                        objectFit="cover"
                        className="animate-zoom"
                    />
                </div>
            ))}




            <div className="relative z-10 flex flex-col items-center justify-center md:justify-center h-full text-center lg:px-8 bg-black bg-opacity-40  ">
                {/* Content overlay */}



                <div className=' flex flex- gap-32  flex-col items-center justify-around  ' >
                    {/* lefte secion  */}

                    <div className=' flex flex-col items-center lg:gap-16 gap-2 '>

                        <h1 className="scroll-m-20 md:text-4xl text-2xl font-extrabold text-white/90  lg:text-6xl tracking-wider">
                            Your <span className='text-primary'> perfect</span> match await&apos;s here!
                        </h1>

                        <div className='flex flex-col items-center gap-6' >
                            <blockquote className="lg:w-[50%] hidden md:block  w-[70%] border-primary md:text-xl md:leading-10 tracking-wide  text-white  md:border-l-2 pl-6 italic">
                            {message}
                        </blockquote>
                            <blockquote className='text-primary tmd:ext-2xl text-xl hidden md:block '>
                            {qoute}
                        </blockquote>
                    </div>
                    </div>


                    {/* form section  */}
                    <div className='bg-[#47a6d3]/30 md:p-6   w-full lg:w-[80%] p-2  '>
                        <UserForm />
                    </div>
                </div>




            </div>
        </div>
    );
}
