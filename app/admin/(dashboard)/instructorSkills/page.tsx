"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import "./InstructorSkills.css";


interface InstructorSkill {

id:number;

skill:string;

instructor?:{

name:string;

};

}



export default function InstructorSkillsPage(){


const [skills,setSkills] = useState<InstructorSkill[]>([]);


const [deleteId,setDeleteId] = useState<number | null>(null);

const [showDeleteModal,setShowDeleteModal] = useState(false);






useEffect(()=>{


fetch("/api/instructorSkills")

.then(res=>res.json())

.then(data=>setSkills(data));


},[]);







const handleDelete = async()=>{


if(!deleteId) return;



const res = await fetch(

`/api/instructorSkills/${deleteId}`,

{

method:"DELETE"

}

);




if(res.ok){


setSkills((prev)=>

prev.filter(

item=>item.id !== deleteId

)

);



setDeleteId(null);

setShowDeleteModal(false);



alert(
"Skill deleted successfully"
);



}

else{


alert(
"Delete failed"
);


}



};






return(


<div className="instructor-skill-page">



<div className="page-header">


<div>

<h1>
Instructor Skills
</h1>


<p>
Manage instructor skills.
</p>


</div>




<Link

href="/admin/instructorSkills/create"

className="add-btn"

>

+ Add Skill

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
Instructor
</th>


<th>
Skill
</th>


<th>
Actions
</th>


</tr>


</thead>





<tbody>


{

skills.length===0 ? (


<tr>


<td

colSpan={4}

className="empty"

>

No skills found.

</td>


</tr>



):(



skills.map((item)=>(



<tr key={item.id}>


<td>

{item.id}

</td>





<td>

{item.instructor?.name || "No Instructor"}

</td>





<td>

{item.skill}

</td>





<td className="actions">


<Link

href={`/admin/instructorSkills/edit/${item.id}`}

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
Delete Skill?
</h2>


<p>
Are you sure you want to delete this skill?
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