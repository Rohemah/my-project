"use client";
import Link from "next/link";

// import { blogs } from "@/app/data/blogs";
// import { useEffect } from "react";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HomeNavbar from "../components/HomeNavbar";
import FooterCTA from "../components/FooterCTA";
import Footer from "../components/Footer";
import TestimonialSlider from "../components/TestimonialSlider";
import Brands from "../components/Brands";

import { BsCart3 } from "react-icons/bs";
interface Blog {
  id: number;
  title: string;
  slug: string;
  image: string | null;
  date: string;

  category?: {
    id: number;
    name: string;
  };
}

export default function About() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
const [loadingBlogs, setLoadingBlogs] = useState(true);
   useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);
   // Get latest blogs
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
        setLoadingBlogs(false);
      }
    }

    getBlogs();
  }, []);
  return (
   <>
   <header>
           <img
             className="about-img"   
             src="https://cdn.prod.website-files.com/68b824698be8e7c047a5da51/68e36e5005bd3ca3979077f5_e0c0a6e0fd2d1e6b04e957962d96c1f1_koursio-about-one-hero-background-p-2000.webp"
             alt="Background"
            
           />
        
              <HomeNavbar />
         </header>
         <section className="about-hero">
            <div className="about-hero-content">
                <p >
                    ESSENCE OF GROWTH

                </p>
                <h2>
                    Your dedication to progress is genuine
                </h2>
            </div>
         </section>
      
    <section className="about-story">

      <div className="story-left">

        <img   data-aos="zoom-in"
          src="https://cdn.prod.website-files.com/68b824698be8e7c047a5da51/68e7987c448ffcc13f7c3c10_koursio-about-one-achivement-image-p-1080.webp"
          alt="Student"
        />

        <div className="experience-box">
          <h2  data-aos="fade-up">15</h2>
          <p  data-aos="fade-up">Years of trusted experience</p>
        </div>

      </div>

      <div className="story-right">

        <p className="story-subtitle"  data-aos="fade-up">
          OUR STORY
        </p>

        <h2  data-aos="fade-up">
          Limitless learning and get
          <br />
          more possibilities
        </h2>

        <div className="story-line"  data-aos="fade-up"></div>

        <p className="story-text"  data-aos="fade-up">
          Empowering learners worldwide with flexible,
          expert-led online courses designed to enhance
          skills, boost careers, and inspire lifelong learning
          through an interactive, engaging, and accessible
          digital education platform with courses for everyone.
        </p>

        <div className="story-review" >

          <img  data-aos="zoom-in"
            src="https://cdn.prod.website-files.com/68b824698be8e7c047a5da51/68e797562a2f84ed6e0d6046_koursio-about-one-rewview-image.webp"
            alt=""
          />
          <br />

        </div>
        <div className="story-para">
         <p  data-aos="fade-up">
            Delivering reliable expertise and quality you trust
          </p>
        </div>
         
       

      </div>

    </section>
   
    <section className="course-highlights"  data-aos="fade-up">

      <div className="highlight-box">

        <div className="highlight-icon">
          <img
            src="https://cdn.prod.website-files.com/68b824698be8e7c047a5da51/68e7a405f9e88c5bd191955a_rt-about-one-online-course.svg"
            alt=""
          />
        </div>

        <div>
          <h3>150+ online courses</h3>

          <p>
            Explore over 150 online courses designed to enhance your career growth opportunities.
          </p>
        </div>

      </div>

      <div className="divider"  data-aos="fade-up"></div>

      <div className="highlight-box">

        <div className="highlight-icon">
          <img
            src="https://cdn.prod.website-files.com/68b824698be8e7c047a5da51/68e7a40432b12f85ae4a8bde_rt-about-one-customized-education.svg"
            alt=""
          />
        </div>

        <div>
          <h3>Customized education</h3>

          <p>
            Tailor your learning experience with courses designed to match individual learning style.
          </p>
        </div>

      </div>

      <div className="divider"></div>

      <div className="highlight-box">

        <div className="highlight-icon">
          <img
            src="https://cdn.prod.website-files.com/68b824698be8e7c047a5da51/68e7a4040663862cc448e344_rt-about-one-up-to-date.svg"
            alt=""
          />
        </div>

        <div>
          <h3>Always up to date</h3>

          <p>
            Stay informed with the latest updates, news, and features.
          </p>
        </div>

      </div>

    </section>
    
   
    <section className="why">

      <div className="why-heading">

        <p className="why-subtitle"  data-aos="fade-up">WHY CHOOSE US</p>

        <h2  data-aos="fade-up">
          Together we grow, achieve, and
          <br />
          reach greater success
        </h2>

      </div>

      <div className="why-grid"  data-aos="fade-up">

        {/* Card 1 */}

        <div className="why-card">

          <img
            src="https://cdn.prod.website-files.com/68b824698be8e7c047a5da51/68e8e2a9b4ac164c6bb7f4b4_koursio-about-one-accessibility.svg"
            alt=""
          />

          <h3>Always up to date</h3>

          <p>
            Learning made easy for everyone,
            anytime, anywhere.
          </p>

          <a href="#">See Details →</a>

        </div>

        <div className="line"  data-aos="fade-up"></div>

        {/* Card 2 */}

        <div className="why-card">

          <img
            src="https://cdn.prod.website-files.com/68b824698be8e7c047a5da51/68e8e2a923585643370a7472_koursio-about-one-cost.svg"
            alt=""
          />

          <h3>Cost-effectiveness</h3>

          <p>
            Affordable learning without
            compromising on quality.
          </p>

          <a href="#">See Details →</a>

        </div>

        <div className="line"  data-aos="fade-up"></div>

        {/* Card 3 */}

        <div className="why-card">

          <img
            src="https://cdn.prod.website-files.com/68b824698be8e7c047a5da51/68e8e2a90fb1988430424bf8_koursio-about-one-course.svg"
            alt=""
          />

          <h3>Course accessibility</h3>

          <p>
            Gain recognized credentials and
            professional skills.
          </p>

          <a href="#">See Details →</a>

        </div>

        <div className="line"  data-aos="fade-up"></div>

        {/* Card 4 */}

        <div className="why-card">

          <img
            src="https://cdn.prod.website-files.com/68b824698be8e7c047a5da51/68e8e2a9122ec4d47c15aefd_koursio-about-one-learning.svg"
            alt=""
          />

          <h3>Personalized learning</h3>

          <p>
            Customized courses tailored to your
            unique learning needs.
          </p>

          <a href="#">See Details →</a>

        </div>

      </div>

    </section>
    <section className="career-goals">

  <div className="career-left">

    <p className="career-subtitle"  data-aos="fade-up">
      BEST PLACE FOR LEARNING
    </p>

    <h2  data-aos="fade-up">
      Customized education for
      <br />
      your career goals
    </h2>

    <p className="career-text"  data-aos="fade-up">
      Get the expertise and credentials you need now.
      Accelerate your professional journey—pivot,
      get promoted, or start a new business.
    </p>

    <div className="career-item">
      <img  data-aos="fade-up"
        src="https://cdn.prod.website-files.com/68b824698be8e7c047a5da51/68e7af75e2506f3c270d0299_rt-about-one-innovation-bullet.svg"
        alt=""
      />

      <div>
        <h3  data-aos="fade-up">Skill-based instruction</h3>

        <p  data-aos="fade-up">
          Gain practical knowledge through expert-led lessons
          focused on real-world applications and hands-on
          learning experiences.
        </p>
      </div>
    </div>

    <div className="career-item">
      <img  data-aos="fade-up"
        src="https://cdn.prod.website-files.com/68b824698be8e7c047a5da51/68e7af75e2506f3c270d0299_rt-about-one-innovation-bullet.svg"
        alt=""
      />

      <div>
        <h3  data-aos="fade-up">Global certification</h3>

        <p  data-aos="fade-up">
          Earn industry-recognized global certifications that
          validate your skills and boost your professional
          credibility worldwide.
        </p>
      </div>
    </div>

    <div className="career-item">
      <img  data-aos="fade-up"
        src="https://cdn.prod.website-files.com/68b824698be8e7c047a5da51/68e7af75e2506f3c270d0299_rt-about-one-innovation-bullet.svg"
        alt=""
      />

      <div>
        <h3  data-aos="fade-up">Analytics and insights</h3>

        <p  data-aos="fade-up">
          Track performance, understand trends, and make
          informed decisions with clear, actionable
          course analytics.
        </p>
      </div>
    </div>

    <button className="career-btn">
      Know more →
    </button>

  </div>

  <div className="career-right">

    <img  data-aos="zoom-in"
      src="https://cdn.prod.website-files.com/68b824698be8e7c047a5da51/68e8dfd20513ba12c5cd069b_koursio-about-one-customize-p-1080.webp"
      alt=""
    />

  </div>

</section>
<Brands/>

<section className="mentor">
  <div className="mentor-container">

    <div className="mentor-image">
      <img data-aos="zoom-out"
        src="https://cdn.prod.website-files.com/68b824698be8e7c047a5da51/68e8dfd215624fc8cb9301e6_koursio-about-one-mentor-p-1080.webp"
        alt="Mentor"
      />
    </div>

    <div className="mentor-content">

      <h2 data-aos="fade-up">
        Join as mentor
      </h2>

      <p data-aos="fade-up">
        Become a mentor and share your expertise with eager learners.
        Guide, inspire, and support students on their educational
        journey while building your professional network and making
        a meaningful impact.
      </p>

      <button className="mentor-btn" data-aos="fade-up">
        Start teaching today →
      </button>

    </div>

  </div>
</section>
<TestimonialSlider/>
 
        {/* <section className="blog-section">

  <p className="blog-subtitle" data-aos="fade-up">
    INSIGHTS & IDEAS
  </p>

  <h2 className="blog-title" data-aos="fade-up">
    Checkout our latest posts
  </h2>

  <div className="blog-grid">

    {blogs.slice(0, 3).map((blog) => (

      <Link
        key={blog.id}
        href={`/blog/${blog.slug}`}
        className="blog-link"
      >

        <div className="blog-card">

          <img
            src={blog.image}
            alt={blog.title}
          />

          <div className="blog-content">

            <span className="category">
              {blog.category}
            </span>

            <h3>{blog.title}</h3>

            <p className="date">
              {blog.date}
            </p>

          </div>

        </div>

      </Link>

    ))}

  </div>

</section> */}
<section className="blog-section">

  <p className="blog-subtitle" data-aos="fade-up">
    INSIGHTS & IDEAS
  </p>

  <h2 className="blog-title" data-aos="fade-up">
    Checkout our latest posts
  </h2>

  <div className="blog-grid">

    {loadingBlogs ? (
      <p>Loading latest posts...</p>
    ) : blogs.length === 0 ? (
      <p>No blogs available.</p>
    ) : (
      blogs.slice(0, 3).map((blog) => (

        <Link
          key={blog.id}
          href={`/blog/${blog.slug}`}
          className="blog-link"
        >

          <div className="blog-card">

            {blog.image && (
              <img
                src={blog.image}
                alt={blog.title}
              />
            )}

            <div className="blog-content">

              {blog.category?.name && (
                <span className="category">
                  {blog.category.name}
                </span>
              )}

              <h3>{blog.title}</h3>

              <p className="date">
                {new Date(blog.date).toLocaleDateString()}
              </p>

            </div>

          </div>

        </Link>

      ))
    )}

  </div>

</section>

   
<FooterCTA/>
<Footer/>
   
 
   </>
  );
}