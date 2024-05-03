import React from 'react';
import { ReactTyped } from 'react-typed';

const Hero = () => {
    return (
        <div className='text-white'>
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center md:text-3xl sm:text-2xl text-large'>
                <p className='uppercase text-[#00df9a] font-bold p-1'>Lorem ipsum in non</p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Etiam justo felis</h1>
                <div className='flex justify-center items-center'>
                    <p className='md:text-5xl sm:text-4xl text-xl font-bold'>Morbi non leo </p>
                    <ReactTyped 
                        className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
                        strings={['dignissim', 'suspendisse', 'commodo', 'mauris']} 
                        typeSpeed={180} 
                        backSpeed={120} 
                        loop
                    />
                </div>
                <p className='md:text-2xl sm:text-xl text-large font-bold text-gray-500 mt-6 mx-8'> Morbi quis diam sed odio tristique viverra nec et ex. Nullam cursus sem ante, et iaculis lacus ullamcorper vel. </p>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-2 text-black'>Get Started</button>
            </div>
        </div>
    )
}

export default Hero;
