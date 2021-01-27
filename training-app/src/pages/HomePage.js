// /* Router Example */
// import React, { useContext } from "react";
// import messageContext from "../contexts/messageContext";

// function HomePage() {
//   return (
//     <>
//       <h1>Welcome Home Page</h1>
//       <h2>Message: {useContext(messageContext)}</h2>
//     </>
//   );
// }

/* Redux Example */
import React from "react";
import {useDispatch, useSelector} from 'react-redux';

function HomePage() {
  const balance = useSelector(state => state.balanceReducer.balance);
  const loan = useSelector(state => state.loanReducer.loan)
  const dispatch = useDispatch();

  function applyLoanHandle() {
    dispatch({type: "APPLY"})
  }

  return (<div>
      <h1>Balance: {balance}</h1>
      <h1>{ loan ? "Loan Applied" : "Loan Needed" }</h1>
      <button className="button-style" disable={loan ? true : false} onClick={applyLoanHandle}>{loan ? "Loan Applied" : "Apply for loan" }</button>
    </div>);
}

export default HomePage;
