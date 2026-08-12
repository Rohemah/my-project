"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import "./CreateCourse.css";


interface Category {

    id:number;

    name:string;

}



export default function CreateCoursePage(){


const router = useRouter();



const [categories,setCategories] = useState<Category[]>([]);


const [loading,setLoading] = useState(false);


const [error,setError] = useState("");





const [form,setForm] = useState({

    title:"",

    slug:"",

    categoryId:"",

    price:"",
    buyButtonText: "",

    duration:"",

    lectures:"",

    skillLevel:"",
    videoDuration: "",
  participants: "",


    image:"",

    description:""

});







// Fetch Categories

useEffect(()=>{


fetch("/api/categories")

.then(res=>res.json())

.then(data=>{

setCategories(data);

})


},[]);








// Handle Inputs

const handleChange=(e:any)=>{


setForm({

...form,

[e.target.name]:e.target.value


});


};









// Submit Course

const handleSubmit=async(e:React.FormEvent)=>{


e.preventDefault();


setLoading(true);

setError("");



try{


const res = await fetch("/api/courses",{


method:"POST",


headers:{


"Content-Type":"application/json"


},


body:JSON.stringify({


...form,


categoryId:Number(form.categoryId),


lectures:Number(form.lectures),


price:Number(form.price)


})


});






const data = await res.json();




if(!res.ok){


setError(data.error || "Course creation failed");


return;


}






router.push("/admin/courses");



}

catch(error){


console.log(error);

setError("Something went wrong");


}

finally{


setLoading(false);


}



};







return(


<div className="create-course-page">


<div className="course-container">



<div className="course-title">


<h1>
Create Course
</h1>


<p>
Add a new course to your platform
</p>


</div>






<form onSubmit={handleSubmit}>


<div className="form-grid">






<div className="form-group">


<label>
Course Title
</label>


<input

name="title"

placeholder="Enter course title"

value={form.title}

onChange={handleChange}

/>


</div>









<div className="form-group">


<label>
Slug
</label>


<input

name="slug"

placeholder="course-slug"

value={form.slug}

onChange={handleChange}

/>


</div>









<div className="form-group">


<label>
Category
</label>


<select

name="categoryId"

value={form.categoryId}

onChange={handleChange}

>


<option value="">

Select Category

</option>



{

categories.map(category=>(


<option

key={category.id}

value={category.id}

>

{category.name}

</option>



))

}



</select>


</div>









<div className="form-group">


<label>
Price
</label>


<input

name="price"

placeholder="50"

value={form.price}

onChange={handleChange}

/>


</div>
<div className="form-group">

  <label>
    Buy Button Text
  </label>

  <input
    name="buyButtonText"
    placeholder="Buy this course"
    value={form.buyButtonText}
    onChange={handleChange}
  />

</div>










<div className="form-group">


<label>
Duration
</label>


<input

name="duration"

placeholder="10 hours"

value={form.duration}

onChange={handleChange}

/>


</div>









<div className="form-group">


<label>
Lectures
</label>


<input

name="lectures"

placeholder="20"

value={form.lectures}

onChange={handleChange}

/>


</div>









<div className="form-group">


<label>
Skill Level
</label>


<input

name="skillLevel"

placeholder="Beginner"

value={form.skillLevel}

onChange={handleChange}

/>


</div>

<div className="form-group">

  <label>
    Video Duration
  </label>

  <input
    name="videoDuration"
    placeholder="1 hr 28 min"
    value={form.videoDuration}
    onChange={handleChange}
  />

</div>

<div className="form-group">

  <label>
    Participants
  </label>

  <input
    name="participants"
    placeholder="7.1k students"
    value={form.participants}
    onChange={handleChange}
  />

</div>









<div className="form-group">


<label>
Image URL
</label>


<input

name="image"

placeholder="Image link"

value={form.image}

onChange={handleChange}

/>


</div>





</div>









<div className="form-group">


<label>
Description
</label>


<textarea

name="description"

placeholder="Write course description"

value={form.description}

onChange={handleChange}

/>


</div>









{

error && (

<p className="error-message">

{error}

</p>

)

}










<div className="form-buttons">


<button

type="submit"

disabled={loading}

>


{

loading

?

"Creating..."

:

"Create Course"

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