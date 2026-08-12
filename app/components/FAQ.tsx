"use client";
import "./faq.css";
import { useState } from "react";
import "./faq.css";

export default function FAQ() {

  const [active, setActive] = useState<number | null>(0);


  const faq = [
    {
      q:"How do I enroll in an online course?",
      a:"Anyone with an interest in learning can enroll! We have beginner-friendly, intermediate, and advanced-level courses for students, professionals, and lifelong learners."
    },

    {
      q:"How do I register for a course?",
      a:"You can browse our course catalog, select your desired program, and complete the registration process online using our secure payment system."
    },

    {
      q:"Are your courses available online or offline?",
      a:"Most of our courses are available online, allowing you to learn anytime, anywhere. Some specialized programs may also include offline or hybrid learning options."
    },

    {
      q:"Do I need prior knowledge before joining?",
      a:"Each course includes a recommended skill level and prerequisites. Beginner-level courses require no prior experience."
    },

    {
      q:"How can the course help my career?",
      a:"Our programs are designed to build real-world skills and improve employability. Many courses include practical projects and career guidance."
    }
  ];


  return (

    <section className="faq-section">


      <div className="faq-header">


        <div className="faq-img" >

          <img data-aos="fade-up" src="https://cdn.prod.website-files.com/68b824698be8e7c047a5da51/68e4a6d58caf66831e96960f_5936c88d084d5798976f360708bd2ea3_faq-image-white-p-500.webp" alt="faq"/>

        </div>


        <div className="faq-heading">

          <p data-aos="fade-up">CONTACT US</p>

          <h2 data-aos="fade-up">
            Frequently asked
            <br/>
            questions
          </h2>

        </div>


      </div>



      <div className="faq-content" data-aos="fade-up" >


      {
        faq.map((item,index)=>(

          <div className="faq-item" key={index}>


            <div 
            className="faq-question" data-aos="fade-up"
            onClick={()=>setActive(active===index ? null:index)}
            >

              <span>{item.q}</span>

              <span>
                {active===index ? "−":"+"}
              </span>

            </div>



            {
              active===index &&
              <p className="faq-answer">
                {item.a}
              </p>
            }


          </div>

        ))
      }


      </div>


    </section>

  )
}