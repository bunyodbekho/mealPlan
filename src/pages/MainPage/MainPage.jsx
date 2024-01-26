import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { supabase } from "../../services/supabaseClient";
import RecipeCard from "../../components/RecipeCard";
import styles from "./MainPage.module.scss";

export default function MainPage() {
  const { curUser } = useOutletContext();

  const [recipes, setRecipes] = useState([]);
  const [fetchError, setFetchError] = useState([]);

  useEffect(function () {
    const fetchRecipeData = async () => {
      let { data: recipe, error } = await supabase.from("recipes").select("*");

      if (error) {
        setFetchError("Could not fetch the algorithms data");
        setRecipes([]);
      }
      if (recipe) {
        setRecipes(recipe);
        setFetchError(null);
      }
    };
    fetchRecipeData();
  }, []);

  return (
    <div>
      <div className={styles.recipecards}>
        {recipes.map((recipe) => {
          return (
            <RecipeCard
              url={recipe.photo}
              time={recipe.cooking_time}
              title={recipe.title}
            />
          );
        })}
      </div>
    </div>
  );
}
