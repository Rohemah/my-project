// "use client";

// import { useEffect, useState } from "react";
// import { useParams, useRouter } from "next/navigation";
// import "../../BlogList.css";
// import "./EditBlogList.css";


// export default function EditBlogList(){


// const params = useParams();

// const router = useRouter();


// const id = params.id;



// const [form,setForm] = useState({

// blogId:"",
// listHeading:"",
// listParagraph:""

// });





// const [blogs,setBlogs] = useState<any[]>([]);






// useEffect(()=>{


// async function getData(){


// const blogRes = await fetch("/api/blogs");

// const blogData = await blogRes.json();


// setBlogs(blogData);





// const res = await fetch(`/api/blogLists/${id}`);

// const data = await res.json();



// setForm({

// blogId:data.blogId || "",

// listHeading:data.listHeading || "",

// listParagraph:data.listParagraph || ""

// });


// }



// if(id){

// getData();

// }


// },[id]);









// function handleChange(e:any){


// setForm({

// ...form,

// [e.target.name]:e.target.value

// });


// }









// async function updateList(e:any){


// e.preventDefault();




// const res = await fetch(`/api/blogLists/${id}`,{


// method:"PUT",


// headers:{


// "Content-Type":"application/json"

// },


// body:JSON.stringify({


// blogId:Number(form.blogId),

// listHeading:form.listHeading,

// listParagraph:form.listParagraph


// })


// });






// if(res.ok){


// alert("Blog List Updated");


// router.push("/admin/blogLists");


// }



// }









// return (



// <div className="edit-page">



// <div className="edit-card">



// <h1>

// Edit Blog List

// </h1>






// <form

// className="edit-form"

// onSubmit={updateList}

// >





// <select

// name="blogId"

// value={form.blogId}

// onChange={handleChange}

// required

// >



// <option value="">

// Select Blog

// </option>



// {

// blogs.map((blog)=>(


// <option

// key={blog.id}

// value={blog.id}

// >


// {blog.title}


// </option>


// ))


// }




// </select>







// <input


// type="text"

// name="listHeading"

// value={form.listHeading}

// placeholder="List Heading"

// onChange={handleChange}

// required

// />







// <textarea


// name="listParagraph"

// value={form.listParagraph}

// placeholder="List Paragraph"

// onChange={handleChange}

// />







// <button

// className="update-btn"

// >

// Update List

// </button>






// </form>





// </div>



// </div>


// )


// }

// "use client";

// import { useEffect, useState } from "react";
// import { useParams, useRouter } from "next/navigation";

// import "../../BlogList.css";
// import "./EditBlogList.css";

// interface Blog {
//   id: number;
//   title: string;
// }

// interface BlogListForm {
//   blogId: string;
//   listHeading: string;
//   listParagraph: string;
// }

// export default function EditBlogList() {
//   const params = useParams();
//   const router = useRouter();

//   const id = params.id;

//   const [blogs, setBlogs] = useState<Blog[]>([]);

//   const [loading, setLoading] = useState(true);
//   const [updating, setUpdating] = useState(false);

//   const [form, setForm] = useState<BlogListForm>({
//     blogId: "",
//     listHeading: "",
//     listParagraph: "",
//   });

//   // =========================
//   // GET BLOGS + BLOG LIST
//   // =========================

//   useEffect(() => {
//     async function getData() {
//       try {
//         // Get all blogs for dropdown
//         const blogRes = await fetch("/api/blogs");

//         if (!blogRes.ok) {
//           throw new Error("Failed to fetch blogs");
//         }

//         const blogData = await blogRes.json();

//         setBlogs(blogData);

//         // Get single blog list
//         const res = await fetch(`/api/blogLists/${id}`);

//         if (!res.ok) {
//           throw new Error("Failed to fetch blog list");
//         }

//         const data = await res.json();

//         setForm({
//           blogId: String(data.blogId ?? ""),
//           listHeading: data.listHeading ?? "",
//           listParagraph: data.listParagraph ?? "",
//         });
//       } catch (error) {
//         console.error("Error loading blog list:", error);

//         alert("Failed to load blog list.");
//       } finally {
//         setLoading(false);
//       }
//     }

//     if (id) {
//       getData();
//     }
//   }, [id]);

//   // =========================
//   // HANDLE INPUT CHANGE
//   // =========================

//   function handleChange(
//     e: React.ChangeEvent<
//       HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
//     >
//   ) {
//     const { name, value } = e.target;

//     setForm((previous) => ({
//       ...previous,
//       [name]: value,
//     }));
//   }

