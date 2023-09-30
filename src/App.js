import React, { useState } from "react";
import "./App.css";

function App() {
  const [inputData , setInputData] = useState("");
  const [item , setItem] = useState([]);
  const addItem = () => {
    if (!inputData) {
    } else {
      setItem([...item, inputData]);
      setInputData("");
    }
  };
  const deleteItem = (id) => {
    const updatData = item.filter((elem , index)=>{
       return index !== id;
    });
    setItem(updatData);
  };
  return (
    <div className="App">
      <h1 className="heading">To Do App</h1>
      <div className="main-div">
        <div className="component">
          <input
            type="text"
            placeholder="Add items...."
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          />
          <button className="btn" onClick={addItem}>
            <i className="fa-solid fa-plus" title="Add items"></i>
          </button>
        </div>
        <div className="add-items">
          {item.map((ele, index) => {
            return (
              <div className="add" key={index}>
                <h1 className="item">{ele}</h1>
                <i
                  className="fa-solid fa-trash"
                  title="Delet item"
                  onClick={() => deleteItem(index)}
                ></i>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
