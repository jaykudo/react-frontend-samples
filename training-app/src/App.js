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

// // -- Use Forwarded Ref App --
// import React, {useEffect, useRef} from "react";
// import Input from './components/Input'
// import "./App.scss";

// const inputStyle = {
//   width: "400px",
//   height: "40px",
//   fontSize: "30px",
//   marginBottom: "10px"
// }

// function App() {
//   const firstNameRef = useRef(null);
//   const lastNameRef = useRef(null);

//   useEffect(() => {
//     firstNameRef.current.focus();
//   }, [])

//   function firstNameKeyDown(e) {
//     if(e.key === "Enter") {
//       lastNameRef.current.focus();
//     }
//   }

//   function lastNameKeyDown(e) {

//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <Input
//           ref={firstNameRef}
//           placeholder="Type first name here"
//           style={inputStyle}
//           onKeyDown={firstNameKeyDown}
//         ></Input>
//         <Input
//           ref={lastNameRef}
//           placeholder="Type first name here"
//           style={inputStyle}
//           onKeyDown={lastNameKeyDown}
//         ></Input>
//       </header>
//     </div>
//   );
// }

// // -- Use Lifecycle useEffect App --
// import React, {useState, useEffect} from "react";
// import "./App.scss";

// let born = false;

// function App() {
//   const [growth, setGrowth] = useState(0);
//   const [nirvana, setNirvana] = useState(false);

//   {/* Will run on birth of component due to [] */}
//   useEffect(() => {
//     console.log('I am born');
//   }, [])

//   {/* Will run on every refresh */}
//   useEffect(() => {
//     if (born) {
//       console.log('Make mistake and learn');
//     }
//     else {
//       born = true;
//     }

//     if(growth > 70) {
//       setNirvana(true);
//     }

//     return function cleanup() {
//       console.log('cleanup after mistakes');
//     }
//   })

//   useEffect(() => {
//     if (born) {
//       document.title = "Nirvana attained";
//     }
//   },[nirvana])

//   function growthHandle() {
//     setGrowth(growth + 10);
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h2>Use Effect</h2>
//         <h3>growth:{growth}</h3>
//         <button onClick={growthHandle}>learn and grow</button>
//       </header>
//     </div>
//   );
// }

// // -- Use Clock useEffect App --
// import React, {useState, useEffect} from "react";
// import "./App.scss";

// const initXY = {
//   x:null,
//   y:null
// }

// function App() {
//   const [time, setTime] = useState(Date);
//   const [xy, setXY] = useState(initXY);

//   useEffect(() => {
//     let handle = setInterval(() => {
//       setTime(Date)
//     }, 3000);

//     return() => {
//       clearInterval(handle);
//     }
//   })

//   function mouseMoveHandle(e) {
//     setXY({
//       x: e.clientX,
//       y: e.clientY
//     })
//   }

//   /* When useEffect is using an event listener, it needs to be cleaned up.
//   Use either an empty array in the second argument or return cleanup function.
//   Otherwise, the listeners will keep stacking up. */
//   useEffect(()=>{
//     window.addEventListener("mousemove", mouseMoveHandle);

//     return() => {
//       window.removeEventListener("mousemove", mouseMoveHandle);
//     }
//   })

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h2>Use Effect Examples</h2>
//         <h3>Date & Time:{time}</h3>
//         <h3>{`x:${xy.x}, y:${xy.y}`}</h3>
//       </header>
//     </div>
//   );
// }

// // -- Use Aync API useEffect App --
// import React, {useEffect, useState} from "react";
// import "./App.scss";

// const initProfile = {
//   followers: null,
//   publicRepos: null
// }

// function App() {
//   const[profile, setProfile] = useState(initProfile);

//   async function getProfile() {
//     const response = await fetch('https://api.github.com/users/jaykudo');
//     const json = await response.json();

//     setProfile({
//       followers: json.followers,
//       publicRepos: json.public_repos
//     })
//   }

//   useEffect(() => {
//     getProfile();
//   },[])

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h2>Fetch Data</h2>
//         <h3>{`Followers: ${profile.followers}, Repos: ${profile.publicRepos}`}</h3>
//       </header>
//     </div>
//   );
// }

// // -- Use useMemo App --
// import React, {useState, useMemo} from "react";
// import Child from './components/child';
// import "./App.scss";

// function App() {
//   const[i, setI] = useState(0);

//   function onClickHandle(){
//     setI(i + 1);
//   }

