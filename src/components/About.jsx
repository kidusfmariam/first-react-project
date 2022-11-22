import React from 'react'

const About = () => {
  return (
    <div className='w-full my-20 '>
      <div className=' max-w-[1024px] mx-auto'>
        <div className='text-center'>
        <h2 className='text-5xl font-bold'>Trusted by developers across the world.</h2>
        <p className='text-3xl py-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum optio minima magnam velit quam ratione maxime voluptas eos accusantium sit.</p>
        </div>



        <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
        <div className='border py-8 rounded-xl shadow-xl my-4'>
            <p className='text-6xl font-bold text-[#027373] mb-2'>100%</p>
            <p className='text-gray-400'>Completion</p>
        </div>

        <div className='border py-8 rounded-xl shadow-xl my-4'>
            <p className='text-6xl font-bold text-[#027373] mb-2'>24/7</p>
            <p className='text-gray-400'>Support</p>
        </div>

        <div className='border py-8 rounded-xl shadow-xl my-4'>
            <p className='text-6xl font-bold text-[#027373] mb-2'>100K+</p>
            <p className='text-gray-400'>Transactions</p>
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default About
