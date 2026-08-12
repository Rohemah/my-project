"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import "./Instructor.css";


interface Instructor {

id:number;

name:string;

role?:string;

students?:string;

description?:string;

image?:string;

}





export default function InstructorsPage(){


const [instructors,setInstructors] = useState<Instructor[]>([]);



const [deleteId,setDeleteId] = useState<number|null>(null);

const [showDeleteModal,setShowDeleteModal] = useState(false);






useEffect(()=>{


fetch("/api/instructors")

.then(res=>res.json())

.then(data=>setInstructors(data));


},[]);









const handleDelete = async()=>{


if(!deleteId) return;



const res = await fetch(

`/api/instructors/${deleteId}`,

{

method:"DELETE"

}

);





if(res.ok){


setInstructors((prev)=>

prev.filter(

item=>item.id !== deleteId

)

);



setDeleteId(null);

setShowDeleteModal(false);



alert(
"Instructor deleted successfully"
);



}

else{


alert(
"Delete failed"
);



}



};









return(


<div className="instructor-page">





<div className="page-header">


<div>


<h1>
Instructors
</h1>


<p>
Manage all instructors.
</p>


</div>






<Link

href="/admin/instructors/create"

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
Image
</th>


<th>
Name
</th>


<th>
Role
</th>


<th>
Students
</th>


<th>
Actions
</th>


</tr>


</thead>






<tbody>



{

instructors.length===0 ? (


<tr>

<td

colSpan={6}

className="empty"

>

No instructors found.

</td>

</tr>



):(



instructors.map((item)=>(



<tr key={item.id}>


<td>

{item.id}

</td>






<td>


{

item.image ? (

<img

src={item.image}

alt={item.name}

className="instructor-img"

/>

):(

"No Image"

)

}



</td>






<td>

{item.name}

</td>






<td>

{item.role || "-"}

</td>







<td>

{item.students || "-"}

</td>







<td className="actions">



<Link

href={`/admin/instructors/edit/${item.id}`}

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
Are you sure you want to delete this instructor?
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