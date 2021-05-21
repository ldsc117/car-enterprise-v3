import React, { useState, useEffect } from "react";
import CardContainer from "./CardContainer";
import SearchBar from "./SearchBar";
import axios from "axios";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import "../App.css";

const CarMarket = () => {
  let showAforted = true;
  const [reversed ,setReversed] = useState();
  const [userPoints, setUserPoints] = useState(50);
  const [carItems, setCarItems] = useState();
  const [tempCarItems, setTempCarItems] = useState();
  const [companyList, setCompanyList] = useState([]);
  const [selectCompany, setSelectCompany] = useState([]);
  const[sortValue, setSortValue] = useState("");
  
  useEffect(() => {
    axios
      .get("https://localhost:44316/api/CarItems")
      .then((response) => {
        console.log("=============response.data.Resultsce");
        setCarItems(response.data);
        setTempCarItems(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [string, setString] = React.useState("");
  function handleChange(newValue) {
    setString(newValue);
  }

  function handleCheckChange(event) {
    var company = event.target.value;

    if (selectCompany.includes(company)) {
      const newList = selectCompany.filter((com) => com !== company);
      setSelectCompany(newList);
    } else {
      setSelectCompany([...selectCompany, company]);
      console.log(selectCompany);
    }
    filter(selectCompany);
  }

  
  function handleSelectChange(event){
    var str = event.target.value;
    var number = str.slice(-1);
    if(number==="1"){
      setReversed(false);
    }
    else if(number==="2"){
      setReversed(true);
    }
    console.log(reversed);
    setSortValue(str.substring(0, str.length - 1));
  }

  const filter = (selectComp) => {
    let temp = carItems;
    
    if (selectCompany.length > 0) {
      temp = temp.filter((item) =>
        selectCompany.includes(item.company)
      );
      setTempCarItems(temp);
    }
  
    else{
      setTempCarItems(carItems);
    }
  };

  useEffect(filter, [selectCompany]);


  return (
    <div>
      <h1>Cars</h1>
      <div className="carMarket-upper-body">
        <SearchBar value={string} onChange={handleChange} />
        <h3 className="car-market-title">You have: {userPoints} points</h3>
        <h3 className="car-market-title">Theese are the cars you can afford</h3>
        </div>
        <Form className="select-form">
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Sort By</Form.Label>
            <Form.Control as="select" onChange={handleSelectChange}>
              <option> </option>
              <option value="valuePoints1">Points Ascending</option>
              <option value="valuePoints2">Points Descending</option>
              <option value="topSpeedKmph2">Top Speed</option>
              <option value="maxPowerBhp2">Horse Power</option>
              
            </Form.Control>
          </Form.Group>
        </Form>
     
      <div className="container-cars">
        <h1 className="hidden">
          {carItems &&
            carItems.map((element) =>
              companyList.includes(element.company)
                ? null
                : companyList.push(element.company)
            )}
        </h1>
        <CardContainer
          string={string}
          data={tempCarItems}
          userPoints={userPoints}
          showAforted={showAforted}
          sortValue={sortValue}
          reversed={reversed}
        />
        <Accordion defaultActiveKey="0" className="filter">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              Select Company
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Form.Group controlId="formBasicCheckbox">
                {companyList &&
                  companyList.map((company) => (
                    <Form.Check
                      type="checkbox"
                      label={company}
                      id={company}
                      value={company}
                      onChange={handleCheckChange}
                    />
                  ))}
              </Form.Group>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    </div>
  );
};

export default CarMarket;
