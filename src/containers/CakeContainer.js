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

// revenue states
const [victoriaSpongeRevenue, setVictoriaSpongeRevenue] = useState(0);
const [teaLoafRevenue, setTeaLoafRevenue] = useState(0);
const [carrotCakeRevenue, setCarrotCakeRevenue] = useState(0);

let totalRevenue = victoriaSpongeRevenue + teaLoafRevenue + carrotCakeRevenue;

    return ( 
        <>
        <h2>Our Cakes:</h2>
        <div>
        <div className="cakeList">
                <Cake id="victoria" cakeName={victoriaSponge.cakeName} ingredients={victoriaSponge.ingredients} price={victoriaSponge.price} rating={victoriaSponge.rating} count={victoriaSpongeRevenue} onButtonClick={setVictoriaSpongeRevenue}/>
                <Cake cakeName={teaLoaf.cakeName} ingredients={teaLoaf.ingredients} price={teaLoaf.price} rating={teaLoaf.rating} count={teaLoafRevenue} onButtonClick={setTeaLoafRevenue}/>
                <Cake cakeName={carrotCake.cakeName} ingredients={carrotCake.ingredients} price={carrotCake.price} rating={carrotCake.rating} count={carrotCakeRevenue} onButtonClick={setCarrotCakeRevenue}/>
      </div>
            <h3 id="rating">Average Cake Rating: {averageRating}</h3>
            <h2 id="revenue"> Total Cake Revenue: £{totalRevenue}</h2>
      </div>
        </>
     );
}
 
export default CakeContainer;
