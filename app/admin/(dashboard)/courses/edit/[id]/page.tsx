"use client";

import {useEffect, useState} from "react";
import {useRouter, useParams} from "next/navigation";

import "./EditCourse.css";


export default function EditCoursePage(){


const router = useRouter();

const params = useParams();

const id = params.id;



const [form,setForm] = useState<any>({});


const [loading,setLoading] = useState(false);


const [showDelete,setShowDelete] = useState(false);





// Get Course Data

useEffect(()=>{


fetch(`/api/courses/${id}`)

.then(res=>res.json())

.then(data=>{

setForm(data);

});


},[id]);







// Input Change

const handleChange=(e:any)=>{


setForm({

...form,

[e.target.name]:e.target.value

});


};








// Update Course

const handleSubmit=async(e:React.FormEvent)=>{


e.preventDefault();


setLoading(true);



await fetch(`/api/courses/${id}`,{


method:"PUT",


headers:{


"Content-Type":"application/json"

},


body:JSON.stringify(form)


});



setLoading(false);


router.push("/admin/courses");


};







// Delete Course

const handleDelete=async()=>{


await fetch(`/api/courses/${id}`,{


method:"DELETE"


});



router.push("/admin/courses");


};






return(


<div className="edit-course-page">



<div className="edit-course-card">



<h1>
Edit Course
</h1>



<p>
Update course information
</p>





<form onSubmit={handleSubmit}>



<label>
Course Title
</label>


<input

name="title"

value={form.title || ""}

onChange={handleChange}

/>






<label>
Slug
</label>


<input

name="slug"

value={form.slug || ""}

onChange={handleChange}

/>







<label>
Price
</label>


<input

name="price"

value={form.price || ""}

onChange={handleChange}

/>

<div className="form-group">

  <label>Buy Button Text</label>

  <input
    name="buyButtonText"
    value={form.buyButtonText || ""}
    onChange={handleChange}
  />

</div>






<label>
Duration
</label>


<input

name="duration"

value={form.duration || ""}

onChange={handleChange}

/>








<label>
Lectures
</label>


<input

name="lectures"

value={form.lectures || ""}

onChange={handleChange}

/>







<label>
Skill Level
</label>


<input

name="skillLevel"

value={form.skillLevel || ""}

onChange={handleChange}

/>
<div className="form-group">

  <label>Video Duration</label>

  <input
    name="videoDuration"
    value={form.videoDuration || ""}
    onChange={handleChange}
  />

</div>
<div className="form-group">

  <label>Participants</label>

  <input
    name="participants"
    value={form.participants || ""}
    onChange={handleChange}
  />

</div>






<label>
Image URL
</label>


<input

name="image"

value={form.image || ""}

onChange={handleChange}

/>







<label>
Description
</label>


<textarea

name="description"

value={form.description || ""}

onChange={handleChange}

/>








<div className="edit-buttons">



<button

type="submit"

className="update-btn"

>


{

loading

?

"Updating..."

:

"Update Course"

}


</button>






<button

type="button"

className="delete-btn"

onClick={()=>setShowDelete(true)}

>

Delete Course

</button>



</div>





</form>






</div>








{/* Delete Modal */}



{

showDelete && (


<div className="modal-overlay">



<div className="delete-modal">



<h2>
Delete Course?
</h2>



<p>
Are you sure you want to delete this course?
This action cannot be undone.
</p>





<div className="modal-actions">



<button

className="cancel-btn"

onClick={()=>setShowDelete(false)}

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



)


}