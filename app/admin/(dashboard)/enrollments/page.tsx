"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import "./Enrollment.css";


interface Enrollment {


id:number;

status:string;

enrolledDate:string;


user:{
    fullName:string;
};


course:{
    title:string;
};


}





export default function EnrollmentsPage(){



const [enrollments,setEnrollments] = useState<Enrollment[]>([]);






useEffect(()=>{


fetch("/api/enrollments")

.then(res=>res.json())

.then(data=>{

setEnrollments(data);

});


},[]);








async function deleteEnrollment(id:number){


const confirmDelete = confirm(
"Delete this enrollment?"
);



if(!confirmDelete) return;





const res = await fetch(

`/api/enrollments/${id}`,

{

method:"DELETE"

}

);






if(res.ok){


setEnrollments(

enrollments.filter(

(item)=>item.id !== id

)

);


}



}









return (



<div className="enrollment-page">



<div className="enrollment-header">



<h1>

Enrollments

</h1>






<Link href="/admin/enrollments/create">


<button className="add-btn">

Add Enrollment

</button>


</Link>




</div>









<table>



<thead>


<tr>


<th>
User
</th>


<th>
Course
</th>


<th>
Date
</th>


<th>
Status
</th>


<th>
Actions
</th>



</tr>



</thead>








<tbody>



{

enrollments.map((item)=>(


<tr key={item.id}>


<td>

{item.user?.fullName}

</td>



<td>

{item.course?.title}

</td>




<td>

{
new Date(item.enrolledDate)
.toLocaleDateString()
}

</td>





<td>


<span className="status">

{item.status}

</span>


</td>







<td>



<div className="actions">


<Link

href={`/admin/enrollments/edit/${item.id}`}

>


<button className="edit-btn">

Edit

</button>


</Link>







<button

className="delete-btn"

onClick={()=>deleteEnrollment(item.id)}

>

Delete

</button>





</div>


</td>





</tr>


))


}





</tbody>




</table>





</div>


)


}