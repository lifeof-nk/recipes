import React from "react";

const Recipes = (props) => {
  return (
    <div className="container">
      <img src={props.image} alt={props.mealName} />
      <h2>{props.mealName}</h2>
      <h4>Calories:{Math.floor(props.calories)}</h4>
      <div className="ingredients--wrapper">
        <div className="content">
          <h3>Ingredients</h3>
          {props.ingredients.map((ingredient, index) => {
            return <li key={index}>{ingredient}</li>;
          })}
        </div>
        <a href={props.link} className="recipe--link">
          Click here for recipe
        </a>
      </div>
    </div>
  );
};

export default Recipes;
