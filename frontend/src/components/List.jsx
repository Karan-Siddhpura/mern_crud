import React from "react";
import axios from "axios";

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
      .delete(`http://localhost:5000/delete/${id}`)
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
