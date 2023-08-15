import { React, useEffect, useState } from "react";

import "./App.css";
import Recipes from "./Recipes";

function App() {
  const [recipes, setRecipes] = useState([]);

  const getRecipes = async () => {
    const response = await fetch(
      "https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=b707e695&app_key=9f215841fea3de227d90e97802689b33"
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  useEffect(() => {
    getRecipes();
  }, []);

  const recipe = recipes.map((recipe) => (
    <Recipes
      key={recipe.recipe.label}
      image={recipe.recipe.image}
      mealName={recipe.recipe.label}
      calories={recipe.recipe.calories}
    />
  ));

  console.log(recipes);

  return (
    <div className="App">
      <form className="search--form">
        <input type="text" className="search--bar" />
        <button type="submit" className="search--button">
          Search
        </button>
      </form>
      {recipe}
    </div>
  );
}

export default App;
