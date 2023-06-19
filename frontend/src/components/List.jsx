import React from "react";
import axios from "axios";
// require("dotenv").config();
// const baseUrl = process.env.baseUrl;
function List({
  id,
  fname,
  lname,
  email,
  setUpdateUI,
  setInput,
  setUpdateMode,
  listId,
  setListId,
}) {
  const handleDelete = () => {
    console.log(id);
    axios
      .delete(`https://mern-crud-nn6k.onrender.com/delete/${id}`)
      .then((res) => {
        console.log("Data deleted successfully");
        setUpdateUI((prevState) => !prevState);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleUpdate = () => {
    setListId(id);
    setUpdateMode((prevValue) => {
      return !prevValue;
    });
    setInput({
      fname: fname,
      lname: lname,
      email: email,
    });
  };
  return (
    <tr>
      <td>{fname}</td>
      <td>{lname}</td>
      <td>{email}</td>
      <td>
        <button type="button" onClick={handleDelete} className="btn btn-danger">
          Delete
        </button>
      </td>
      <td>
        <button
          type="button"
          onClick={handleUpdate}
          className="btn btn-warning"
        >
          Edit
        </button>
      </td>
    </tr>
  );
}

export default List;
