import React from 'react'
import { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)

    const handleNavbar = () => {
        setNavbarOpen(!navbarOpen)
    }
    
    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] p-4 mx-auto text-white'>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>
                React.
            </h1>

            <ul className='hidden md:flex'>
                <li className='p-4'>Home</li>
                <li className='p-4'>Company</li>
                <li className='p-4'>Resources</li>
                <li className='p-4'>About</li>
                <li className='p-4'>Contact</li>
            </ul>

            <div onClick={handleNavbar} className='block md:hidden'>
                {!navbarOpen ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>

            <div className={!navbarOpen ? 'fixed left-0 top-0 w-[30%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>
                    React.
                </h1>
                
                <ul className='uppercase p-2 font-bold text-xl'>
                    <li className='p-4 border-b border-gray-400'>Home</li>
                    <li className='p-4 border-b border-gray-400'>Company</li>
                    <li className='p-4 border-b border-gray-400'>Resources</li>
                    <li className='p-4 border-b border-gray-400'>About</li>
                    <li className='p-4'>Contact</li>
                </ul>
            </div>
        
        </div>
    )
}

export default Navbar;