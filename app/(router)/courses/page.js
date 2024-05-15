"use client"
import React from 'react'
import WelcomeBanner from './_components/WelcomeBanner'
import CourseList from './_components/CourseList'

function Courses() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 p-5'>

      {/* left container */}
      <div className='col-span-2'>
      {/* banner */}
      <WelcomeBanner/>

{/* course list */}
<CourseList/>

      </div>
      {/* right container */}
      <div>
       Right Section
      </div>
    </div>
  )
}

export default Courses