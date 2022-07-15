// ref: https://www.youtube.com/watch?v=-l0FEONO-cM
import './App.css';
import React, { useState } from 'react';
import {library} from '@fortawesome/fontawesome-svg-core'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import {faCirclePlus} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

library.add(faTrash);
library.add(faCirclePlus);

function App() {

  //State hook =`useState`
  const [newItem, setNewItem] = useState("  ");
  const [items, setItems] = useState([]);

  // Helper Function
  function addItem() {

    if (!newItem){
      alert("Enter a task.");
      return;
    }
    const items = {
      id: Math.floor(Math.random() * 1000),
      value: newItem
    };

    setItems(oldList => [...oldList, items]);
    setNewItem("");
    console.log(items)
  }

  function deleteItem(id) {
    const newArray = items.filter(item => item.id !== id);
    setItems(newArray);
  }

  return (
    <div className='App'>

      <h3>To Do List Functional</h3>
      <br/>
      <input 
        id='input'
        type='text'
        placeholder='Add your new task'
        value={newItem}
        onChange={e => setNewItem(e.target.value)}
      />
      {/* <button className='add-btn'
      onClick={() => addItem()}>
      Add
      </button> */}
      <button className='add-btn'>
        <FontAwesomeIcon className="faicons" 
          icon='circle-plus'
          onClick={() => addItem()}
      />
      Add
      </button>

      <br/>

      <ul>
        {items.map(item =>{
          return(
            <div className='list'>
              <p>
                <li key={item.id}>
                  {item.value}
                  {/* <button
                    onClick={() => deleteItem(item.id)}
                  >x
                  </button> */}

                  <span>
                    <FontAwesomeIcon className="faicons" 
                    icon='trash'
                    onClick={() => deleteItem(item.id)}
                    />
                    </span>
                </li>
              </p>
            </div>
          )
        })}
      </ul>
    </div>
  );
}

export default App;