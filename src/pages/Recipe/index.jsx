import React from "react";

const Recipe = ({heading, description, cooking}) => {
    return <main className="main">
        <section className="main__recipe">
            <div className="recipe__container container">
                <h1 className="recipe__header">
                    {heading}
                </h1>
                <img src="./assets/images/салат.jpg" alt="салат" className="recipe__photo" width="150" height="150"/>
                <p className="recipe__description">
                    {description}
                </p>
                <h2 className="recipe__header_two">
                    Ингредиенты
                </h2>
                <p className="recipe__ingredients">
                    Помидоры - 2 шт. <br/>
                    Огурец - 1 шт. <br/>
                    Пекинская капуста - 1 шт. <br/>
                    Соль и приправы - по вкусу <br/>
                </p>
                <h2 className="recipe__header_two">
                    Готовка
                </h2>
                <p className="recipe__cooking">
                    {cooking}
                </p>
                <h2 className="recipe__header_two">
                    Комментарии
                </h2>
            </div>
        </section>
    </main>
}

export default Recipe;