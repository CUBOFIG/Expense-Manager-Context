import React from "react";
import Header from "./components/Header/Header";
import Balance from "./components/Balance/Balance";
import IncomeExpenses from "./components/IncomeExpenses/IncomeExpenses";
import TransactionList from "./components/TransactionList/TransactionList";
import AddTransaction from "./components/AddTransaction/AddTransaction";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <div className="container-inter">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;
