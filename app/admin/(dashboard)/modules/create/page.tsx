"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "./CreateModule.css";


interface Course {

  id:number;

  title:string;

}



export default function CreateModulePage(){


const router = useRouter();



const [courses,setCourses] = useState<Course[]>([]);



const [courseId,setCourseId] = useState("");

const [moduleName,setModuleName] = useState("");

const [hours,setHours] = useState("");

const [title,setTitle] = useState("");

const [image,setImage] = useState("");





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

"/api/modules",

{

method:"POST",

headers:{

"Content-Type":"application/json"

},


body:JSON.stringify({

courseId:Number(courseId),

moduleName,

hours,

title,

image

})


}

);




if(res.ok){


alert(
"Module Created Successfully!"
);



router.push(
"/admin/modules"
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


<div className="create-module-page">


<h1>
Add Course Module
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
Module Name
</label>



<input

type="text"

value={moduleName}

onChange={(e)=>setModuleName(e.target.value)}

placeholder="Enter module name"

required

/>






<label>
Hours
</label>



<input

type="text"

value={hours}

onChange={(e)=>setHours(e.target.value)}

placeholder="Example: 5 Hours"

/>







<label>
Title
</label>



<input

type="text"

value={title}

onChange={(e)=>setTitle(e.target.value)}

placeholder="Enter module title"

/>







<label>
Image URL
</label>



<input

type="text"

value={image}

onChange={(e)=>setImage(e.target.value)}

placeholder="Enter image URL"

/>






<button type="submit">

Save Module

</button>



</form>


</div>


);


}