//   /* Memo will only update when whatever is
//   passed into the array changes. */
//   const memoChild = useMemo(() => {
//     return <Child></Child>
//   },[i])

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h3>Use Memo</h3>
//         <h2>i: {i}</h2>
//         <button onClick={onClickHandle}>Increment I</button>
//         <h3>Normal Render</h3>
//         <Child></Child>
//         <h3>Memo Render</h3>
//         {memoChild}
//       </header>
//     </div>
//   );
// }

// // -- UsePrevious App --
// import React, {useState} from "react";
// import "./App.scss";
// import usePrevious from './hooks/usePrevious'

// function App() {
//   const[age, setAge] = useState(21);
//   const previousAge = usePrevious(age);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h2>Current Age: {age}</h2>
//         <h2>Previous Age: {previousAge}</h2>
//         <button onClick={() => setAge(age-1)}>Make Me Younger</button>
//       </header>
//     </div>
//   );
// }

// // -- useLayoutEffect App --
// import React, {useState, useRef, useLayoutEffect} from "react";
// import "./App.scss";

// function useDim(el, val) {
//   const [height, setHeight] = useState(0);
//   const [width, setWidth] = useState(0);

//   useLayoutEffect(() => {
//     let boundingBox = el.current.getBoundingClientRect();
//     setHeight(boundingBox.height);
//     setWidth(boundingBox.width);
//   }, [val])

//   return {height, width};
// }

// function App() {
//   const [val, setVal] = useState(2);
//   const valEl = useRef(null);

//   const {height, width} = useDim(valEl, val);
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Height: {height}, Width: {width}</h1>
//         <div ref={valEl}>{val}</div>
//         <button onClick={() => setVal(val*10)}>10*</button>
//       </header>
//     </div>
//   );
// }

// //-- useDebugValue App --
// import React, {useState} from "react";
// import "./App.scss";
// import usePrevious from './hooks/usePrevious'

// function App() {
//   const[age, setAge] = useState(21);
//   const previousAge = usePrevious(age);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h2>Current Age: {age}</h2>
//         <h2>Previous Age: {previousAge}</h2>
//         <button onClick={() => setAge(age-1)}>Make Me Younger</button>
//       </header>
//     </div>
//   );
// }

// //-- useCustomFetch App --
// import React, {useState} from "react";
// import "./App.scss";
// import useCustomFetch from './hooks/useCustomFetch'

// function App() {
//   const [url, setUrl] = useState('');
//   const [data, loading, error] = useCustomFetch(url);

//   function getFollowers(e) {
//     if(e.key === 'Enter') {
//       setUrl("https://api.github.com/users/" + e.target.value);
//     }
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         GitID:
//         <input onKeyPress={getFollowers}></input>

//         {loading && url && <div>Loading ...</div>}
//         {!loading && data && data.rData && data.rData.followers
//         && (<div>Followers: {data.rData.followers}</div>)}
//         {error && <div>Error: {error}</div>}
//       </header>
//     </div>
//   );
// }

// //-- useCustomFetch App --
// import React, {useState} from "react";
// import "./App.scss";
// import useCustomFetch from './hooks/useCustomFetch'

// function App() {
//   const [url, setUrl] = useState('');
//   const [data, loading, error] = useCustomFetch(url);

//   function getFollowers(e) {
//     if(e.key === 'Enter') {
//       setUrl("https://api.github.com/users/" + e.target.value);
//     }
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         GitID:
//         <input onKeyPress={getFollowers}></input>

//         {loading && url && <div>Loading ...</div>}
//         {!loading && data && data.rData && data.rData.followers
//         && (<div>Followers: {data.rData.followers}</div>)}
//         {error && <div>Error: {error}</div>}
//       </header>
//     </div>
//   );
// }

// //-- Router App --
// import React, { useState } from "react";
// import {
//   BrowserRouter,
//   Route,
//   Link,
//   NavLink,
//   Redirect,
//   Prompt,
// } from "react-router-dom";
// import "./App.scss";
// import AboutPage from "./pages/AboutPage";
// import HomePage from "./pages/HomePage"
// import messageContext from "./contexts/messageContext";

// function App() {
//   const [loggedIn, setLoggedIn] = useState(false);
//   const [age, setAge] = useState(null);
//   const [message, setMessage] = useState("I am being Shared");

//   function onClickHandle() {
//     setLoggedIn(!loggedIn);
//   }

//   function onChangeHandle(e) {
//     setAge(e.target.value);
//   }

