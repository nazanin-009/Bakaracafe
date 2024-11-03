import React from "react";
import logo from "./images/logo/reblan.webp";
import fishAndChipsImage from "./images/webpage images/fish&chips.jpg";
import friedTroutSteakImage from "./images/webpage images/frierd-trout-steak.jpg";
import chikenCotolettaImage from "./images/webpage images/chiken-cotolatta.jpg";
import steakTandooriChikenImage from "./images/webpage images/steak-tandoori-chicken.jpg";
import "./App.css";
import FoodItem from "./components/fooditems/FoodItems";
function App() {
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
        />
        <FoodItem
          foodname="Fried trout steak| استیک ماهی قزل آلا"
          description="350 گرم استیک فیله قزل آلا سرخ شده،سیب زمینی ،سس"
          price="565 تومان"
          image={friedTroutSteakImage}
          count={0}
        />
        <FoodItem
          foodname="Chiken Cotaletta|چیکن کوتالتا"
          description="شنیتسل مرغ با پودر سوخاری مخصوص،سالاد میکس،سس تام"
          price="620 تومان"
          image={chikenCotolettaImage}
          count={5}
        />
        <FoodItem
          foodname="tandoori chiken| چیکن تندوری"
          description=" 400 گرم مرغ گریل شده تندوری و ماست،اسکوپ برنج،سس شوید"
          price="660 تومان"
          image={steakTandooriChikenImage}
          count={5}
        />
      </main>
    </center>
  );
}

export default App;
