import React from "react";
import Header from "./Header";
import Balance from "./Balance";
import IncomeExpenses from "./IncomeExpenses";
import TransactionList from "./TransactionList";
import Income from "./Income";

const Dashboard = () => {
  return (
    <div>
      <div className='container'>
        <Header />
        <Balance />
        <IncomeExpenses />

        <Income />
      </div>
    </div>
  );
};

export default Dashboard;
