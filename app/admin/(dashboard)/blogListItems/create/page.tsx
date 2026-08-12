// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import "../BlogListItem.css";


// interface BlogList {

//     id:number;

//     listHeading:string;

// }



// export default function CreateBlogListItem(){


// const router = useRouter();



// const [lists,setLists] = useState<BlogList[]>([]);



// const [form,setForm] = useState({

//     listId:"",

//     itemText:""

// });







// useEffect(()=>{


// fetch("/api/blogLists")

// .then(res=>res.json())

// .then(data=>{

// setLists(data);

// });


// },[]);








// function handleChange(e:any){


// setForm({

// ...form,

// [e.target.name]:e.target.value

// });


// }









// async function createItem(e:any){


// e.preventDefault();




// const res = await fetch("/api/blogListItems",{


// method:"POST",


// headers:{


// "Content-Type":"application/json"


// },


// body:JSON.stringify({

// listId:Number(form.listId),

// itemText:form.itemText


// })


// });






// if(res.ok){


// alert("Blog List Item Created");


// router.push("/admin/blogListItems");


// }



// }









// return (



// <div className="create-page">



// <div className="create-card">



// <h1>

// Create Blog List Item

// </h1>







// <form

// className="create-form"

// onSubmit={createItem}

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

// placeholder="Enter Item Text"

// value={form.itemText}

// onChange={handleChange}

// required

// />








// <button

// className="create-btn"

// >

// Create Item

// </button>





// </form>





// </div>



// </div>


// )


// }

"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "../BlogListItem.css";

interface BlogList {
  id: number;
  listHeading: string;
}

export default function CreateBlogListItem() {
  const router = useRouter();

  const [lists, setLists] = useState<BlogList[]>([]);

  const [form, setForm] = useState({
    listId: "",
    itemText: "",
  });

  const [loading, setLoading] = useState(false);

  // GET ALL BLOG LISTS
  useEffect(() => {
    async function getLists() {
      try {
        const res = await fetch("/api/blogLists");
        const data = await res.json();

        setLists(data);
      } catch (error) {
        console.error("Error fetching blog lists:", error);
      }
    }

    getLists();
  }, []);

  // HANDLE FORM CHANGE
  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  // CREATE BLOG LIST ITEM
  async function createItem(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!form.listId) {
      alert("Please select a Blog List");
      return;
    }

    if (!form.itemText.trim()) {
      alert("Please enter item text");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/blogListItems", {
        method: "POST",
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
        alert(data.error || "Failed to create Blog List Item");
        return;
      }

      alert("Blog List Item Created Successfully");

      router.push("/admin/blogListItems");
    } catch (error) {
      console.error("Create item error:", error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="create-page">
      <div className="create-card">
        <h1>Create Blog List Item</h1>

        <form className="create-form" onSubmit={createItem}>
          {/* BLOG LIST */}
          <div className="form-group">
            <label htmlFor="listId">
              Blog List <span>*</span>
            </label>

            <select
              id="listId"
              name="listId"
              value={form.listId}
              onChange={handleChange}
              required
            >
              <option value="">Select Blog List</option>

              {lists.map((list) => (
                <option key={list.id} value={list.id}>
                  {list.listHeading}
                </option>
              ))}
            </select>
          </div>

          {/* ITEM TEXT */}
          <div className="form-group">
            <label htmlFor="itemText">
              Item Text <span>*</span>
            </label>

            <input
              id="itemText"
              type="text"
              name="itemText"
              placeholder="Enter item text"
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

            <button
              type="submit"
              className="create-btn"
              disabled={loading}
            >
              {loading ? "Creating..." : "Create Item"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

