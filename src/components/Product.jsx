import React, { useContext } from "react";
import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import Button from "@material-ui/core/Button";
import { AppContext } from "../context/AppContext";

const Product = ({ product }) => {
  const { dispatch, cart } = useContext(AppContext);
  function handleAddtoCart() {
    dispatch({ type: "ADD_TO_CART", payload: product });
  }

  function handleRemoveFromCart() {
    dispatch({ type: "REMOVE_FROM_CART", payload: product });
  }
  return (
    <div className="product">
      <img src={product.image} alt="cat" />
      <div className="details">
        <h3>{product.name}</h3>
        <div>₹ {product.price}</div>
        <div>{product.fastDelivery ? "Fast Delivery" : "4 days delivery"} </div>
        <div className="icons">
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarHalfIcon />
          <StarOutlineIcon />
        </div>
        {cart.some((p) => p.id === product.id) ? (
          <Button
            variant="contained"
            color="secondary"
            onClick={handleRemoveFromCart}
          >
            Remove from Cart
          </Button>
        ) : (
          <Button variant="contained" color="primary" onClick={handleAddtoCart}>
            Add to Cart
          </Button>
        )}
        {/* // {!isAddedToCart ? (
          
        // ) : (
          
        // )} */}
      </div>
    </div>
  );
};

export default Product;
