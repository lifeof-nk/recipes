import React from "react";

const Recipes = (props) => {
  return (
    <div>
      <img src={props.image} alt="" />
      <h2>{props.mealName}</h2>
      <h4>{Math.floor(props.calories)}</h4>
      {/* <div className="content">{props.ingredients}</div> */}
    </div>
  );
};

export default Recipes;
