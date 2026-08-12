"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import "./Modules.css";


interface Module {


  id:number;

  title:string;

  course:{
    title:string;
  };


}



export default function ModulesPage(){



const [modules,setModules] = useState<Module[]>([]);



const [deleteId,setDeleteId] = useState<number | null>(null);

const [showDeleteModal,setShowDeleteModal] = useState(false);






useEffect(()=>{


fetch("/api/modules")

.then(res=>res.json())

.then(data=>setModules(data));


},[]);







const handleDelete = async()=>{


if(!deleteId) return;




const res = await fetch(

`/api/modules/${deleteId}`,

{

method:"DELETE"

}

);





if(res.ok){



setModules((prev)=>

prev.filter(

item=>item.id !== deleteId

)

);



setShowDeleteModal(false);

setDeleteId(null);



alert(
"Module deleted successfully"
);



}

else{


alert(
"Delete failed"
);


}



};







return(


<div className="modules-page">





<div className="page-header">


<div>

<h1>
Course Modules
</h1>


<p>
Manage all course modules.
</p>


</div>






<Link

href="/admin/modules/create"

className="add-btn"

>

+ Add Module

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
Module Title
</th>


<th>
Actions
</th>


</tr>

</thead>






<tbody>



{

modules.length === 0 ? (


<tr>


<td

colSpan={4}

className="empty"

>

No modules found.

</td>


</tr>



) : (



modules.map((item)=>(


<tr key={item.id}>


<td>
{item.id}
</td>




<td>

{item.course?.title || "No Course"}

</td>





<td>

{item.title}

</td>






<td className="actions">



<Link

href={`/admin/modules/edit/${item.id}`}

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
Delete Module
</h2>



<p>
Are you sure you want to delete this module?
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