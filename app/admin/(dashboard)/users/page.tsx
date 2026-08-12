"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import "./User.css";


interface User {

id:number;

fullName:string;

email:string;

role:string;

createdAt:string;

}




export default function UsersPage(){



const [users,setUsers] = useState<User[]>([]);






useEffect(()=>{


fetch("/api/users")

.then(res=>res.json())

.then(data=>{

setUsers(data);

});


},[]);







async function deleteUser(id:number){



const confirmDelete = confirm(
"Delete this user?"
);



if(!confirmDelete) return;






const res = await fetch(

`/api/users/${id}`,

{

method:"DELETE"

}

);






if(res.ok){


setUsers(

users.filter(

(user)=>user.id !== id

)

);


}


}









return (


<div className="user-page">



<div className="user-header">



<h1>

Users

</h1>







<Link href="/admin/users/create">


<button className="add-btn">

Add User

</button>


</Link>





</div>








<table>


<thead>


<tr>


<th>
Name
</th>


<th>
Email
</th>


<th>
Role
</th>


<th>
Created
</th>


<th>
Actions
</th>



</tr>


</thead>







<tbody>



{

users.map((user)=>(



<tr key={user.id}>


<td>

{user.fullName}

</td>




<td>

{user.email}

</td>




<td>


<span className="role">

{user.role}

</span>


</td>





<td>

{
new Date(user.createdAt)
.toLocaleDateString()
}

</td>







<td>



<div className="actions">





<Link

href={`/admin/users/edit/${user.id}`}

>


<button className="edit-btn">

Edit

</button>


</Link>








<button

className="delete-btn"

onClick={()=>deleteUser(user.id)}

>

Delete

</button>





</div>


</td>






</tr>


))


}





</tbody>





</table>





</div>


)


}