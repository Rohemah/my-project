"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import "./CreateCategory.css";


export default function CreateCategoryPage(){


const router = useRouter();


const [name,setName] = useState("");

const [loading,setLoading] = useState(false);




const handleSubmit = async(e:React.FormEvent)=>{


e.preventDefault();


setLoading(true);



try{


const res = await fetch("/api/categories",{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify({

name

})

});



if(res.ok){

router.push("/admin/categories");

}



}

catch(error){

console.log(error);

}


finally{

setLoading(false);

}



};





return(


<div className="create-page">



<div className="create-container">





<div className="create-header">


<h1>
Create Category
</h1>


<p>
Add a new category for your courses.
</p>


</div>







<form onSubmit={handleSubmit}>



<div className="form-group">


<label>
Category Name
</label>


<input

type="text"

placeholder="Enter category name"

value={name}

onChange={(e)=>setName(e.target.value)}

required

/>



</div>







<div className="form-actions">


<button

type="submit"

disabled={loading}

>

{

loading

?

"Creating..."

:

"Create Category"

}


</button>





<button

type="button"

className="cancel-btn"

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