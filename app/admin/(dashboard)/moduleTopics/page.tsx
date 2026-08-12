"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import "./ModuleTopics.css";


interface ModuleTopic {

  id:number;

  topic:string;

  module:{
    title:string;
    moduleName?:string;
  };

}



export default function ModuleTopicsPage(){


const [topics,setTopics] = useState<ModuleTopic[]>([]);


const [deleteId,setDeleteId] = useState<number | null>(null);


const [showDeleteModal,setShowDeleteModal] = useState(false);






useEffect(()=>{


fetch("/api/moduleTopics")

.then(res=>res.json())

.then(data=>setTopics(data));


},[]);







const handleDelete = async()=>{


if(!deleteId) return;



const res = await fetch(

`/api/moduleTopics/${deleteId}`,

{

method:"DELETE"

}

);




if(res.ok){


setTopics((prev)=>

prev.filter(

(item)=>item.id !== deleteId

)

);



setDeleteId(null);

setShowDeleteModal(false);



alert(
"Topic deleted successfully"
);



}

else{


alert(
"Delete failed"
);


}



};







return(


<div className="module-topic-page">





<div className="page-header">


<div>

<h1>
Module Topics
</h1>


<p>
Manage all module topics.
</p>


</div>





<Link

href="/admin/moduleTopics/create"

className="add-btn"

>

+ Add Topic

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
Module
</th>


<th>
Topic
</th>


<th>
Actions
</th>


</tr>


</thead>






<tbody>



{

topics.length === 0 ? (



<tr>


<td

colSpan={4}

className="empty"

>

No topics found.

</td>


</tr>



):(



topics.map((item)=>(



<tr key={item.id}>


<td>

{item.id}

</td>





<td>

{item.module?.title || item.module?.moduleName || "No Module"}

</td>





<td>

{item.topic}

</td>





<td className="actions">


<Link

href={`/admin/moduleTopics/edit/${item.id}`}

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
Delete Topic?
</h2>



<p>
Are you sure you want to delete this topic?
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