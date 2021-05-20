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
  let showAforted=true;
  const [userPoints, setUserPoints] = useState(40);
  const [carItems, setCarItems] = useState();
  const [tempCarItems, setTempCarItems] = useState();
  const [companyList, setCompanyList] = useState([]);
  const [selectCompany, setSelectCompany] = useState([]);

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

  const filter = (selectComp) => {
    if (selectCompany.length > 0) {
      let temp = carItems.filter((item) =>
        selectCompany.includes(item.company)
      );
      setTempCarItems(temp);
    } else {
      setTempCarItems(carItems);
    }
  };
 
 
  

  useEffect(filter, [selectCompany]);

  return (
    <div>
      <h1>Cars</h1>
      <div className="carMarket-upper-body">
        <SearchBar value={string} onChange={handleChange} />
        <h3>You have: {userPoints} points</h3>
        <h3>Theese are the cars you can affort</h3>
      </div>
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
          selectedCompanies={selectCompany}
          userPoints={userPoints}
          showAforted={showAforted}
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
