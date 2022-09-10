import React from "react";
import CartIcon from "../Cart/CartIcon";
import "./HeaderCartBtn.css";

const HeaderCartButton = (props) => {
  return (
    <button className="button">
      <span className="icon">
        <CartIcon />
      </span>
      <span>My cart</span>
      <span className="badge">7</span>
    </button>
  );
};

export default HeaderCartButton;
