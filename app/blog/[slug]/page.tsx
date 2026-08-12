// import { blogs } from "@/app/data/blogs";
// import { notFound } from "next/navigation";
// import Footer from "@/app//components/Footer";
// import Link from "next/link";
// import "./blog-details.css";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import FooterCTA from "@/app/components/FooterCTA";
// import SignInNavbar from "@/app/components/SignInNavbar";


// export default async function BlogDetails({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) {
//   const { slug } = await params;
//   const response = await fetch(
//   `http://localhost:3000/api/blog-by-slug/${slug}`,
//   {
//     cache: "no-store",
//   }
// );

// if (!response.ok) {
//   notFound();
// }

// const blog = await response.json();

// const relatedResponse = await fetch(
//   "http://localhost:3000/api/blogs",
//   {
//     cache: "no-store",
//   }
// );

// const blogs = await relatedResponse.json();

  // const blog = blogs.find((item) => item.slug === slug);

  // if (!blog) {
  //   notFound();
  // }

  // return (
  //   <>
  //   <SignInNavbar/>
  //   <section className="blog-details">
     
  //     <div className="blog-info">
       
  //       <p className="date" data-aos="fade-up">Last update on:   {blog.date}</p>
  //        <h1 data-aos="fade-up">{blog.title}</h1>
  //         <img data-aos="fade-up"
  //       src={blog.image}
  //       alt={blog.title}
  //     />
    

        {/* <span>{blog.category}</span> */}
//       <section className="author-card">

//   <div className="author-left">

//     <img
//       src={blog.authorImage}
//       alt={blog.authorName}
//     />

//     <div className="author-info">

//       <h2>{blog.authorName}</h2>

//       <p>{blog.authorRole}</p>

//     </div>

//   </div>
//   <Link href="/blog"  className="discover-link">
//   <button className="discover-btn">
//      {blog.authorButton} →
   
//   </button>
// </Link>

// </section>
       

        

//         <p className="artical" data-aos="fade-up">{blog.articleOne}</p>
//         <p data-aos="fade-up">{blog.articleTwo}</p>
        {/* <h2 data-aos="fade-up">{blog.heading1}</h2>
        <p data-aos="fade-up">{blog.paragraph1}</p>
        <h2 data-aos="fade-up">{blog.listheading}</h2>
      */}




{/* <ul className="blog-list" data-aos="fade-up">
  {blog.list.map((item, index) => (
    <li key={index}>{item}</li>
  ))}
</ul> */}
{/* {blog.sections.map((section: any) => (
  <div key={section.id}>
    <h2>{section.heading}</h2>
    <p>{section.paragraph}</p>
  </div>
))}

{blog.lists.map((list: any) => (
  <div key={list.id}>
    <h2>{list.listHeading}</h2>

  

    <ul className="blog-list" data-aos="fade-up">
      {list.items.map((item: any) => (
        <li key={item.id}>
          {item.itemText}
        </li>
      ))}
    </ul>
      <p>{list.listParagraph}</p>
  </div>
))} */}
// {blog.sections?.map((section: any) => (
//   <div
//     key={section.id}
//     className="blog-section-content"
//     data-aos="fade-up"
//   >
//     {/* SECTION HEADING */}
//     {section.heading && (
//       <h2>{section.heading}</h2>
//     )}

//     {/* SECTION PARAGRAPH */}
//     {section.paragraph && (
//       <p>{section.paragraph}</p>
//     )}

//     {/* SECTION IMAGE */}
//     {section.image && (
//       <img
//         src={section.image}
//         alt={section.heading || blog.title}
//         className="section-image"
//       />
//     )}

//     {/* SECTION VIDEO */}
//     {section.video && (
//       <div className="section-video">
//         <iframe
//           src={section.video}
//           title={section.heading || "Blog video"}
//           width="100%"
//           height="450"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//           allowFullScreen
//         />
//       </div>
//     )}
//   </div>
// ))}

