import React, { useContext } from "react";
import { GlobalContext } from "../context/globalState";
import Transaction from "./Transaction";
import { db } from "../fbase";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  const trans = transactions.map(transaction => transaction);
  console.log(trans);
  db.collection("transactions")
    .doc("income")
    .set({ trans });

  return (
    <div>
      <h3>History</h3>
      <ul id='list' className='list'>
        {transactions.map(transaction => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
