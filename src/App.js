
import './App.css';
import React from 'react'


import Balance from "./componantes/balance"
import Incomes from "./componantes/icomeExpences"
import TransationList from "./componantes/transactionList"
import AddTransation from "./componantes/AddTransation"
import { GlobalProvider } from './Context/GolbalStete';
import Footer from './componantes/footer'




function App() {
  return (
    <GlobalProvider>
      <div className='container'>
      <Balance/>
      <Incomes/>
      <TransationList/>
      <AddTransation/>
      <Footer/>
      </div>
      </GlobalProvider>
  );
}

export default App;
