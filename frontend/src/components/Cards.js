import React, {useState,useEffect} from 'react';
import {Card} from 'react-bootstrap';

const Cards=()=>{
   const [details,setDetails]=useState([]);


    useEffect(()=>{
           fetch('http://localhost:9999').then((r)=>{
              return r.json();
           }).then((r)=>{
               console.log(r);
            setDetails([...details, {img:r.img,title:r.title,description:r.description}])
            console.log(details)
           }).catch((e)=>{
             console.log("error"+e)
           })
    },[])
    

return(
    <>

    {details.map((value)=>{
        return(
<> 
  <div className="card">
  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={value.img} style={{height:"150px",width:"200px"}}/>
  <Card.Body>
    <Card.Title>{value.title}</Card.Title>
    <Card.Text>
     {value.description}
    </Card.Text>
  </Card.Body>
</Card>
</div>
    </>
        )

    })}

   
    </>
)

}


export default Cards;