import React, { Component } from 'react';
import Card from "react-bootstrap/Card";

export class Home extends Component {
    static displayName = Home.name;


    render() {
    return (
        <div style={{ width: "80%", margin: "auto", padding: "20px" }}>
            <h1>CAR ENTERPRISE</h1>
            <h3>=== for car lovers ===</h3>
            <Card style={{ textAlign: 'left' }}>
                <h5>
                    Wellcome to our site, a site containing:
        </h5>
                <h5>
                    - cars informations, technical data, pictures
        </h5>
                <h5>
                    - informations of selling new/old cars
        </h5>
                <h5>
                    - comments refearing cars, vendors, etc
        </h5>
                <h5>
                    - informations from NHTSA site
        </h5>

                <h6 style={{ color: 'grey' }}>
                    [ The NHTSA Product Information Catalog Vehicle Listing (vPIC)  provides different ways to gather
                    information on Vehicles and their specifications. The vPIC Dataset is
                    populated using the information submitted by the Motor Vehicle
                    manufacturers through the 565 submittals. All the information on how a
                    VIN is assigned by the manufacturer is captured in this catalog and used
                    to decode a VIN and extract vehicle information.]
        </h6>
            </Card>
            <img src="https://cdn.vivre.eu/upload/2018/03/thumbs/5a9d1b07d21952.59465374.1400x1400.jpg" alt=""></img>
        </div>
    );
  }
}
