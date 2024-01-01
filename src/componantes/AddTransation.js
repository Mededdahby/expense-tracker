import React, {useState, useContext} from 'react';
import { GlobalContext } from '../Context/GolbalStete'

export default function AddTransaction() {
  const [text , setInput] = useState('');
  const [amount , setAmount] = useState(0);
  const { AddTransaction}=useContext(GlobalContext)

const onSubmite=(e)=>{
e.preventDefault();
const newTransaction ={
  id:Math.floor(Math.random() * 100000000),
  text,
  amount:+amount
}
AddTransaction(newTransaction);
}
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmite}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e)=>{setInput(e.target.value)}} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
          </label>
          <input type="number" value={amount} onChange={(e)=>{setAmount(e.target.value)}} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
}
