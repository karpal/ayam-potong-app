import React from 'react';
import Dashboard from './components/Dashboard';
import IncomeForm from './components/IncomeForm';
import ExpenseForm from './components/ExpenseForm';

function App() {
  return (
    <div className="App">
      <h1>Aplikasi Keuangan Ayam Potong</h1>
      <IncomeForm />
      <ExpenseForm />
      <Dashboard />
    </div>
  );
}

export default App;

