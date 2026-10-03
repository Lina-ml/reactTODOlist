// // import logo from './logo.svg';

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
  import './App.css';
  // import '@fortawesome/fontawesome-free/js/all.js';
  import photo from './img/1.svg'
  

function App() {
  const[todos, setTodos] = useState([
    {
      name :"lina",
      age: 17
    },
    {
      name :"yasmina",
      age: 16
    },
    {
      name :"alina",
      age: 14
    }
  ])
  // const [cars, setCars] = useState([
  //   {
  //     marka: "mers",
  //     color: "red",
     
  //   },
  //   {
  //     marka: "ford",
  //     color: "green",
    
  //   },
  //   {
  //     marka: "niva",
  //     color: "black",
      
  //   }
  // ])
  const[text, setText] = useState("")

//   const[text2, setText2] = useState("")
// function addCars() {
//   const newCars = {
//     marka: text2,
//     color: 0,
//   }
//   setCars([...cars, newCars])
//   console.log(cars);
//   return cars
  
  
  
// }
  function addTodo(){
    const newTodo = {
      name:text,
      age: 0
    }

    setTodos([...todos, newTodo]) // ... означает взять весь массив : возьми весь масиик todos и масив который мы создали newTodo     
    console.log(todos);
    return todos
    
  }






  return(
    <div className="App">
      <h3>TodoList</h3>
      <div className="form_list">
        <div className="add_date">
          {/* <input value = {text2}onChange={(e)=>setText2(e.target.value)} placeholder="марка машины "/>
          <button onClick={()=>addCars()}>добавить</button> */}
          
          <input value={text} onChange={(e)=>setText(e.target.value)} placeholder="новая задача" />
           <button onClick={()=>addTodo()}>добавить
           </button> 
           {/* /* при нажатии на кнопку добавить будет выводится массив     addTodo */}
        </div>
        <div>
          <h1>Список задач </h1>
          <ul>
            {todos.map((todo, index)=>{
              return <li key={index}>{todo.name} 
               <img src={photo}/>
              </li>
              
              
            })}
             {/* {cars.map((car, index)=>{
              return <li key={index}>{car.marka}</li>})} */}
          </ul>

        </div>
      </div>
    </div>
  )
  
}


export default App;
















