"use client";


import {useEffect,useState} from "react";

import Link from "next/link";

import "./Courses.css";



interface Course{

id:number;

title:string;

price:string;

category:{
name:string;
}

}




export default function CoursesPage(){



const [courses,setCourses]=useState<Course[]>([]);
const [deleteId, setDeleteId] = useState<number | null>(null);
const [showDeleteModal, setShowDeleteModal] = useState(false);




useEffect(()=>{
   

fetch("/api/courses")

.then(res=>res.json())

.then(data=>setCourses(data));


},[]);
 const handleDelete = async () => {
  if (!deleteId) return;

  try {
    const res = await fetch(`/api/courses/${deleteId}`, {
      method: "DELETE",
    });

    if (res.ok) {
      setCourses((prev) =>
        prev.filter((course) => course.id !== deleteId)
      );

      setShowDeleteModal(false);
      setDeleteId(null);

      alert("Course deleted successfully.");
    } else {
      alert("Failed to delete course.");
    }
  } catch (error) {
    console.error(error);
    alert("Something went wrong.");
  }
};






return(


<div className="courses-page">



<div className="course-header">


<div>

<h1>
Courses
</h1>


<p>
Manage all courses
</p>

</div>



<Link

href="/admin/courses/create"

className="add-btn"

>

+ Add Course

</Link>


</div>







<div className="course-table">


<table>


<thead>

<tr>

<th>
Title
</th>


<th>
Category
</th>


<th>
Price
</th>


<th>
Action
</th>


</tr>


</thead>




<tbody>


{

courses.map(course=>(


<tr key={course.id}>


<td>

{course.title}

</td>



<td>

{course.category.name}

</td>



<td>

${course.price}

</td>



<td>


<Link

href={`/admin/courses/edit/${course.id}`}

>

Edit

</Link>

<button
  onClick={() => {
    setDeleteId(course.id);
    setShowDeleteModal(true);
  }}
>
  Delete
</button>



</td>



</tr>



))


}


</tbody>



</table>



</div>

{showDeleteModal && (
  <div className="modal-overlay">
    <div className="delete-modal">

      <h2>Delete Course</h2>

      <p>
        Are you sure you want to delete this course?
      </p>

      <div className="modal-actions">

        <button
          className="cancel-btn"
          onClick={() => {
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
)}



</div>


)


}