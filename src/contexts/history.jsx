import { createContext, useContext, useReducer } from "react";
import { historyReducer } from "reducer";

const HistoryContext = createContext();

const HistoryProvider = ({ children }) => {
  const [historyState, historyDispatch] = useReducer(historyReducer, {
    history: [],
  });

  return (
    <HistoryContext.Provider value={{ historyDispatch, historyState }}>
      {children}
    </HistoryContext.Provider>
  );
};

const useHistory = () => useContext(HistoryContext);

export { HistoryProvider, useHistory };
