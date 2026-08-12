"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "./EditInstructorSkill.css";


interface Instructor{

id:number;

name:string;

}



export default function EditInstructorSkillPage({

params

}:{

params:Promise<{id:string}>

}){


const router = useRouter();



const [id,setId] = useState("");



const [instructors,setInstructors] = useState<Instructor[]>([]);



const [instructorId,setInstructorId] = useState("");

const [skill,setSkill] = useState("");







// Get ID

useEffect(()=>{


params.then((value)=>{


setId(value.id);


});


},[params]);







// Get Instructors

useEffect(()=>{


fetch("/api/instructors")

.then(res=>res.json())

.then(data=>setInstructors(data));


},[]);








// Get Existing Skill

useEffect(()=>{


if(!id) return;



fetch(`/api/instructorSkills/${id}`)

.then(res=>res.json())

.then(data=>{


setInstructorId(

String(data.instructorId)

);


setSkill(

data.skill || ""

);



});


},[id]);









const handleSubmit = async(

e:React.FormEvent

)=>{


e.preventDefault();





const res = await fetch(

`/api/instructorSkills/${id}`,

{

method:"PUT",

headers:{

"Content-Type":"application/json"

},


body:JSON.stringify({

instructorId:Number(instructorId),

skill

})


}

);







if(res.ok){


alert(

"Instructor Skill Updated Successfully!"

);



router.push(

"/admin/instructorSkills"

);



}

else{


alert(

"Update Failed"

);



}



};








return(


<div className="edit-instructor-skill-page">



<h1>
Edit Instructor Skill
</h1>






<form onSubmit={handleSubmit}>



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








<label>
Skill
</label>





<input

type="text"

value={skill}

onChange={(e)=>setSkill(e.target.value)}

required

/>








<button type="submit">

Update Skill

</button>





</form>



</div>


);


}