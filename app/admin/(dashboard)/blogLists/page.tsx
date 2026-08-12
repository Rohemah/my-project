"use client";

import { useEffect,useState } from "react";
import Link from "next/link";
import "./BlogList.css";


interface BlogList {

id:number;

listHeading:string;

listParagraph:string;

blog:{
title:string;
}

}



export default function BlogListsPage(){


const [lists,setLists]=useState<BlogList[]>([]);



useEffect(()=>{


fetch("/api/blogLists")

.then(res=>res.json())

.then(data=>{

setLists(data);

});


},[]);





async function deleteList(id:number){


const confirmDelete = confirm(
"Delete this list?"
);



if(!confirmDelete) return;



const res = await fetch(

`/api/blogLists/${id}`,

{

method:"DELETE"

}

);




if(res.ok){


setLists(

lists.filter(

(list)=>list.id!==id

)

);


}



}




return (


<div className="blog-list-page">



<div className="list-header">


<h1>

Blog Lists

</h1>



<Link href="/admin/blogLists/create">


<button className="add-btn">

Add List

</button>


</Link>



</div>






<table>


<thead>

<tr>

<th>
Heading
</th>


<th>
Blog
</th>


<th>
Paragraph
</th>


<th>
Actions
</th>


</tr>


</thead>




<tbody>


{

lists.map((list)=>(


<tr key={list.id}>


<td>

{list.listHeading}

</td>



<td>

{list.blog?.title}

</td>




<td>

{list.listParagraph}

</td>




<td>


<div className="actions">


<Link

href={`/admin/blogLists/edit/${list.id}`}

className="edit-link"

>


<button className="edit-btn">

Edit

</button>


</Link>





<button

className="delete-btn"

onClick={()=>deleteList(list.id)}

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