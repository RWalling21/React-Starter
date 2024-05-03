import React from 'react';
import { ReactTyped } from 'react-typed';

const Hero = () => {
    return (
        <div className='text-white'>
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center md:text-3xl sm:text-2xl text-large'>
                <p className='uppercase text-[#00df9a] font-bold p-1'>Lorem ipsum in non</p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-4'>Etiam justo felis</h1>
                <div className='flex justify-center items-center'>
                    <p className='md:text-5xl sm:text-4xl text-xl font-bold'>Morbi non leo </p>
                    <ReactTyped 
                        className='md:text-5xl sm:text-4xl text-xl font-bold pl-2'
                        strings={['dignissim', 'suspendisse', 'commodo', 'mauris']} 
                        typeSpeed={120} 
                        backSpeed={100} 
                        loop
                    />
                </div>
            </div>
        </div>
    )
}

export default Hero;
