"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  FaCode,
  FaLaptopCode,
  FaPalette
} from "react-icons/fa";

import "./Categories.css";


interface Category{

id:number;
name:string;

}



export default function CategoriesPage(){


const [categories,setCategories] = useState<Category[]>([]);

const [search,setSearch] = useState("");

const [deleteId,setDeleteId] = useState<number | null>(null);





useEffect(()=>{


fetch("/api/categories")

.then(res=>res.json())

.then(data=>{

setCategories(data);

});


},[]);








const filteredCategories = categories.filter((category)=>

category.name
.toLowerCase()
.includes(search.toLowerCase())

);







const handleDelete = async()=>{


if(!deleteId)
return;



await fetch(`/api/categories/${deleteId}`,{

method:"DELETE"

});



setCategories(

categories.filter(

(category)=>

category.id !== deleteId

)

);



setDeleteId(null);



};







return(


<div className="categories-page">





{/* Header */}


<div className="category-header">


<div>

<h1>
Categories
</h1>


<p>
Manage your course categories
</p>


</div>




<Link

href="/admin/categories/create"

className="add-btn"

>

+ Add Category

</Link>



</div>







{/* Search */}


<div className="search-box">


<input

type="text"

placeholder="Search categories..."

value={search}

onChange={(e)=>setSearch(e.target.value)}

/>


</div>









{/* Cards */}


<div className="category-grid">



{

filteredCategories.map((category,index)=>(


<div

className="category-card"

key={category.id}

>


<div className="card-top">


<div className="category-icon">


{

index % 3 === 0

?

<FaCode/>

:

index % 3 === 1

?

<FaLaptopCode/>

:

<FaPalette/>

}



</div>




<span className="status">

Active

</span>



</div>







<h2>

{category.name}

</h2>





<p>

Manage courses related to this category.

</p>





<div className="course-count">

Courses

</div>







<div className="card-footer">



<Link

href={`/admin/categories/edit/${category.id}`}

className="edit-btn"

>

Edit

</Link>





<button

className="delete-btn"

onClick={()=>setDeleteId(category.id)}

>

Delete

</button>



</div>







</div>


))


}



</div>









{/* DELETE MODAL */}


{
deleteId && (

<div className="modal-overlay">


<div className="delete-modal">


<div className="delete-icon">

!

</div>



<h2>
Delete Category
</h2>



<p>

Are you sure you want to delete this category?

This action cannot be undone.

</p>




<div className="modal-buttons">


<button

className="cancel-modal"

onClick={()=>setDeleteId(null)}

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