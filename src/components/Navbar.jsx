import React, {useState} from 'react'
import {MenuIcon, XIcon} from '@heroicons/react/outline'

const Navbar = () => {
    const[nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav)
    
  return (
    <div className='w-full h-[80px] z-10 bg-zinc-100 fixed drop-shadow-lg'>
        <div className='px-2 flex justify-between items-center w-full h-full'>
            <div className='flex items-center'>
                <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>BRAND.</h1>

                <ul className='hidden md:flex items-center'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Support</li>
                    <li>Platforms</li>
                    <li>Pricing</li>
                </ul>
            </div>
            <div className='hidden md:flex pr-4'>
                <button className='px-6 py-2'>Sign Up</button>
                <button className='border-none bg-transparent text-black ml-4 mr-4'>Sign In</button>
            </div>

            <div className='md:hidden mr-7 '>
                {nav ? <XIcon className='w-7 cursor-pointer' onClick={handleClick}/> : <MenuIcon className='w-7 cursor-pointer' onClick={handleClick} />}
            
            </div>
        </div>
      
        <ul className={`${nav ? 'absolute' : 'hidden'} bg-zinc-200 w-screen px-8`}>
                    <li className='border-b-2 border-zinc-300 w-full text-lg cursor-pointer '>Home</li>
                    <li className='border-b-2 border-zinc-300 w-full text-lg cursor-pointer '>About</li>
                    <li className='border-b-2 border-zinc-300 w-full text-lg cursor-pointer'>Support</li>
                    <li className='border-b-2 border-zinc-300 w-full text-lg cursor-pointer'>Platforms</li>
                    <li className='border-b-2 border-zinc-300 w-full text-lg cursor-pointer mb-2'>Pricing</li>

                    <div className='flex flex-col items-start'>
                    <button className='px-8 py-3 my-2 w-[130px]'>Sign Up</button>
                    <button className='px-8 py-3 bg-[#038C7F] border-[#038C7F] w-[130px] my-2'>Sign In</button>
                
                    </div>
        </ul>
        

    </div>
  )
}

export default Navbar
