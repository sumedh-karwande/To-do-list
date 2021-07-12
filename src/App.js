import React, { useState } from 'react';
import './style/App.css';
import Todolist from "./Todolist"

function App() {
  const[inputList, setInputList] = useState("");
  const[items, setItems] = useState([]);

  const itemEvent = (event) => {
    console.log("event",event);
    setInputList(event.target.value);
  }
  const listOfItems = () => {
    setItems((oldItems) => {
      return[...oldItems, inputList]
    })
    setInputList("");
  }
  const deleteItems = (id) => {
    console.log("deleted")

    setItems((oldItems)=>{
      return oldItems.filter((arrayElem,index)=>{
          return index !== id;
      })
    })
}
  return (
    <>
    <div className="main_div">
      <div className="center_div">
        <h1> TO-DO List</h1>
        <div className = "input_div">
          <input type="text" placeholder="Add a Items" onChange={itemEvent}
          value={inputList} />
          <button onClick = {listOfItems}> + </button>
        </div>

      <ol>
        {/* <li>{inputList}</li> */}
        {items.map( (itemval,index) => {
         return <Todolist key={index} 
         id ={index}
         text = {itemval} 
         onSelect = {deleteItems}
         />;
        })}
      </ol>
      </div>

    </div>
    </>
     
  );
}

export default App;