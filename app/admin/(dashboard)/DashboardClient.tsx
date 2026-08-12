"use client";

import "./Dashboard.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  FaBook,
  FaFolderOpen,
  FaUserTie,
  FaUsers,
} from "react-icons/fa";
import LogoutButton from "@/app/components/LogoutButton";

export default function Dashboard() {


const [stats,setStats] = useState({

courses:0,

categories:0,

instructors:0,

students:0

});


useEffect(()=>{


fetch("/api/dashboard")

.then(res=>res.json())

.then(data=>{

setStats(data);

});


},[]);



return (

    <div className="dashboard">

      <div className="welcome">

  <div className="welcome-header">

    <div>
      <h1>Welcome Back</h1>

      <p>
        Manage your courses, categories,
        blogs, instructors and students from one place.
      </p>
    </div>


    <LogoutButton />

  </div>

</div>

      <div className="cards">

        <div className="card">

          <div className="card-top">

            <div>

              <h4>Total Courses</h4>

              <h2>
{stats.courses}
</h2>

              

            </div>

            <div className="icon blue">
              <FaBook />
            </div>

          </div>

        </div>

        <div className="card">

          <div className="card-top">

            <div>

              <h4>Categories</h4>

             <h2>
{stats.categories}
</h2>


            </div>

            <div className="icon green">
              <FaFolderOpen />
            </div>

          </div>

        </div>

        <div className="card">

          <div className="card-top">

            <div>

              <h4>Instructors</h4>

              <h2>
{stats.instructors}
</h2>

            

            </div>

            <div className="icon orange">
              <FaUserTie />
            </div>

          </div>

        </div>

        <div className="card">

          <div className="card-top">

            <div>

              <h4>Students</h4>

              <h2>
{stats.students}
</h2>


            </div>

            <div className="icon purple">
              <FaUsers />
            </div>

          </div>

        </div>

      </div>
      {/* Analytics + Recent Courses */}


{/* Quick Actions */}

{/* Quick Actions */}

<div className="quick-actions">


<div className="quick-header">

<h2>
Quick Actions
</h2>

<p>
Quickly manage your platform
</p>

</div>



<div className="action-grid">



<Link 
href="/admin/courses/create"
className="action-card"
>

<div className="action-icon">
+
</div>

<div>

<h3>
Add Course
</h3>

<p>
Create a new course
</p>

</div>


</Link>





<Link 
href="/admin/categories/create"
className="action-card"
>

<div className="action-icon">
+
</div>


<div>

<h3>
Add Category
</h3>

<p>
Organize courses
</p>

</div>


</Link>







<Link 
href="/admin/blogs/create"
className="action-card"
>


<div className="action-icon">
+
</div>


<div>

<h3>
Add Blog
</h3>

<p>
Publish new content
</p>

</div>


</Link>







<Link 
href="/admin/instructors/create"
className="action-card"
>


<div className="action-icon">
+
</div>


<div>

<h3>
Add Instructor
</h3>


<p>
Manage teachers
</p>


</div>


</Link>




</div>


</div>
</div>

  );

}