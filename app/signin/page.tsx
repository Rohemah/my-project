import SignInNavbar from "../components/SignInNavbar";
import FooterCTA from "../components/FooterCTA";
import Footer from "../components/Footer";

 import { FiMail, FiLock } from "react-icons/fi";
 import { FaArrowRightLong } from "react-icons/fa6";
import { BsCart3 } from "react-icons/bs";
export default function contact(){
    return(
        <>
        <SignInNavbar />
<section className="signin-section">

  <h1>Sign in</h1>
  <p className="signin-subtitle">
    More then 50k students join with us!
  </p>

  <div className="signin-box">

    <div className="input-box">
      <FiMail className="input-icon" />
      <input
        type="email"
        placeholder="Enter email address"
      />
    </div>

    <div className="input-box">
      <FiLock className="input-icon" />
      <input
        type="password"
        placeholder="Password"
      />
    </div>

    <button className="signin-btn">
      Sign in
      <FaArrowRightLong />
    </button>

    <div className="signin-bottom">
      <p>Don't have an account?</p>

      <a href="/signup">Sign up</a>
    </div>

  </div>

</section>

      <FooterCTA />
      <Footer/>
    
               </>
               );
               }

