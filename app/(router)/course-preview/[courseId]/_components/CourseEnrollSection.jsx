"use client"
import GlobalApi from './../../../../../app/_utils/GlobalApi';
import { Button } from './../../../../../components/ui/button'
import { useUser } from '@clerk/nextjs';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast } from "sonner"
import React, { useEffect } from 'react'

function CourseEnrollSection({courseInfo,isUserAlreadyEnrolled}) {
    const membership=true;
    const {user}=useUser();


    const router=useRouter();

    useEffect(()=>{
console.log("isUserAlreadyEnrolled",isUserAlreadyEnrolled)
    },[])
    // enroll to the course 
    const onEnrollCourse=()=>{
      GlobalApi.enrollToCourse(courseInfo?.slug,user?.primaryEmailAddress?.emailAddress).then(resp=>{
        console.log(resp);
        if(resp)
          {
             // show toast message on succesfull enrollment
             toast("User Enrolled Succesfull", {
              description: "User Enrolled to this Course",
            })
            // redirect to watch course page
            router.push('/watch-course/'+resp.createUserEnrollCoure.id)
          }
      })
    }
  return (
    <div className='p-3 text-center rounded-sm bg-primary'>
       
        <h2 className='text-[22px] font-bold text-white'>Enroll to the Course</h2>
       {/* user has Membership amd already login */}
       {user&&(membership||courseInfo.free)&&!isUserAlreadyEnrolled?<div className='flex flex-col gap-3 mt-3'>
        <h2 className='text-white font-light'>Enroll Now to Start Learning and Earning</h2>
        <Button className='bg-white text-primary hover:bg-white hover:text-primary'
        onClick={()=>onEnrollCourse()}
        >Enroll Now</Button>
        </div>
      
      :!user?
      <div className='flex flex-col gap-3 mt-3'>
        <h2 className='text-white font-light'>Enroll Now to Start Learning and Earning</h2>
      <Link href={'/sign-in'}><Button className='bg-white text-primary hover:bg-white hover:text-primary'>Enroll Now</Button></Link>  
        </div>

        : !isUserAlreadyEnrolled&&<div  className='flex flex-col gap-3 mt-3'>
  <h2 className='text-white font-light'>Buy Our MemberShip and Get Access to All Courses</h2>
        <Button className='bg-white text-primary hover:bg-white hover:text-primary'>Buy Mebership Now</Button>
        </div>}
   
       {isUserAlreadyEnrolled&& <div  className='flex flex-col gap-3 mt-3'>
  <h2 className='text-white font-light'>Continue Your Journey of Learning</h2>
       <Link href={'/watch-course/'+isUserAlreadyEnrolled}> <Button className='bg-white text-primary hover:bg-white hover:text-primary'>Continue</Button></Link>
        </div>}
    </div>
  )
}

export default CourseEnrollSection