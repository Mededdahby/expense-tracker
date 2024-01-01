import { useContext } from 'react';
import { GlobalContext } from '../Context/GolbalStete'
export default function Balace(){
    const{transactions}=useContext(GlobalContext)
    const amounts = transactions.map(transaction => transaction.amount);

    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
return (
 <>
  <h4 className={'balance.positive'|'balance.negative'}>Your Balance</h4>
      <h1 id="balance">${total}</h1>
 </>
)
}

