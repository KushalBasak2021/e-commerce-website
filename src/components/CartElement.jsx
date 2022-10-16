import React, { useContext } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import { AppContext } from "../context/AppContext";

const CartElement = ({ element }) => {
  const { dispatch } = useContext(AppContext);
  return (
    <div className="cart-element">
      <img className="prod-img" src={element.image} alt="" />
      <p>{element.name}</p>
      <p>₹ {element.price}</p>
      <select
        onChange={(e) =>
          dispatch({
            type: "CHANGE_CART_QTY",
            payload: { id: element.id, qty: Number(e.target.value) },
          })
        }
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <DeleteIcon
        style={{ cursor: "pointer", fontSize: "35px" }}
        onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: element })}
      />
    </div>
  );
};

export default CartElement;
