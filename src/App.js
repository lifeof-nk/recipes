import { React, useEffect, useState } from "react";

import "./App.css";
import Recipes from "./Recipes";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");
  const [isLoading, setIsLoading] = useState(true);

  const getRecipes = async (query) => {
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=b707e695&app_key=9f215841fea3de227d90e97802689b33`
    );
    const data = await response.json();
    setRecipes(data.hits);
    setIsLoading(false);
  };

  useEffect(() => {
    getRecipes(query);
    // console.log("this has ran");
  }, [query]);

  if (isLoading) {
    return <h2>calm your tits mate, it's Loading...</h2>;
  }

  const recipe = recipes.map((recipe, index) => (
    <div className="recipes">
      <Recipes
        key={index}
        image={recipe.recipe.image}
        mealName={recipe.recipe.label}
        calories={recipe.recipe.calories}
        ingredients={recipe.recipe.ingredientLines}
        link={recipe.recipe.url}
      />
    </div>
  ));

  const updateSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleQuery = (event) => {
    event.preventDefault();
    setQuery(search);
    setSearch("");
  };
  // console.log(recipes);

  return (
    <div className="App">
      <form className="search--form" onSubmit={handleQuery}>
        <input
          type="text"
          className="search--bar"
          value={search}
          onChange={updateSearch}
          placeholder="search recipe"
        />
        <button type="submit" className="search--button">
          Search
        </button>
      </form>
      <div className="recipes--container">{recipe}</div>
    </div>
  );
}

export default App;
