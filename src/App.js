import { useEffect, useState } from "react";
import Recipe from "./components/Recipe";


const App = () => {

  //const APP_ID = "1a31899f";
  //const APP_KEY = "39acdc8b66edfd5b9e1c91a30a9012df";

  const [recipes, setRecipes] = useState([]);

  useEffect(()=> {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=1a31899f&app_key=39acdc8b66edfd5b9e1c91a30a9012df`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }


  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type='text'/>
        <button className="search-button" type="submit"></button>
      </form>
      {recipes.map(recipe => (
        <Recipe title={recipe.recipe.label} image={recipe.recipe.image} ingredients={recipe.recipe.ingredients} />
      ))}
      <h1>Recipe App</h1>
    </div>
  );
}

export default App;
