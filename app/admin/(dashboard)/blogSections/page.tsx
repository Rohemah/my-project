// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import "./BlogSection.css";


// interface BlogSection {

//     id:number;

//     heading:string;

//     paragraph:string;

//     displayOrder:number;

//     blog:{
//         title:string;
//     }

// }



// export default function BlogSectionsPage(){


// const [sections,setSections] = useState<BlogSection[]>([]);




// useEffect(()=>{


// fetch("/api/blogSections")

// .then(res=>res.json())

// .then(data=>{

// setSections(data);

// });


// },[]);






// async function deleteSection(id:number){


// const confirmDelete = confirm(
// "Delete this section?"
// );



// if(!confirmDelete) return;



// const res = await fetch(

// `/api/blogSections/${id}`,

// {

// method:"DELETE"

// }

// );




// if(res.ok){


// setSections(

// sections.filter(

// (section)=>section.id !== id

// )

// );


// }



// }





// return (

// <div className="blog-section-page">



// <div className="section-header">


// <h1>

// Blog Sections

// </h1>



// <Link href="/admin/blogSections/create">


// <button className="add-btn">

// Add Section

// </button>


// </Link>


// </div>






// <table>


// <thead>

// <tr>

// <th>
// Heading
// </th>


// <th>
// Blog
// </th>


// <th>
// Order
// </th>


// <th>
// Actions
// </th>


// </tr>


// </thead>






// <tbody>


// {

// sections.map((section)=>(


// <tr key={section.id}>


// <td>

// {section.heading}

// </td>




// <td>

// {section.blog?.title}

// </td>





// <td>

// {section.displayOrder}

// </td>





// <td>


// <div className="actions">


// <Link

// href={`/admin/blogSections/edit/${section.id}`}

// className="edit-link"

// >


// <button className="edit-btn">

// Edit

// </button>


// </Link>





// <button

// className="delete-btn"

// onClick={()=>deleteSection(section.id)}

// >

// Delete

// </button>



// </div>


// </td>



// </tr>


// ))


// }



// </tbody>



// </table>




// </div>

// )


// }
// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import "./BlogSection.css";

// interface BlogSection {
//   id: number;
//   heading: string | null;
//   paragraph: string | null;
//   image: string | null;
//   video: string | null;
//   displayOrder: number;

//   blog: {
//     title: string;
//   };
// }

// export default function BlogSectionsPage() {
//   const [sections, setSections] = useState<BlogSection[]>([]);
//   const [loading, setLoading] = useState(true);

//   // GET ALL BLOG SECTIONS
//   useEffect(() => {
//     async function getSections() {
//       try {
//         const res = await fetch("/api/blogSections");

//         if (!res.ok) {
//           throw new Error("Failed to fetch blog sections");
//         }

//         const data: BlogSection[] = await res.json();

//         setSections(data);
//       } catch (error) {
//         console.error("Error fetching sections:", error);
//       } finally {
//         setLoading(false);
//       }
//     }

//     getSections();
//   }, []);

//   // DELETE SECTION
//   async function deleteSection(id: number) {
//     const confirmDelete = confirm(
//       "Are you sure you want to delete this section?"
//     );

//     if (!confirmDelete) return;

//     try {
//       const res = await fetch(`/api/blogSections/${id}`, {
//         method: "DELETE",
//       });

//       if (!res.ok) {
//         throw new Error("Failed to delete section");
//       }

//       setSections((currentSections) =>
//         currentSections.filter(
//           (section) => section.id !== id
//         )
//       );
//     } catch (error) {
//       console.error("Error deleting section:", error);

//       alert("Failed to delete section");
//     }
//   }

//   // LOADING
//   if (loading) {
//     return (
//       <div className="section-page">
//         <p>Loading Blog Sections...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="section-page">

//       {/* HEADER */}
//       <div className="section-header">

//         <div>
//           <h1>Blog Sections</h1>

//           <p>
//             Manage headings, paragraphs, images and videos
//             for your blogs.
//           </p>
//         </div>

//         <Link href="/admin/blogSections/create">
//           <button className="add-btn">
//             + Add Section
//           </button>
//         </Link>

//       </div>

//       {/* EMPTY STATE */}
//       {sections.length === 0 ? (
//         <div className="empty-state">

//           <h2>No Blog Sections Found</h2>

//           <p>
//             Create your first blog section.
//           </p>

//           <Link href="/admin/blogSections/create">
//             <button className="add-btn">
//               Create Section
//             </button>
//           </Link>

//         </div>
//       ) : (

//         <div className="table-container">

//           <table>

//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>Blog</th>
//                 <th>Heading</th>
//                 <th>Paragraph</th>
//                 <th>Image</th>
//                 <th>Video</th>
//                 <th>Order</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>

//             <tbody>

//               {sections
//                 .sort(
//                   (a, b) =>
//                     a.displayOrder - b.displayOrder
//                 )
//                 .map((section) => (

//                   <tr key={section.id}>

//                     {/* ID */}
//                     <td>
//                       {section.id}
//                     </td>

//                     {/* BLOG */}
//                     <td>
//                       <strong>
//                         {section.blog?.title ||
//                           "Unknown Blog"}
//                       </strong>
//                     </td>

//                     {/* HEADING */}
//                     <td>
//                       {section.heading || "No heading"}
//                     </td>

//                     {/* PARAGRAPH */}
//                     <td className="paragraph-cell">
//                       {section.paragraph
//                         ? section.paragraph.length > 80
//                           ? section.paragraph.substring(
//                               0,
//                               80
//                             ) + "..."
//                           : section.paragraph
//                         : "No paragraph"}
//                     </td>

