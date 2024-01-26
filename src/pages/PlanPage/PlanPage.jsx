import { useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "../../services/supabaseClient";
import RecipeCard from "../../components/RecipeCard";
import styles from "./PlanPage.module.scss";
import { Heading } from "@chakra-ui/react";

export default function PlanPage() {
  const { curUser } = useOutletContext();

  // Api request state
  const [fetchError, setFetchError] = useState(null);
  const [plan, setPlan] = useState([]);
  const [userData, setUserData] = useState([]);
  const [recipeData, setRecipeData] = useState([]);
  const userId = userData[0]?.user_id;

  const [mon, setMon] = useState([]);
  const [tue, setTue] = useState([]);
  const [wed, setWed] = useState([]);
  const [thu, setThu] = useState([]);
  const [fri, setFri] = useState([]);
  const [sat, setSat] = useState([]);
  const [sun, setSun] = useState([]);

  useEffect(function () {
    const fetchRecipeData = async () => {
      let { data: recipes, error } = await supabase.from("recipes").select("*");

      if (error) {
        setFetchError("Could not fetch the algorithms data");
        setRecipeData([]);
      }
      if (recipes) {
        setRecipeData(recipes);
        setFetchError(null);
      }
    };
    fetchRecipeData();
  }, []);

  useEffect(
    function () {
      const fetchPlanData = async () => {
        let { data: plan, error } = await supabase
          .from("meal_plan")
          .select("selected_date, recipe_id")
          .eq("user_id", userId);

        if (error) {
          setFetchError("Could not fetch the algorithms data");
          setPlan([]);
        }
        if (plan) {
          setPlan(plan);
          setFetchError(null);

          setMon(plan.filter((plan) => plan.selected_date === "monday"));
          setTue(plan.filter((plan) => plan.selected_date === "tuesday"));
          setWed(plan.filter((plan) => plan.selected_date === "wednesday"));
          setThu(plan.filter((plan) => plan.selected_date === "thursday"));
          setFri(plan.filter((plan) => plan.selected_date === "friday"));
          setSat(plan.filter((plan) => plan.selected_date === "saturday"));
          setSun(plan.filter((plan) => plan.selected_date === "sunday"));
        }
      };
      fetchPlanData();
    },
    [userData]
  );

  useEffect(
    function () {
      const fetchUserData = async () => {
        let { data: user, error } = await supabase
          .from("users")
          .select("user_id")
          .eq("username", `${curUser}`);

        if (error) {
          setFetchError("Could not fetch the algorithms data");
          setUserData([]);
        }
        if (user) {
          setUserData(user);
          setFetchError(null);
        }
      };
      fetchUserData();
    },
    [curUser]
  );

  console.log("tue", tue);

  return (
    <div className={styles.planpage}>
      <Heading>Monday</Heading>
      <div className={styles.recipes}>
        {mon.map((recipe) => {
          return (
            <RecipeCard
              url={
                recipeData.filter(
                  (recepie) => recepie.recipe_id === recipe.recipe_id
                )[0].photo
              }
              title={
                recipeData.filter(
                  (recepie) => recepie.recipe_id === recipe.recipe_id
                )[0].title
              }
              time={
                recipeData.filter(
                  (recepie) => recepie.recipe_id === recipe.recipe_id
                )[0].cooking_time
              }
            />
          );
        })}
      </div>

      <Heading>Tuesday</Heading>
      <div className={styles.recipes}>
        {tue.map((recipe) => {
          return (
            <RecipeCard
              url={
                recipeData.filter(
                  (recepie) => recepie.recipe_id === recipe.recipe_id
                )[0].photo
              }
              title={
                recipeData.filter(
                  (recepie) => recepie.recipe_id === recipe.recipe_id
                )[0].title
              }
              time={
                recipeData.filter(
                  (recepie) => recepie.recipe_id === recipe.recipe_id
                )[0].cooking_time
              }
            />
          );
        })}
      </div>

      <Heading>Wednesday</Heading>
      <div className={styles.recipes}>
        {wed.map((recipe) => {
          return (
            <RecipeCard
              url={
                recipeData.filter(
                  (recepie) => recepie.recipe_id === recipe.recipe_id
                )[0].photo
              }
              title={
                recipeData.filter(
                  (recepie) => recepie.recipe_id === recipe.recipe_id
                )[0].title
              }
              time={
                recipeData.filter(
                  (recepie) => recepie.recipe_id === recipe.recipe_id
                )[0].cooking_time
              }
            />
          );
        })}
      </div>

      <Heading>Thursday</Heading>
      <div className={styles.recipes}>
        {thu.map((recipe) => {
          return (
            <RecipeCard
              url={
                recipeData.filter(
                  (recepie) => recepie.recipe_id === recipe.recipe_id
                )[0].photo
              }
              title={
                recipeData.filter(
                  (recepie) => recepie.recipe_id === recipe.recipe_id
                )[0].title
              }
              time={
                recipeData.filter(
                  (recepie) => recepie.recipe_id === recipe.recipe_id
                )[0].cooking_time
              }
            />
          );
        })}
      </div>

      <Heading>Friday</Heading>
      <div className={styles.recipes}>
        {fri.map((recipe) => {
          return (
            <RecipeCard
              url={
                recipeData.filter(
                  (recepie) => recepie.recipe_id === recipe.recipe_id
                )[0].photo
              }
              title={
                recipeData.filter(
                  (recepie) => recepie.recipe_id === recipe.recipe_id
                )[0].title
              }
              time={
                recipeData.filter(
                  (recepie) => recepie.recipe_id === recipe.recipe_id
                )[0].cooking_time
              }
            />
          );
        })}
      </div>

      <Heading>Saturday</Heading>
      <div className={styles.recipes}>
        {sat.map((recipe) => {
          return (
            <RecipeCard
              url={
                recipeData.filter(
                  (recepie) => recepie.recipe_id === recipe.recipe_id
                )[0].photo
              }
              title={
                recipeData.filter(
                  (recepie) => recepie.recipe_id === recipe.recipe_id
                )[0].title
              }
              time={
                recipeData.filter(
                  (recepie) => recepie.recipe_id === recipe.recipe_id
                )[0].cooking_time
              }
            />
          );
        })}
      </div>

      <Heading>Sunday</Heading>
      <div className={styles.recipes}>
        {sun.map((recipe) => {
          return (
            <RecipeCard
              url={
                recipeData.filter(
                  (recepie) => recepie.recipe_id === recipe.recipe_id
                )[0].photo
              }
              title={
                recipeData.filter(
                  (recepie) => recepie.recipe_id === recipe.recipe_id
                )[0].title
              }
              time={
                recipeData.filter(
                  (recepie) => recepie.recipe_id === recipe.recipe_id
                )[0].cooking_time
              }
            />
          );
        })}
      </div>
    </div>
  );
}
