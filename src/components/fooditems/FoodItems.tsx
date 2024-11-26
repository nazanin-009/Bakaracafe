import { text } from "stream/consumers";
import "./style.css";
import React, { useState } from 'react';

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
      <img src={attrs.image} alt="attrs.image" />
      <h3>{attrs.foodname}</h3>
      <p dir="rtl">{attrs.description}</p>
            <strong>
        <div dir="rtl" className="price">
          {attrs.price}
        </div>
      </strong>
      <div className="mode">{attrs.mode}</div>
      {changeMode>0 && <span>{changeMode}</span> }
      {changeMode<0 && <span>&infin;</span> }
     
     

    </article>
  );
};
export default FoodItem;