//                     {/* IMAGE */}
//                     <td>
//                       {section.image ? (
//                         <span className="status-badge available">
//                           Yes
//                         </span>
//                       ) : (
//                         <span className="status-badge empty">
//                           No
//                         </span>
//                       )}
//                     </td>

//                     {/* VIDEO */}
//                     <td>
//                       {section.video ? (
//                         <span className="status-badge available">
//                           Yes
//                         </span>
//                       ) : (
//                         <span className="status-badge empty">
//                           No
//                         </span>
//                       )}
//                     </td>

//                     {/* DISPLAY ORDER */}
//                     <td>
//                       <span className="order-badge">
//                         {section.displayOrder}
//                       </span>
//                     </td>

//                     {/* ACTIONS */}
//                     <td>

//                       <div className="action-buttons">

//                         <Link
//                           href={`/admin/blogSections/edit/${section.id}`}
//                           className="edit-link"
//                         >
//                           Edit
//                         </Link>

//                         <button
//                           className="delete-btn"
//                           onClick={() =>
//                             deleteSection(section.id)
//                           }
//                         >
//                           Delete
//                         </button>

//                       </div>

//                     </td>

//                   </tr>

//                 ))}

//             </tbody>

//           </table>

//         </div>

//       )}

//     </div>
//   );
// }
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import "./BlogSection.css";

interface BlogSection {
  id: number;
  heading: string | null;
  paragraph: string | null;
  image: string | null;
  video: string | null;
  displayOrder: number;

  blog: {
    title: string;
  };
}

export default function BlogSectionsPage() {
  const [sections, setSections] = useState<BlogSection[]>([]);
  const [loading, setLoading] = useState(true);

  // GET ALL BLOG SECTIONS
  useEffect(() => {
    async function getSections() {
      try {
        const res = await fetch("/api/blogSections");

        if (!res.ok) {
          throw new Error("Failed to fetch blog sections");
        }

        const data: BlogSection[] = await res.json();

        setSections(data);
      } catch (error) {
        console.error("Error fetching sections:", error);
      } finally {
        setLoading(false);
      }
    }

    getSections();
  }, []);

  // DELETE SECTION
  async function deleteSection(id: number) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this section?"
    );

    if (!confirmDelete) return;

    try {
      const res = await fetch(`/api/blogSections/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (!res.ok) {
        console.error(data);
        throw new Error("Failed to delete section");
      }

      setSections((currentSections) =>
        currentSections.filter(
          (section) => section.id !== id
        )
      );

      alert("Blog Section Deleted Successfully");

    } catch (error) {
      console.error("Error deleting section:", error);

      alert("Failed to delete section");
    }
  }

  // LOADING
  if (loading) {
    return (
      <div className="blog-sections-page">
        <div className="empty-state">
          <p>Loading Blog Sections...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-sections-page">

      {/* HEADER */}

      <div className="section-header">

        <div>
          <h1>Blog Sections</h1>

          <p>
            Manage the sections of your blog articles.
          </p>
        </div>

        <Link
          href="/admin/blogSections/create"
          className="add-btn"
        >
          + Add Section
        </Link>

      </div>


      {/* EMPTY STATE */}

      {sections.length === 0 ? (

        <div className="empty-state">

          <h2>No Blog Sections Found</h2>

          <p>
            Create your first blog section.
          </p>

          <Link
            href="/admin/blogSections/create"
            className="add-btn"
          >
            Create Section
          </Link>

        </div>

      ) : (

        <div className="table-container">

          <table>

            <thead>

              <tr>
                <th>ID</th>
                <th>Blog</th>
                <th>Heading</th>
                <th>Paragraph</th>
                <th>Image</th>
                <th>Video</th>
                <th>Order</th>
                <th>Actions</th>
              </tr>

            </thead>

            <tbody>

              {[...sections]
                .sort(
                  (a, b) =>
                    a.displayOrder - b.displayOrder
                )
                .map((section) => (

                  <tr key={section.id}>

                    {/* ID */}

                    <td>
                      {section.id}
                    </td>


                    {/* BLOG */}

                    <td>
                      <strong>
                        {section.blog?.title ||
                          "Unknown Blog"}
                      </strong>
                    </td>


                    {/* HEADING */}

                    <td>
                      {section.heading ||
                        "No heading"}
                    </td>


                    {/* PARAGRAPH */}

                    <td className="paragraph-cell">

                      {section.paragraph
                        ? section.paragraph.length > 80
                          ? section.paragraph.substring(
                              0,
                              80
                            ) + "..."
                          : section.paragraph
                        : "No paragraph"}

                    </td>


                    {/* IMAGE */}

                    <td>

                      {section.image ? (

                        <span className="status-badge available">
                          Yes
                        </span>

                      ) : (

                        <span className="status-badge empty">
                          No
                        </span>

                      )}

                    </td>


                    {/* VIDEO */}

                    <td>

                      {section.video ? (

                        <span className="status-badge available">
                          Yes
                        </span>

                      ) : (

                        <span className="status-badge empty">
                          No
                        </span>

                      )}

                    </td>


                    {/* ORDER */}

                    <td>

                      <span className="order-badge">
                        {section.displayOrder}
                      </span>

                    </td>


                    {/* ACTIONS */}

                    <td>

                      <div className="action-buttons">

                        <Link
                          href={`/admin/blogSections/edit/${section.id}`}
                          className="edit-link"
                        >
                          Edit
                        </Link>

                        <button
                          type="button"
                          className="delete-btn"
                          onClick={() =>
                            deleteSection(section.id)
                          }
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