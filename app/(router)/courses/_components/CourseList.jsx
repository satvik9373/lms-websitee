import React, { useEffect } from 'react';
import GlobalApi from '@/app/_utils/GlobalApi';

function CourseList() {
    useEffect(() => {
        getAllCourses();
    }, []);

    // fetch course list
    const getAllCourses = () => {
        GlobalApi.getCourseList().then(resp => {
            console.log(resp);
        }).catch(error => {
            console.error('Error fetching course list:', error);
        });
    };

    return (
        <div>CourseList</div>
    );
}

export default CourseList;
