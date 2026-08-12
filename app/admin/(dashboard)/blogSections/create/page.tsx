// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import "../BlogSection.css";


// interface Blog{

// id:number;

// title:string;

// }



// export default function CreateBlogSection(){


// const router = useRouter();



// const [blogs,setBlogs] = useState<Blog[]>([]);



// const [form,setForm] = useState({

// blogId:"",

// heading:"",

// paragraph:"",

// displayOrder:""

// });






// // GET BLOGS FOR DROPDOWN

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







// async function createSection(e:any){


// e.preventDefault();




// const res = await fetch("/api/blogSections",{


// method:"POST",


// headers:{


// "Content-Type":"application/json"


// },


// body:JSON.stringify({


// blogId:Number(form.blogId),


// heading:form.heading,


// paragraph:form.paragraph,


// displayOrder:Number(form.displayOrder)


// })


// });





// if(res.ok){


// alert("Section Created Successfully");


// router.push("/admin/blogSections");


// }



// }








// return (


// <div className="edit-page">



// <div className="edit-card">



// <h1>

// Create Blog Section

// </h1>





// <form

// className="edit-form"

// onSubmit={createSection}

// >





// <select

// name="blogId"

// value={form.blogId}

// onChange={handleChange}

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

// name="heading"

// placeholder="Section Heading"

// value={form.heading}

// onChange={handleChange}

// />






// <textarea

// name="paragraph"

// placeholder="Section Paragraph"

// value={form.paragraph}

// onChange={handleChange}

// />






// <input

// type="number"

// name="displayOrder"

// placeholder="Display Order"

// value={form.displayOrder}

// onChange={handleChange}

// />







// <button

// className="update-btn"

// type="submit"

// >


// Create Section


// </button>





// </form>




// </div>




// </div>


// )


// }

// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import "../BlogSection.css";

// interface Blog {
//   id: number;
//   title: string;
// }

// export default function CreateBlogSection() {
//   const router = useRouter();

//   const [blogs, setBlogs] = useState<Blog[]>([]);
//   const [loading, setLoading] = useState(false);

//   const [form, setForm] = useState({
//     blogId: "",
//     heading: "",
//     paragraph: "",
//     displayOrder: "",
//   });

//   // =========================
//   // GET BLOGS FOR DROPDOWN
//   // =========================

//   useEffect(() => {
//     async function getBlogs() {
//       try {
//         const res = await fetch("/api/blogs");

//         if (!res.ok) {
//           throw new Error("Failed to fetch blogs");
//         }

//         const data = await res.json();

//         setBlogs(data);
//       } catch (error) {
//         console.error("Error fetching blogs:", error);
//       }
//     }

//     getBlogs();
//   }, []);

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
//   // CREATE SECTION
//   // =========================

//   async function createSection(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();

//     setLoading(true);

//     try {
//       const res = await fetch("/api/blogSections", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           blogId: Number(form.blogId),
//           heading: form.heading,
//           paragraph: form.paragraph,
//           displayOrder: Number(form.displayOrder),
//         }),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         alert(data.error || "Failed to create blog section");
//         return;
//       }

//       alert("Blog Section Created Successfully");

//       router.push("/admin/blogSections");
//       router.refresh();
//     } catch (error) {
//       console.error("Create section error:", error);

//       alert("Something went wrong while creating the section.");
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <div className="edit-page">
//       <div className="edit-card">

//         <h1>Create Blog Section</h1>

//         <p className="form-description">
//           Add a new heading and paragraph section to your blog.
//         </p>

//         <form
//           className="edit-form"
//           onSubmit={createSection}
//         >

//           {/* BLOG */}

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


//           {/* HEADING */}

//           <div className="form-group">

//             <label htmlFor="heading">
//               Section Heading
//             </label>

//             <input
//               id="heading"
//               name="heading"
//               type="text"
//               placeholder="Enter section heading"
//               value={form.heading}
//               onChange={handleChange}
//               required
//             />

//           </div>


//           {/* PARAGRAPH */}

//           <div className="form-group">

//             <label htmlFor="paragraph">
//               Section Paragraph
//             </label>

//             <textarea
//               id="paragraph"
//               name="paragraph"
//               placeholder="Enter section paragraph"
//               value={form.paragraph}
//               onChange={handleChange}
//               required
//             />

//           </div>


