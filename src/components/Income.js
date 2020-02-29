import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/globalState";

const Income = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useContext(GlobalContext);

  const handleSubmit = e => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 1000000),
      text,
      amount: +amount
    };
    addTransaction(newTransaction);
  };

  return (
    <div>
      <h3>Add new income transaction</h3>
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
              (positive - income)
            </label>
            <input
              type='number'
              placeholder='Enter amount...'
              value={amount}
              onChange={e => setAmount(e.target.value)}
            />
          </div>
          <button className='btn income-btn'>Add transaction</button>
        </form>
      </div>
    </div>
  );
};

export default Income;
