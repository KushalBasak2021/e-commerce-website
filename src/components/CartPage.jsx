import React, { useContext } from "react";
import CartElement from "./CartElement";
import CartSidebar from "./CartSidebar";
import { AppContext } from "../context/AppContext";

const CartPage = () => {
  const { cart } = useContext(AppContext);
  console.log(cart);
  return (
    <div className="cart-page">
      <div className="prod">
        {cart.map((ele) => {
          return <CartElement element={ele} key={ele.id} />;
        })}
      </div>
      <CartSidebar />
    </div>
  );
};

export default CartPage;
