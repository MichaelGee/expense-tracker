import React from "react";
import "./App.css";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import Income from "./components/Income";
import Expenses from "./components/Expenses";
import { GlobalProvider } from "./context/globalState";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <Income />
        <Expenses />
      </div>
    </GlobalProvider>
  );
}

export default App;
