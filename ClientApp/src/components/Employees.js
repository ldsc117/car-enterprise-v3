import React, { useState, useEffect } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';


const Employees = () => {

    const [employees, setEmployees] = useState([])


    useEffect(() => {
        axios
            .get("https://localhost:44316/api/Employees")
            .then((response) => {
                console.log("=============response.data.Results");
                console.log(response.data);
                setEmployees(response.data);
                
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    //const [string, setString] = React.useState("");
    //function handleChange(newValue) {
    //    setString(newValue);
    //}
    //console.log(string);

    return (
        <div className='table-container'>
            <h4>List of Employees sort by:</h4>
            <div>
            {/*<h5>Sort by: </h5>*/}
            <select>
                <option value="id">None</option>
                <option value="firstName">First Name</option>
                <option value="lastName">LastName</option>
                <option value="email">Email</option>
                <option value="rankPoints">Points</option>
                </select>
            </div>

            <Table className='table' striped bordered hover size="sm">
                <thead>
                    <tr>

                        <th>ID</th>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Points</th>
                    </tr>
                </thead>
                <tbody>

                    {employees
                        //.sort((a, b) => (a.rankPoints < b.rankPoints)? 1 : -1)
                        //.filter(a => a.registrationId == "1ca3dc48-3147-405e-9cb4-5c8535e5ee2d")
                        .map(employee =>
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}  {employee.lastName}</td>
                            <td>{employee.email}</td>
                            <td>{employee.phoneNumber}</td>
                            <td>{employee.rankPoints}</td>
                        </tr>)}


                </tbody>
            </Table>

        </div>
    )

};

export default Employees;
