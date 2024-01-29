import { useEffect, useState } from "react";
import Recipe from "./components/Recipe";
import "./App.css";

const App = () => {

  //const APP_ID = "1a31899f";
  //const APP_KEY = "39acdc8b66edfd5b9e1c91a30a9012df";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken')

  useEffect(()=> {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=1a31899f&app_key=39acdc8b66edfd5b9e1c91a30a9012df&to=3`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  const updateSaerch = e => {
    setSearch(e.target.value);
    console.log(search);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }


  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type='text' value={search} onChange={updateSaerch}/>
        <button className="search-button" type="submit">Search</button>
      </form>
      {recipes.map((recipe, index) => (
        <Recipe 
        key={`${recipe.recipe.label}-${index}`}
        title={recipe.recipe.label} 
        image={recipe.recipe.image} 
        ingredients={recipe.recipe.ingredients} />
      ))}
      <h1>Recipe App</h1>
    </div>
  );
}

export default App;
