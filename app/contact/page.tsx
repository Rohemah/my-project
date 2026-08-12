import HomeNavbar from "../components/HomeNavbar";
import FooterCTA from "../components/FooterCTA";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";

import { BsCart3 } from "react-icons/bs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CourseFAQ from "../components/CourseFAQ";
export default function contact(){
    return(
        <>
        <header>
                 <img
                   className="contact-img" data-aos="zoom-out"
                   src="https://cdn.prod.website-files.com/68b824698be8e7c047a5da51/68e6294bd9f7904c98646141_eb95972bd8e7dcd08aaa465e39f508e1_koursio-contact-two-hero-p-2000.webp"
                   alt="Background"
                  
                 />
                 {/* <div className="navbar">
                   <div className="logo">
                     <h2>Vistario</h2>
                   </div>
                   <div className="link-button">
                     <div className="navbar-link">
                       <nav>
                         <ul className="nav-links">
                           <li className="dropdown">
           <a href="/">Home </a>
         
          
         </li>
                           <li>
                             <a href="/about">About</a>
                           </li>
                           <li>
                             <a href="/blog">Blog</a>
                           </li>
                           <li>
                             <a href="/contact">Contact</a>
                           </li>
                         </ul>
                       </nav>
                     </div>
                     <div className="right-side">
                       <div className="cart">
                         <BsCart3 />
                       </div>
         
                       <button className="btn">Sign In</button>
                     </div>
                   </div>
                 </div>  */}
                 <HomeNavbar/>
               </header>
                 <section className="about-hero">
                    <div className="about-hero-content">
                        <p >
                          CONNECT WITH US
        
                        </p>
                        <h2>
                           Join our network
                        </h2>
                    </div> 
                   
                 </section>
          
    <section className="contact">

      <div className="contact-left">

        <p className="contact-tag" data-aos="fade-up">
          CONTACT US
        </p>

        <h2 data-aos="fade-up">
          Are you interested in online learning? Contact us
        </h2>

        <p className="contact-text" data-aos="fade-up">
          We'd love to hear from you! Whether you have questions about our
          courses, need help choosing the right program, or want to know
          more about enrollment, our team is here to assist you every
          step of the way.
        </p>

        <img
          className="signature" data-aos="fade-up"
          src="https://cdn.prod.website-files.com/68b824698be8e7c047a5da51/68e62c898e2af64e7838ef4a_8718a72703d2fbbc1d53d3f396ebf6e4_Signature.svg"
          alt=""
        />

        <h4 data-aos="fade-up">Ethan Walker</h4>

        <span data-aos="fade-up">DIRECTOR</span>

      </div>

      <div className="contact-right">

        <h3>Fill out for contact</h3>

        <p>
          Reach out and our team will connect with you shortly.
        </p>

        <form>

          <input
            type="text"
            placeholder="Your name*"
          />

          <input
            type="email"
            placeholder="Your email*"
          />

          <input
            type="text"
            placeholder="Subject"
          />

          <textarea
           
            placeholder="Your message*" rows={7}
          ></textarea>

          <label className="check">

            <input type="checkbox" />

            Save information for the next connection.

          </label>

          <button>
            Send message →
          </button>

        </form>

      </div>

    </section>
    <section className="contact-heading">
        <p data-aos="fade-up">CONTACT DETAILS</p>
        <h3 data-aos="fade-up">Find our location</h3>
    </section>
    <section className="contact-details" data-aos="fade-up">
   

      
       
      <div className="highlight-box">

        <div className="highlight-icon">
          <img
            src="https://cdn.prod.website-files.com/68b824698be8e7c047a5da51/68e62d2f9ed2c17ad23ee057_Home%20Icon.svg"
            alt=""
          />
        </div>



        <div>
          <h3>Area location</h3>

          <p>
          410 Sandtown, California <br /> 94001, USA
          </p>
        </div>

      </div>

      <div className="divider" data-aos="fade-up"></div>

      <div className="highlight-box">

        <div className="highlight-icon">
          <img
            src="https://cdn.prod.website-files.com/68b824698be8e7c047a5da51/68e62d2f9ed2c17ad23ee058_Books%20Icon.svg"
            alt=""
          />
        </div>

        <div>
          <h3>Contact details</h3>

          <a href="phone">888-123-4567</a> <br />
          <a href="mail">info@example.com</a>
        </div>

      </div>

      <div className="divider " data-aos="fade-up"></div>

      <div className="highlight-box">

        <div className="highlight-icon">
          <img
            src="https://cdn.prod.website-files.com/68b824698be8e7c047a5da51/68e7a4040663862cc448e344_rt-about-one-up-to-date.svg"
            alt=""
          />
        </div>

        <div>
          <h3>Opening hours</h3>

          <p>
            Monday-Friday  <br />
         10:30a.m-7:00p.m
          </p>
        </div>

      </div>

    </section>
  
   <FAQ/> 
 

<FooterCTA/>
<Footer/>
   

    
 
        </>
    )

}