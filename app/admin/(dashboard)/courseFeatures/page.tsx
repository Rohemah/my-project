"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import "./CourseFeatures.css";


interface CourseFeature {

  id:number;

  feature:string;

  course:{
    title:string;
  };

}



export default function CourseFeaturesPage(){


  const [features,setFeatures] = useState<CourseFeature[]>([]);


  const [deleteId,setDeleteId] = useState<number | null>(null);

  const [showDeleteModal,setShowDeleteModal] = useState(false);



  useEffect(()=>{


    fetch("/api/courseFeatures")

    .then(res=>res.json())

    .then(data=>setFeatures(data));


  },[]);




  const handleDelete = async()=>{


    if(!deleteId) return;



    try{


      const res = await fetch(
        `/api/courseFeatures/${deleteId}`,
        {
          method:"DELETE"
        }
      );



      if(res.ok){


        setFeatures((prev)=>

          prev.filter(
            (item)=>item.id !== deleteId
          )

        );



        alert(
          "Course Feature deleted successfully!"
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


<div className="course-feature-page">



  <div className="page-header">


    <div>


      <h1>
        Course Features
      </h1>


      <p>
        Manage all course features.
      </p>


    </div>



    <Link

      href="/admin/courseFeatures/create"

      className="add-btn"

    >

      + Add Feature


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
            Feature
          </th>


          <th>
            Actions
          </th>


        </tr>


      </thead>





      <tbody>



      {
        features.length === 0 ? (


          <tr>


            <td

              colSpan={4}

              className="empty"

            >

              No features found.


            </td>


          </tr>



        ) : (



          features.map((item)=>(



            <tr key={item.id}>


              <td>

                {item.id}

              </td>



              <td>

                {item.course?.title || "No Course"}

              </td>




              <td>

                {item.feature}

              </td>





              <td className="actions">



                <Link

                  href={`/admin/courseFeatures/edit/${item.id}`}

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
      Delete Course Feature
    </h2>



    <p>

      Are you sure you want to delete this feature?

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