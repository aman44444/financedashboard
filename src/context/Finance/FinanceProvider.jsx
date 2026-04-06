import { useReducer } from "react";
import { FinanceContext } from "./FinanceContext";

const initialState = {
  role: "viewer",
};

function financeReducer(state, action) {
  switch (action.type) {
    case "SET_ROLE":
      return { ...state, role: action.payload };

    default:
      return state;
  } 
}

export function FinanceProvider({ children }) {
  const [state, dispatch] = useReducer(financeReducer, initialState);

  return (
    <FinanceContext.Provider value={{ state, dispatch }}>
      {children}
    </FinanceContext.Provider>
  );
}