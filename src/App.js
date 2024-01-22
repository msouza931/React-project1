import RecipeCard from "./components/RecipeCard";


const recipeList = [
  {
  id: 0,
  name: "Homemade Ramen",
  rating: null,
  category: "Asian"
  },
  {
    id: 1,
    name: "Feijoada",
    rating: null,
    category: "Latin"
  },
  {
    id: 3,
    name: "Tuscan Chicken",
    rating: null,
    category: "Italian"
  },
  {
    id: 4,
    name: "BBQ Ribs",
    rating: null,
    category: "American"
  },
  {
    id: 5,
    name: "Beef Stew",
    rating: null,
    category: "Latin"
  },

]

function App() {
  return (
    <div>
      <h1>Recipe App</h1>
      { recipeList.map( recipe1 => <RecipeCard recipe={recipe1}/> )}
    </div>
  );
}

export default App;
