import Image from 'next/image'
import React from 'react'

function WelcomeBannerDashboard({user}) {
  return (
    <div className='bg-purple-100 rounded-sm p-5 flex gap-5 items-center'>
        <Image src={'/hi-img.png'} 
        alt='hi-img'
        width={150}
        height={150}/>
        <div>
            <h2  className='font-light text-[32px]'>Welcome Back,
                 <span className='font-bold text-purple-700'>{user?.fullName} </span> </h2>
            <h2 className='text-slate-500 font-light text-[16px]'>Let's Begin Learning where you left off,         
                     <br />   Keep it up and improve your progress</h2>
        </div>
    </div>
  )
}

export default WelcomeBannerDashboard