{/* <p data-aos="fade-up">{blog.listparagraph}</p>
<h2 data-aos="fade-up">{blog.heading2}</h2>
<p data-aos="fade-up">{blog.paragraph2}</p> */}
         {/* <div className="blog-video">
  <iframe
    src={blog.video}
    title={blog.title}
    width="100%"
    height="500"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  />
</div> */}
         
         
        {/* <h2 data-aos="fade-up">{blog.heading2}</h2>
        <p data-aos="fade-up">{blog.paragraph2}</p>
         <h2 data-aos="fade-up">{blog.heading3}</h2>
        <p data-aos="fade-up">{blog.paragraph3}</p>
         <h2 data-aos="fade-up">{blog.heading4}</h2>
        <p data-aos="fade-up">{blog.paragraph4}</p>
         <h2 data-aos="fade-up">{blog.heading5}</h2>
        <p data-aos="fade-up">{blog.paragraph5}</p>
         <h2 data-aos="fade-up">{blog.heading6}</h2>
        <p data-aos="fade-up">{blog.paragraph6}</p>
         <h2 data-aos="fade-up">{blog.heading7}</h2>
        <p data-aos="fade-up">{blog.paragraph7}</p> */}
         {/* <img data-aos="fade-up"
        src={blog.image2}
      
      /> */}
        
//          <h2 data-aos="fade-up">{blog.heading8}</h2>
//         <p data-aos="fade-up">{blog.paragraph8}</p>
        
//       </div>
     


//     </section>
//         <section className="blog-section" data-aos="fade-up" >

//   <p className="blog-subtitle" data-aos="fade-up">
//     INSIGHTS & IDEAS
//   </p>

//   <h2 className="blog-title" data-aos="fade-up">
//     Checkout our latest posts
//   </h2>

//   {/* <div className="blog-grid">

//     {blogs.slice(0, 3).map((blog) => (

//       <Link
//         key={blog.id}
//         href={`/blog/${blog.slug}`}
//         className="blog-link"
//       >

//         <div className="blog-card">

//           <img
//             src={blog.image}
//             alt={blog.title}
//           />

//           <div className="blog-content">

//             <span className="category">
//               {blog.category}
//             </span>

//             <h3>{blog.title}</h3>

//             <p className="date">
//               {blog.date}
//             </p>

//           </div>

//         </div>

//       </Link>

//     ))}

//   </div> */}
//   {blogs
//   .filter((item: any) => item.slug !== slug)
//   .slice(0, 3)
//   .map((blog: any) => (
//     <Link
//       key={blog.id}
//       href={`/blog/${blog.slug}`}
//       className="blog-link"
//     >
//       <div className="blog-card">
//         <img
//           src={blog.image}
//           alt={blog.title}
//         />

//         <div className="blog-content">
//           <span>{blog.category.name}</span>

//           <h3>{blog.title}</h3>

//           <p>{new Date(blog.date).toLocaleDateString()}</p>
//         </div>
//       </div>
//     </Link>
// ))}

// </section>
//     <FooterCTA/>
//     <Footer/>
//     </>
//   );
// }
// import { notFound } from "next/navigation";
// import Link from "next/link";

// import Footer from "@/app/components/Footer";
// import FooterCTA from "@/app/components/FooterCTA";
// import SignInNavbar from "@/app/components/SignInNavbar";

// import "./blog-details.css";

// interface BlogItem {
//   id: number;
//   itemText: string;
// }

// interface BlogList {
//   id: number;
//   listHeading: string | null;
//   listParagraph: string | null;
//   items: BlogItem[];
// }

// interface BlogSection {
//   id: number;
//   heading: string | null;
//   paragraph: string | null;
//   image: string | null;
//   video: string | null;
//   displayOrder: number;
// }

// interface Blog {
//   id: number;
//   title: string;
//   slug: string;
//   author: string;
//   authorRole: string | null;
//   authorImage: string | null;
//   authorLink: string | null;
//   date: string;
//   image: string | null;
//   articleOne: string | null;
//   articleTwo: string | null;

