import React, { useState, useEffect } from "react";
import CardContainer from "./CardContainer";
//import SearchBar from "./SearchBar";
import axios from 'axios';


const Cars = () => {

  const [carItems, setCarItems] = useState()


  useEffect(() => {
    axios
      .get("https://localhost:44316/api/CarItems")
      .then((response) => {
        console.log("=============response.data.Results");
        console.log(response.data);
        setCarItems(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
 
  const [string, setString] = React.useState("");
  function handleChange(newValue) {
    setString(newValue);
  }
  console.log(string);
  return (
    <div>
      <h1>Cars</h1>
      <CardContainer
          string={string}
          data={carItems}
          
        />
    </div>
  );
};

export default Cars;
