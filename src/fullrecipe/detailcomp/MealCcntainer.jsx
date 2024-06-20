import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "./mealcontainer.module.css";
import IngredientsTable from "./IncredientTable";
import RecipeSteps from "./RecipeSteps";
import axios from "axios";

export default function BodyComp() {
  const [foodData, setFoodData] = useState([]);
  const [recipeString, setRecipeString] = useState("");
  const [isLoading, setIsLoading] = useState(true); 
  const [errorMessage, setErrorMessage] = useState("");

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );

        if (response.status !== 200) {
          throw new Error("Network response was not ok");
        }

        const data = response.data;

        if (!data.meals || data.meals.length === 0) {
          setErrorMessage("No meals found");
          alert("No meals found");
        } else {
          setFoodData(data.meals[0]);
          setRecipeString(data.meals[0].strInstructions);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setErrorMessage(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className={style.container}>
      {console.log(foodData)}
      {isLoading ? (
        <div>Loading...</div>
      ) : errorMessage ? (
        <div className={style.error}><h2>{errorMessage}</h2></div>
      ) : (
        <>
          <img
            src={foodData.strMealThumb}
            alt="Image Not Found"
            className={style.img}
          />
          <h1>{foodData.strMeal} </h1>
          <p>
            Catogory : {" " + foodData.strCategory} {foodData.strTags}
          </p>
          <p>Origin : {foodData.strArea}</p>
          {foodData.dateModified? <p>Last Modified{foodData}</p> : <></> }
          <h2 className={style.h2}>Incredients </h2>
          <IngredientsTable meal={foodData} />
          <RecipeSteps recipeStepsString={recipeString} />
          {foodData.strSource? <p>Source : <a href={foodData.strSource} target="_blank">click here</a></p> : <></>}
          {foodData.strYoutube ? <p>Youtube Link : <a href={foodData.strYoutube} target="_blank" >click here</a> </p>: <></>}
        </>
      )}
    </div>
  );
}
