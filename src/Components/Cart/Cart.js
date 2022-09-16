import React from "react";
import "./Cart.css";
import Modal from "../UI/Modal";

const Cart = (props) => {
  const cartItems = (
    <ul className="cart-items">
      {[{ id: "c1", name: "momo", amount: 10, price: 10.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className="total">
        <span>Total amount</span>
        <span>23.32</span>
      </div>
      <div className="actions">
        <button className="button--alt" onClick={props.onClose}>
          Close
        </button>
        <button className="button">Order now!</button>
      </div>
    </Modal>
  );
};

export default Cart;
