import React from 'react'
import { CloudUploadIcon, PaperAirplaneIcon, DatabaseIcon, ServerIcon } from '@heroicons/react/solid'
import bgImg from '../assets/cloud-hosting.png'
const Hero = () => {
  return (
    <div className='w-full h-auto bg-white flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] mx-auto my-[5rem] px-6 '>
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                <p className='text-2xl'>Unique Sequencing & Production.</p>
                <h1 className='py-3 text-5xl md:text-7xl font-bold text-[#027373]'>Cloud Management</h1>
                <p className='text-2xl font-light py-3'>This is our identity.</p>
                <button className='w-full py-2 md:w-[200px] my-4'>Learn More</button>
            </div>


            <div className=''>
                 <img className='w-full' src={bgImg} alt="cloud-hosting" />
            </div>

            <div className='flex flex-col py-8 md:w-[900px] w-[400px] lg:mx-[20%] mx-auto bg-zinc-100 border border-slate-300 rounded-xl text-center shadow-xl justify-center items-center'>
                <h3>Data Services</h3>
                <div className='flex justify-between flex-wrap px-4'>
                    <p className='flex px-4 py-2 text-slate-500'><CloudUploadIcon className='h-6 text-[#027373]'/> App Security</p>
                    <p className='flex px-4 py-2 text-slate-500'><DatabaseIcon className='h-6 text-[#027373]'/> Dashboard Design</p>
                    <p className='flex px-4 py-2 text-slate-500'><PaperAirplaneIcon className='h-6 text-[#027373]'/> Cloud Data</p>
                    <p className='flex px-4 py-2 text-slate-500'><ServerIcon className='h-6 text-[#027373]'/> API</p>
                </div>
            </div>
        </div>

        
    </div>
  )
}

export default Hero
