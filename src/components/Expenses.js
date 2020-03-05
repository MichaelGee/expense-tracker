import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/globalState";
import { db } from "../fbase";

const Expenses = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(-1);
  const { addTransaction } = useContext(GlobalContext);

  const handleSubmit = e => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 1000000),
      text,
      amount: +amount
    };
    addTransaction(newTransaction);
    /* db.collection("transactions")
      .doc("expense")
      .set({ newTransaction }); */
  };

  return (
    <div>
      <h3 className='expense-header'>Add new expense transaction</h3>
      <div className='transaction-card'>
        <form onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='text'>Text</label>
            <input
              type='text'
              value={text}
              onChange={e => setText(e.target.value)}
              id='text'
              placeholder='Enter text...'
            />
          </div>
          <div className='form-control'>
            <label htmlFor='amount'>
              Amount <br />
              (negative - expense)
            </label>
            <input
              type='number'
              placeholder='Enter amount...'
              value={amount}
              onChange={e => setAmount(e.target.value)}
            />
          </div>
          <button className='btn expense-btn'>Add transaction</button>
        </form>
      </div>
    </div>
  );
};

export default Expenses;
