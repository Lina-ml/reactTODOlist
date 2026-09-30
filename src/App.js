// // import logo from './logo.svg';
// // import './App.css';
// import { useEffect, useState } from 'react';

// function App() {
// const [marker , setMarker] = useState("маркер с колпаком ")
//   useEffect (()=>{
//     console.log("компанент появился на экране");
    
//   },[marker]) // отслеживает конткретно состояние маркера 
//   return (
//     <div className="App">
//      <p>{marker}</p>
//      <button onClick={()=>{
//     setMarker("маркер без колпака")
//      }}>снять колпак</button>
 
//      </div>
  
//   );
// }

// export default App;

import { useEffect, useState } from "react";


function App() {
  const[todos, setTodos] = useState([])
  const[text, setText] = useState("")
  return(
    <div className="App">
      <h3>TodoList</h3>
      <div className="form_list">
        <div className="add_date">
          <input value={text} onChange={(e)=>setText(e.target.value)} placeholder="новая задача "/>
          <button>добавить</button>
        </div>
        <div>
          <h1>Список задач </h1>
          <ul>
            {todos.map((todo)=>{
               <li>
                {todo}
               </li>
            })}
          </ul>

        </div>
      </div>
    </div>
  )
  
}


export default App;
















