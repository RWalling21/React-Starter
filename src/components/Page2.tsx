import React from 'react';
import Img from '../assets/laptop.jpg';

const Page2 = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='maxw-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={Img} alt="example image" />
            <div className='flex flex-col justify-center'>
              <p className='text-[#00df9a] uppercase font-bold md:text-xl text-large'>Curabitur vitae aliquam</p>
              <h1 className='md:text4-xl sm:text3-xl text-2xl font-bold py-2'>Donec feugiat tincidunt</h1>
              <p className=''>
                Phasellus tincidunt sem sapien, in aliquet orci fermentum nec. Donec tempor sagittis lacus eu sodales. Curabitur pulvinar eros magna, 
                vitae faucibus urna imperdiet non. Curabitur lobortis, odio non hendrerit aliquet, sapien quam ullamcorper lorem, vel placerat ipsum turpis 
                vestibulum turpis. Ut blandit laoreet ligula, a molestie justo gravida ac.
              </p>
              <button className='bg-black w-[200px] rounded-md font-medium my-6 py-2 text-[#00df9a] md:mx-0 mx-auto'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Page2