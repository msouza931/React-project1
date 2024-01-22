const RecipeCard = (props) => {
    return (
        <div className="bg-light border p-4 m-2">
          <h4>{props.recipe.name}</h4>
          <p>{props.recipe.category}</p>
          <p>{props.recipe.rating}</p>
        </div>
    )
}

export default RecipeCard;