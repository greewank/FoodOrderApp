import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";
import React from "react";

const Meals = () => {
  return (
    <React.Fragment>
      <AvailableMeals />
      <MealsSummary />
    </React.Fragment>
  );
};

export default Meals;
