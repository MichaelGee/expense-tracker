import React, { createContext, useReducer, useEffect, useState } from "react";
import AppReducer from "./AppReducer";
import app from "../fbase";
import { db } from "../fbase";

const initialState = {
  transactions: []
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    app.auth().onAuthStateChanged(setCurrentUser);
  }, []);

  const deleteTransaction = id => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id
    });
  };

  const addTransaction = transaction => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
        currentUser
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
