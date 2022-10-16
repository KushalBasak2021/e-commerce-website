import { createContext, useEffect, useReducer } from "react";
import products from "../data";

const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, qty: 1 }],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };
    case "CHANGE_CART_QTY":
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
        ),
      };

    case "FILTER_PRODUCT":
      return {
        ...state,
        products: products.filter((prod) =>
          prod.name.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };
    default:
      return state;
  }
};

const initialState = {
  products: products,
  cart: JSON.parse(localStorage.getItem("cart")) || [],
};

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <AppContext.Provider
      value={{
        products: state.products,
        cart: state.cart,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
