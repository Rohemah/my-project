
import { courses } from "@/app/data/courses";
import { notFound } from "next/navigation";
import "./course-details.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "@/app//components/Footer";
import FooterCTA from "@/app/components/FooterCTA";
import SignInNavbar from "@/app/components/SignInNavbar";
import Brands from "@/app/components/Brands";
import CourseFAQ from "@/app/components/CourseFAQ";
import CourseModules from "@/app/components/CourseModules";
import { courseInfoIcons } from "@/app/data/courseIcons";

import Link from "next/link";
import FAQ from "@/app/components/FAQ";



export default async function CourseDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
 
  const { slug } = await params;

  // const course = courses.find((c) => c.slug === slug);
//   const response = await fetch(
//   `http://localhost:3000/api/course-by-slug/${slug}`,
//   {
//     cache: "no-store",
//   }
// );
const response = await fetch(
  `${process.env.NEXTAUTH_URL}/api/course-by-slug/${slug}`,
  {
    cache: "no-store",
  }
);
const course = await response.json();

  if (!course) {
    notFound();
  }
   // Related Courses
  const relatedCourses = courses
    .filter(
      (item) =>
        item.category === course.category &&
        item.slug !== course.slug
    )
    .slice(0, 3);

  return (
    <>
    <SignInNavbar/>
    
      {/* Hero Section */}

      <section className="course-hero">

        <div className="hero-left" >

          <h1 data-aos="fade-up">{course.title}</h1>

          <p data-aos="fade-up">{course.description}</p>

        </div>

        <div className="hero-right">

          <h2 data-aos="fade-up">$  {course.price}.00  USD</h2>

          <button className="buy-btn" data-aos="fade-up">
            {course.buyButtonText}
          </button>

        </div>

      </section>
            {/* Banner Image */}

      <section className="course-banner">

        <img data-aos="fade-up"
          src={course.image}
          alt={course.title}
        />

      </section>




            {/* Information Card */}

      <section className="course-info-card" data-aos="fade-up">

        <div className="info-box" >

         <img
 src={courseInfoIcons.duration}
 alt="Time"
/>

          <div>
            <h4 >Time span</h4>
            <p>{course.duration}</p>
          </div>

        </div>

        <div className="info-box">

         <img
 src={courseInfoIcons.lectures}
 alt="Lecture"
/>

          <div>
            <h4>Lectures</h4>
            <p>{course.lectures}</p>
          </div>

        </div>

        <div className="info-box">

         <img
 src={courseInfoIcons.skill}
 alt="Skill"
/>

          <div>
            <h4>Skill Level</h4>
            <p>{course.skillLevel}</p>
          </div>

        </div>

        <div className="info-box">

          <img
 src={courseInfoIcons.video}
 alt="Video"
/>

          <div>
            <h4>Video Lessons</h4>
            <p>{course.videoDuration}</p>
          </div>

        </div>

        <div className="info-box">

         <img
 src={courseInfoIcons.participants}
 alt="Students"
/>
          <div>
            <h4>Participants</h4>
            <p>{course.participants}</p>
          </div>

        </div>

      </section>
      <section className="course-description">

  <h2 data-aos="fade-up">Course description</h2>

  {/* <p data-aos="fade-up">{course.courseDescription1}</p>

  <p data-aos="fade-up">{course.courseDescription2}</p> */}
  <p>
  {course.descriptions[0]?.descriptionOne}
</p>

<p>
  {course.descriptions[0]?.descriptionTwo}
</p>

  <h2 data-aos="fade-up">Main features</h2>

  <ul className="feature-list" data-aos="fade-up">

    {/* {course.mainFeatures.map((feature, index) => (

      <li key={index}>
        {feature}
      </li>

    ))} */}
    {course.features.map((item: any) => (

    <li key={item.id}>
        {item.feature}
    </li>

))}

  </ul>

</section>
<Brands/>
<section className="highlights">

  <div className="highlight-left">

    <h2>Key highlights</h2>

    <p>
      {course.highlightInfo[0]?.description}
    </p>

  </div>

  <div className="highlight-right">

    <div className="highlight-grid">

      {/* {course.keyHighlights.map((item, index) => (

        <div className="highlight-item" key={index}>

          <img src="/images/check.png" alt="" />

          <span>{item}</span>

        </div>

      ))} */}
      {course.highlights.map((item: any) => (

  <div className="highlight-item" key={item.id}>

    <img src="/images/check.png" alt="" />

    <span>{item.highlight}</span>

  </div>

))}

    </div>

  </div>

  {/* Bottom Paragraph */}

 

</section>
 <div className="highlight-footer">

    <p>
      {course.highlightInfo[0]?.footer}
    </p>

  </div>
  <CourseModules modules={course.modules} />
  <section className="instructor">

    <h2 className="section-title">
        Instructor
    </h2>

    <div className="instructor-container">

        <div className="instructor-image">

            <img
                // src={course.instructorImage}
                src={course.courseInstructors[0]?.instructor.image}
                // alt={course.instructorName}
                alt={course.courseInstructors[0]?.instructor.name}

            />
            
        </div>

        <div className="instructor-content">

            <h2>{course.courseInstructors[0]?.instructor.name}</h2>

            <h4>
                {/* {course.instructorRole} */}
                {course.courseInstructors[0]?.instructor.role}
                {/* <span> • {course.students}</span> */}
                    <span> • {course.courseInstructors[0]?.instructor.students}</span>
            </h4>

            <p className="instructor-description">

                {/* {course.instructorDescription} */}
                {course.courseInstructors[0]?.instructor.description}

            </p>

            <h3>Skills and expertise</h3>

            <ul>

                {/* {course.skills.map((skill, index) => (

                    <li key={index}>
                        {skill}
                    </li>

                ))} */}
                {course.courseInstructors[0]?.instructor.skills.map((item: any) => (

    <li key={item.id}>
        {item.skill}
    </li>

))}

            </ul>

        </div>

    </div>

</section>
 <section className="related-courses" data-aos="fade-up">

  <div className="related-heading">

    <h2>Related Courses</h2>

   

  </div>

  <div className="related-grid">

    {relatedCourses.map((item) => (

      <div className="related-card" key={item.id}>

        <div className="related-image">

          <img
            src={item.image}
            alt={item.title}
          />

          <span className="lesson-badge">
            {item.lessons}
          </span>

        </div>

        <div className="related-content">

          <p className="related-category">
            {item.category}
          </p>

          <h3>{item.title}</h3>

          <h4 className="related-price">
            {item.price}
          </h4>

          <Link href={`/courses/${item.slug}`}>

            <button className="related-btn">

              View Details →

            </button>

          </Link>

        </div>

      </div>

    ))}

  </div>

</section>
  <CourseFAQ/>
    
   
    <FooterCTA/>
    <Footer/>
    </>
    
  );
}