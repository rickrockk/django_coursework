import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Rating from '@mui/material/Rating';
import Fab from '@mui/material/Fab';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Recipe = () => {

    const {id} = useParams();
    const RECIPES_URL = ("http://rickrockk.pythonanywhere.com/api/recipes/" + id)

    const [item, setItem] = useState({});
    const [fetchError, setFetchError] = useState(null)
    useEffect(() => {
        const fetchItem = async () => {
            try {
                const response = await fetch(RECIPES_URL)
                if (!response.ok) throw Error('Ожидаемые данные не были получены')
                const itemInfo = await response.json()
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
                <div className="recipe__heading">
                <h1 className="recipe__header">
                    {item.name} 
                </h1>
                <div className="recipe__ratings">
                    <Rating name="half-rating" defaultValue={4.5} precision={0.5} />
                    <Fab size="small" aria-label="like">  <FavoriteIcon /> </Fab>
                </div>
                </div>
                <img src={item.photo} alt="салат" className="recipe__photo" width="150" height="150"/>
                <p className="recipe__description">
                    {item.description}
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