import React from "react";

const Article = ({heading, description}) => {
    return <div className="article">
    <h3 className="article__name">
        {heading}
    </h3>
    <p className="article__description">
        {description}
    </p>   
</div>
}

export default Article