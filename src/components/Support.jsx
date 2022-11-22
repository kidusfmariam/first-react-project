import React from 'react'
import { PhoneIcon, ArrowSmRightIcon } from '@heroicons/react/outline'
import { ChipIcon, SupportIcon } from '@heroicons/react/solid'
import bannerImg from '../assets/support.jpg'
const Support = () => {
  return (
    <div className='w-full h-auto mt-24'>
      <div className='w-full h-[700px] bg-gray-900/70 absolute'>
        <img className='w-full h-full object-cover mix-blend-overlay' src={bannerImg} alt="/" />
      </div>

      <div className='max-w-[1024px] mx-auto text-white relative'>
        <div className='px-4 py-12'>
            <h2 className='text-3xl pt-8 text-slate-300 uppercase text-center'>Support</h2>
            <h3 className='text-5xl font-bold py-6 text-center'>Finding the Right team.</h3>
            <p className='py-4 text-3xl text-slate-300'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, quisquam dolores. Ex assumenda a voluptatum ratione deleniti nam facilis. Illum veniam molestias pariatur obcaecati magni laudantium consequuntur ratione, ex reprehenderit!</p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-3 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
            <div className='bg-zinc-100 rounded-xl shadow-xl '>
                <div className='p-8'>
                    <PhoneIcon className='w-12 p-2 mb-3 rounded-md  bg-[#027373] text-white'/>
                    <h3>Sales</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente aut eligendi hic exercitationem, quia sequi rem?</p>
                </div>
                <div className='flex justify-between bg-zinc-300 p-3 text-[#027373]'>
                    <p>Contact Us</p>
                    <ArrowSmRightIcon className='w-5'/>
                </div>
            </div>

            <div className='bg-zinc-100 rounded-xl shadow-xl '>
                <div className='p-8'>
                    <ChipIcon className='w-12 p-2 mb-3 rounded-md  bg-[#027373] text-white'/>
                    <h3>Consultancy</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente aut eligendi hic exercitationem, quia sequi rem?</p>
                </div>
                <div className='flex justify-between bg-zinc-300 p-3 text-[#027373]'>
                    <p>Learn More</p>
                    <ArrowSmRightIcon className='w-5'/>
                </div>
            </div>

            <div className='bg-zinc-100 rounded-xl shadow-xl '>
                <div className='p-8'>
                    <SupportIcon className='w-12 p-2 mb-3 rounded-md  bg-[#027373] text-white'/>
                    <h3>Support</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente aut eligendi hic exercitationem, quia sequi rem?</p>
                </div>
                <div className='flex justify-between bg-zinc-300 p-3 text-[#027373]'>
                    <p>Find out more</p>
                    <ArrowSmRightIcon className='w-5'/>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Support