//   category?: {
//     id: number;
//     name: string;
//   };

//   sections: BlogSection[];
//   lists: BlogList[];
// }

// interface RelatedBlog {
//   id: number;
//   title: string;
//   slug: string;
//   image: string | null;
//   date: string;
//   category?: {
//     name: string;
//   };
// }

// export default async function BlogDetails({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) {
//   const { slug } = await params;

  // =========================
  // GET SINGLE BLOG
  // =========================

  // const response = await fetch(
  //   `http://localhost:3000/api/blog-by-slug/${slug}`,
  //   {
  //     cache: "no-store",
  //   }
  // );

  // if (!response.ok) {
  //   notFound();
  // }

  // const blog: Blog = await response.json();

  // =========================
  // GET RELATED BLOGS
  // =========================

  // const relatedResponse = await fetch(
  //   "http://localhost:3000/api/blogs",
  //   {
  //     cache: "no-store",
  //   }
  // );

  // const blogs: RelatedBlog[] = relatedResponse.ok
  //   ? await relatedResponse.json()
  //   : [];

  // // Remove current blog
  // const relatedBlogs = blogs
  //   .filter((item) => item.id !== blog.id)
  //   .slice(0, 3);

  // return (
  //   <>
  //     <SignInNavbar />

      {/* =========================
          BLOG DETAILS
      ========================= */}

      // <main className="blog-details-page">

      //   <div className="blog-info">

      //     {/* DATE */}

      //     <p className="date" data-aos="fade-up">
      //       Last update on:{" "}
      //       {new Date(blog.date).toLocaleDateString()}
      //     </p>

      //     {/* TITLE */}

      //     <h1 data-aos="fade-up">
      //       {blog.title}
      //     </h1>

      //     {/* MAIN IMAGE */}

      //     {blog.image && (
      //       <img
      //         data-aos="fade-up"
      //         src={blog.image}
      //         alt={blog.title}
      //         className="main-blog-image"
      //       />
      //     )}

      //     {/* =========================
      //         AUTHOR
      //     ========================= */}

      //     <section
      //       className="author-card"
      //       data-aos="fade-up"
      //     >

      //       {blog.authorImage && (
      //         <img
      //           src={blog.authorImage}
      //           alt={blog.author}
      //         />
      //       )}

      //       <div className="author-info">

      //         <h2>
      //           {blog.author}
      //         </h2>

      //         {blog.authorRole && (
      //           <p>
      //             {blog.authorRole}
      //           </p>
      //         )}

      //       </div>

      //     </section>

      //     {/* =========================
      //         ARTICLE ONE
      //     ========================= */}

      //     {blog.articleOne && (
      //       <p
      //         className="artical"
      //         data-aos="fade-up"
      //       >
      //         {blog.articleOne}
      //       </p>
      //     )}

          {/* =========================
              ARTICLE TWO
          ========================= */}

          // {blog.articleTwo && (
          //   <p data-aos="fade-up">
          //     {blog.articleTwo}
          //   </p>
          // )}

          {/* =========================
              BLOG SECTIONS
          ========================= */}

          // {blog.sections
          //   ?.sort(
          //     (a, b) =>
          //       a.displayOrder - b.displayOrder
          //   )
          //   .map((section) => (

          //     <section
          //       key={section.id}
          //       className="dynamic-blog-section"
          //       data-aos="fade-up"
          //     >

                {/* SECTION HEADING */}

                // {section.heading && (
                //   <h2>
                //     {section.heading}
                //   </h2>
                // )}

                // {/* SECTION PARAGRAPH */}

                // {section.paragraph && (
                //   <p>
                //     {section.paragraph}
                //   </p>
                // )}

                {/* SECTION IMAGE */}

                // {section.image && (
                //   <img
                //     src={section.image}
                //     alt={
                //       section.heading ||
                //       blog.title
                //     }
                //     className="section-image"
                //   />
                // )}

                {/* SECTION VIDEO */}

            //     {section.video && (
            //       <div className="section-video">

            //         <iframe
            //           src={section.video}
            //           title={
            //             section.heading ||
            //             "Blog video"
            //           }
            //           width="100%"
            //           height="450"
            //           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            //           allowFullScreen
            //         />

            //       </div>
            //     )}

            //   </section>

            // ))}

          {/* =========================
              BLOG LISTS
          ========================= */}

          // {blog.lists?.map((list) => (

          //   <section
          //     key={list.id}
          //     className="blog-list-section"
          //     data-aos="fade-up"
          //   >

          //     {/* LIST HEADING */}

          //     {list.listHeading && (
          //       <h2>
          //         {list.listHeading}
          //       </h2>
          //     )}

              {/* LIST PARAGRAPH */}

        //       {list.listParagraph && (
        //         <p>
        //           {list.listParagraph}
        //         </p>
        //       )}

        //       {/* LIST ITEMS */}

        //       {list.items?.length > 0 && (
        //         <ul className="blog-list">

        //           {list.items.map((item) => (
        //             <li key={item.id}>
        //               {item.itemText}
        //             </li>
        //           ))}

        //         </ul>
        //       )}

        //     </section>

        //   ))}

        // </div>

        {/* =========================
            RELATED BLOGS
        ========================= */}

