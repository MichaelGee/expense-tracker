import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/globalState";
import { db } from "../fbase";

const Income = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useContext(GlobalContext);
  const { deleteTransaction } = useContext(GlobalContext);
  const [trans, setTrans] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();

    const fetchData = async () => {
      await db
        .collection("transactions")
        .get()
        .then(querySnapshot => {
          const data = querySnapshot.docs.map(doc => doc.data());
          setTrans(data.map(amount => amount)); // array of transactions objects
        });
    };

    fetchData();

    const newTransaction = {
      id: Math.floor(Math.random() * 1000000),
      text,
      amount: +amount
    };
    addTransaction(newTransaction);
    db.collection("transactions").add({ ...newTransaction });
  };

  return (
    <div>
      <div>
        <h3>History</h3>
        <ul id='list' className='list'>
          {trans.map(transac => (
            <li className={transac.amount < 0 ? "minus" : "plus"}>
              {transac.text}{" "}
              <span>
                {transac.amount < 0 ? "-" : "+"}${Math.abs(transac.amount)}
              </span>
              <button
                className='delete-btn'
                onClick={() => deleteTransaction(transac.id)}
              >
                x
              </button>
            </li>
          ))}
        </ul>
      </div>
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
                <br />
                (negative - expense)
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
    </div>
  );
};

export default Income;
