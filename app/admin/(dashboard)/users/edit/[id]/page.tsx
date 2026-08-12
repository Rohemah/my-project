"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import "../../User.css";


export default function EditUser(){


const params = useParams();

const router = useRouter();


const id = params.id;





const [form,setForm] = useState({

fullName:"",

email:"",

password:"",

role:""

});








useEffect(()=>{


async function getUser(){



const res = await fetch(`/api/users/${id}`);


const data = await res.json();





setForm({

fullName:data.fullName || "",

email:data.email || "",

password:"",

role:data.role || "STUDENT"


});



}





if(id){

getUser();

}


},[id]);









function handleChange(e:any){


setForm({

...form,

[e.target.name]:e.target.value

});


}









async function updateUser(e:any){


e.preventDefault();






const res = await fetch(`/api/users/${id}`,{


method:"PUT",


headers:{


"Content-Type":"application/json"

},


body:JSON.stringify({

fullName:form.fullName,

email:form.email,

password:form.password,

role:form.role


})


});








if(res.ok){


alert("User Updated");


router.push("/admin/users");


}



}









return (



<div className="edit-page">



<div className="edit-card">



<h1>

Edit User

</h1>







<form

className="edit-form"

onSubmit={updateUser}

>







<input


type="text"

name="fullName"

placeholder="Full Name"

value={form.fullName}

onChange={handleChange}

required

/>









<input


type="email"

name="email"

placeholder="Email"

value={form.email}

onChange={handleChange}

required

/>









<input


type="password"

name="password"

placeholder="New Password (optional)"

value={form.password}

onChange={handleChange}

/>









<select


name="role"

value={form.role}

onChange={handleChange}

>


<option value="STUDENT">

Student

</option>




<option value="ADMIN">

Admin

</option>




<option value="INSTRUCTOR">

Instructor

</option>



</select>








<button

className="update-btn"

>

Update User

</button>







</form>





</div>



</div>


)


}