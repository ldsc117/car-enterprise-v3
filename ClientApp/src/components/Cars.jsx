import React, { useState, useEffect } from "react";
import CardContainer from "./CardContainer";
//import SearchBar from "./SearchBar";


const Cars = () => {

    const [string,setString] = React.useState("");
    function handleChange(newValue) {
        setString(newValue);
      }
    console.log(string);  
  return (
    <div>
        <h1>Cars</h1>
      {/*<SearchBar value={string} onChange={handleChange}/>*/}
          <CardContainer string={string} />
          <h3>{string}</h3>

    </div>
  );
};

export default Cars;
