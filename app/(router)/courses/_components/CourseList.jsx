import React, { useEffect, useState } from 'react';
import GlobalApi from '@/app/_utils/GlobalApi';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import CourseItems from './CourseItems';
import Link from 'next/link';
  
function CourseList() {
   
   const [courseList,setcourseList]=useState([]);
    useEffect(() => {
        getAllCourses();
    }, []);

    // fetch course list
    const getAllCourses = () => {
        GlobalApi.getCourseList().then(resp => {
            setcourseList(resp?.courseLists)
        }).catch(error => {
            console.error('Error fetching course list:', error);
        });
    };

    return (
        <div className='p-5 bg-white rounded-lg mt-5'>
            {/* title and filter */}
            <div className='flex items-center justify-between'>
<h2 className='text-[20px] font-bold text-primary'>All Courses</h2>
<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Filter" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">All</SelectItem>
    <SelectItem value="dark">Paid</SelectItem>
    <SelectItem value="system">Free</SelectItem>
  </SelectContent>
</Select>

                </div>
            {/* display course list */}
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
                {courseList?.length>0? courseList.map((item,index)=>(
                  <Link href={'/course-preview/'+item.slug}>
                  <div key={index}>
                       <CourseItems course={item}/>
                        </div>
                        </Link>
                ))
            :
            [1,2,3].map((item,index)=>(
                <div key={index} className='w-full h-[240px] rounded-xl m-2 bg-slate-200 animate-pulse'>
                    </div>
            ))
            }
            </div>
        </div>
    );
}

export default CourseList;
