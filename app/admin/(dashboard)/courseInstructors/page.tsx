"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import "./CourseInstructors.css";


interface CourseInstructor {

id:number;

course:{
title:string;
};


instructor:{
name:string;
role?:string;
};


}





export default function CourseInstructorsPage(){


const [data,setData] = useState<CourseInstructor[]>([]);



const [deleteId,setDeleteId] = useState<number|null>(null);

const [showDeleteModal,setShowDeleteModal] = useState(false);







useEffect(()=>{


fetch("/api/courseInstructors")

.then(res=>res.json())

.then(result=>setData(result));


},[]);









const handleDelete = async()=>{


if(!deleteId) return;



const res = await fetch(

`/api/courseInstructors/${deleteId}`,

{

method:"DELETE"

}

);





if(res.ok){


setData((prev)=>

prev.filter(

item=>item.id !== deleteId

)

);



setShowDeleteModal(false);

setDeleteId(null);



alert(
"Course Instructor deleted successfully"
);



}

else{


alert(
"Delete failed"
);


}



};








return(


<div className="course-instructor-page">





<div className="page-header">


<div>


<h1>
Course Instructors
</h1>


<p>
Manage course instructors.
</p>


</div>






<Link

href="/admin/courseInstructors/create"

className="add-btn"

>

+ Add Instructor

</Link>



</div>









<div className="table-container">


<table>


<thead>


<tr>


<th>
ID
</th>


<th>
Course
</th>


<th>
Instructor
</th>


<th>
Role
</th>


<th>
Actions
</th>


</tr>


</thead>








<tbody>


{

data.length===0 ? (


<tr>

<td

colSpan={5}

className="empty"

>

No instructors found.

</td>

</tr>



):(



data.map((item)=>(


<tr key={item.id}>


<td>

{item.id}

</td>





<td>

{item.course?.title || "No Course"}

</td>





<td>

{item.instructor?.name || "No Instructor"}

</td>





<td>

{item.instructor?.role || "-"}

</td>






<td className="actions">



<Link

href={`/admin/courseInstructors/edit/${item.id}`}

className="edit-btn"

>

Edit

</Link>







<button

className="delete-btn"

onClick={()=>{


setDeleteId(item.id);

setShowDeleteModal(true);


}}

>

Delete

</button>





</td>





</tr>



))


)



}



</tbody>





</table>



</div>









{
showDeleteModal && (


<div className="modal-overlay">


<div className="delete-modal">


<h2>
Delete Instructor?
</h2>


<p>
Are you sure you want to remove this instructor?
</p>





<div className="modal-actions">


<button

className="cancel-btn"

onClick={()=>{


setShowDeleteModal(false);

setDeleteId(null);


}}

>

Cancel

</button>






<button

className="confirm-delete"

onClick={handleDelete}

>

Delete

</button>




</div>



</div>


</div>


)

}





</div>


);


}