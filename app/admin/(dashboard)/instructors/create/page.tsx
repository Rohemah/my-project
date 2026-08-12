"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import "./CreateInstructor.css";


export default function CreateInstructorPage(){


const router = useRouter();



const [name,setName] = useState("");

const [role,setRole] = useState("");

const [students,setStudents] = useState("");

const [description,setDescription] = useState("");

const [image,setImage] = useState("");







const handleSubmit = async(

e:React.FormEvent

)=>{


e.preventDefault();





const res = await fetch(

"/api/instructors",

{

method:"POST",

headers:{

"Content-Type":"application/json"

},


body:JSON.stringify({

name,

role,

students,

description,

image

})


}

);








if(res.ok){


alert(

"Instructor Created Successfully!"

);



router.push(

"/admin/instructors"

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


<div className="create-instructor-page">



<h1>
Add Instructor
</h1>





<form onSubmit={handleSubmit}>


<label>
Name
</label>



<input

type="text"

value={name}

onChange={(e)=>setName(e.target.value)}

placeholder="Enter instructor name"

required

/>







<label>
Role
</label>




<input

type="text"

value={role}

onChange={(e)=>setRole(e.target.value)}

placeholder="Example: Senior Developer"

/>







<label>
Students
</label>




<input

type="text"

value={students}

onChange={(e)=>setStudents(e.target.value)}

placeholder="Example: 5000+"

/>








<label>
Description
</label>




<textarea

rows={6}

value={description}

onChange={(e)=>setDescription(e.target.value)}

placeholder="Enter instructor description"

/>








<label>
Image URL
</label>




<input

type="text"

value={image}

onChange={(e)=>setImage(e.target.value)}

placeholder="https://image-url.com"

/>









<button type="submit">

Save Instructor

</button>




</form>



</div>


);


}