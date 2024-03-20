import { useState } from "react";
import Cake from "../components/Cake";

const  CakeContainer= () => {

const victoriaSponge = {
    cakeName: "Victoria Sponge",
       ingredients: [
           "eggs",
          "butter",
          "sugar",
              "self-raising flour",
          "baking powder",
          "milk"
      ],
      price: 5,
       rating: 5
}

const teaLoaf = {
    cakeName: "Tea Loaf",
      ingredients: [
          "eggs",
         "oil",
         "dried fruit",
             "sugar",
         "self-raising flour",
         "strong tea",
     ],
     price: 2,
     rating: 3
}

const carrotCake = {
    cakeName: "Carrot Cake",
	   	ingredients: [
   		 	"carrots",
   	   		"walnuts",
	      	"oil",
   		   	"cream cheese",
   	   		"flour",
	      	"sugar",
   		],
	   	price: 8,
   		rating: 5
}

const averageRating = (victoriaSponge.rating + teaLoaf.rating + carrotCake.rating)/3;

    return ( 
        <>
      <Cake cakeName={victoriaSponge.cakeName} ingredients={victoriaSponge.ingredients} price={victoriaSponge.price} rating={victoriaSponge.rating}/>
      <Cake cakeName={teaLoaf.cakeName} ingredients={teaLoaf.ingredients} price={teaLoaf.price} rating={teaLoaf.rating}/>
      <Cake cakeName={carrotCake.cakeName} ingredients={carrotCake.ingredients} price={carrotCake.price} rating={carrotCake.rating}/>
      <h3>Average Cake Rating: {averageRating}</h3>
      <h2>Total Cake Revenue:</h2>
        </>
     );
}
 
export default CakeContainer;