import { text } from "stream/consumers";
import "./style.css";
import React, { useState } from 'react';
import { click } from "@testing-library/user-event/dist/click";

function FoodItem(attrs: {
  foodname: string;
  image: any;
  price: string;
  description: string;
  count: number;
  mode:string;
  
  
  
}) {
  
  const [changeMode,setchangeMode]=useState(attrs.count)

  let foodAvailabiltyClass ="available";
  let CountSpan=<span>{changeMode}</span>;
  

  if (attrs.count ==-1) {
    foodAvailabiltyClass ="available";
    CountSpan = <span>&#8734;</span > ;
  }
  if (attrs.count ==0) {
    foodAvailabiltyClass ="unavailable";
    CountSpan = <></> ;
  }
  const handleClick = () => {
    if (attrs.mode === 'increase') {
        setchangeMode(prevchangemode => prevchangemode+ 1) ;
    }
   if (attrs.mode === 'decrease') {
        setchangeMode(prevchangemode => prevchangemode- 1);
    }console.log(changeMode)
};
 



  return (

    <article  id="items" onClick={handleClick} className={"fish " +foodAvailabiltyClass}>
      
      <body className="dark"> </body>
                  <img src={attrs.image} alt="attrs.image" />
      <h3>{attrs.foodname}</h3>
      <p dir="rtl">{attrs.description}</p>
            <strong>
        <div dir="rtl" className="price">
          {attrs.price}
        </div>
      </strong>
    
      {changeMode>0 && <span>{changeMode}</span> }
      {changeMode<0 && <span>&infin;</span> }
     
    </article>
    
  );
};
export default FoodItem;