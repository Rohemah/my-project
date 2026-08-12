"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "./CreateCourseHighlight.css";


interface Course {

  id:number;

  title:string;

}



export default function CreateCourseHighlightPage(){


const router = useRouter();



const [courses,setCourses] = useState<Course[]>([]);


const [courseId,setCourseId] = useState("");

const [highlight,setHighlight] = useState("");





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

"/api/courseHighlights",

{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify({

courseId:Number(courseId),

highlight

})


}

);




if(res.ok){


alert(
"Course Highlight Created Successfully!"
);


router.push(
"/admin/courseHighlights"
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
Add Course Highlight
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
Highlight
</label>


<textarea

value={highlight}

onChange={(e)=>setHighlight(e.target.value)}

placeholder="Enter course highlight"

rows={5}

required

/>





<button type="submit">

Save Highlight

</button>



</form>



</div>


);


}