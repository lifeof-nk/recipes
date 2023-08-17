import React from "react";
import "./Recipes.css";
const Recipes = (props) => {
  return (
    <div className="container">
      <div className="recipe--container">
        <img src={props.image} alt="" />
        <h2>{props.mealName}</h2>
        <h4>Calories:{Math.floor(props.calories)}</h4>
        <div className="content">
          {props.ingredients.map((ingredient, index) => {
            return <li key={index}>{ingredient}</li>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Recipes;
