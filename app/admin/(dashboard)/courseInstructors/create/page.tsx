"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "./CreateCourseInstructor.css";


interface Course{

id:number;

title:string;

}



interface Instructor{

id:number;

name:string;

}





export default function CreateCourseInstructorPage(){


const router = useRouter();



const [courses,setCourses] = useState<Course[]>([]);


const [instructors,setInstructors] = useState<Instructor[]>([]);



const [courseId,setCourseId] = useState("");

const [instructorId,setInstructorId] = useState("");







useEffect(()=>{


fetch("/api/courses")

.then(res=>res.json())

.then(data=>setCourses(data));





fetch("/api/instructors")

.then(res=>res.json())

.then(data=>setInstructors(data));



},[]);










const handleSubmit = async(

e:React.FormEvent

)=>{


e.preventDefault();





const res = await fetch(

"/api/courseInstructors",

{

method:"POST",

headers:{

"Content-Type":"application/json"

},


body:JSON.stringify({

courseId:Number(courseId),

instructorId:Number(instructorId)

})


}

);







if(res.ok){


alert(
"Course Instructor Added Successfully!"
);



router.push(
"/admin/courseInstructors"
);



}

else{


const error = await res.json();


console.log(error);


alert(

error.error || "Something went wrong"

);



}



};








return(


<div className="create-course-instructor-page">



<h1>
Add Course Instructor
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
Select Instructor
</label>




<select

value={instructorId}

onChange={(e)=>setInstructorId(e.target.value)}

required

>


<option value="">

Select Instructor

</option>




{

instructors.map((instructor)=>(


<option

key={instructor.id}

value={instructor.id}

>

{instructor.name}

</option>


))


}



</select>







<button type="submit">

Save Instructor

</button>



</form>



</div>


);


}