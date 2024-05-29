"use client"
import GlobalApi from '@/app/_utils/GlobalApi'
import { useUser } from '@clerk/nextjs'
import React, { useEffect, useState } from 'react'
import CourseVideoDescription from '../../course-preview/[courseId]/_components/CourseVideoDescription';
import CourseContentSection from '../../course-preview/[courseId]/_components/CourseContentSection';
import { toast } from 'sonner';

function WatchCourse({params}) {
const {user}=useUser();
const [courseInfo,setCourseInfo]=useState([]);
const [completedChapter,setCompletedChapter]=useState([]);
const [activeChapterIndex,setActiveChapterIndex]=useState(0);
useEffect(()=>{
  params&&user&&getUserEnrolledCourseDetails();
},[params&&user])
  const getUserEnrolledCourseDetails=()=>{
    GlobalApi.getUserEnrolledCourseDetails(params.enrollId,
     user.primaryEmailAddress.emailAddress)
     .then(resp=>{
      setCompletedChapter(resp.userEnrollCoures[0].completedChapter)
      setCourseInfo(resp.userEnrollCoures[0].courseList)
     })
  }

  const onChapterComplete=(chapterId)=>{
GlobalApi.markChapterCompleted(params.enrollId,chapterId).then(resp=>{
  console.log(resp);
  if(resp){
    toast('Chapter is Marked as Completed!!');
    getUserEnrolledCourseDetails();
  }
})
  }
  return courseInfo.name&&(
    <div>
       <div className='grid grid-cols-1 md:grid-cols-3 p-5 gap-3'>
      {/* Title, Video, Description */}
      <div className='col-span-2 bg-white p-3'>
<CourseVideoDescription courseInfo={courseInfo}
activeChapterIndex={activeChapterIndex}
watchMode={true}
setChapterCompleted={(chapterId)=>onChapterComplete(chapterId)}
/>
      </div>
      {/* Course Content */}
      <div>

<CourseContentSection courseInfo={courseInfo}
isUserAlreadyEnrolled={true}
watchMode={true}
completedChapter={completedChapter}
setActiveChapterIndex={(index)=>setActiveChapterIndex(index)}
/>
      </div>
    </div>
    </div>
  )
}

export default WatchCourse