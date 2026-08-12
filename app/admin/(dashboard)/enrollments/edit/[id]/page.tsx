"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import "../../Enrollment.css";


interface User {

id:number;

fullName:string;

}



interface Course {

id:number;

title:string;

}





export default function EditEnrollment(){



const params = useParams();

const router = useRouter();


const id = params.id;





const [users,setUsers] = useState<User[]>([]);

const [courses,setCourses] = useState<Course[]>([]);





const [form,setForm] = useState({

userId:"",

courseId:"",

status:""

});








useEffect(()=>{


async function loadData(){



// Users

const userRes = await fetch("/api/users");

const userData = await userRes.json();


setUsers(userData);






// Courses

const courseRes = await fetch("/api/courses");

const courseData = await courseRes.json();


setCourses(courseData);







// Single Enrollment

const res = await fetch(`/api/enrollments/${id}`);

const data = await res.json();




setForm({

userId:String(data.userId),

courseId:String(data.courseId),

status:data.status

});



}





if(id){

loadData();

}



},[id]);









function handleChange(e:any){


setForm({

...form,

[e.target.name]:e.target.value

});


}








async function updateEnrollment(e:any){


e.preventDefault();






const res = await fetch(`/api/enrollments/${id}`,{


method:"PUT",


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


alert("Enrollment Updated");


router.push("/admin/enrollments");


}



}









return (


<div className="edit-page">



<div className="edit-card">



<h1>

Edit Enrollment

</h1>







<form

className="edit-form"

onSubmit={updateEnrollment}

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



<option value="Pending">

Pending

</option>



<option value="Completed">

Completed

</option>



</select>








<button

className="update-btn"

>

Update Enrollment

</button>







</form>



</div>



</div>


)



}