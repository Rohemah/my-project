"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "./CreateInstructorSkill.css";


interface Instructor{

id:number;

name:string;

}



export default function CreateInstructorSkillPage(){


const router = useRouter();



const [instructors,setInstructors] = useState<Instructor[]>([]);


const [instructorId,setInstructorId] = useState("");

const [skill,setSkill] = useState("");






useEffect(()=>{


fetch("/api/instructors")

.then(res=>res.json())

.then(data=>setInstructors(data));


},[]);









const handleSubmit = async(

e:React.FormEvent

)=>{


e.preventDefault();





const res = await fetch(

"/api/instructorSkills",

{

method:"POST",

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

"Instructor Skill Added Successfully!"

);



router.push(

"/admin/instructorSkills"

);



}

else{


const error = await res.json();


alert(

error.error || "Something went wrong"

);



}



};









return(


<div className="create-instructor-skill-page">



<h1>
Add Instructor Skill
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

placeholder="Enter skill"

required

/>









<button type="submit">

Save Skill

</button>





</form>



</div>


);


}