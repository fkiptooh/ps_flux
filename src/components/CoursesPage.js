import React,{useEffect, useState} from "react";
import courseStore from "../stores/courseStore";
// import { getCourses } from "../api/courseApi";
import CourseList from "./CourseList";
import { Link } from 'react-router-dom';
import {loadCourses, deleteCourse} from "../action/courseAction";

function CoursesPage(){
    const [courses, setCourses] = useState(courseStore.getCourses());

    useEffect( () => {
        courseStore.addChangeListener(onChange);
        if(courseStore.getCourses.length === 0 ) loadCourses();
        return ()=> courseStore.removeChangeListener(onChange);
        
    }, []);

    function onChange(){
        setCourses(courseStore.getCourses());
    }

    return (
        <>
        <h1>Courses Page</h1>
        <Link className="btn btn-primary" to="/course" >Add Course</Link> <br></br>
        <CourseList courses={courses} deleteCourse={deleteCourse}/>
        </>
        );
    }
export default CoursesPage;