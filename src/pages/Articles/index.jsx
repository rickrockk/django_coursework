import React from "react";
import { Link } from "react-router-dom";
import { Article } from "../../components";

const Articles = () => {
    const ArticlesList = [{heading: 'Статья', description: 'Описание'}]
    return <main className='main'>
    <section className="main__articles">
        <div className="articles__container container">
            <h2 className="articles__header">
                Статьи
            </h2>
            <div className="articles__wrapper">
                <Link to="/add-article" className="article__link">
                    <div className="article add-article">
                        <h3 className="add-article__title">
                            Добавить статью
                        </h3>
                    </div>
                </Link>
                {ArticlesList.map((article) => <Link to="/article" className="article__link"><Article heading={article.heading} description={article.description}/></Link>)}
            </div>
        </div>
    </section>
</main>
}

export default Articles