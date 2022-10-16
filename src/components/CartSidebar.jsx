import React, { useContext, useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import { AppContext } from "../context/AppContext";

const CartSidebar = () => {
  const { cart } = useContext(AppContext);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + curr.price * curr.qty, 0));
  }, [cart]);

  return (
    <div className="cart-sidebar">
      <h1>Subtotal ({cart.length}) items</h1>
      <h2>Total: ₹ {total}</h2>
      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: "30px", width: "100%" }}
      >
        Proceed to Checkout
      </Button>
    </div>
  );
};

export default CartSidebar;
