import React from "react";
import MealItemsForm from "./MealItemsForm";
import "./MealItems.css";

const MealItems = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className="meal">
      <div>
        <h3>{props.name}</h3>
        <div className="description">{props.description}</div>
        <div className="price">{price}</div>
      </div>
      <div>
        <MealItemsForm id={props.id} />
      </div>
    </li>
  );
};
export default MealItems;
