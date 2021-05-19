import React from "react";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

function SearchBar(props) {


    function handleChange(event) {
        props.onChange(event.target.value);
    }


    return (
        <div>
            <Form inline>
                <FormControl
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2"
                    onChange={(event) => {
                        props.onChange(event.target.value);
                    }}
                />
            </Form>
        </div>
    );
}

export default SearchBar;
