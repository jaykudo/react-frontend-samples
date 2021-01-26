// // -- Name Tag Non-Hooks App --
// import React from 'react'
// import "./App.scss";
// import NameTag from './components/nameTag';

// const nameStyle = {
//   color: "gray",
//   border: "1px solid gray",
//   paddingTop: "5px",
//   paddingBottom: "5px",
//   width: "300px",
// };

// const nameTagTitle = {
//   color: "yellow",
//   borderColor: "yellow",
//   borderStyle: "dotted"
// }

// // -- Higher Order Components --
// const makeGreen = BaseComponent => props => {
//   const addGreen = {
//     style: {
//       color: "green"
//     }
//   }

//   const newProps = {
//     ...props, ...addGreen
//   }

//   return <BaseComponent {...newProps} />
// }

// const removeInline = BaseComponent => props => {
//   const newProps = {...props};
//   delete newProps.style;
//   return <BaseComponent></BaseComponent>
// }

// const GreenNameTag = makeGreen(NameTag);
// const CleanNameTag = removeInline(NameTag);

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* Spread operator for JSX attributes */}
//         <h1 style={{...nameStyle,...nameTagTitle}}>Names List</h1>
//         <GreenNameTag firstName="Peter" lastName="Smith"></GreenNameTag>
//         <CleanNameTag firstName="John" lastName="Smith"></CleanNameTag>
//         <NameTag firstName="Jill" lastName="Smith"></NameTag>
//         <NameTag></NameTag>
//       </header>
//     </div>
//   );
// }

// // -- Name Tag Hooks App --
// import React, {useState} from 'react'
// import "./App.scss";
// import NameTag from './components/nameTag';

// const initialNames = [
//   {firstName:"Peter", lastName:"Smith"},
//   {firstName:"John", lastName:"Smith"},
//   {firstName:"Jill", lastName:"Smith"},
//   {firstName:"Mary", lastName:"Smith"}
// ]

// function App() {
//   const [names, setNames] = useState(initialNames);
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1 className="name, title">Names List</h1>
//         {
//           names.map( (v,i) => {
//             return <NameTag key={`${i}${v.firstName}${v.lastName}`} firstName={v.firstName} lastName={v.lastName}></NameTag>
//           })
//         }

//         {/* <NameTag firstName={names[0].firstName} lastName={names[0].lastName}></NameTag>
//         <NameTag firstName={names[1].firstName} lastName={names[1].lastName}></NameTag>
//         <NameTag firstName={names[2].firstName} lastName={names[2].lastName}></NameTag> */}
//       </header>
//     </div>
//   );
// }

// // -- Age Hook App --
// import React, {useState} from 'react'
// import "./App.scss";

// function App() {
//   const [age, setAge] = useState(21);
//   const ageUpHandle = () => {
//     setAge(age + 1);
//   }
//   const ageDownHandle = () => {
//     setAge(age - 1);
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Use State Hook</h1>
//         <h2>Age: {age}</h2>
//         <button onClick={ageUpHandle}>Age Up</button>
//         <button onClick={ageDownHandle}>Age Down</button>
//       </header>
//     </div>
//   );
// }

// // -- Grocery List App --
// import React, { useState } from "react";
// import "./App.scss";
// import Item from "./components/item";
// import useList from "./hooks/useList";

// const initList = [
//   { name: "Tomato", calories: 20 },
//   { name: "Rice", calories: 30 },
//   { name: "Candy", calories: 100 },
// ];

// function App() {
//   const items = useList(initList);
//   const [editable, setEditable] = useState(false);

//   // function removeUnhealthyHandle() {
//   //   const filteredList = list.filter((v) => v.calories < 50);
//   //   setList(filteredList);
//   // }

//   function removeItemHandle(e) {
//     // const filteredList = list.filter((v) => v.name !== e.target.name);
//     // setList(filteredList);
//     items.removeItem(e.target.name);
//   }

//   function makeEditableHandle() {
//     setEditable(true);
//   }

//   function keyPressHandle(e, i) {
//     if(e.key === "Enter") {
//       setEditable(!editable);

