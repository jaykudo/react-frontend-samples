// // -- Props Implementation ---
// import React, {Fragment} from 'react';

// function nameTag(props) {
//     // -- Div Implementation --
//     // return (
//     //   <div className="name">
//     //     <h3> First Name: {props.firstName}</h3>
//     //     <h3> Last Name: {props.lastName}</h3>
//     //   </div>
//     // );

//     // -- Fragment implemention --
//     // return <>
//     //      <h3 className="name"> First Name: {props.firstName}</h3>
//     //      <h3 className="name"> Last Name: {props.lastName}</h3>
//     // </>
// }

// -- Destructuring Implementation --
import React from 'react';

function nameTag({firstName, lastName}) {

    // -- Conditional Check Implementation --
    if(!firstName && !lastName) {
        <div className="name">
          <h3>Invalid Name</h3>
        </div>;     
    }

    return (
      <div className="name">
        <h3> First Name: {firstName}</h3>
        <h3> Last Name: {lastName}</h3>
        {firstName === "John" && <div style={{color:"green"}}>VIP</div>}
      </div>
    );
}

export default nameTag