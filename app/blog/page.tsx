"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
// import { blogs } from "@/app/data/blogs";
import HomeNavbar from "../components/HomeNavbar";
import FooterCTA from "../components/FooterCTA";
import Footer from "../components/Footer";

import { BsCart3 } from "react-icons/bs";
interface Blog {
  id: number;
  title: string;
  slug: string;
  image: string;
  date: string;
}
// export default function blog(){
export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
const [loading, setLoading] = useState(true);
useEffect(() => {
  async function loadBlogs() {
    try {
      const res = await fetch("/api/blogs");
      const data = await res.json();

      setBlogs(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  loadBlogs();
}, []);
//   if (loading) {
//   return <h2>Loading...</h2>;
// }
    return(
  <>
  <header>
         <img
           className="blog-img " 
           src="https://cdn.prod.website-files.com/68b824698be8e7c047a5da51/68f89f18965b03225f6067e3_30f8abb52fabe74ce7e6ce61febcfe33_koursio-blog-one-hero-p-2000.webp"
           alt="Background"
          
         />
        
         <HomeNavbar />
       </header>
         <section className="about-hero">
            <div className="about-hero-content">
                <p >
                   Empower Your Learning

                </p>
                <h2>
                    Explore expert-led courses to boost
                </h2>
            </div>
         </section>
         <section className="blog-section">

      <div className="blog-grid">

        <div className="blog-grid">

  {blogs.map((blog) => (

    <Link
      key={blog.id}
      href={`/blog/${blog.slug}`}
      className="blog-link"
    >

      <div className="blog-card">

        <img
          src={blog.image}
          alt={blog.title}
          data-aos="zoom-in"
        />

        <div className="blog-content">

          {/* <p className="date">
            {blog.date}
          </p> */}
          <p className="date">
  {new Date(blog.date).toLocaleDateString()}
</p>

          <h3>
            {blog.title}
          </h3>

        </div>

      </div>

    </Link>

  ))}

</div>

      </div>

    </section>
         
<FooterCTA/>
<Footer/>

  </>
    );
}