"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "./CreateCourseHighlightInfo.css";


interface Course {

  id:number;

  title:string;

}



export default function CreateCourseHighlightInfoPage(){


  const router = useRouter();



  const [courses,setCourses] = useState<Course[]>([]);


  const [courseId,setCourseId] = useState("");

  const [title,setTitle] = useState("");

  const [description,setDescription] = useState("");

  const [footer,setFooter] = useState("");




  useEffect(()=>{


    fetch("/api/courses")

    .then(res=>res.json())

    .then(data=>setCourses(data));


  },[]);






  const handleSubmit = async(
    e:React.FormEvent
  )=>{


    e.preventDefault();



    const res = await fetch(
      "/api/courseHighlightInfo",
      {

        method:"POST",

        headers:{

          "Content-Type":"application/json"

        },


        body:JSON.stringify({

          courseId:Number(courseId),

          title,

          description,

          footer

        })


      }
    );




    if(res.ok){


      alert(
        "Course Highlight Info Created Successfully!"
      );


      router.push(
        "/admin/courseHighlightInfo"
      );


    }
    else{


      alert(
        "Something went wrong"
      );


    }


  };





return(


<div className="create-highlight-page">



<h1>
Add Course Highlight Info
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
Title
</label>


<input

type="text"

value={title}

onChange={(e)=>setTitle(e.target.value)}

placeholder="Enter title"

required

/>





<label>
Description
</label>


<textarea

value={description}

onChange={(e)=>setDescription(e.target.value)}

placeholder="Enter description"

rows={6}

required

/>





<label>
Footer
</label>


<textarea

value={footer}

onChange={(e)=>setFooter(e.target.value)}

placeholder="Enter footer text"

rows={4}

required

/>






<button type="submit">

Save Highlight Info

</button>



</form>



</div>


);


}