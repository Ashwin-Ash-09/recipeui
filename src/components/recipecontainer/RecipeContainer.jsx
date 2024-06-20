import React, { useEffect, useState } from "react";
import SearchBar from "../search/SearchBar";
import style from "./recipecontainer.module.css";
import FoodCard from "../recipecard/RecipeCard.jsx";
import axios from "axios";

export default function RecipeContainer() {
  const [query, setQuery] = useState("");
  const [foodData, setFoodData] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Initial loading state
  const [errorMessage, setErrorMessage] = useState("");

  function getFoodData(name) {
    setIsLoading(true);
    setErrorMessage("");

    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error("Network response was not ok");
        }
        setFoodData(response.data.meals || []); // Handle empty response gracefully
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setErrorMessage(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  useEffect(() => {
    getFoodData("chicken");
  }, []);

  return (
    <>
      <div className={style.container}>
        <SearchBar
          query={query}
          setQuery={setQuery}
          getFoodData={getFoodData}
        />
        <hr />
        {isLoading ? (
          <h1>Loading...</h1>
        ) : errorMessage ? (
          <h2 className={style.error}>{errorMessage}</h2>
        ) : (
          <>
            {foodData.length === 0 ? (
              <h3>No results found for "{query}"</h3>
            ) : (
              <div className={style.foodcont}>
                {foodData.map((food) => (
                  <FoodCard key={food.idMeal} foodData={food} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}
