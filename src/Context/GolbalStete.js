import  {createContext, useReducer} from 'react';
import AppReducer from './appReducer'

const intialState ={
    transactions:[
          { id: 1, text: 'Flower', amount: -20 },
          { id: 2, text: 'Salary', amount: 300 },
          { id: 3, text: 'Book', amount: -10 },
          { id: 4, text: 'Camera', amount: 150 }
        ]
}

export const GlobalContext = createContext(intialState);

export const GlobalProvider =({children})=>{
    const [state , dispatch] = useReducer(AppReducer, intialState);

function deleteTransaction(id){
    dispatch({
        type:'DELETE_TRANSACTION',
        payload:id
    })
}

function AddTransaction(transaction){
    dispatch({
        type:'add_Transaction',
        payload:transaction
    })
}
    return (
        <GlobalContext.Provider value={{
            transactions:state.transactions,
            AddTransaction,
            deleteTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}