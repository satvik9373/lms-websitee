"use client"
import React, { useEffect, useState } from 'react'
import CourseVideoDescription from './_components/CourseVideoDescription'
import CourseEnrollSection from './_components/CourseEnrollSection';
import CourseContentSection from './_components/CourseContentSection';
import { useUser } from '@clerk/nextjs';
import GlobalApi from '../../../_utils/GlobalApi';

function CoursePreview({ params }) {

  const { user } = useUser();
  const [courseInfo, setCourseInfo] = useState();
  const [isUserAlreadyEnrolled, setIsUserAlreadyEnrolled] = useState();
  useEffect(() => {
    params && getCourseInfoById();
    console.log(params)
  }, [params])

  useEffect(() => {
    courseInfo && user && checkUserEnrolledToCourse();
  }, [courseInfo, user])
  const getCourseInfoById = () => {
    GlobalApi.getCourseById(params?.courseId).then(resp => {
      setCourseInfo(resp?.courseList);

    })
  }

  /** 
   To check user already enrolled to course 
  */
  const checkUserEnrolledToCourse = () => {
    GlobalApi.checkUserEnrolledToCourse(courseInfo.slug, user.primaryEmailAddress.emailAddress).then(resp => {
      if (resp?.userEnrollCoures[0]?.id) {
        console.log(resp)
        setIsUserAlreadyEnrolled(resp?.userEnrollCoures[0]?.id);
      }
    })
  }
  return courseInfo && (
    <div className='grid grid-cols-1 md:grid-cols-3 p-5 gap-3'>
      {/* Title, Video, Description */}
      <div className='col-span-2 bg-white p-3'>
        <CourseVideoDescription courseInfo={courseInfo} />
      </div>
      {/* Course Content */}
      <div>
        <CourseEnrollSection courseInfo={courseInfo}
          isUserAlreadyEnrolled={isUserAlreadyEnrolled}
        />

        <CourseContentSection courseInfo={courseInfo}
          isUserAlreadyEnrolled={isUserAlreadyEnrolled} s
        />
      </div>
    </div>
  )
}

export default CoursePreview