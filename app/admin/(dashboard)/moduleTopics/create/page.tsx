"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "./CreateModuleTopic.css";


interface Module {

id:number;

title:string;

moduleName:string;

}



export default function CreateModuleTopicPage(){


const router = useRouter();



const [modules,setModules] = useState<Module[]>([]);


const [moduleId,setModuleId] = useState("");

const [topic,setTopic] = useState("");






useEffect(()=>{


fetch("/api/modules")

.then(res=>res.json())

.then(data=>setModules(data));


},[]);








const handleSubmit = async(
e:React.FormEvent
)=>{


e.preventDefault();




const res = await fetch(

"/api/moduleTopics",

{

method:"POST",

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
"Topic Created Successfully!"
);



router.push(
"/admin/moduleTopics"
);



}

else{


const error = await res.json();


console.log(error);



alert(

error.error || "Something went wrong"

);



}



};







return(


<div className="create-topic-page">


<h1>
Add Module Topic
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

placeholder="Enter topic"

required

/>






<button type="submit">

Save Topic

</button>



</form>


</div>


);


}