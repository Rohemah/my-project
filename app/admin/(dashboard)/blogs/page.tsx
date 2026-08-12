// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import "./Blog.css";


// interface Blog {

//     id:number;

//     title:string;

//     author:string;

//     date:string;

// }



// export default function BlogsPage(){


// const [blogs,setBlogs] = useState<Blog[]>([]);

// const [loading,setLoading] = useState(true);





// // GET ALL BLOGS

// useEffect(()=>{


// async function getBlogs(){


// try{


// const res = await fetch("/api/blogs");


// const data = await res.json();



// setBlogs(data);


// setLoading(false);



// }catch(error){


// console.log(error);


// }


// }



// getBlogs();



// },[]);








// // DELETE BLOG

// async function deleteBlog(id:number){



// const confirmDelete = confirm(
// "Are you sure you want to delete this blog?"
// );



// if(!confirmDelete) return;





// const res = await fetch(`/api/blogs/${id}`,{


// method:"DELETE"


// });




// if(res.ok){


// setBlogs(

// blogs.filter(
// (blog)=>blog.id !== id
// )

// );


// }



// }






// if(loading){


// return (

// <h2>

// Loading Blogs...

// </h2>

// )

// }







// return (


// <div className="blog-page">





// <div className="blog-header">


// <h1>
// Manage Blogs
// </h1>




// <Link href="/admin/blogs/create">


// <button className="add-btn">

// + Add Blog

// </button>


// </Link>



// </div>







// <div className="table-card">



// <table>


// <thead>


// <tr>


// <th>
// Title
// </th>


// <th>
// Author
// </th>


// <th>
// Date
// </th>


// <th>
// Actions
// </th>


// </tr>


// </thead>






// <tbody>



// {

// blogs.length === 0 ?


// (

// <tr>

// <td colSpan={4}>

// No Blogs Found

// </td>

// </tr>


// )


// :


// blogs.map((blog)=>(



// <tr key={blog.id}>


// <td>

// {blog.title}

// </td>




// <td>

// {blog.author}

// </td>




// <td>

// {
// new Date(blog.date)
// .toLocaleDateString()
// }

// </td>





// <td>



// <Link href={`/admin/blogs/edit/${blog.id}`}>



// <button className="edit-btn">

// Edit

// </button>



// </Link>





// <button

// className="delete-btn"

// onClick={()=>deleteBlog(blog.id)}

// >


// Delete


// </button>




// </td>





// </tr>



// ))



// }




// </tbody>





// </table>





// </div>






// </div>



// )



// }
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import "./Blog.css";

interface Blog {
  id: number;
  title: string;
  author: string;
  date: string;
}

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  // GET ALL BLOGS
  useEffect(() => {
    async function getBlogs() {
      try {
        const res = await fetch("/api/blogs");

        if (!res.ok) {
          throw new Error("Failed to fetch blogs");
        }

        const data: Blog[] = await res.json();

        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    }

    getBlogs();
  }, []);

  // DELETE BLOG
  async function deleteBlog(id: number) {
    const confirmDelete = confirm(
      "Are you sure you want to delete this blog?"
    );

    if (!confirmDelete) return;

    try {
      const res = await fetch(`/api/blogs/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Failed to delete blog");
      }

      setBlogs((currentBlogs) =>
        currentBlogs.filter((blog) => blog.id !== id)
      );
    } catch (error) {
      console.error("Error deleting blog:", error);
      alert("Failed to delete blog");
    }
  }

  // LOADING
  if (loading) {
    return (
      <div className="blog-page">
        <p>Loading Blogs...</p>
      </div>
    );
  }

  return (
    <div className="blog-page">

      {/* HEADER */}
      <div className="blog-header">
        <h1>Blogs</h1>

        <Link href="/admin/blogs/create">
          <button className="add-btn">
            + Add Blog
          </button>
        </Link>
      </div>

      {/* EMPTY STATE */}
      {blogs.length === 0 ? (
        <div className="empty-state">
          <h2>No Blogs Found</h2>

          <p>
            You have not created any blogs yet.
          </p>

          <Link href="/admin/blogs/create">
            <button className="add-btn">
              Create Your First Blog
            </button>
          </Link>
        </div>
      ) : (
        /* TABLE */
        <div className="table-container">
          <table>

            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Author</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {blogs.map((blog) => (
                <tr key={blog.id}>

                  <td>{blog.id}</td>

                  <td>
                    <strong>{blog.title}</strong>
                  </td>

                  <td>
                    {blog.author}
                  </td>

                  <td>
                    {new Date(blog.date).toLocaleDateString()}
                  </td>

                  <td>
                    <div className="action-buttons">

                      <Link
                        href={`/admin/blogs/edit/${blog.id}`}
                        className="edit-btn"
                      >
                        Edit
                      </Link>

                      <button
                        className="delete-btn"
                        onClick={() => deleteBlog(blog.id)}
                      >
                        Delete
                      </button>

                    </div>
                  </td>

                </tr>
              ))}
            </tbody>

          </table>
        </div>
      )}
    </div>
  );
}