import React,{useState} from 'react';
import {Button} from 'react-bootstrap';

const Add=()=>{
const [services,setServices]=useState([])
const [image,setImage]=useState('');
const [title,setTitle]=useState('');
const [description,setDescription]=useState('');

const submitHanlder=()=>{
fetch('http://localhost:9999/add',{
    method:"POST",
    body:JSON.stringify({img:image,title:title,description:description}),
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
    <form className="form" >
        <input placeholder="image URL" className="img" onChange={(event)=>{setImage(event.target.value)}} style={{margin:"10px"}} />
        <input placeholder="give title" className="title" onChange={(event)=>{setTitle(event.target.value)}} style={{margin:"10px"}}/>
        <input placeholder="Description" className="Description" onChange={(event)=>{setDescription(event.target.value)}} style={{margin:"10px"}}/>
      <Button onClick={submitHanlder} className="btn btn-primary">Submit Now</Button>
    </form>
    </div>
    </>
)

}


export default Add;