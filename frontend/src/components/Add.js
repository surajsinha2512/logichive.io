import React,{useState} from 'react';


const Add=()=>{
const [services,setServices]=useState([])
const [image,setImage]=useState('');
const [title,setTitle]=useState('');
const [description,setDescription]=('');

const submitHanlder=()=>{
fetch('http://localhost:9999/add',{
    method:"POST",
    body:JSON.stringify({image,title,description}),
    headers:{
        "content-Type":"application/json",
    }
}).then((r)=>{
    console.log(r);
}).catch((e)=>{
    console.log("error");
})
}

return(
    <>
    <div className="container">
    <form>
        <input placeholder="image URL" className="img" onChange={(event)=>{setImage(event.target.value)}} />
        <input placeholder="give title" className="title" onChange={(event)=>{setTitle(event.target.value)}} />
        <input placeholder="Description" className="Description" onChange={(event)=>{setDescription(event.target.value)}}/>
      <button onClick={submitHanlder}>Submit Now</button>
    </form>
    </div>
    </>
)

}


export default Add;