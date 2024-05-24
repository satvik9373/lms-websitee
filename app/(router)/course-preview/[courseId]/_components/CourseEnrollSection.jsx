import { Button } from '@/components/ui/button'
import React from 'react'

function CourseEnrollSection() {
    const membership=false;
  return (
    <div className='p-3 text-center rounded-sm bg-primary flex flex-col gap-3'>
       
        <h2 className='text-[22px] font-bold text-white'>Enroll to the Course</h2>
       {/* user has Membership amd already login */}
       {membership?<div>
        <h2 className='text-white font-light'>Enroll Now to Start Learning and Earning</h2>
        <Button className='bg-white text-primary hover:bg-white hover:text-primary'>Enroll Now</Button>
        </div>
       
        :<div>
  <h2 className='text-white font-light'>Buy Our MemberShip and Get Access to All Courses</h2>
        <Button className='bg-white text-primary hover:bg-white hover:text-primary'>Buy MemberShip at </Button>
        </div>}
    </div>
  )
}

export default CourseEnrollSection