"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "./EditModule.css";


interface Course {

id:number;

title:string;

}



export default function EditModulePage({

params

}:{

params:Promise<{id:string}>

}){


const router = useRouter();



const [id,setId] = useState("");

const [courses,setCourses] = useState<Course[]>([]);


const [courseId,setCourseId] = useState("");

const [title,setTitle] = useState("");

const [moduleName,setModuleName] = useState("");

const [hours,setHours] = useState("");

const [image,setImage] = useState("");








// Get ID

useEffect(()=>{


params.then((value)=>{


setId(value.id);


});


},[params]);









// Get Courses

useEffect(()=>{


fetch("/api/courses")

.then(res=>res.json())

.then(data=>setCourses(data));


},[]);









// Get Module Data

useEffect(()=>{


if(!id) return;



fetch(`/api/modules/${id}`)

.then(res=>res.json())

.then(data=>{


setCourseId(
String(data.courseId)
);


setTitle(
data.title || ""
);


setModuleName(
data.moduleName || ""
);


setHours(
data.hours || ""
);


setImage(
data.image || ""
);



});



},[id]);









// Update Module

const handleSubmit = async(

e:React.FormEvent

)=>{


e.preventDefault();



const res = await fetch(

`/api/modules/${id}`,

{

method:"PUT",

headers:{

"Content-Type":"application/json"

},


body:JSON.stringify({

courseId:Number(courseId),

title,

moduleName,

hours,

image


})


}

);





if(res.ok){


alert(
"Module Updated Successfully!"
);



router.push(
"/admin/modules"
);



}

else{


alert(
"Update Failed"
);



}



};









return(


<div className="edit-module-page">



<h1>
Edit Course Module
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

value={moduleName}

onChange={(e)=>setModuleName(e.target.value)}

placeholder="Module name"

/>








<label>
Title
</label>


<input

value={title}

onChange={(e)=>setTitle(e.target.value)}

placeholder="Module title"

/>








<label>
Hours
</label>


<input

value={hours}

onChange={(e)=>setHours(e.target.value)}

placeholder="Module hours"

/>








<label>
Image URL
</label>


<input

value={image}

onChange={(e)=>setImage(e.target.value)}

placeholder="Image URL"

/>






<button type="submit">

Update Module

</button>




</form>




</div>


);


}