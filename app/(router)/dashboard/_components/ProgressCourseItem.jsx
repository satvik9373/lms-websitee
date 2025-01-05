
import { Progress } from "@nextui-org/progress";
import Image from 'next/image'
import Link from "next/link";
import React from 'react'

function ProgressCourseItem({ course }) {

  const getTotalCompletedChapterPercentage = (item) => {
    // percentage = (totalCompletedChapter/totalChapter)*100
    const percentage = (item.completedChapter?.length / item?.courseList?.chapter?.length) * 100
    return percentage
  }
  return (
    <Link href={"/course-preview/"+course?.courseList?.slug}>
      <div className='border rounded-xl
    hover:shadow-md cursor-pointer hover:shadow-purple-300'>
        <Image src={course.courseList?.banner?.url}
          width={500}
          height={150}
          alt='banner'
          className='rounded-t-xl'
        />
        <div className='flex flex-col gap-1 p-2'>
          <h2 className='font-medium'>{course.courseList?.name}</h2>
          <h2 className='text-[13px] text-gray-400 '>{course.courseList?.author}</h2>
          <h2 className='text-[12px] text-gray-400 mt-3'>{getTotalCompletedChapterPercentage(course)}% Completed
            <span className='float-right'>{course.completedChapter?.length}/{course?.courseList?.chapter?.length} Chapters</span></h2>
          <Progress className="h-[7px]" value={getTotalCompletedChapterPercentage(course)} />
        </div>
      </div>
      </Link>
      )
}

      export default ProgressCourseItem