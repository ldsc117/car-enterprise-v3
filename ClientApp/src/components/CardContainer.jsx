import React, {useState,useEffect} from "react";
import CardContent from "./CardContent";
import "../App.css";
import CarMarket from "./CarMarket";


function CardContainer({string,data,selectedCompanies}) {

  const [selectedMakers,setSelectedMakers] = useState();

  
  console.log(selectedMakers)
  return (
    <div className="card-container">
      {data  && data.map((object , index ) => 
      
      string != "" ?
      (object.company.includes(string.toLowerCase())
      || object.fuel.includes(string.toLowerCase())
      || object.bodyType.includes(string.toLowerCase())
      || object.generation.includes(string.toUpperCase())
      || object.model.includes(string.toLowerCase())
      )
      
      ?
      (
        <div className="car-card" key={index}>
        <CardContent key={index} id={index} element={object}/>
        </div>  
      )
      :
      null
      :(
      <div className="car-card" key={index}> 
      <CardContent key={index} id={index} element={object}/>
      </div>   
      )
      
      )}
    </div>
  );
}

export default CardContainer;
