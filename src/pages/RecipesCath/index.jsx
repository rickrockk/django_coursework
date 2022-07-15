import React from "react";
import { RecipeItem } from "../../components";
import { Link } from "react-router-dom";



const RecipesCath = ({cathegory, recipeItems, count}) => {
    return <main className="main">
    <section className="main__recipes-page">
        <div className="recipes-page__container container">
            <h2 className="recipes-page__header">
                {cathegory}
            </h2>
            <p className="recipes__count"> Количество: {count}</p>
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
                {recipeItems.map((recipe) => <Link to={`${recipe.id}`}><RecipeItem heading={recipe.name} img={recipe.photo} id={recipe.id}/></Link> )}
            </ul>
        </div>
    </section>
</main>
}

export default RecipesCath;