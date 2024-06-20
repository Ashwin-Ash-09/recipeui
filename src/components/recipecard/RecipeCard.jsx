import React from "react";
import style from "./recipecard.module.css";


function RecipeCard({ foodData }) {

  function getRecipe(id){
    console.log(id);
    window.open(`/fullrecipe/${id}`,'_self');
  }


  return (
    <div
      className={style.recipecard}
      onClick={() => getRecipe(foodData.idMeal)}
    >
      <img src={foodData.strMealThumb} className={style.img} />
      <h4>{foodData.strMeal}</h4>
    </div>
  );
}

export default RecipeCard;
