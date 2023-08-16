import React from "react";

const Recipes = (props) => {
  console.log(props);
  return (
    <div>
      <img src={props.image} alt="" />
      <h2>{props.mealName}</h2>
      <h4>{Math.floor(props.calories)}</h4>
      <div className="content">
        {props.ingredients.map((ingredient, index) => {
          return <li key={index}>{ingredient}</li>;
        })}
      </div>
    </div>
  );
};

export default Recipes;
