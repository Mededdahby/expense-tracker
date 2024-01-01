import  {useContext} from 'react'
import { GlobalContext } from '../Context/GolbalStete'
import Transaction from './transaction';
export default function TrasactionList(){
  const {transactions} = useContext(GlobalContext)
  return (
    <>
      <h3>History</h3>
      <ul  className="list">
        {transactions.map((transaction) => (
        <Transaction  key={transaction.id} transaction={transaction}/>
        ))}
      </ul>
    </>
  );
    }
