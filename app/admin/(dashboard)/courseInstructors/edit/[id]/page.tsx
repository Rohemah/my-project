"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "./EditCourseInstructor.css";


interface Course{

id:number;

title:string;

}



interface Instructor{

id:number;

name:string;

}





export default function EditCourseInstructorPage({

params

}:{

params:Promise<{id:string}>

}){


const router = useRouter();



const [id,setId] = useState("");



const [courses,setCourses] = useState<Course[]>([]);

const [instructors,setInstructors] = useState<Instructor[]>([]);




const [courseId,setCourseId] = useState("");

const [instructorId,setInstructorId] = useState("");








useEffect(()=>{


params.then((value)=>{

setId(value.id);

});


},[params]);









// Load Courses + Instructors

useEffect(()=>{


fetch("/api/courses")

.then(res=>res.json())

.then(data=>setCourses(data));




fetch("/api/instructors")

.then(res=>res.json())

.then(data=>setInstructors(data));



},[]);










// Load Existing Data

useEffect(()=>{


if(!id) return;



fetch(`/api/courseInstructors/${id}`)

.then(res=>res.json())

.then(data=>{


setCourseId(

String(data.courseId)

);



setInstructorId(

String(data.instructorId)

);



});



},[id]);










const handleSubmit = async(

e:React.FormEvent

)=>{


e.preventDefault();





const res = await fetch(

`/api/courseInstructors/${id}`,

{

method:"PUT",

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

"Course Instructor Updated Successfully!"

);



router.push(

"/admin/courseInstructors"

);



}

else{


alert(

"Update Failed"

);



}



};









return(


<div className="edit-course-instructor-page">



<h1>
Edit Course Instructor
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

Update Instructor

</button>




</form>



</div>


);


}