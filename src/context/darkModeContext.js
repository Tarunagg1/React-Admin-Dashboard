import { createContext, useReducer } from "react";
import DarkModeReducer from "./darkModeReducer";

let MODE = localStorage.getItem("MODE");
console.log(MODE);
const INITIAL_STATE = {
  darkMode: MODE === "DARK" ? true : false
};



export const DarkModeContext = createContext(INITIAL_STATE);

export const DarkModeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE);


  return (
    <DarkModeContext.Provider value={{ darkMode: state.darkMode, dispatch }}>
      {children}
    </DarkModeContext.Provider>
  );
};
