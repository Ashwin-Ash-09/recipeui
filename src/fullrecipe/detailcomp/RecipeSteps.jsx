import React from "react";
import style from './recipesteps.module.css'

function RecipeSteps({ recipeStepsString }) {
  const steps = recipeStepsString.split("\n");

  return (
   <div className={style.instructions}>
        <h2>Instuctions </h2>
      {steps.map((step, index) => (
        <p key={index}>{`${step}`}<br /><br /></p> 
      ))}
    </div>
  );
}

export default RecipeSteps;
