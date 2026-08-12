// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import "../BlogList.css";
// import "./CreateBlogList.css";

// interface Blog {

//     id:number;

//     title:string;

// }



// export default function CreateBlogList(){


// const router = useRouter();



// const [blogs,setBlogs] = useState<Blog[]>([]);



// const [form,setForm] = useState({

//     blogId:"",

//     listHeading:"",

//     listParagraph:""

// });






// useEffect(()=>{


// fetch("/api/blogs")

// .then(res=>res.json())

// .then(data=>{

// setBlogs(data);

// });


// },[]);






// function handleChange(e:any){


// setForm({

// ...form,

// [e.target.name]:e.target.value

// });


// }








// async function createList(e:any){


// e.preventDefault();



// const res = await fetch("/api/blogLists",{


// method:"POST",


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


// alert("Blog List Created");


// router.push("/admin/blogLists");


// }



// }








// return (



// <div className="create-page">


// <div className="create-card">



// <h1>

// Create Blog List

// </h1>





// <form

// className="create-form"

// onSubmit={createList}

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

// placeholder="List Heading"

// value={form.listHeading}

// onChange={handleChange}

// required

// />







// <textarea


// name="listParagraph"

// placeholder="List Paragraph"

// value={form.listParagraph}

// onChange={handleChange}

// />








// <button

// className="create-btn"

// >

// Create List

// </button>





// </form>



// </div>


// </div>



// )


// }

// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import "../BlogList.css";
// import "./CreateBlogList.css";

// interface Blog {
//   id: number;
//   title: string;
// }

// export default function CreateBlogList() {
//   const router = useRouter();

//   const [blogs, setBlogs] = useState<Blog[]>([]);

//   const [form, setForm] = useState({
//     blogId: "",
//     listHeading: "",
//     listParagraph: "",
//   });

//   // GET BLOGS
//   useEffect(() => {
//     async function getBlogs() {
//       try {
//         const res = await fetch("/api/blogs");
//         const data = await res.json();

//         setBlogs(data);
//       } catch (error) {
//         console.error("Error fetching blogs:", error);
//       }
//     }

//     getBlogs();
//   }, []);

//   // HANDLE INPUT CHANGE
//   function handleChange(
//     e: React.ChangeEvent<
//       HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
//     >
//   ) {
//     const { name, value } = e.target;

//     setForm((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   }

//   // CREATE BLOG LIST
//   async function createList(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();

//     try {
//       const res = await fetch("/api/blogLists", {
//         method: "POST",
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
//         alert(data.error || "Failed to create blog list");
//         return;
//       }

//       alert("Blog List Created Successfully");

//       router.push("/admin/blogLists");
//     } catch (error) {
//       console.error("Create Blog List Error:", error);
//       alert("Something went wrong");
//     }
//   }

//   return (
//     <div className="create-page">
//       <div className="create-card">
//         <h1>Create Blog List</h1>

//         <form className="create-form" onSubmit={createList}>
//           {/* SELECT BLOG */}
//           <div className="form-group">
//             <label htmlFor="blogId">Select Blog</label>

//             <select
//               id="blogId"
//               name="blogId"
//               value={form.blogId}
//               onChange={handleChange}
//               required
//             >
//               <option value="">Select a blog</option>

//               {blogs.map((blog) => (
//                 <option key={blog.id} value={blog.id}>
//                   {blog.title}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {/* LIST HEADING */}
//           <div className="form-group">
//             <label htmlFor="listHeading">List Heading</label>

//             <input
//               id="listHeading"
//               type="text"
//               name="listHeading"
//               placeholder="Enter list heading"
//               value={form.listHeading}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           {/* LIST PARAGRAPH */}
//           <div className="form-group">
//             <label htmlFor="listParagraph">List Paragraph</label>

//             <textarea
//               id="listParagraph"
//               name="listParagraph"
//               placeholder="Enter list paragraph"
//               value={form.listParagraph}
//               onChange={handleChange}
//               rows={6}
//             />
//           </div>

