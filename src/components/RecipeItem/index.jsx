import React from "react"

const RecipeItem = ({heading, img}) => {
    return <li style={{backgroundImage: `url(${img})`}} className="recipes-page__item">
        <h3 className="item__header">
            {heading}
        </h3>
</li>
}

export default RecipeItem;