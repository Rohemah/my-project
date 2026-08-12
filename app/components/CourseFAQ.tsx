"use client";

import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import "./CourseFAQ.css";

import {
  faqTitle,
  faqs,
  contactCardTitle,
  contactButton,
  contactFooter,
} from "@/app/data/courseFaqs";

import "./CourseFAQ.css";

export default function CourseFAQ() {

  const [active, setActive] = useState(0);

  return (

    <section className="faq-section">

      <div className="faq-left">

        <h2>{faqTitle}</h2>

        {faqs.map((item, index) => (

          <div className="faq-item" key={index}>

            <div
              className="faq-question"
              onClick={() =>
                setActive(active === index ? -1 : index)
              }
            >

              <h3>{item.question}</h3>

              <span>
                {active === index ? "−" : "+"}
              </span>

            </div>

            {active === index && (

              <p className="faq-answer">

                {item.answer}

              </p>

            )}

          </div>

        ))}

      </div>

      <div className="faq-card">

        <h2>{contactCardTitle}</h2>

        <Link href="/contact" className="faq-btn">

          {contactButton}

          <FaArrowRightLong />

        </Link>

        <hr />

        <p>{contactFooter}</p>

      </div>

    </section>

  );

}