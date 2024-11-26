import React, { useState, useEffect } from 'react';
import logo from "./images/logo/reblan.webp";
import fishAndChipsImage from "./images/webpage images/fish&chips.jpg";
import friedTroutSteakImage from "./images/webpage images/frierd-trout-steak.jpg";
import chikenCotolettaImage from "./images/webpage images/chiken-cotolatta.jpg";
import steakTandooriChikenImage from "./images/webpage images/steak-tandoori-chicken.jpg";
import "./App.css";
import FoodItem from "./components/fooditems/FoodItems";

function App() {
  
    const [changeMode, setChangeMode] = useState(0);
    const [mode, setMode] = useState<'increase' | 'decrease'>('increase');
    useEffect (() => {
      const handleKeyPress = (event: KeyboardEvent) => {
        if (event.key === 'i') { setMode('increase');
        } else if (event.key === 'd') {setMode('decrease');
        }
      };
      window.addEventListener('keydown', handleKeyPress);
      return () => {
        window.removeEventListener('keydown', handleKeyPress);
      };
    }, []);
    const handleClick = () => {
      if (mode === 'increase') {
        setChangeMode(prevchangemode => prevchangemode+ 1) ;
      }
     if (mode === 'decrease') {
          setChangeMode(prevchangemode => prevchangemode- 1);
      }console.log(changeMode)
  
    
    return (
      <div>
        <h1> Current changeMode: {changeMode}</h1>
        <button onClick={handleClick}>Click to {mode}</button>
        <p>Press 'i' to increase and 'd' to decrease the value.</p>
      </div>
    );
  }; 
  
  return (
    <center>
      <header className="header">
        <img className="logo" src={logo} alt="logo" />
        <h2 className="rebelan">REBELAN</h2>
        <h3>Meet the Perfection</h3>
      </header>
      <main>
        <FoodItem
          foodname="Fish&chips|فیش اند چیپس"
         
          description="300 گرم فیله ماهی، چیپس دست ساز ،سس تارتار"
          price="765 تومان"
          image={fishAndChipsImage}
          count={-1}
          mode={mode}
        />
        <FoodItem
          foodname="Fried trout steak| استیک ماهی قزل آلا"
          description="350 گرم استیک فیله قزل آلا سرخ شده،سیب زمینی ،سس"
          price="565 تومان"
          image={friedTroutSteakImage}
          count={2}
         
          mode={mode}
        />
        <FoodItem
          foodname="Chiken Cotaletta|چیکن کوتالتا"
          description="شنیتسل مرغ با پودر سوخاری مخصوص،سالاد میکس،سس تام"
          price="620 تومان"
          image={chikenCotolettaImage}
          count={5}
          
          mode={mode}
        />
        <FoodItem
          foodname="tandoori chiken| چیکن تندوری"
          description=" 400 گرم مرغ گریل شده تندوری و ماست،اسکوپ برنج،سس شوید"
          price="660 تومان"
          image={steakTandooriChikenImage}
          count={5}
          
          mode={mode}
        />
      </main>
    </center>
  );
}

export default App;