//   // =========================
//   // UPDATE BLOG LIST
//   // =========================

//   async function updateList(
//     e: React.FormEvent<HTMLFormElement>
//   ) {
//     e.preventDefault();

//     if (!form.blogId) {
//       alert("Please select a blog.");
//       return;
//     }

//     if (!form.listHeading.trim()) {
//       alert("Please enter a list heading.");
//       return;
//     }

//     setUpdating(true);

//     try {
//       const res = await fetch(`/api/blogLists/${id}`, {
//         method: "PUT",

//         headers: {
//           "Content-Type": "application/json",
//         },

//         body: JSON.stringify({
//           blogId: Number(form.blogId),

//           listHeading: form.listHeading,

//           listParagraph: form.listParagraph,
//         }),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         alert(data.error || "Failed to update blog list.");
//         return;
//       }

//       alert("Blog List Updated Successfully.");

//       router.push("/admin/blogLists");

//       router.refresh();
//     } catch (error) {
//       console.error("Update blog list error:", error);

//       alert("Something went wrong while updating the blog list.");
//     } finally {
//       setUpdating(false);
//     }
//   }

//   // =========================
//   // LOADING
//   // =========================

//   if (loading) {
//     return (
//       <div className="edit-page">
//         <div className="edit-card">
//           <p>Loading Blog List...</p>
//         </div>
//       </div>
//     );
//   }

//   // =========================
//   // PAGE
//   // =========================

//   return (
//     <div className="edit-page">
//       <div className="edit-card">

//         <h1>Edit Blog List</h1>

//         <p className="form-description">
//           Update the blog list heading and paragraph.
//         </p>

//         <form
//           className="edit-form"
//           onSubmit={updateList}
//         >

//           {/* =========================
//               SELECT BLOG
//           ========================= */}

//           <div className="form-group">

//             <label htmlFor="blogId">
//               Select Blog
//             </label>

//             <select
//               id="blogId"
//               name="blogId"
//               value={form.blogId}
//               onChange={handleChange}
//               required
//             >

//               <option value="">
//                 Select a blog
//               </option>

//               {blogs.map((blog) => (
//                 <option
//                   key={blog.id}
//                   value={blog.id}
//                 >
//                   {blog.title}
//                 </option>
//               ))}

//             </select>

//           </div>


//           {/* =========================
//               LIST HEADING
//           ========================= */}

//           <div className="form-group">

//             <label htmlFor="listHeading">
//               List Heading
//             </label>

//             <input
//               id="listHeading"
//               type="text"
//               name="listHeading"
//               value={form.listHeading}
//               placeholder="Enter list heading"
//               onChange={handleChange}
//               required
//             />

//           </div>


//           {/* =========================
//               LIST PARAGRAPH
//           ========================= */}

//           <div className="form-group">

//             <label htmlFor="listParagraph">
//               List Paragraph
//             </label>

//             <textarea
//               id="listParagraph"
//               name="listParagraph"
//               value={form.listParagraph}
//               placeholder="Enter list paragraph"
//               onChange={handleChange}
//             />

//           </div>


//           {/* =========================
//               UPDATE BUTTON
//           ========================= */}

//           <button
//             type="submit"
//             className="update-btn"
//             disabled={updating}
//           >
//             {updating
//               ? "Updating..."
//               : "Update Blog List"}
//           </button>

//         </form>

//       </div>
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

import "../../BlogList.css";
import "./EditBlogList.css";

interface Blog {
  id: number;
  title: string;
}

interface BlogSection {
  id: number;
  blogId: number;
  heading: string | null;
  displayOrder: number;
}

