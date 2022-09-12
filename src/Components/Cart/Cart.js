import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const cartItems = (
    <ul className="cart-items">
      {[{ id: "c1", name: "momo", amount: 10, price: 10.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <div>
      {cartItems}
      <div className="total">
        <span>Total amount</span>
        <span>23.32</span>
      </div>
      <div className="actions">
        <button className="button--alt">Close</button>
        <button className="button">Order now!</button>
      </div>
    </div>
  );
};

export default Cart;
