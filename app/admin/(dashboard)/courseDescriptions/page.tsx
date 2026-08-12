"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import "./CourseDescriptions.css";

interface CourseDescription {
  id: number;
  descriptionOne: string;
  descriptionTwo: string;
  course: {
    title: string;
  };
}

export default function CourseDescriptionsPage() {

  const [descriptions, setDescriptions] = useState<CourseDescription[]>([]);

  const [deleteId, setDeleteId] = useState<number | null>(null);

  const [showDeleteModal, setShowDeleteModal] = useState(false);


  useEffect(() => {

    fetch("/api/courseDescriptions")
      .then((res) => res.json())
      .then((data) => setDescriptions(data));

  }, []);



  const handleDelete = async () => {

    if (!deleteId) return;


    try {

      const res = await fetch(
        `/api/courseDescriptions/${deleteId}`,
        {
          method: "DELETE",
        }
      );


      if (res.ok) {

        setDescriptions((prev) =>
          prev.filter(
            (item) => item.id !== deleteId
          )
        );


        alert(
          "Course Description deleted successfully!"
        );


        setShowDeleteModal(false);
        setDeleteId(null);


      } else {

        alert("Failed to delete description.");

      }


    } catch (error) {

      console.error(error);

      alert("Something went wrong.");

    }

  };



  return (

    <div className="course-description-page">


      <div className="page-header">

        <div>

          <h1>
            Course Descriptions
          </h1>

          <p>
            Manage all course descriptions.
          </p>

        </div>


        <Link
          href="/admin/courseDescriptions/create"
          className="add-btn"
        >
          + Add Description
        </Link>


      </div>



      <div className="table-container">


        <table>


          <thead>

            <tr>

              <th>ID</th>

              <th>Course</th>

              <th>Description One</th>

              <th>Description Two</th>

              <th>Actions</th>


            </tr>


          </thead>



          <tbody>


            {descriptions.length === 0 ? (


              <tr>

                <td
                  colSpan={5}
                  className="empty"
                >

                  No descriptions found.

                </td>


              </tr>


            ) : (


              descriptions.map((item) => (


                <tr key={item.id}>


                  <td>
                    {item.id}
                  </td>


                  <td>
                    {item.course.title}
                  </td>


                  <td>
                    {item.descriptionOne}
                  </td>


                  <td>
                    {item.descriptionTwo}
                  </td>



                  <td className="actions">


                    <Link
                      href={`/admin/courseDescriptions/edit/${item.id}`}
                      className="edit-btn"
                    >

                      Edit

                    </Link>



                    <button

                      className="delete-btn"

                      onClick={() => {

                        setDeleteId(item.id);

                        setShowDeleteModal(true);

                      }}

                    >

                      Delete


                    </button>


                  </td>



                </tr>


              ))

            )}


          </tbody>


        </table>


      </div>




      {showDeleteModal && (


        <div className="modal-overlay">


          <div className="delete-modal">


            <h2>
              Delete Course Description
            </h2>



            <p>
              Are you sure you want to delete this description?
              This action cannot be undone.
            </p>



            <div className="modal-actions">


              <button

                className="cancel-btn"

                onClick={() => {

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


      )}



    </div>

  );

}