export default function EditBlogList() {
  const params = useParams();
  const router = useRouter();

  const id = params.id;

  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [sections, setSections] = useState<BlogSection[]>([]);

  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);

  const [form, setForm] = useState({
    blogId: "",
    sectionId: "",
    listHeading: "",
    listParagraph: "",
  });

  // =========================
  // GET BLOGS + SECTIONS + LIST
  // =========================

  useEffect(() => {
    async function getData() {
      try {
        // GET BLOGS
        const blogRes = await fetch("/api/blogs");

        if (!blogRes.ok) {
          throw new Error("Failed to fetch blogs");
        }

        const blogData = await blogRes.json();

        setBlogs(blogData);

        // GET SECTIONS
        const sectionRes = await fetch("/api/blogSections");

        if (!sectionRes.ok) {
          throw new Error("Failed to fetch sections");
        }

        const sectionData = await sectionRes.json();

        setSections(sectionData);

        // GET SINGLE BLOG LIST
        const res = await fetch(`/api/blogLists/${id}`);

        if (!res.ok) {
          throw new Error("Failed to fetch blog list");
        }

        const data = await res.json();

        setForm({
          blogId: String(data.blogId ?? ""),
          sectionId: String(data.sectionId ?? ""),
          listHeading: data.listHeading ?? "",
          listParagraph: data.listParagraph ?? "",
        });

      } catch (error) {
        console.error("Error loading blog list:", error);

        alert("Failed to load blog list.");

      } finally {
        setLoading(false);
      }
    }

    if (id) {
      getData();
    }
  }, [id]);

  // =========================
  // HANDLE INPUT
  // =========================

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement |
      HTMLSelectElement
    >
  ) {
    const { name, value } = e.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  // =========================
  // UPDATE BLOG LIST
  // =========================

  async function updateList(e: React.FormEvent) {
    e.preventDefault();

    if (!form.blogId) {
      alert("Please select a blog.");
      return;
    }

    if (!form.sectionId) {
      alert("Please select a section.");
      return;
    }

    if (!form.listHeading.trim()) {
      alert("Please enter a list heading.");
      return;
    }

    setUpdating(true);

    try {
      const res = await fetch(`/api/blogLists/${id}`, {
        method: "PUT",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          blogId: Number(form.blogId),

          sectionId: Number(form.sectionId),

          listHeading: form.listHeading,

          listParagraph: form.listParagraph,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(
          data.error ||
          "Failed to update blog list."
        );

        return;
      }

      alert("Blog List Updated Successfully.");

      router.push("/admin/blogLists");

      router.refresh();

    } catch (error) {
      console.error(
        "Update blog list error:",
        error
      );

      alert(
        "Something went wrong while updating the blog list."
      );

    } finally {
      setUpdating(false);
    }
  }

  // =========================
  // LOADING
  // =========================

  if (loading) {
    return (
      <div className="blog-list-page">
        <div className="edit-card">
          <p>Loading Blog List...</p>
        </div>
      </div>
    );
  }

  // =========================
  // PAGE
  // =========================

  return (
    <div className="blog-list-page">

      <div className="edit-card">

        <h1>Edit Blog List</h1>

        <p className="form-description">
          Update the blog list and connect it
          to a specific blog section.
        </p>

        <form
          className="edit-form"
          onSubmit={updateList}
        >

          {/* BLOG */}

          <div className="form-group">

            <label htmlFor="blogId">
              Select Blog
            </label>

            <select
              id="blogId"
              name="blogId"
              value={form.blogId}
              onChange={handleChange}
              required
            >

              <option value="">
                Select a blog
              </option>

              {blogs.map((blog) => (
                <option
                  key={blog.id}
                  value={blog.id}
                >
                  {blog.title}
                </option>
              ))}

            </select>

          </div>


          {/* SECTION */}

          <div className="form-group">

            <label htmlFor="sectionId">
              Select Section
            </label>

            <select
              id="sectionId"
              name="sectionId"
              value={form.sectionId}
              onChange={handleChange}
              required
            >

              <option value="">
                Select a section
              </option>

              {sections
                .filter(
                  (section) =>
                    section.blogId ===
                    Number(form.blogId)
                )
                .sort(
                  (a, b) =>
                    a.displayOrder -
                    b.displayOrder
                )
                .map((section) => (
                  <option
                    key={section.id}
                    value={section.id}
                  >
                    Section {section.displayOrder}
                    {section.heading
                      ? ` - ${section.heading}`
                      : ""}
                  </option>
                ))}

            </select>

            <small>
              Select the section where this list
              should appear.
            </small>

          </div>


          {/* LIST HEADING */}

          <div className="form-group">

            <label htmlFor="listHeading">
              List Heading
            </label>

            <input
              id="listHeading"
              type="text"
              name="listHeading"
              value={form.listHeading}
              placeholder="Example: Key aspects include"
              onChange={handleChange}
              required
            />

          </div>


          {/* LIST PARAGRAPH */}

          <div className="form-group">

            <label htmlFor="listParagraph">
              List Paragraph
            </label>

            <textarea
              id="listParagraph"
              name="listParagraph"
              value={form.listParagraph}
              placeholder="Enter list description"
              onChange={handleChange}
              rows={5}
            />

          </div>


          {/* BUTTON */}

          <button
            type="submit"
            className="update-btn"
            disabled={updating}
          >
            {updating
              ? "Updating..."
              : "Update Blog List"}
          </button>

        </form>

      </div>

    </div>
  );
}