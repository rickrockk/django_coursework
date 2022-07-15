import React, { useState } from "react";
import { RecipeItem } from "../../components";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";



const RecipesCath = ({cathegory, recipeItems}) => {
    return <main className="main">
    <section className="main__recipes-page">
        <div className="recipes-page__container container">
            <h2 className="recipes-page__header">
                {cathegory}
            </h2>
            <ul className="recipes-page__list">
                <Link className="add-recipe_link" to='/add-recipe'>
                    <li className="recipes-page__item add-recipe">
                            <div className="add-recipe__inner">
                                <div className="add-recipe__btn">
                                    <span></span>
                                    <span></span>
                                </div>
                                <p className="add-recipe__text">
                                    Добавить рецепт
                                </p>
                            </div>
                        
                    </li>
                </Link>
                {recipeItems.map((recipe) => <Link to={`${recipe.id}`}><RecipeItem heading={recipe.name} img={recipe.photo}/></Link> )}
            </ul>
        </div>
    </section>
</main>
}

export default RecipesCath;