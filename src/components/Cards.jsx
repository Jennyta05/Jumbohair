import { useEffect, useState } from "react";
import '../Styles/card.css'
import { Card } from "./Card";



function Cards({cardData, setCardData}){
   
    

    return(
          
          <div>
          <Card
            cardData={cardData}
            setCardData={setCardData}
          />
          
          </div>
           
           
           
   )
          

}


export {Cards}