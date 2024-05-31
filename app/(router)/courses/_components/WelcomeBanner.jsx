import Image from 'next/image'
import React from 'react'

function WelcomeBanner() {
  return (
    <div className='flex gap-5 items-center bg-white rounded-xl p-5'>
        <Image src='/panda.png' 
        width={150}
        height={150}/>
        <div>
            <h2  className='font-bold text-[27px]'>Welcome to <span className='text-primary'>Hustlers27</span> </h2>
            <h2 className='text-gray-500 '>Explore, learn and Earn real life projects experiences</h2>
        </div>
    </div>
  )
}

export default WelcomeBanner