import React from "react";
import axios from "axios";

function Form({
  setUpdateUI,
  input,
  setInput,
  updateMode,
  setUpdateMode,
  listId,
  setListId,
}) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  };

  const handleClick = () => {
    axios
      .post("http://localhost:5000/save", input)
      .then((res) => {
        console.log(`Data inserted Successfully`);
        setInput({
          fname: "",
          lname: "",
          email: "",
        });
        setUpdateUI((prevState) => !prevState);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleUpdate = () => {
    console.log(listId);
    axios
      .put(`http://localhost:5000/update/${listId}`, input)
      .then((res) => {
        console.log(`Data inserted Successfully`);
        setInput({
          fname: "",
          lname: "",
          email: "",
        });
        setUpdateUI((prevState) => !prevState);
        setUpdateMode((prevState) => !prevState);
        setListId("");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="form-control w-25 m-5 h-50">
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          First Name
        </label>
        <input
          onChange={handleChange}
          value={input.fname}
          name="fname"
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="First Name"
        />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Last Name
        </label>
        <input
          onChange={handleChange}
          value={input.lname}
          name="lname"
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Last Name"
        />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          onChange={handleChange}
          value={input.email}
          name="email"
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
        <button
          onClick={updateMode ? handleUpdate : handleClick}
          type="button"
          className="w-100 mt-4 btn btn-success"
        >
          {updateMode ? "Update" : "Submit"}
        </button>
      </div>
    </div>
  );
}

export default Form;
