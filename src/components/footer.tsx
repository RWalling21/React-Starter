import React from 'react'

const Footer = () => {
  return (
    <div className='text-white w-full py-8 px-4'>
        <div className='wax-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 my-4'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Phasellus vestibulum in massa</h1>
                <p> Donec congue magna sed rhoncus euismod. </p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input className='p-3 flex w-full rounded-md text-black' type="email" placeholder='Enter Email' />
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-2 text-black sm:ml-4'>Contact Me</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;
