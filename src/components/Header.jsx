import React, { useContext } from "react";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Header = () => {
  const { cart, dispatch } = useContext(AppContext);
  return (
    <div className="header">
      <nav>
        <a className="logo" href="/">
          Shopping Cart
        </a>
        <input
          type="text"
          placeholder="Search a product..."
          onChange={(e) => {
            dispatch({ type: "FILTER_PRODUCT", payload: e.target.value });
          }}
        />
        <Link to="/cart">
          <Badge
            color="secondary"
            badgeContent={cart.length}
            style={{ cursor: "pointer" }}
          >
            <ShoppingCartIcon style={{ fontSize: "30px" }} />
          </Badge>
        </Link>
      </nav>
    </div>
  );
};

export default Header;
