"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "./EditInstructor.css";



export default function EditInstructorPage({

params

}:{

params:Promise<{id:string}>

}){


const router = useRouter();



const [id,setId] = useState("");



const [name,setName] = useState("");

const [role,setRole] = useState("");

const [students,setStudents] = useState("");

const [description,setDescription] = useState("");

const [image,setImage] = useState("");









useEffect(()=>{


params.then((value)=>{


setId(value.id);


});


},[params]);









// GET SINGLE INSTRUCTOR


useEffect(()=>{


if(!id) return;



fetch(`/api/instructors/${id}`)

.then(res=>res.json())

.then(data=>{


setName(data.name || "");

setRole(data.role || "");

setStudents(data.students || "");

setDescription(data.description || "");

setImage(data.image || "");



});



},[id]);










const handleSubmit = async(

e:React.FormEvent

)=>{


e.preventDefault();






const res = await fetch(

`/api/instructors/${id}`,

{

method:"PUT",

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

"Instructor Updated Successfully!"

);



router.push(

"/admin/instructors"

);



}

else{


alert(

"Update Failed"

);



}



};








return(


<div className="edit-instructor-page">



<h1>
Edit Instructor
</h1>





<form onSubmit={handleSubmit}>



<label>
Name
</label>


<input

type="text"

value={name}

onChange={(e)=>setName(e.target.value)}

required

/>







<label>
Role
</label>


<input

type="text"

value={role}

onChange={(e)=>setRole(e.target.value)}

/>







<label>
Students
</label>


<input

type="text"

value={students}

onChange={(e)=>setStudents(e.target.value)}

/>







<label>
Description
</label>



<textarea

rows={6}

value={description}

onChange={(e)=>setDescription(e.target.value)}

/>







<label>
Image URL
</label>



<input

type="text"

value={image}

onChange={(e)=>setImage(e.target.value)}

/>








<button type="submit">

Update Instructor

</button>




</form>



</div>


);


}