//         {relatedBlogs.length > 0 && (
//           <section
//             className="related-blogs"
//             data-aos="fade-up"
//           >

//             <div className="related-header">

//               <h2>
//                 Related Blogs
//               </h2>

//               <p>
//                 Explore more articles
//                 you may find interesting.
//               </p>

//             </div>

//             <div className="related-blog-grid">

//               {relatedBlogs.map((relatedBlog) => (

//                 <Link
//                   key={relatedBlog.id}
//                   href={`/blog/${relatedBlog.slug}`}
//                   className="blog-link"
//                 >

//                   <article className="blog-card">

//                     {relatedBlog.image && (
//                       <img
//                         src={relatedBlog.image}
//                         alt={relatedBlog.title}
//                       />
//                     )}

//                     <div className="blog-content">

//                       {relatedBlog.category?.name && (
//                         <span className="category">
//                           {relatedBlog.category.name}
//                         </span>
//                       )}

//                       <h3>
//                         {relatedBlog.title}
//                       </h3>

//                       <p className="date">
//                         {new Date(
//                           relatedBlog.date
//                         ).toLocaleDateString()}
//                       </p>

//                     </div>

//                   </article>

//                 </Link>

//               ))}

//             </div>

//           </section>
//         )}

//       </main>

//       <FooterCTA />

//       <Footer />

//     </>
//   );
// }
import { notFound } from "next/navigation";
import Link from "next/link";

import Footer from "@/app/components/Footer";
import FooterCTA from "@/app/components/FooterCTA";
import SignInNavbar from "@/app/components/SignInNavbar";

import "./blog-details.css";

interface BlogItem {
  id: number;
  itemText: string;
}

interface BlogList {
  id: number;
  sectionId: number | null;
  listHeading: string | null;
  listParagraph: string | null;
  items: BlogItem[];
}

interface BlogSection {
  id: number;
  heading: string | null;
  paragraph: string | null;
  image: string | null;
  video: string | null;
  displayOrder: number;
}

interface Blog {
  id: number;
  title: string;
  slug: string;
  author: string;
  authorRole: string | null;
  authorImage: string | null;
  authorLink: string | null;
  date: string;
  image: string | null;
  articleOne: string | null;
  articleTwo: string | null;

  category?: {
    id: number;
    name: string;
  };

  sections: BlogSection[];
  lists: BlogList[];
}

interface RelatedBlog {
  id: number;
  title: string;
  slug: string;
  image: string | null;
  date: string;

  category?: {
    name: string;
  };
}

