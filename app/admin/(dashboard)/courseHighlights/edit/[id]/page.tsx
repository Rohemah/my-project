"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "./EditCourseHighlight.css";


interface Course {

  id:number;

  title:string;

}



export default function EditCourseHighlightPage({

params,

}:{

params:Promise<{id:string}>

}){


const router = useRouter();



const [id,setId] = useState("");

const [courses,setCourses] = useState<Course[]>([]);


const [courseId,setCourseId] = useState("");

const [highlight,setHighlight] = useState("");





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








// Get Existing Highlight

useEffect(()=>{


if(!id) return;



fetch(`/api/courseHighlights/${id}`)

.then(res=>res.json())

.then(data=>{


setCourseId(
String(data.courseId)
);


setHighlight(
data.highlight
);


});


},[id]);









// Update

const handleSubmit = async(
e:React.FormEvent
)=>{


e.preventDefault();



const res = await fetch(

`/api/courseHighlights/${id}`,

{

method:"PUT",

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
"Course Highlight Updated Successfully!"
);



router.push(
"/admin/courseHighlights"
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
Edit Course Highlight
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

rows={5}

required

/>






<button type="submit">

Update Highlight

</button>




</form>




</div>


);


}