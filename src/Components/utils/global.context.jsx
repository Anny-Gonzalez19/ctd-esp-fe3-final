import React, { createContext, useReducer, useEffect, useContext } from "react";

export const initialState = {
  theme: "light",
  data: [],
};

export const actionTypes = {
  CHANGE_THEME: "CHANGE_THEME",
  SET_DATA: "SET_DATA",
};

export const ContextGlobal = createContext(initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_THEME:
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
    case actionTypes.SET_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async () => {
    try {
      const response = await fetch("https://api.example.com/dentists");
      const data = await response.json();
      dispatch({ type: actionTypes.SET_DATA, payload: data });
    } catch (error) {
      console.log("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const changeTheme = () => {
    dispatch({ type: actionTypes.CHANGE_THEME });
  };

  return (
    <ContextGlobal.Provider value={{ state, changeTheme }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useContextGlobal = () => useContext(ContextGlobal);
