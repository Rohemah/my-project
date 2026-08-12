import "./SignInNavbar.css";

import Link from "next/link";

import { FiMenu, FiChevronDown } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";

export default function SignInNavbar() {
  return (
    <header className="signin-navbar">

      <div className="signin-logo">
        <h2>Vistario</h2>
      </div>

      <div className="signin-course">
       
        <span>All courses</span>
        
      </div>

      <nav className="signin-links">
        <a href="/">Home </a>
        <a href="/about">About </a>
        <a href="/blog">Blog </a>
        <a href="/contact">Contact </a>
      </nav>

      <div className="signin-right">

        <div className="signin-cart">
          <BsCart3 />
          <span>0</span>
        </div>

        <Link href="/signin" className="signin-btn">
          Sign in
          <FaArrowRightLong />
        </Link>

      </div>

    </header>
  );
}