import React, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer'
import PropTypes from "prop-types";


const initialState = {
  transactions: []
}

export const GlobalContext =createContext(initialState)

export const GlobalProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  function deleteTransaction(id){
    dispatch({
      type:'DELETE_TRANSACTION',
      payload: id
    });
  }

  function addTransaction(transaction){
    dispatch({
      type:'ADD_TRANSACTION',
      payload: transaction
    });
  }

  const value = {
    transactions: state.transactions,
    deleteTransaction,
    addTransaction
  }

  return(<GlobalContext.Provider value={value}>
    {children}
  </GlobalContext.Provider>
  
  
  )
}


GlobalProvider.propTypes={
  children: PropTypes.element.isRequired
}
