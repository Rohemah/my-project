"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import "./CourseHighlights.css";


interface CourseHighlight {

  id:number;

  highlight:string;

  course:{
    title:string;
  };

}



export default function CourseHighlightsPage(){


  const [highlights,setHighlights] = useState<CourseHighlight[]>([]);


  const [deleteId,setDeleteId] = useState<number | null>(null);


  const [showDeleteModal,setShowDeleteModal] = useState(false);




  useEffect(()=>{


    fetch("/api/courseHighlights")

    .then(res=>res.json())

    .then(data=>setHighlights(data));


  },[]);







  const handleDelete = async()=>{


    if(!deleteId) return;



    const res = await fetch(

      `/api/courseHighlights/${deleteId}`,

      {

        method:"DELETE"

      }

    );





    if(res.ok){



      setHighlights((prev)=>

        prev.filter(

          item=>item.id !== deleteId

        )

      );



      setShowDeleteModal(false);


      setDeleteId(null);



      alert(
        "Highlight deleted successfully"
      );



    }

    else{


      alert(
        "Delete failed"
      );


    }



  };







return (


<div className="course-highlights-page">





<div className="page-header">


<div>

<h1>
Course Highlights
</h1>


<p>
Manage all course highlights.
</p>


</div>





<Link

href="/admin/courseHighlights/create"

className="add-btn"

>

+ Add Highlight

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
Highlight
</th>


<th>
Actions
</th>


</tr>


</thead>





<tbody>



{
highlights.length === 0 ? (


<tr>

<td

colSpan={4}

className="empty"

>

No highlights found.

</td>

</tr>



) : (



highlights.map((item)=>(


<tr key={item.id}>


<td>

{item.id}

</td>





<td>

{item.course?.title || "No Course"}

</td>





<td>

{item.highlight}

</td>





<td className="actions">



<Link

href={`/admin/courseHighlights/edit/${item.id}`}

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
Delete Highlight
</h2>



<p>
Are you sure you want to delete this highlight?
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