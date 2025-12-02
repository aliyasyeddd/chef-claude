import { useState } from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";


const Main = () => {
  const [ingredients, setIngredients] = useState([
    "all the main spices",
    "pasta",
    "ground beef",
    "tomato paste",
  ]);
  const [recipeShown, setRecipeShown] = useState(false);
  
  
    
    function getRecipe() {
        setRecipeShown(prevShown => !prevShown)
    }

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredient) => [...prevIngredient, newIngredient]);
  }

  return (
    <main>
      <form action={addIngredient} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>
      { ingredients.length > 0 &&
        <IngredientsList
        ingredients={ingredients}
        getRecipe={getRecipe}
      />}
      {recipeShown && <ClaudeRecipe />}
    </main>
  );
};

export default Main;
