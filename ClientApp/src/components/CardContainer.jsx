import React, {useState,useEffect} from "react";
import CardContent from "./CardContent";
import "../App.css";
import axios from 'axios';


function CardContainer({string}) {

  const [carItems, setCarItems] = useState([])

  useEffect(() => {
      axios.get('https://localhost:44316/api/CarItems')
      .then(response => {
          console.log("=============response.data.Results")
          console.log(response.data);
          setCarItems(response.data)

      })
      .catch(err => {
          console.log(err)
      })
  },[] )

  
  
  const [companyList,setCompanyList] = useState([]);

  console.log(companyList);

  return (
    <div className="card-container">
      {carItems.map((object , index ) => 
      
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
        {companyList.includes(object.company)? null :companyList.push(object.company)}  
        <CardContent key={index} id={index} element={object}/>
        </div>  
      )
      :
      null
      :(
      <div className="car-card" key={index}>
      {companyList.includes(object.company)? null :companyList.push(object.company)}
      {console.log(companyList)}  
      <CardContent key={index} id={index} element={object}/>
      </div>   
      )
      )}
    </div>
  );
}

export default CardContainer;
