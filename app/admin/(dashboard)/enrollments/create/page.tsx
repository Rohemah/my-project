"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "../Enrollment.css";


interface User {

    id:number;

    fullName:string;

}


interface Course {

    id:number;

    title:string;

}





export default function CreateEnrollment(){


const router = useRouter();



const [users,setUsers] = useState<User[]>([]);

const [courses,setCourses] = useState<Course[]>([]);




const [form,setForm] = useState({

    userId:"",

    courseId:"",

    status:"Active"

});








useEffect(()=>{


async function loadData(){



const userRes = await fetch("/api/users");

const userData = await userRes.json();


setUsers(userData);







const courseRes = await fetch("/api/courses");

const courseData = await courseRes.json();


setCourses(courseData);



}



loadData();


},[]);








function handleChange(e:any){


setForm({

...form,

[e.target.name]:e.target.value

});


}








async function createEnrollment(e:any){


e.preventDefault();





const res = await fetch("/api/enrollments",{


method:"POST",


headers:{


"Content-Type":"application/json"

},


body:JSON.stringify({

userId:Number(form.userId),

courseId:Number(form.courseId),

status:form.status


})


});






if(res.ok){


alert("Enrollment Created");


router.push("/admin/enrollments");


}



}









return (


<div className="create-page">



<div className="create-card">



<h1>

Create Enrollment

</h1>







<form

className="create-form"

onSubmit={createEnrollment}

>






<select

name="userId"

value={form.userId}

onChange={handleChange}

required

>


<option value="">

Select User

</option>



{

users.map((user)=>(


<option

key={user.id}

value={user.id}

>

{user.fullName}

</option>


))


}



</select>









<select

name="courseId"

value={form.courseId}

onChange={handleChange}

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








<select

name="status"

value={form.status}

onChange={handleChange}

>


<option value="Active">

Active

</option>



<option value="Completed">

Completed

</option>




<option value="Pending">

Pending

</option>



</select>









<button

className="create-btn"

>

Create Enrollment

</button>






</form>





</div>



</div>


)


}