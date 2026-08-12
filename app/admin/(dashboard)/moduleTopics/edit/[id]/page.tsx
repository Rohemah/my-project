"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "./EditModuleTopic.css";


interface Module {

id:number;

moduleName:string;

title:string;

}



export default function EditModuleTopicPage({

params

}:{

params:Promise<{id:string}>

}){


const router = useRouter();



const [id,setId] = useState("");

const [modules,setModules] = useState<Module[]>([]);


const [moduleId,setModuleId] = useState("");

const [topic,setTopic] = useState("");





// Get ID

useEffect(()=>{


params.then((value)=>{


setId(value.id);


});


},[params]);






// Get Modules

useEffect(()=>{


fetch("/api/modules")

.then(res=>res.json())

.then(data=>setModules(data));


},[]);







// Get Topic Data

useEffect(()=>{


if(!id) return;



fetch(`/api/moduleTopics/${id}`)

.then(res=>res.json())

.then(data=>{


setModuleId(
String(data.moduleId)
);


setTopic(
data.topic
);


});



},[id]);









// Update

const handleSubmit = async(

e:React.FormEvent

)=>{


e.preventDefault();




const res = await fetch(

`/api/moduleTopics/${id}`,

{

method:"PUT",

headers:{

"Content-Type":"application/json"

},


body:JSON.stringify({

moduleId:Number(moduleId),

topic

})


}

);





if(res.ok){


alert(
"Topic Updated Successfully!"
);



router.push(
"/admin/moduleTopics"
);



}

else{


alert(
"Update Failed"
);



}



};







return(


<div className="edit-topic-page">


<h1>
Edit Module Topic
</h1>





<form onSubmit={handleSubmit}>


<label>
Select Module
</label>




<select

value={moduleId}

onChange={(e)=>setModuleId(e.target.value)}

required

>


<option value="">

Select Module

</option>




{

modules.map((module)=>(


<option

key={module.id}

value={module.id}

>

{module.moduleName || module.title}

</option>


))


}



</select>







<label>
Topic
</label>




<textarea

rows={6}

value={topic}

onChange={(e)=>setTopic(e.target.value)}

required

/>






<button type="submit">

Update Topic

</button>



</form>


</div>


);


}