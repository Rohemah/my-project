"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "./EditCourseHighlightInfo.css";


interface Course {

  id:number;
  title:string;

}



export default function EditCourseHighlightInfoPage({

params,

}:{

params:Promise<{id:string}>

}){


const router = useRouter();


const [id,setId] = useState("");

const [courses,setCourses] = useState<Course[]>([]);


const [courseId,setCourseId] = useState("");

const [title,setTitle] = useState("");

const [description,setDescription] = useState("");

const [footer,setFooter] = useState("");





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






// Load Existing Data

useEffect(()=>{


if(!id) return;



fetch(`/api/courseHighlightInfo/${id}`)

.then(res=>res.json())

.then(data=>{


setCourseId(String(data.courseId));

setTitle(data.title || "");

setDescription(data.description || "");

setFooter(data.footer || "");


});


},[id]);








const handleSubmit = async(
e:React.FormEvent
)=>{


e.preventDefault();



const res = await fetch(

`/api/courseHighlightInfo/${id}`,

{

method:"PUT",

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
"Highlight Info Updated Successfully!"
);


router.push(
"/admin/courseHighlightInfo"
);


}
else{


alert(
"Update Failed"
);


}



};






return(


<div className="edit-highlight-page">


<h1>
Edit Course Highlight Info
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

required

/>






<label>
Description
</label>


<textarea

value={description}

onChange={(e)=>setDescription(e.target.value)}

rows={6}

required

/>





<label>
Footer
</label>


<textarea

value={footer}

onChange={(e)=>setFooter(e.target.value)}

rows={4}

required

/>






<button type="submit">

Update Highlight Info

</button>



</form>



</div>


);


}