//       // const copyList = [...list]
//       // copyList[i].name = e.target.value;
//       items.saveItem(i, e.target.value);
//     }
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h2>Grocery List</h2>
//         {items.list.map((v, k) => {
//           return (
//             <Item
//               key={`${k}${v.name}${v.calories}`}
//               item={v}
//               editable={editable}
//               onClick={removeItemHandle}
//               onDoubleClick={makeEditableHandle}
//               onKeyPress={keyPressHandle}
//               index={k}
//             ></Item>
//           );
//         })}

//         {/* <button className="remove-button" onClick={removeUnhealthyHandle}>
//           Remove Unhealthy
//         </button> */}
//       </header>
//     </div>
//   );
// }

// // -- On Change App --
// import React, {useState} from "react";
// import "./App.scss";

// function App() {
//   const [name, setName] = useState("default");
//   const [income, setIncome] = useState("high");

//   function handleNameChange(e) {
//     setName(e.target.value);
//   }
  
//   function handleIncomeChange(e) {
//     setIncome(e.target.value);
//   }

//   function handleSubmit() {
//     console.log("State = " + name + "," + income)
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <form onSubmit={handleSubmit}>
//           <div>
//             <span>Name: </span>
//             <input value={name} type="text" onChange={handleNameChange}></input>
//           </div>
//           <div>
//             <span>Income: </span>
//             <select value={income} onChange={handleIncomeChange} >
//               <option value="high">High</option>
//               <option value="mid">Mid</option>
//               <option value="low">Low</option>
//             </select>
//             <input type="submit" value="submit"></input>
//           </div>
//         </form>
//       </header>
//     </div>
//   );
// }

// // -- Use Ref App --
// import React, {useEffect, useRef} from "react";
// import "./App.scss";

// function App() {
//   const nameRef = useRef();
//   const ageRef = useRef();
//   const marriedRef = useRef();
//   const submitRef = useRef();

//   useEffect(() => {
//     nameRef.current.focus();
//   }, []);

//   function keyPressHandle(e) {
//     console.log(e.target.id)
//     if(e.keyCode === 13) {
//       if(e.target.id === "nameInput") {
//         ageRef.current.focus();
//       }
//       if(e.target.id === "ageInput") {
//         marriedRef.current.focus();
//       }
//       if(e.target.id === "marriedInput") {
//         submitRef.current.focus();
//       }
//     }
//   }

//   function onClickHandle() {
//     alert("Submitted");
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h3>UseRefs Hook</h3>
//         <div className="form-field">
//           <span>Name: </span>
//           <input id="nameInput" ref={nameRef} type="text" onKeyDown={keyPressHandle}></input>
//         </div>
//         <div className="form-field">
//           <span>Age</span>
//           <input id="ageInput" ref={ageRef} type="text" onKeyDown={keyPressHandle}></input>
//         </div>
//         <div className="form-field">
//           <span>Married?</span>
//           <input id="marriedInput" ref={marriedRef} type="checkbox" onKeyDown={keyPressHandle}></input>
//         </div>
//         <input id="submitButton" ref={submitRef} type="submit" value="submit" onKeyDown={keyPressHandle} onClick={onClickHandle}></input>
//       </header>
//     </div>
//   );
// }

// -- Use Forwarded Ref App --
import React, {useEffect, useRef} from "react";
import Input from './components/Input'
import "./App.scss";

const inputStyle = {
  width: "400px",
  height: "40px",
  fontSize: "30px",
  marginBottom: "10px"
}

function App() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);

  useEffect(() => {
    firstNameRef.current.focus();
  }, [])

  function firstNameKeyDown(e) {
    if(e.key === "Enter") {
      lastNameRef.current.focus();
    }
  }

  function lastNameKeyDown(e) {

  }

  return (
    <div className="App">
      <header className="App-header">
        <Input
          ref={firstNameRef}
          placeholder="Type first name here"
          style={inputStyle}
          onKeyDown={firstNameKeyDown}
        ></Input>
        <Input
          ref={lastNameRef}
          placeholder="Type first name here"
          style={inputStyle}
          onKeyDown={lastNameKeyDown}
        ></Input>
      </header>
    </div>
  );
}

export default App;
