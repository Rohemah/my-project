"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "./CreateCourseFeature.css";


interface Course {
  id:number;
  title:string;
}


export default function CreateCourseFeaturePage(){

  const router = useRouter();


  const [courses,setCourses] = useState<Course[]>([]);

  const [courseId,setCourseId] = useState("");

  const [feature,setFeature] = useState("");



  useEffect(()=>{

    fetch("/api/courses")
    .then(res=>res.json())
    .then(data=>setCourses(data));

  },[]);



  const handleSubmit = async(e:React.FormEvent)=>{

    e.preventDefault();


    const res = await fetch("/api/courseFeatures",{

      method:"POST",

      headers:{
        "Content-Type":"application/json"
      },

      body:JSON.stringify({

        courseId:Number(courseId),

        feature

      })

    });



    if(res.ok){

      alert("Course Feature Created Successfully!");

      router.push("/admin/courseFeatures");

    }
    else{

      alert("Something went wrong");

    }


  };



  return (

    <div className="create-feature-page">


      <h1>
        Add Course Feature
      </h1>



      <form onSubmit={handleSubmit}>


        <label>
          Select Course
        </label>


        <select

          value={courseId}

          onChange={(e)=>setCourseId(e.target.value)}

          required

        >

          <option value="">
            Select Course
          </option>


          {
            courses.map((course)=>(

              <option
              key={course.id}
              value={course.id}
              >

                {course.title}

              </option>

            ))
          }


        </select>



        <label>
          Feature
        </label>


        <textarea

          value={feature}

          onChange={(e)=>setFeature(e.target.value)}

          placeholder="Enter course feature"

          rows={5}

          required

        />



        <button type="submit">

          Save Feature

        </button>



      </form>


    </div>

  );


}