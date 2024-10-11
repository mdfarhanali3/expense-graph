import React, { useState } from "react";


import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";

const dummy = [
  {
    id: "e1",
    title: "A4 Paper",
    amount: 94.12,
    date: new Date(2021, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 599.49, date: new Date(2021, 3, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App(props) {
 const [expenses, setExpenses] = useState(dummy);

  function addExpenseHandler(expenses) {
    setExpenses((prevExpense) => {
      return [expenses, ...prevExpense];
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
