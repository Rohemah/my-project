"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  FaHome,
  FaBook,
  FaFolderOpen,
  FaBlog,
  FaUserTie,
  FaUsers,
  FaGraduationCap,
  FaCog,
  FaFileAlt,
} from "react-icons/fa";

import "./Sidebar.css";

export default function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    {
      title: "Dashboard",
      icon: <FaHome />,
      href: "/admin",
    },
    {
      title: "Courses",
      icon: <FaBook />,
      href: "/admin/courses",
    },
      {
    title: "Course Descriptions",
    icon: <FaFileAlt />,
    href: "/admin/courseDescriptions",
  },
  {
 title:"Course Features",
 icon:<FaBook />,
 href:"/admin/courseFeatures",
},
{
 title:"Course Highlight Info",
 icon:<FaBook />,
 href:"/admin/courseHighlightInfo",
},
{
 title:"Course Highlights",
 icon:<FaBook />,
 href:"/admin/courseHighlights",
},
{
 title:"Modules",
 icon:<FaBook />,
 href:"/admin/modules",
},
{
 title:"Modules Topics",
 icon:<FaBook />,
 href:"/admin/moduleTopics",
},
 {
      title: "Course Instructors",
      icon: <FaUserTie />,
      href: "/admin/courseInstructors",
    },
{
      title: "Categories",
      icon: <FaFolderOpen />,
      href: "/admin/categories",
    },
    {
      title: "Blogs",
      icon: <FaBlog />,
      href: "/admin/blogs",
    },
     {
      title: "Blog Sections",
      icon: <FaBlog />,
      href: "/admin/blogSections",
    },
    {
      title: "Blog Lists",
      icon: <FaBlog />,
      href: "/admin/blogLists",
    },
    {
      title: "Blog List Items",
      icon: <FaBlog />,
      href: "/admin/blogListItems",
    },
    {
      title: "Instructors",
      icon: <FaUserTie />,
      href: "/admin/instructors",
    },
    {
      title: "Instructors Skills",
      icon: <FaUserTie />,
      href: "/admin/instructorSkills",
    },
    {
      title: "Users",
      icon: <FaUsers />,
      href: "/admin/users",
    },
    {
      title: "Enrollments",
      icon: <FaGraduationCap />,
      href: "/admin/enrollments",
    },
   
  ];

  return (
    <aside className="sidebar">

      <div className="logo">

        <h2>Vistario</h2>

        <p>Learning Platform</p>

      </div>

      <ul>

        {menuItems.map((item) => (

          <li key={item.title}>

            <Link
              href={item.href}
              className={
                pathname === item.href
                  ? "active"
                  : ""
              }
            >
              {item.icon}

              <span>{item.title}</span>

            </Link>

          </li>

        ))}

      </ul>

      <div className="profile">

        <div className="avatar">
          A
        </div>

        <div>

          <h4>Administrator</h4>

          <p>admin@vistario.com</p>

        </div>

      </div>

    </aside>
  );
}