export default async function BlogDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // =====================================================
  // GET SINGLE BLOG
  // =====================================================

  // const response = await fetch(
  //   `http://localhost:3000/api/blog-by-slug/${slug}`,
  //   {
  //     cache: "no-store",
  //   }
  // );
  const response = await fetch(
  `${process.env.NEXTAUTH_URL}/api/blog-by-slug/${slug}`,
  {
    cache: "no-store",
  }
);

  if (!response.ok) {
    notFound();
  }

  const blog: Blog = await response.json();

  // =====================================================
  // GET RELATED BLOGS
  // =====================================================

  // const relatedResponse = await fetch(
  //   "http://localhost:3000/api/blogs",
  //   {
  //     cache: "no-store",
  //   }
  // );
  const relatedResponse = await fetch(
  `${process.env.NEXTAUTH_URL}/api/blogs`,
  {
    cache: "no-store",
  }
);

  const blogs: RelatedBlog[] = relatedResponse.ok
    ? await relatedResponse.json()
    : [];

  // Remove current blog
  const relatedBlogs = blogs
    .filter((item) => item.id !== blog.id)
    .slice(0, 3);

  // =====================================================
  // SORT SECTIONS
  // =====================================================

  const sortedSections = [...(blog.sections || [])].sort(
    (a, b) => a.displayOrder - b.displayOrder
  );

  return (
    <>
      {/* =================================================
          BLOG DETAILS
      ================================================= */}

      <main className="blog-details-page">

        <div className="blog-info">

          {/* =================================================
              DATE
          ================================================= */}

          <p
            className="date"
            data-aos="fade-up"
          >
            Last update on:{" "}
            {new Date(blog.date).toLocaleDateString()}
          </p>

          {/* =================================================
              TITLE
          ================================================= */}

          <h1 data-aos="fade-up">
            {blog.title}
          </h1>

          {/* =================================================
              MAIN IMAGE
          ================================================= */}

          {blog.image && (
            <img
              data-aos="fade-up"
              src={blog.image}
              alt={blog.title}
              className="main-blog-image"
            />
          )}

          {/* =================================================
              AUTHOR
          ================================================= */}

         <section className="author-card" data-aos="fade-up">

  <div className="author-left">

    {blog.authorImage && (
      <img
        src={blog.authorImage}
        alt={blog.author}
      />
    )}

    <div className="author-info">

      <h2>{blog.author}</h2>

      {blog.authorRole && (
        <p>{blog.authorRole}</p>
      )}

    </div>

  </div>

  {blog.authorLink && (
    <Link
      href={blog.authorLink}
      className="discover-link"
    >
      <button className="discover-btn">
        Discover More
      </button>
    </Link>
  )}

</section>
          {/* =================================================
              ARTICLE ONE
          ================================================= */}

          {blog.articleOne && (
            <p
              className="artical"
              data-aos="fade-up"
            >
              {blog.articleOne}
            </p>
          )}

          {/* =================================================
              ARTICLE TWO
          ================================================= */}

          {blog.articleTwo && (
            <p data-aos="fade-up">
              {blog.articleTwo}
            </p>
          )}

          {/* =================================================
              SECTIONS
          ================================================= */}

          {sortedSections.map((section) => {

            /*
             * Find all lists which belong
             * to this particular section.
             */
            const sectionLists = (blog.lists || []).filter(
              (list) =>
                list.sectionId === section.id
            );

            return (
              <section
                key={section.id}
                className="dynamic-blog-section"
                data-aos="fade-up"
              >

                {/* =================================================
                    SECTION HEADING
                ================================================= */}

                {section.heading && (
                  <h2>
                    {section.heading}
                  </h2>
                )}

                {/* =================================================
                    SECTION PARAGRAPH
                ================================================= */}

                {section.paragraph && (
                  <p>
                    {section.paragraph}
                  </p>
                )}

                {/* =================================================
                    SECTION IMAGE
                ================================================= */}

                {section.image && (
                  <img
                    src={section.image}
                    alt={
                      section.heading ||
                      blog.title
                    }
                    className="section-image"
                  />
                )}

                {/* =================================================
                    SECTION VIDEO
                ================================================= */}

                {section.video && (
                  <div className="section-video">

                    <iframe
                      src={section.video}
                      title={
                        section.heading ||
                        "Blog video"
                      }
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />

                  </div>
                )}

                {/* =================================================
                    LISTS BELONGING TO THIS SECTION
                ================================================= */}

                {sectionLists.map((list) => (

                  <div
                    key={list.id}
                    className="blog-list-section"
                    data-aos="fade-up"
                  >

                    {/* LIST HEADING */}

                    {list.listHeading && (
                      <h3>
                        {list.listHeading}
                      </h3>
                    )}

                  

                    {/* LIST ITEMS */}

                    {list.items &&
                      list.items.length > 0 && (
                        <ul className="blog-list">

                          {list.items.map(
                            (item) => (
                              <li
                                key={item.id}
                              >
                                {item.itemText}
                              </li>
                            )
                          )}

                        </ul>
                      )}
                        {/* LIST PARAGRAPH */}

                    {list.listParagraph && (
                      <p>
                        {list.listParagraph}
                      </p>
                    )}

                  </div>

                ))}

              </section>
            );
          })}

          {/* =================================================
              LISTS WITHOUT SECTION
          ================================================= */}

          {(blog.lists || [])
            .filter(
              (list) =>
                list.sectionId === null
            )
            .map((list) => (

              <section
                key={list.id}
                className="blog-list-section"
                data-aos="fade-up"
              >

                {/* LIST HEADING */}

                {list.listHeading && (
                  <h2>
                    {list.listHeading}
                  </h2>
                )}

                {/* LIST PARAGRAPH */}

                {list.listParagraph && (
                  <p>
                    {list.listParagraph}
                  </p>
                )}

                {/* LIST ITEMS */}

                {list.items &&
                  list.items.length > 0 && (
                    <ul className="blog-list">

                      {list.items.map(
                        (item) => (
                          <li
                            key={item.id}
                          >
                            {item.itemText}
                          </li>
                        )
                      )}

                    </ul>
                  )}

              </section>

            ))}

        </div>


        {/* =================================================
            RELATED BLOGS
        ================================================= */}

        {relatedBlogs.length > 0 && (
          <section
            className="related-blogs"
            data-aos="fade-up"
          >

            {/* RELATED HEADER */}

            <div className="related-header">

              <h2>
               Related Blogs
              </h2>

              <p>
                Explore more articles
                you may find interesting.
              </p>

            </div>


            {/* RELATED BLOG GRID */}

            <div className="related-blog-grid">

              {relatedBlogs.map(
                (relatedBlog) => (

                  <Link
                    key={relatedBlog.id}
                    href={`/blog/${relatedBlog.slug}`}
                    className="blog-link"
                  >

                    <article className="blog-card">

                      {/* IMAGE */}

                      {relatedBlog.image && (
                        <img
                          src={
                            relatedBlog.image
                          }
                          alt={
                            relatedBlog.title
                          }
                        />
                      )}


                      {/* CONTENT */}

                      <div className="blog-content">

                        {/* CATEGORY */}

                        {relatedBlog
                          .category
                          ?.name && (
                          <span className="category">
                            {
                              relatedBlog
                                .category
                                .name
                            }
                          </span>
                        )}


                        {/* TITLE */}

                        <h3>
                          {
                            relatedBlog.title
                          }
                        </h3>


                        {/* DATE */}

                        <p className="date">
                          {new Date(
                            relatedBlog.date
                          ).toLocaleDateString()}
                        </p>

                      </div>

                    </article>

                  </Link>

                )
              )}

            </div>

          </section>
        )}

      </main>


      {/* =================================================
          FOOTER
      ================================================= */}

      <FooterCTA />

      <Footer />
    </>
  );
}