"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import "./CourseHighlightInfo.css";


interface CourseHighlightInfo {

  id:number;

  title:string;

  description:string;

  footer:string;

  course:{
    title:string;
  };

}



export default function CourseHighlightInfoPage(){


  const [highlights,setHighlights] = useState<CourseHighlightInfo[]>([]);


  const [deleteId,setDeleteId] = useState<number | null>(null);

  const [showDeleteModal,setShowDeleteModal] = useState(false);




  useEffect(()=>{


    fetch("/api/courseHighlightInfo")

    .then(res=>res.json())

    .then(data=>setHighlights(data));


  },[]);






  const handleDelete = async()=>{


    if(!deleteId) return;



    try{


      const res = await fetch(

        `/api/courseHighlightInfo/${deleteId}`,

        {
          method:"DELETE"
        }

      );



      if(res.ok){


        setHighlights((prev)=>

          prev.filter(
            (item)=>item.id !== deleteId
          )

        );



        alert(
          "Highlight Info deleted successfully!"
        );



        setShowDeleteModal(false);

        setDeleteId(null);



      }
      else{


        alert(
          "Delete failed"
        );


      }



    }
    catch(error){


      console.log(error);

      alert(
        "Something went wrong"
      );


    }



  };






return (


<div className="highlight-page">



  <div className="page-header">


    <div>

      <h1>
        Course Highlight Info
      </h1>


      <p>
        Manage course highlight information.
      </p>


    </div>





    <Link

      href="/admin/courseHighlightInfo/create"

      className="add-btn"

    >

      + Add Highlight Info


    </Link>



  </div>







  <div className="table-container">


  <table>


  <thead>


    <tr>


      <th>
        ID
      </th>


      <th>
        Course
      </th>


      <th>
        Title
      </th>


      <th>
        Description
      </th>


      <th>
        Footer
      </th>


      <th>
        Actions
      </th>


    </tr>


  </thead>





  <tbody>



  {
    highlights.length === 0 ? (


      <tr>

        <td

        colSpan={6}

        className="empty"

        >

          No highlight info found.


        </td>


      </tr>



    ) : (



      highlights.map((item)=>(



        <tr key={item.id}>


          <td>
            {item.id}
          </td>




          <td>

            {item.course?.title || "No Course"}

          </td>





          <td>

            {item.title}

          </td>





          <td>

            {item.description}

          </td>





          <td>

            {item.footer}

          </td>






          <td className="actions">



            <Link

            href={`/admin/courseHighlightInfo/edit/${item.id}`}

            className="edit-btn"

            >

              Edit

            </Link>





            <button

            className="delete-btn"


            onClick={()=>{

              setDeleteId(item.id);

              setShowDeleteModal(true);

            }}


            >

              Delete


            </button>



          </td>



        </tr>



      ))

    )

  }



  </tbody>



  </table>


  </div>







{
showDeleteModal && (


<div className="modal-overlay">


  <div className="delete-modal">


    <h2>
      Delete Highlight Info
    </h2>



    <p>

      Are you sure you want to delete this record?

    </p>





    <div className="modal-actions">



      <button

      className="cancel-btn"

      onClick={()=>{

        setShowDeleteModal(false);

        setDeleteId(null);

      }}

      >

        Cancel


      </button>







      <button

      className="confirm-delete"

      onClick={handleDelete}

      >

        Delete


      </button>



    </div>



  </div>


</div>


)

}



</div>


);


}