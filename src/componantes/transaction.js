import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GolbalStete'

export default function Transaction({ transaction }) {
  const sign = transaction.amount < 0 ? '-' : '+'; 
 const { deleteTransaction}=useContext(GlobalContext)
  return (
      <>
        <li className={transaction.amount <0 ?'minus':'plus'} key={transaction.id}>
          {transaction.text}
          <span>{sign}${Math.abs(transaction.amount)}</span>
          <button  onClick={()=>deleteTransaction(transaction.id)}  className="delete-btn">x</button>
        </li>
      </>
    );
  }
  
