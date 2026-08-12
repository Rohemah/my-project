"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";

import "./EditCategory.css";


export default function EditCategoryPage(){


const router = useRouter();

const params = useParams();


const id = params.id;



const [name,setName] = useState("");

const [loading,setLoading] = useState(false);





// Fetch category data

useEffect(()=>{


const fetchCategory = async()=>{


const res = await fetch(`/api/categories/${id}`);


const data = await res.json();


setName(data.name);


};



if(id){

fetchCategory();

}


},[id]);







// Update Category

const handleSubmit = async(e:React.FormEvent)=>{


e.preventDefault();


setLoading(true);



await fetch(`/api/categories/${id}`,{

method:"PUT",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

name:name

})

});



setLoading(false);


router.push("/admin/categories");


};






return(

<div className="edit-category-page">


<div className="edit-card">


<h1>
Edit Category
</h1>


<p>
Update your category information.
</p>





<form onSubmit={handleSubmit}>


<label>
Category Name
</label>


<input

type="text"

value={name}

onChange={(e)=>setName(e.target.value)}

/>






<div className="buttons">


<button type="submit">

{
loading
?
"Updating..."
:
"Update Category"
}

</button>




<button

type="button"

className="cancel"

onClick={()=>router.back()}

>

Cancel

</button>



</div>



</form>


</div>


</div>

);


}