//           {/* BUTTONS */}
//           <div className="form-actions">
//             <button
//               type="button"
//               className="cancel-btn"
//               onClick={() => router.push("/admin/blogLists")}
//             >
//               Cancel
//             </button>

//             <button type="submit" className="create-btn">
//               Create Blog List
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import "../BlogList.css";
import "./CreateBlogList.css";

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

export default function CreateBlogList() {
  const router = useRouter();

  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [sections, setSections] = useState<BlogSection[]>([]);

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    blogId: "",
    sectionId: "",
    listHeading: "",
    listParagraph: "",
  });

  // =========================
  // GET BLOGS + SECTIONS
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

        // GET BLOG SECTIONS
        const sectionRes = await fetch("/api/blogSections");

        if (!sectionRes.ok) {
          throw new Error("Failed to fetch sections");
        }

        const sectionData = await sectionRes.json();

        setSections(sectionData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    getData();
  }, []);

  // =========================
  // HANDLE INPUT CHANGE
  // =========================

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = e.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,

      // Reset section when blog changes
      ...(name === "blogId"
        ? {
            sectionId: "",
          }
        : {}),
    }));
  }

  // =========================
  // CREATE BLOG LIST
  // =========================

  async function createList(e: React.FormEvent) {
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
      alert("Please enter list heading.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/blogLists", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          blogId: Number(form.blogId),

          sectionId: Number(form.sectionId),

          listHeading: form.listHeading,

          listParagraph: form.listParagraph || null,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || "Failed to create blog list");
        return;
      }

      alert("Blog List Created Successfully");

      router.push("/admin/blogLists");

      router.refresh();
    } catch (error) {
      console.error("Create Blog List Error:", error);

      alert("Something went wrong while creating the blog list.");
    } finally {
      setLoading(false);
    }
  }

  // =========================
  // FILTER SECTIONS
  // =========================

  const selectedSections = sections
    .filter(
      (section) =>
        String(section.blogId) === form.blogId
    )
    .sort(
      (a, b) =>
        a.displayOrder - b.displayOrder
    );

  // =========================
  // PAGE
  // =========================

  return (
    <div className="blog-list-page">

      <div className="blog-list-card">

        <h1>Create Blog List</h1>

        <p className="form-description">
          Create a list and attach it to a specific
          section of your blog.
        </p>

        <form
          className="create-form"
          onSubmit={createList}
        >

          {/* =========================
              SELECT BLOG
          ========================= */}

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


          {/* =========================
              SELECT SECTION
          ========================= */}

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
              disabled={!form.blogId}
            >

              <option value="">
                {form.blogId
                  ? "Select a section"
                  : "First select a blog"}
              </option>

              {selectedSections.map(
                (section) => (

                  <option
                    key={section.id}
                    value={section.id}
                  >
                    Section {section.displayOrder}

                    {section.heading
                      ? ` — ${section.heading}`
                      : ""}
                  </option>

                )
              )}

            </select>

            {form.blogId &&
              selectedSections.length === 0 && (

                <small>
                  No sections found for this
                  blog. Please create a section
                  first.
                </small>

              )}

          </div>


          {/* =========================
              LIST HEADING
          ========================= */}

          <div className="form-group">

            <label htmlFor="listHeading">
              List Heading
            </label>

            <input
              id="listHeading"
              type="text"
              name="listHeading"
              placeholder="Example: Key aspects include"
              value={form.listHeading}
              onChange={handleChange}
              required
            />

          </div>


          {/* =========================
              LIST PARAGRAPH
          ========================= */}

          <div className="form-group">

            <label htmlFor="listParagraph">
              List Paragraph
            </label>

            <textarea
              id="listParagraph"
              name="listParagraph"
              placeholder="Enter list description or paragraph"
              value={form.listParagraph}
              onChange={handleChange}
              rows={6}
            />

          </div>


          {/* =========================
              BUTTONS
          ========================= */}

          <div className="form-actions">

            <button
              type="button"
              className="cancel-btn"
              onClick={() =>
                router.push("/admin/blogLists")
              }
              disabled={loading}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="create-btn"
              disabled={loading}
            >
              {loading
                ? "Creating..."
                : "Create Blog List"}
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}