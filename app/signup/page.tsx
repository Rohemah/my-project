"use client";

import "./signup.css";
import Link from "next/link";
import SignInNavbar from "../components/SignInNavbar";
import Footer from "../components/Footer";
import FooterCTA from "../components/FooterCTA";

import { HiOutlineMail } from "react-icons/hi";
import { FiUser } from "react-icons/fi";
import { FiLock } from "react-icons/fi";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Signup() {
  return (
    <>
    <SignInNavbar/>
    <section className="signup">

      <h1>Create Account</h1>

      <p className="signup-subtitle">
        Join more than 50k students worldwide!
      </p>

      <div className="signup-box">

        {/* Email */}

        <div className="input-box">

          <HiOutlineMail className="input-icon" />

          <input
            type="email"
            placeholder="Enter email address"
          />

        </div>

        {/* Name */}

        <div className="input-box">

          <FiUser className="input-icon" />

          <input
            type="text"
            placeholder="Name"
          />

        </div>

        {/* Password */}

        <div className="input-box">

          <FiLock className="input-icon" />

          <input
            type="password"
            placeholder="Password"
          />

        </div>

        {/* Checkbox */}

        <label className="checkbox-area">

          <input type="checkbox" />

          <span>
            By creating an account, I agree to this website's
            privacy policy and terms of service.
          </span>

        </label>

        {/* Button */}

        <button className="signup-btn">

          Sign up

          <FaArrowRightLong />

        </button>

        {/* Bottom */}

        <div className="bottom-text">

  <p>Already have an account?</p>

  <Link href="/signin" className="signin-link">
    Sign in
  </Link>

</div>

      </div>

    </section>
    <FooterCTA/>
    <Footer/>
    </>
  );
}