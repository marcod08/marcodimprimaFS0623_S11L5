import React, { useState } from "react";
import { Form, FormControl } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getSearch } from "../redux/action";

const FormSearch = () => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(getSearch(searchValue));
  };

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <Form
      className="input-group mt-3"
      onSubmit={handleFormSubmit}
    >
      <FormControl
        type="text"
        className="form-control"
        id="searchField"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="basic-addon2"
        value={searchValue}
        onChange={handleInputChange}
      />
      <div className="input-group-append">
        <button
          className="btn btn-outline-secondary btn-sm h-100"
          type="submit"
        >
          GO
        </button>
      </div>
    </Form>
  );
};

export default FormSearch;