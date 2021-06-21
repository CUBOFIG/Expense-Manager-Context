import React, { useContext } from "react";
import { GlobalContext } from "context/GlobalState";
import Transaction from "components/Transaction/Transaction";

const TransactionList = () => {
  const { transactions, deleteTransaction } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((transaction) => (
          <Transaction
            key={transaction.id}
            transaction={transaction}
            deleteTransaction={deleteTransaction}
          />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
