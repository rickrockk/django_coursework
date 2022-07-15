import React from "react";
import { Link } from "react-router-dom";
import { RecipeItem } from "../../components";

const Recipes = ({cathegory, recipeItems}) => {
    return <main className="main">
    <section className="main__recipes-page">
        <div className="recipes-page__container container">
            <h2 className="recipes-page__header">
                {cathegory}
            </h2>
            <div className="recipes-page__list">
                {recipeItems.map((recipe) => <Link to={recipe.to}><RecipeItem heading={recipe.heading} to={recipe.to} img={recipe.img}/></Link>)}
            </div>
        </div>
    </section>
</main>
}

export default Recipes;