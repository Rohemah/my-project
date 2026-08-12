"use client";
import { FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "./TestimonialSlider.css";

const testimonials = [
  {
    title: "Full mastery program!",
    text: "Professional, responsive, and easy to work with. They understood our needs perfectly. The final product exceeded expectations.",
    image:
      "https://cdn.prod.website-files.com/68b824698be8e7c047a5da51/68cd4acf0ce8479be5930e44_koursio-home-one-testimonial-image-two.webp",
    name: "James Anderson",
  },
  {
    title: "Ultimate learning journey!",
    text: "From start to finish, everything was perfect. Great attention to detail, pixel-perfect layouts, and a strong sense of user experience.",
    image:
      "https://cdn.prod.website-files.com/68b824698be8e7c047a5da51/68cd4acf0528e4a2a4b272a0_koursio-home-one-testimonial-image-one.webp",
    name: "Charlotte Williams",
  },
  {
    title: "From basics to mastery!",
    text: "We're over the moon with our new website. It looks sharp, functions brilliantly and has already received amazing feedback.",
    image:
      "https://cdn.prod.website-files.com/68b824698be8e7c047a5da51/68cd4acf5789d87bba122f53_koursio-home-one-testimonial-image-three.webp",
    name: "Oliver Smith",
  },
  {
    title: "Henry Peterson!",
    text: "Skilled, attentive, and pleasant to collaborate with. They captured our vision flawlessly. The outcome surpassed expectations.",
    image:
      "https://cdn.prod.website-files.com/68b824698be8e7c047a5da51/68d4cc0158e3bdc33c1dcd95_koursio-home-one-testimonial-image-four.webp",
    name: "Sophia Brown",
  },
];

export default function TestimonialSlider() {
  return (
    <section className="testimonial">

      <div className="testimonial-heading">
        <p className="sub-heading"  data-aos="fade-up">REVIEWS FROM GLOBAL LEARNERS</p>
        <h2  data-aos="fade-up">What our clients say about us</h2>
      </div>

      <Swiper
        modules={[Autoplay]}
        slidesPerView={3}
        spaceBetween={25}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>

            <div className="testimonial-card">

              <div className="quote">
               
                  <FaQuoteLeft />

              </div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>

              <div className="line"></div>

              <img className="person" src={item.image} alt="" />

              <h4>{item.name}</h4>

            </div>

          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
}