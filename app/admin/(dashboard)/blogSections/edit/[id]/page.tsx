// "use client";

// import { useEffect, useState } from "react";
// import { useParams, useRouter } from "next/navigation";
// import "../../BlogSection.css";


// interface Blog{

// id:number;

// title:string;

// }



// export default function EditBlogSection(){


// const params = useParams();

// const router = useRouter();


// const id = params.id;




// const [blogs,setBlogs] = useState<Blog[]>([]);




// const [form,setForm] = useState({

// blogId:"",

// heading:"",

// paragraph:"",

// displayOrder:""

// });







// // GET BLOGS

// useEffect(()=>{


// fetch("/api/blogs")

// .then(res=>res.json())

// .then(data=>{

// setBlogs(data);

// });


// },[]);







// // GET SINGLE SECTION

// useEffect(()=>{


// async function getSection(){


// const res = await fetch(`/api/blogSections/${id}`);


// const data = await res.json();





// setForm({


// blogId:String(data.blogId),


// heading:data.heading || "",


// paragraph:data.paragraph || "",


// displayOrder:String(data.displayOrder || "")


// });



// }



// if(id){

// getSection();

// }



// },[id]);









// function handleChange(e:any){


// setForm({


// ...form,


// [e.target.name]:e.target.value


// });


// }








// async function updateSection(e:any){


// e.preventDefault();




// const res = await fetch(`/api/blogSections/${id}`,{


// method:"PUT",


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


// alert("Section Updated Successfully");


// router.push("/admin/blogSections");


// }



// }








// return (


// <div className="edit-page">



// <div className="edit-card">



// <h1>

// Edit Blog Section

// </h1>





// <form

// className="edit-form"

// onSubmit={updateSection}

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

// type="submit"

// className="update-btn"

// >


// Update Section


// </button>





// </form>




// </div>




// </div>



// )


// }
"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import "../../BlogSection.css";

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

export default function EditBlogSection() {
  const params = useParams();
  const router = useRouter();

  const id = params.id as string;

  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);

  const [form, setForm] = useState<BlogSectionForm>({
    blogId: "",
    heading: "",
    paragraph: "",
    image: "",
    video: "",
    displayOrder: "",
  });

  // =========================
  // GET ALL BLOGS
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
  // GET SINGLE BLOG SECTION
  // =========================
  useEffect(() => {
    async function getSection() {
      try {
        const res = await fetch(`/api/blogSections/${id}`);

        if (!res.ok) {
          throw new Error("Failed to fetch blog section");
        }

        const data = await res.json();

        setForm({
          blogId: String(data.blogId ?? ""),
          heading: data.heading ?? "",
          paragraph: data.paragraph ?? "",
          image: data.image ?? "",
          video: data.video ?? "",
          displayOrder: String(data.displayOrder ?? ""),
        });
      } catch (error) {
        console.error("Error fetching section:", error);
        alert("Failed to load blog section.");
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      getSection();
    }
  }, [id]);

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
  // UPDATE BLOG SECTION
  // =========================
  async function updateSection(e: React.FormEvent) {
    e.preventDefault();

    if (!form.blogId) {
      alert("Please select a blog.");
      return;
    }

    if (!form.heading.trim()) {
      alert("Please enter section heading.");
      return;
    }

    if (!form.paragraph.trim()) {
      alert("Please enter section paragraph.");
      return;
    }

    if (!form.displayOrder) {
      alert("Please enter display order.");
      return;
    }

    setUpdating(true);

    try {
      const res = await fetch(`/api/blogSections/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          blogId: Number(form.blogId),
          heading: form.heading,
          paragraph: form.paragraph,
          image: form.image,
          video: form.video,
          displayOrder: Number(form.displayOrder),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || "Failed to update blog section.");
        return;
      }

      alert("Blog Section Updated Successfully");

      router.push("/admin/blogSections");
      router.refresh();
    } catch (error) {
      console.error("Update error:", error);
      alert("Something went wrong while updating the section.");
    } finally {
      setUpdating(false);
    }
  }

  // =========================
  // LOADING
  // =========================
  if (loading) {
    return (
      <div className="edit-page">
        <div className="edit-card">
          <h1>Loading Blog Section...</h1>
        </div>
      </div>
    );
  }

  // =========================
  // FORM
  // =========================
  return (
    <div className="edit-page">
      <div className="edit-card">
        <h1>Edit Blog Section</h1>

        <form className="edit-form" onSubmit={updateSection}>
          {/* BLOG */}
          <div className="form-group">
            <label htmlFor="blogId">Select Blog</label>

            <select
              id="blogId"
              name="blogId"
              value={form.blogId}
              onChange={handleChange}
              required
            >
              <option value="">Select a blog</option>

              {blogs.map((blog) => (
                <option key={blog.id} value={blog.id}>
                  {blog.title}
                </option>
              ))}
            </select>
          </div>

          {/* HEADING */}
          <div className="form-group">
            <label htmlFor="heading">Section Heading</label>

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
            <label htmlFor="paragraph">Section Paragraph</label>

            <textarea
              id="paragraph"
              name="paragraph"
              placeholder="Enter section paragraph"
              value={form.paragraph}
              onChange={handleChange}
              rows={7}
              required
            />
          </div>

          {/* IMAGE */}
          <div className="form-group">
            <label htmlFor="image">Section Image URL</label>

            <input
              id="image"
              name="image"
              type="text"
              placeholder="Enter section image URL"
              value={form.image}
              onChange={handleChange}
            />

            {form.image && (
              <div className="image-preview">
                <p>Image Preview</p>

                <img
                  src={form.image}
                  alt="Section preview"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
            )}
          </div>

          {/* VIDEO */}
          <div className="form-group">
            <label htmlFor="video">Section Video URL</label>

            <input
              id="video"
              name="video"
              type="text"
              placeholder="Enter YouTube video URL"
              value={form.video}
              onChange={handleChange}
            />

            <small>
              Example: https://www.youtube.com/embed/VIDEO_ID
            </small>
          </div>

          {/* DISPLAY ORDER */}
          <div className="form-group">
            <label htmlFor="displayOrder">Display Order</label>

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
              1 = first section, 2 = second section, 3 = third section, etc.
            </small>
          </div>

          {/* BUTTONS */}
          <div className="form-actions">
            <button
              type="button"
              className="cancel-btn"
              onClick={() => router.push("/admin/blogSections")}
              disabled={updating}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="update-btn"
              disabled={updating}
            >
              {updating ? "Updating..." : "Update Section"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

