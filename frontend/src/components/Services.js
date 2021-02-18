import React, {useState} from 'react';
import Cards from './Cards';
import Add from './Add';
import './Services.css';

const Services=()=>{
    

    return(
        <> 
        <Add/>
        <div className="cards">
         <Cards/>
       </div>
        </>
    )
}


export default Services;