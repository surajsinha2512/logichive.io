import React, {useState,useEffect} from 'react';
import {Card,ListGroup,ListGroupItem} from 'react-bootstrap';

const Cards=()=>{
   const [details , setDetails]=useState([{img:"https://logichive.in/wp-content/uploads/2018/10/shutterstock_339377579-845x321.jpg",title:"Multi Platform Mobile Application Development",description:"Build powerful, cross platform-based applications to solve everyday business problems at one shot"},
             {img:"https://logichive.in/wp-content/uploads/2018/10/fonte-inventrom1-845x321.jpg",title:"Internet of Things Product Development",description:"Conceptualizing to End Product, We make your futuristic product a part of your future in no time"}]);


    useEffect(()=>{
           fetch('http://localhost:9999/').then((r)=>{
              return r.json();
           }).then((r)=>{
               console.log(r);
            setDetails(...details, {img:r.img,title:r.title,des:r.description})
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