import React from "react";

const Article = ({name, description}) => {
    return <div className="article">
    <h3 className="article__name">
        {name}
    </h3>
    <p className="article__description">
        {description}
    </p>   
</div>
}

export default Article