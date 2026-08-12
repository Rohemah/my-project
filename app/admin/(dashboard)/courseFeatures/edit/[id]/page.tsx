"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "./EditCourseFeature.css";


interface Course {

  id:number;
  title:string;

}


export default function EditCourseFeaturePage({
  params,
}:{
  params: Promise<{id:string}>
}){


  const router = useRouter();


  const [id,setId] = useState("");

  const [courses,setCourses] = useState<Course[]>([]);

  const [courseId,setCourseId] = useState("");

  const [feature,setFeature] = useState("");



  // Get ID

  useEffect(()=>{

    params.then((value)=>{

      setId(value.id);

    });

  },[params]);




  // Load Courses

  useEffect(()=>{


    fetch("/api/courses")

    .then(res=>res.json())

    .then(data=>setCourses(data));


  },[]);





  // Load Existing Feature

  useEffect(()=>{


    if(!id) return;


    fetch(`/api/courseFeatures/${id}`)

    .then(res=>res.json())

    .then(data=>{


      setCourseId(String(data.courseId));

      setFeature(data.feature);


    });



  },[id]);






  const handleSubmit = async(
    e:React.FormEvent
  )=>{


    e.preventDefault();



    const res = await fetch(
      `/api/courseFeatures/${id}`,
      {

        method:"PUT",

        headers:{
          "Content-Type":"application/json"
        },

        body:JSON.stringify({

          courseId:Number(courseId),

          feature

        })

      }
    );



    if(res.ok){

      alert(
        "Course Feature Updated Successfully!"
      );

      router.push(
        "/admin/courseFeatures"
      );

    }
    else{

      alert("Update failed");

    }


  };





return(

<div className="edit-feature-page">


<h1>
Edit Course Feature
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

rows={5}

required

/>





<button type="submit">

Update Feature

</button>



</form>


</div>

);


}