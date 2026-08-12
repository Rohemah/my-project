"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import "../User.css";


export default function CreateUser(){


const router = useRouter();



const [form,setForm] = useState({

fullName:"",

email:"",

password:"",

role:"STUDENT"

});








function handleChange(e:any){


setForm({

...form,

[e.target.name]:e.target.value

});


}








async function createUser(e:any){


e.preventDefault();






const res = await fetch("/api/users",{


method:"POST",


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


alert("User Created");


router.push("/admin/users");


}



}









return (



<div className="create-page">



<div className="create-card">



<h1>

Create User

</h1>








<form

className="create-form"

onSubmit={createUser}

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

placeholder="Email Address"

value={form.email}

onChange={handleChange}

required

/>







<input


type="password"

name="password"

placeholder="Password"

value={form.password}

onChange={handleChange}

required

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

className="create-btn"

>

Create User

</button>







</form>





</div>



</div>


)


}