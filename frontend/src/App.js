import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Content from './components/Content';
import axios from 'axios';




function App() {

  const [users, setUsers] = useState([]);
  const [updateUI, setUpdateUI] = useState(false)
  const [updateMode, setUpdateMode] = useState(false)
  const [listId, setListId] = useState("");
  const [input, setInput] = useState({
    fname: "",
    lname: "",
    email: "",
  });
  useEffect(() => {
    axios
      .get("https://mern-crud-nn6k.onrender.com/get")
      .then((res) => {
        setUsers(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [updateUI]);
  return (
    <>
      <Header />
      <div className="main">
        <Form
          setUpdateUI={setUpdateUI}
          input={input}
          setInput={setInput}
          updateMode={updateMode}
          setUpdateMode={setUpdateMode}
          listId={listId}
          setListId={setListId}
        />

        <Content
          setUpdateUI={setUpdateUI}
          users={users}
          input={input}
          setInput={setInput}
          updateMode={updateMode}
          setUpdateMode={setUpdateMode}
          listId={listId}
          setListId={setListId}
        />

      </div>


    </>
  )
}

export default App
