"use client"
import { useUser } from '@clerk/nextjs'
import React, { useEffect, useState } from 'react'
import SideBanner from '../courses/_components/SideBanner';
import WelcomeBannerDashboard from '../dashboard/_components/WelcomeBannerDashboard';
import InProgressCourseList from '../dashboard/_components/InProgressCourseList';
import GlobalApi from '../../_utils/GlobalApi';

function Dashboard() {
  const {user}=useUser();
const [userEnrolledCourses,setUserEnrolledCourses]=useState([])
useEffect(()=>{
user&&getAllUserEnrolledCourses();
},[user])

/**
 * Get All user Enrolled course List
 */
  const getAllUserEnrolledCourses=()=>{
    GlobalApi.getUserAllEnrolledCourseList(user.primaryEmailAddress.emailAddress).then(resp=>{
      console.log(resp);
      setUserEnrolledCourses(resp.userEnrollCoures);
    })
  }
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 p-5 gap-5'>

      {/* left container */}
      <div className='col-span-3'>
      {/* banner */}
      <WelcomeBannerDashboard user={user}/>
      {/* In Progress Course List */}
      <InProgressCourseList userEnrolledCourses={userEnrolledCourses}/>
      
      </div>
      {/* right container */}
      <div className='p-5 bg-white rounded-xl'>
       <SideBanner/>
      </div>
    </div>
  )
}

export default Dashboard