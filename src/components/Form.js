import React from "react";

function Form(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search Employee by their first name"
          id="search"
        />
        <button onClick={props.handleFormSubmit} className="btn btn-danger mt-3">
          Search
        </button>
      </div>
    </form>
  );
}

export default Form;
