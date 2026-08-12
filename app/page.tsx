"use client";
import Link from "next/link";
import { courses } from "./data/courses";
// import { useEffect } from "react";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BsCart3 } from "react-icons/bs";
import HomeNavbar from "./components/HomeNavbar";
import FooterCTA from "./components/FooterCTA";
import Footer from "./components/Footer";
import TestimonialMarquee from "./components/TestimonialSlider";
 import { FaArrowRightLong } from "react-icons/fa6";
export default function Home() {
  const [courses, setCourses] = useState<any[]>([]);
const [loading, setLoading] = useState(true);
  //  useEffect(() => {
  //   AOS.init({
  //     duration: 1000,
  //     once: true,
  //   });
  // }, []);
  useEffect(() => {
  AOS.init({
    duration: 1000,
    once: true,
  });

  async function fetchCourses() {
    try {
      const response = await fetch("/api/courses");

      if (!response.ok) {
        throw new Error("Failed to fetch courses");
      }

      const data = await response.json();

      setCourses(data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    } finally {
      setLoading(false);
    }
  }

  fetchCourses();
}, []);
if (loading) {
  return <h2>Loading courses...</h2>;
}
  return (
    
    
    <>
    
      <header>
        <img
          className="home-img"
          src="https://cdn.prod.website-files.com/68b824698be8e7c047a5da51/68d6756469d6d86ed2724125_d5927a39758818c9a689976dbbf45b91_koursio-home-three-banner-bg.avif"
          alt="Background"
          width={1260}
          height={570}
        />
       
          <HomeNavbar />
      </header>
      <section className="hero">
  <div className="hero-content">

    <div className="hero-img">
      <img
        src="https://cdn.prod.website-files.com/68b824698be8e7c047a5da51/68e797562a2f84ed6e0d6046_koursio-about-one-rewview-image.webp"
        alt="Students"
      />
    </div>

    <p className="rating">
      <span>4.57</span> average rating by participants
    </p>

    <h1 className="heading">
      <span className="white">Grow your skills</span>
      <br />
      <span className="yellow">build your future</span>
    </h1>

    <p className="about">
      Start your learning path with expert-led programs designed to
      elevate skills and accelerate success.
    </p>

    <div className="buttons">
      <button className="btn-red">
        Explore every course → 
      </button>

      <button className="btn-black">
        Get unlimited learning →
      </button>
    </div>

  </div>
</section>
    
      <section className="grouth">

  <div className="counter">
    <img
      src="https://cdn.prod.website-files.com/68b824698be8e7c047a5da51/68dfabf95d1142bdaf9fd2b3_5c906b8e5339ca666a63742bc1da5287_Vector%20%282%29.svg"
      alt=""
    />

    <div>
      <h3>450K</h3>
      <p>Learners educated</p>
    </div>
  </div>

  <div className="counter">
    <img
      src="https://cdn.prod.website-files.com/68b824698be8e7c047a5da51/68dfadb9691d3c2a08e54839_2d3931a398c9f63f92d2a0cda79a54e7_Vector%20%283%29.svg"
      alt=""
    />

    <div>
      <h3>100+</h3>
      <p>Countries served</p>
    </div>
  </div>

  <div className="counter">
    <img
      src="https://cdn.prod.website-files.com/68b824698be8e7c047a5da51/68dfae4b01b9ebf03d3d3d95_c6bebd0184fe947d8c264087c4ea9f59_Group%201000002225.svg"
      alt=""
    />

    <div>
      <h3>250+</h3>
      <p>Workshops available</p>
    </div>
  </div>

  <div className="counter">
    <img
      src="https://cdn.prod.website-files.com/68b824698be8e7c047a5da51/68e893b9ceca1502357bd054_b4d773ae93175020aa600af89f6b2d94_koursio-home-three-counter-courses.svg"
      alt=""
    />

    <div>
      <h3>400+</h3>
      <p>Courses available</p>
    </div>
  </div>

</section>
      <section className="about-section">
        <div className="about-left" >
          <img  data-aos="zoom-in"
            src="https://cdn.prod.website-files.com/68b824698be8e7c047a5da51/68d65ba36201077d6e39b2ad_koursio-home-three-growth-image-one-p-800.webp"
            alt="img"
          />
          <div className="information">
            <div className="left-information">
              <img
                src="https://cdn.prod.website-files.com/68b824698be8e7c047a5da51/68d61fba1a9765d235867e90_koursio-home-three-career-transformation-icon.svg"
                alt="img"
              />
              <div>
              <h3 className="number"  data-aos="fade-up">450k+</h3>
              <p className="about"  data-aos="fade-up">Career transformations learners served</p>
              </div>
            </div>
            <div className="right-information">
              <img
                src="https://cdn.prod.website-files.com/68b824698be8e7c047a5da51/68d61fba43e01e6ee2b8bbcc_koursio-home-three-industry%20experts-icon.svg"
                alt="img"
              />
              <div>
              <h3 className="number"  data-aos="fade-up">1,250k+</h3>
              <p className="about"  data-aos="fade-up">
                Industry experts delivering training and content
              </p>
              </div>
            </div>
          </div>
        </div>
        <div className="about-content" >
  <div className="about-right">
    <p
  className="sub-title"
  data-aos="fade-up"
  data-aos-delay="100"
>BEST PLACE FOR LEARNING</p>

   <h2
  data-aos="fade-up"
  data-aos-delay="300"
>
      Your career, your customized  learning journey
    </h2>

    <p
  className="description"
  data-aos="fade-up"
  data-aos-delay="500"
>
      Unlock skills tailored to your goals with flexible courses
      designed to shape your career and learning path effectively.
    </p>
  </div>

  <div className="features">

    <div
    className="feature"
    data-aos="fade-up"
    data-aos-delay="100"
  >
      <img src="https://cdn.prod.website-files.com/68b824698be8e7c047a5da51/68cd25081d3ddc7d43949718_ee798b59913bdff0cb3669a612f04876_koursio-home-one-what-we-offer-skill-base.svg" />
      <span>Skill-based instruction</span>
    </div>

     <div
    className="feature"
    data-aos="fade-up"
    data-aos-delay="100"
  >
      <img src="https://cdn.prod.website-files.com/68b824698be8e7c047a5da51/68d65818eee700c695a6a53f_koursio-home-three-global-certificate-icon.svg" />
      <span>Global certification</span>
    </div>
 <div
    className="feature"
    data-aos="fade-up"
    data-aos-delay="100"
  >
      <img src="https://cdn.prod.website-files.com/68b824698be8e7c047a5da51/68d4c72c0c2274a220e6921b_aventiva-home-two-journey-analytics.svg" />
      <span>Analytics and insights</span>
    </div>

    <div
    className="feature"
    data-aos="fade-up"
    data-aos-delay="100"
  >
      <img src="https://cdn.prod.website-files.com/68b824698be8e7c047a5da51/68d6584ec0132d4a6a97e414_f345710525e8ad966603ada924065346_koursio-home-three-customizable-course-icon.svg" />
      <span>Customizable courses</span>
    </div>

  </div>

  <img
    className="girl-image" data-aos="zoom-in"
    src="https://cdn.prod.website-files.com/68b824698be8e7c047a5da51/68d65ba4647777867c8b0dec_koursio-home-three-growth-image-two-p-800.webp"
    alt=""
    
  />
</div>
      </section>
     
      <section className="progress"  data-aos="fade-up">
        <div className="language-use">
          <img
            src="https://cdn.prod.website-files.com/68cbe4e796aeebf91972e0f3/6902e0dbcfb0e6f3a84ee4c5_content-language-dark-icon.svg"
            alt="img"
          />
          <h3 className="heading3">Language</h3>
          <p className="about">5 courses</p>
        </div>
        <div className="development">
          <img
            src="https://cdn.prod.website-files.com/68cbe4e796aeebf91972e0f3/690c357d754c44a361710923_Vector%2051.svg"
            alt="img"
          />
          <h3 className="heading3">Development</h3>
          <p className="about">9 courses</p>
        </div>
        <div className="design">
          <img
            src="https://cdn.prod.website-files.com/68cbe4e796aeebf91972e0f3/690c34d343ec2a63dd1a6ff7_Vector%2047.svg"
            alt="img"
          />
          <h3 className="heading3">Design</h3>
          <p className="about">3 courses</p>
        </div>
        <div className="managment">
          <img
            src="https://cdn.prod.website-files.com/68cbe4e796aeebf91972e0f3/690c35096227d0de7a4dec6d_Vector%2048.svg"
            alt="img"
          />
          <h3 className="heading3">Managment</h3>
          <p className="about">3 courses</p>
        </div>
        <div className="finance">
          <img
            src="https://cdn.prod.website-files.com/68cbe4e796aeebf91972e0f3/690c352bf41551ec9be8df43_Vector%2049.svg"
            alt="img"
          />
          <h3 className="heading3">Finance</h3>
          <p className="about">5 courses</p>
        </div>
        <div className="negotiation">
          <img
            src="https://cdn.prod.website-files.com/68cbe4e796aeebf91972e0f3/68d6163a217c641451b17298_Vector%20(1).svg"
            alt="img"
          />
          <h3 className="heading3">Negotiation</h3>
          <p className="about">4 courses</p>
        </div>
      </section>
     <section className="courses" >

  <div className="course-heading"  data-aos="fade-up">

    <p className="course-subtitle"  data-aos="fade-up">
      FIND THE COURSE RIGHT FOR YOUR GOAL
    </p>

    <h2>
      Select the program tailored to your success
    </h2>

  </div>

  <div className="course-grid">

    {/* <div className="course-grid">
  {courses.map((course) => (
    <div className="course-card" key={course.id}>

      <div className="course-image" data-aos="zoom-in">
        <img
          src={course.image}
          alt={course.title}
        />

        <span>{course.lessons}</span>
      </div>

      <div className="course-content">

        <p className="category">
          {course.category.name}
        </p>

        <h3>{course.title}</h3>

        <h4>{course.price}</h4>

        <Link href={`/courses/${course.slug}`}>
          <button className="view-btn">
            View Details →
          </button>
        </Link>

      </div>

    </div>
  ))}
</div> */}
<div className="course-grid">

  {courses.map((course: any) => (

    <div className="course-card" key={course.id}>

      <div className="course-image" data-aos="zoom-in">
        <img
          src={course.image}
          alt={course.title}
        />

        <span>{course.lessons} LESSONS</span>
      </div>

      <div className="course-content">

        <p className="category">
          {course.category.name}
        </p>

        <h3>{course.title}</h3>

        <h4>${course.price} USD</h4>

        <Link href={`/courses/${course.slug}`}>
          <button className="view-btn">
            View Details  
            <FaArrowRightLong />
          </button>
        </Link>

      </div>

    </div>

  ))}

</div>

  </div>

</section>
 <TestimonialMarquee/>

 <FooterCTA/> 
 

<section className="goals">
  <div className="goals-heading">

    <p className="goals-subtitle"  data-aos="fade-up">
      DISCOVER REAL POTENTIAL
    </p>

    <h2  data-aos="fade-up">Advance towards your goals</h2>

  </div>
   <div className="goal-grid"  data-aos="fade-up">
    {/* card 1 */}
  <div className="goals-card">

      <div className="goals-image">

        <img src="https://cdn.prod.website-files.com/68b824698be8e7c047a5da51/68d53c9ed55af8dc50060921_koursio-home-three-benefits-learn-icon.svg" alt="img" />

      </div>

      <div className="goals-content">

        
        <h3>
          Learn anything
        </h3>
        <p className="category">Expand your skills with expert-led lessons anytime.</p>
      </div>
   </div>
   {/* cart 2 */}
   <div className="goals-card">

      <div className="goals-image">

        <img src="https://cdn.prod.website-files.com/68b824698be8e7c047a5da51/68d53c9e3d623608d4886474_koursio-home-three-benefits-save-money-icon.svg" alt="img" />

      </div>

      <div className="goals-content">

        
        <h3>
        Save money
        </h3>
        <p className="category">High-quality courses offered at affordable prices.</p>
      </div>
   </div>
   {/* cart 3 */}
   <div className="goals-card">

      <div className="goals-image">

        <img src="https://cdn.prod.website-files.com/68b824698be8e7c047a5da51/68d53c9e86616d52bbdb212b_koursio-home-three-benefits-course-icon.svg" alt="img" />

      </div>

      <div className="goals-content">

        
        <h3>
       Flexible courses
        </h3>
        <p className="category">Study anywhere, anytime, at your own learning pace.</p>
      </div>
   </div>
   {/* cart 4 */}
   <div className="goals-card">

      <div className="goals-image">

        <img src="https://cdn.prod.website-files.com/68b824698be8e7c047a5da51/68d53c9e1ffd1e5f42bc8584_koursio-home-three-benefits-team-icon.svg" alt="img" />

      </div>

      <div className="goals-content">

        
        <h3>
        Talent award
        </h3>
        <p className="category">Empower your team with courses designed for growth.</p>
      </div>
   </div>

   </div>

</section>

       <Footer/>
    </>
  );
}
