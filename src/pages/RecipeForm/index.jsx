import React from "react";

// ADD_RECIPE_URL = 'http://127.0.0.1:8000/api/recipes/'
// ADD_INGREDIENTS_URL = 'http://127.0.0.1:8000/api/ingredients/'

const RecipeForm = () => {

    // const handleSubmit = async (e) => {
    //     e.preventDefault()
    //     const formData = new FormData()
    //     formData.append('name', e.target.name.value)
    //     formData.append('description', e.target.description.value)
    //     formData.append('cooking', e.target.cooking.value)
    //     formData.append('photo', photoRef.current.files[0])
    //     formData.append('recipe_type', e.target.recipe_type.value)
    //     formData.append('food_type', e.target.food_type.value)
    //     formData.append('ingredients', e.target.food_type.value)
    //     const response = await fetch(ADD_RECIPE_URL, {
    //         method: 'POST',
    //         headers: {
    //             'Access-Control-Allow-Headers': 'Content-Type',
    //             'Access-Control-Allow-Credentials': true,
    //             // 'Content-Type': 'multipart/form-data; boundary=--WebKitFormBoundaryfgtsKTYLsT7PNUVD'
    //         },
    //         body: formData
    //     });
    //     const content = await response.json()
    //     console.log(content)
    //     } 


    return <main className="main">
    <section className="main__recipe-form">
        <div className="recipe-form__container container">
            <h2 className="recipe-form__header">Добавить рецепт</h2>
            <form id="form" className="recipe-form__form">
                <div className="form__body">
                    <div className="form__item menus">
                        <div className="menu">
                            <h3 className="menu__header">Тип рецепта</h3>
                            <select className="menu__list">
                                <option className="menu__item">Завтрак</option>
                                <option className="menu__item">Обед</option>
                                <option className="menu__item">Ужин</option>
                                <option className="menu__item">Десерт</option>
                            </select>
                        </div>
                        <div className="menu">
                            <h3 className="menu__header">Тип еды</h3>
                            <select className="menu__list">
                                <option className="menu__item">Диетическое</option>
                                <option className="menu__item">Мясное</option>
                                <option className="menu__item">Вегетарианское</option>
                                <option className="menu__item">Мучное</option>
                            </select>
                        </div>
                    </div>
                    <div className="form__item">
                        <label htmlFor="recipeName" className="form__label">Название рецепта</label>
                        <input type="text" className="form__input" id="recipeName" placeholder="Блинчики" required/>
                    </div>
                    <div className="form__item">
                        <label htmlFor="recipeDescription" className="form__label">Описание рецепта</label>
                        <textarea className="form__textarea" id="recipeDescription" cols="30" rows="10"></textarea>
                    </div>
                    <div className="form__item">
                        <h3 className="ingredients__header">Ингредиенты</h3>
                        <p className="ingredient">Помидоры — 1 шт.</p>
                        <div className="ingredients__inputs">
                            <div className="ingredients__input">
                                <label htmlFor="ingredientName" aria-label="Название ингредиента" className="visually-hidden">Название рецепта</label>
                                <input type="text" placeholder="Название ингредиента" className="form__input" id="ingredientName" required/>
                            </div>
                            <div className="ingredients__input">
                                <label htmlFor="ingredientCount" aria-label="Количество" className="visually-hidden">Название рецепта</label>
                                <input type="text" placeholder="Количество" className="form__input" id="ingredientCount" required/>
                            </div>
                        </div>
                        <button className="ingredients__btn">Добавить ингредиент</button>
                    </div>
                    <div className="form__item">
                        <label htmlFor="recipeCooking" className="form__label">Готовка</label>
                        <textarea className="form__textarea" id="recipeCooking" cols="30" rows="10"></textarea>
                    </div>
                    <div className="form__item">
                        <button className="form__btn" type="submit">Добавить рецепт</button>
                    </div>
                </div>
            </form>
        </div>
    </section>
</main>
}

export default RecipeForm;