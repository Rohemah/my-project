import Link from "next/link";
import "./HomeNavbar.css";
import { BsCart3 } from "react-icons/bs";
import { FiMenu, FiChevronDown } from "react-icons/fi";
import { FaArrowRightLong } from "react-icons/fa6";

export default function HomeNavbar() {
  return (
    <div className="home-navbar">

      <div className="home-logo">
        <h2>Vistario</h2>
      </div>

      <div className="home-course">
       
        <span>All Courses</span>
        
      </div>

      <nav className="home-links">
        <Link href="/">Home </Link>
        <Link href="/about">About </Link>
        <Link href="/blog">Blog  </Link>
        <Link href="/contact">Contact </Link>
      </nav>

      <div className="home-right">

        <div className="home-cart">
          <BsCart3 />
          <span>0</span>
        </div>

        <Link href="/signin" className="home-btn">
          Sign In
          <FaArrowRightLong />
        </Link>

      </div>

    </div>
  );
}