//   return (
//     <BrowserRouter>
//       <messageContext.Provider value={[message, setMessage]}>
//         <div className="App">
//           <header className="App-header">
//             <ul className="ul-style">
//               <li className="li-style">
//                 <NavLink
//                   className="App-link"
//                   to="/"
//                   exact
//                   activeClassName="Link-active-style"
//                 >
//                   Home
//                 </NavLink>
//               </li>
//               <li className="li-style">
//                 <NavLink
//                   className="App-link"
//                   to="/about"
//                   exact
//                   activeClassName="Link-active-style"
//                 >
//                   About Page
//                 </NavLink>
//               </li>
//               <li className="li-style">
//                 <NavLink
//                   className="App-link"
//                   to="user/john/doe"
//                   exact
//                   active-style={{ color: "green" }}
//                 >
//                   User John Doe
//                 </NavLink>
//               </li>
//             </ul>

//             <Prompt
//               when={loggedIn && !age}
//               message={(location) => {
//                 return location.pathname.startsWith("/user")
//                   ? true
//                   : "Are you sure?";
//               }}
//             ></Prompt>
//             <button onClick={onClickHandle}>
//               {loggedIn ? "Logged In" : "Logged Out"}
//             </button>
//             <Route
//               path="/"
//               exact
//               component={HomePage}
//             />
//             <Route path="/about" exact component={AboutPage} />
//             <Route
//               path="/user/:firstname/:lastname"
//               exact
//               render={({ match }) => {
//                 return loggedIn ? (
//                   <h1>
//                     <h2>Age: {age}</h2>
//                     <input
//                       type="text"
//                       value={age}
//                       onChange={onChangeHandle}
//                     ></input>
//                     Welcome {match.params.firstname} {match.params.lastname}
//                   </h1>
//                 ) : (
//                   <Redirect to="/" />
//                 );
//               }}
//             />
//           </header>
//         </div>
//       </messageContext.Provider>
//     </BrowserRouter>
//   );
// }

// //-- Redux App --
// import React from "react";
// import {
//   BrowserRouter,
//   Route,
//   NavLink
// } from "react-router-dom";
// import "./App.scss";
// import HomePage from "./pages/HomePage"
// import DepositPage from "./pages/DepositPage";
// import WithdrawPage from "./pages/WithdrawPage";

// function App() {
//   return (
//     <BrowserRouter>
//       <div className="App">
//         <header className="App-header">
//           <ul className="ul-style">
//             <li className="li-style">
//               <NavLink to="/" className="App-link">Home</NavLink>
//             </li>
//             <li className="li-style">
//               <NavLink to="/deposit" className="App-link">Deposit</NavLink>
//             </li>
//             <li className="li-style">
//               <NavLink to="/withdraw" className="App-link">Withdraw</NavLink>
//             </li>
//           </ul>
//           <Route path="/" exact component={HomePage}/>
//           <Route path="/deposit" exact component={DepositPage} />
//           <Route path="/withdraw" exact component={WithdrawPage} />
//         </header>
//       </div>
//     </BrowserRouter>
//   );
// }

// //-- UseReducer App: Used for local state vs Redux --
// import React, {useReducer} from "react";
// import "./App.scss";

// const initState = {
//   count:0
// }

// function reducerFunction(state, action) {
//   switch(action.type) {
//     case "INCREMENT":
//       return {count: state.count + 1}
//     case "DECREMENT":
//       return {count: state.count - 1}
//     default:
//       return state;
//   }

// }

// function App() {
//   const [state, dispatch] = useReducer(reducerFunction,  initState);

//   function plusOneHandle() {
//     dispatch({type: "INCREMENT"});
//   }
  
//   function minusOneHandle() {
//     dispatch({type: "DECREMENT"});
//   }

//   return (
//       <div className="App">
//         <header className="App-header">
//           <h2>useReducer Example</h2>
//           <h3>Count: {state.count}</h3>
//           <button onClick={plusOneHandle}>Plus One</button>
//           <button onClick={minusOneHandle}>Minus One</button>
//         </header>
//       </div>
//   );
// }

// //-- Mobx App: Used for local state vs Redux --
// import React from "react";
// import "./App.scss";
// import {observer, useObserver} from 'mobx-react-lite'

// const App = observer(() => {
//   const store = useObserver({
//     count: 1,
//     addOne() {
//       store.count++;
//     },
//     subtractOne() {
//       store.count--;
//     }
//   });

//   function addOneHandle() {
//     store.addOne();
//   }

//   function subtractOneHandle() {
//     store.subtractOne();
//   }

//   return (
//       <div className="App">
//         <header className="App-header">
//           <h2>useReducer Example</h2>
//           <h3>Count: {store.count}</h3>
//           <button onClick={addOneHandle}>Add One</button>
//           <button onClick={subtractOneHandle}>Subtract One</button>
//         </header>
//       </div>
//   );
// })

//-- Unit Testing App --
import React from "react";
import "./App.scss";
import Button from './components/button/button'

function App() {
  return (
      <div className="App">
        <header className="App-header">
        </header>
      </div>
  );
}

export default App;