//           {/* DISPLAY ORDER */}

//           <div className="form-group">

//             <label htmlFor="displayOrder">
//               Display Order
//             </label>

//             <input
//               id="displayOrder"
//               name="displayOrder"
//               type="number"
//               min="1"
//               placeholder="Example: 1"
//               value={form.displayOrder}
//               onChange={handleChange}
//               required
//             />

//             <small>
//               Enter 1 for the first section, 2 for the second,
//               3 for the third, and so on.
//             </small>

//           </div>


//           {/* BUTTON */}

//           <button
//             type="submit"
//             className="create-btn"
//             disabled={loading}
//           >
//             {loading
//               ? "Creating..."
//               : "Create Blog Section"}
//           </button>

//         </form>

//       </div>
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "../BlogSection.css";

interface Blog {
  id: number;
  title: string;
}

interface BlogSectionForm {
  blogId: string;
  heading: string;
  paragraph: string;
  image: string;
  video: string;
  displayOrder: string;
}

export default function CreateBlogSection() {
  const router = useRouter();

  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState<BlogSectionForm>({
    blogId: "",
    heading: "",
    paragraph: "",
    image: "",
    video: "",
    displayOrder: "",
  });

  // =========================
  // GET BLOGS
  // =========================

  useEffect(() => {
    async function getBlogs() {
      try {
        const res = await fetch("/api/blogs");

        if (!res.ok) {
          throw new Error("Failed to fetch blogs");
        }

        const data = await res.json();

        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    }

    getBlogs();
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
    }));
  }

  // =========================
  // CREATE BLOG SECTION
  // =========================

  async function createSection(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await fetch("/api/blogSections", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          blogId: Number(form.blogId),
          heading: form.heading,
          paragraph: form.paragraph,
          image: form.image || null,
          video: form.video || null,
          displayOrder: Number(form.displayOrder),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || "Failed to create blog section");
        return;
      }

      alert("Blog Section Created Successfully");

      router.push("/admin/blogSections");
      router.refresh();
    } catch (error) {
      console.error("Create section error:", error);

      alert("Something went wrong while creating the section.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="create-page">
      <div className="create-card">

        <h1>Create Blog Section</h1>

        <p className="form-description">
          Add a heading, paragraph, image, or video to your blog section.
        </p>

        <form
          className="create-form"
          onSubmit={createSection}
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

          {/* HEADING */}

          <div className="form-group">
            <label htmlFor="heading">
              Section Heading
            </label>

            <input
              id="heading"
              name="heading"
              type="text"
              placeholder="Enter section heading"
              value={form.heading}
              onChange={handleChange}
              required
            />
          </div>

          {/* PARAGRAPH */}

          <div className="form-group">
            <label htmlFor="paragraph">
              Section Paragraph
            </label>

            <textarea
              id="paragraph"
              name="paragraph"
              placeholder="Enter section paragraph"
              value={form.paragraph}
              onChange={handleChange}
              required
            />
          </div>

          {/* IMAGE */}

          <div className="form-group">
            <label htmlFor="image">
              Section Image URL
            </label>

            <input
              id="image"
              name="image"
              type="url"
              placeholder="https://example.com/image.jpg"
              value={form.image}
              onChange={handleChange}
            />

            <small>
              Add an image URL for this section.
            </small>
          </div>

          {/* VIDEO */}

          <div className="form-group">
            <label htmlFor="video">
              Section Video URL
            </label>

            <input
              id="video"
              name="video"
              type="url"
              placeholder="https://www.youtube.com/embed/..."
              value={form.video}
              onChange={handleChange}
            />

            <small>
              Add a YouTube embed URL if this section has a video.
            </small>
          </div>

          {/* DISPLAY ORDER */}

          <div className="form-group">
            <label htmlFor="displayOrder">
              Display Order
            </label>

            <input
              id="displayOrder"
              name="displayOrder"
              type="number"
              min="1"
              placeholder="Example: 1"
              value={form.displayOrder}
              onChange={handleChange}
              required
            />

            <small>
              1 = first section, 2 = second section,
              3 = third section, and so on.
            </small>
          </div>

          {/* BUTTON */}

          <button
            type="submit"
            className="create-btn"
            disabled={loading}
          >
            {loading
              ? "Creating..."
              : "Create Blog Section"}
          </button>

        </form>
      </div>
    </div>
  );
}
