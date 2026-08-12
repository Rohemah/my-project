// "use client";

// import { useEffect, useState } from "react";
// import { useParams, useRouter } from "next/navigation";
// import "../../BlogListItem.css";


// interface BlogList {

//     id:number;

//     listHeading:string;

// }



// export default function EditBlogListItem(){


// const params = useParams();

// const router = useRouter();


// const id = params.id;



// const [lists,setLists] = useState<BlogList[]>([]);



// const [form,setForm] = useState({

// listId:"",

// itemText:""

// });






// useEffect(()=>{


// async function getData(){



// // Get Blog Lists

// const listRes = await fetch("/api/blogLists");

// const listData = await listRes.json();


// setLists(listData);






// // Get Single Item

// const res = await fetch(`/api/blogListItems/${id}`);

// const data = await res.json();




// setForm({

// listId:data.listId || "",

// itemText:data.itemText || ""

// });



// }




// if(id){

// getData();

// }



// },[id]);








// function handleChange(e:any){


// setForm({

// ...form,

// [e.target.name]:e.target.value

// });


// }








// async function updateItem(e:any){


// e.preventDefault();




// const res = await fetch(`/api/blogListItems/${id}`,{


// method:"PUT",


// headers:{


// "Content-Type":"application/json"


// },


// body:JSON.stringify({

// listId:Number(form.listId),

// itemText:form.itemText

// })


// });







// if(res.ok){


// alert("Blog List Item Updated");


// router.push("/admin/blogListItems");


// }



// }









// return (


// <div className="edit-page">



// <div className="edit-card">



// <h1>

// Edit Blog List Item

// </h1>






// <form

// className="edit-form"

// onSubmit={updateItem}

// >






// <select

// name="listId"

// value={form.listId}

// onChange={handleChange}

// required

// >


// <option value="">

// Select Blog List

// </option>



// {

// lists.map((list)=>(


// <option

// key={list.id}

// value={list.id}

// >

// {list.listHeading}

// </option>


// ))


// }



// </select>







// <input


// type="text"

// name="itemText"

// placeholder="Item Text"

// value={form.itemText}

// onChange={handleChange}

// required

// />








// <button

// className="update-btn"

// >

// Update Item

// </button>





// </form>





// </div>


// </div>


// )


// }

"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import "../../BlogListItem.css";

interface BlogList {
  id: number;
  listHeading: string;
}

export default function EditBlogListItem() {
  const params = useParams();
  const router = useRouter();

  const id = params.id;

  const [lists, setLists] = useState<BlogList[]>([]);

  const [form, setForm] = useState({
    listId: "",
    itemText: "",
  });

  const [loading, setLoading] = useState(true);

  // GET BLOG LISTS + SINGLE ITEM
  useEffect(() => {
    async function getData() {
      try {
        // Get Blog Lists
        const listRes = await fetch("/api/blogLists");
        const listData = await listRes.json();

        setLists(listData);

        // Get Single Blog List Item
        const res = await fetch(`/api/blogListItems/${id}`);
        const data = await res.json();

        if (!res.ok) {
          alert(data.error || "Blog list item not found");
          router.push("/admin/blogListItems");
          return;
        }

        setForm({
          listId: String(data.listId || ""),
          itemText: data.itemText || "",
        });
      } catch (error) {
        console.error("Error loading data:", error);
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      getData();
    }
  }, [id, router]);

  // HANDLE INPUT CHANGE
  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  // UPDATE ITEM
  async function updateItem(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const res = await fetch(`/api/blogListItems/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          listId: Number(form.listId),
          itemText: form.itemText,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || "Failed to update item");
        return;
      }

      alert("Blog List Item Updated Successfully");

      router.push("/admin/blogListItems");
    } catch (error) {
      console.error("Update error:", error);
      alert("Something went wrong");
    }
  }

  if (loading) {
    return (
      <div className="edit-page">
        <div className="edit-card">
          <p>Loading Blog List Item...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="edit-page">
      <div className="edit-card">
        <h1>Edit Blog List Item</h1>

        <form className="edit-form" onSubmit={updateItem}>
          {/* BLOG LIST */}
          <div className="form-group">
            <label htmlFor="listId">Select Blog List</label>

            <select
              id="listId"
              name="listId"
              value={form.listId}
              onChange={handleChange}
              required
            >
              <option value="">Select a blog list</option>

              {lists.map((list) => (
                <option key={list.id} value={list.id}>
                  {list.listHeading}
                </option>
              ))}
            </select>
          </div>

          {/* ITEM TEXT */}
          <div className="form-group">
            <label htmlFor="itemText">Item Text</label>

            <input
              id="itemText"
              type="text"
              name="itemText"
              placeholder="Enter list item"
              value={form.itemText}
              onChange={handleChange}
              required
            />
          </div>

          {/* BUTTONS */}
          <div className="form-actions">
            <button
              type="button"
              className="cancel-btn"
              onClick={() => router.push("/admin/blogListItems")}
            >
              Cancel
            </button>

            <button type="submit" className="update-btn">
              Update Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

