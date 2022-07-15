import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Recipe = () => {

    const {id} = useParams();
    const RECIPES_URL = `http://127.0.0.1:8000/api/recipes/${id}`

    const [item, setItem] = useState({});
    const [fetchError, setFetchError] = useState(null)

    useEffect(() => {
        const fetchItem = async () => {
            try {
                const response = await fetch(RECIPES_URL)
                if (!response.ok) throw Error('Ожидаемые данные не были получены')
                const itemInfo = await response.json()
                console.log(itemInfo);
                setItem(itemInfo);
                setFetchError(null);
            } catch (err) {
                setFetchError(err.message)
            }
        }
    
        (async () => await fetchItem())();
    }, [])

    return <main className="main">
        <section className="main__recipe">
            <div className="recipe__container container">
                <h1 className="recipe__header">
                    {item.name}
                </h1>
                <img src="./assets/images/салат.jpg" alt="салат" className="recipe__photo" width="150" height="150"/>
                <p className="recipe__description">
                    {item.description}
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
                    {item.cooking}
                </p>
                <h2 className="recipe__header_two">
                    Комментарии
                </h2>
            </div>
        </section>
    </main>
}

export default Recipe;