import React from "react";

import List from "./List";

function Content({
  users,
  setUpdateUI,
  input,
  setInput,
  updateMode,
  setUpdateMode,
  listId,
  setListId,
}) {
  return (
    <div className="content container mt-5">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Delete</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <List
                key={user._id}
                id={user._id}
                fname={user.fname}
                lname={user.lname}
                email={user.email}
                setUpdateUI={setUpdateUI}
                input={input}
                setInput={setInput}
                updateMode={updateMode}
                setUpdateMode={setUpdateMode}
                listId={listId}
                setListId={setListId}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Content;
