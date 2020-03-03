import React from "react";
import Header from "./Header";
import Balance from "./Balance";
import IncomeExpenses from "./IncomeExpenses";
import TransactionList from "./TransactionList";
import Income from "./Income";
import Expenses from "./Expenses";

const Dashboard = () => {
  return (
    <div>
      <div className='container'>
        <Header />
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <Income />
        <Expenses />
      </div>
    </div>
  );
};

export default Dashboard;
