
import { useState } from "react";
import "./App.css";   

const App = () => {
  const [todo , setTodo] = useState("");
  const [items, setItems] = useState([]);

  const handleClick =()=>{
    if(!todo){
      alert("enter an item")
      return;
    }
   const item={
    id: Math.floor(Math.random()*1000),
    value:todo
   }
   setItems(oldItems=>[...oldItems,item])
   setTodo("");
  }
  
  return (
    <div className="App">
      <h1>Todo List App</h1>
      <input type="text"  placeholder="add an item" value={todo} onChange={(e)=>setTodo(e.target.value)}/> <br />
      <button onClick={()=>handleClick()}>Add</button>

      <ul>
       {items.map(item=>{
        return(
          <li key={item.id}>{item.value} </li>
        )
       })}
      </ul>
     
      
      </div>
  )
}

export default App