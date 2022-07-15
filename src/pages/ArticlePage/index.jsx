import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



const ArticlePage = () => {
    const {id} = useParams();
    const ARTICLES_URL = ('http://127.0.0.1:8000/api/articles/' + id)
    const [article, setArticle] = useState({});
    const [fetchError, setFetchError] = useState(null)

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await fetch(ARTICLES_URL)
                if (!response.ok) throw Error('Ожидаемые данные не были получены')
                const Article = await response.json()
                setArticle(Article);
                setFetchError(null);
            } catch (err) {
                setFetchError(err.message)
            }
        }
      
        (async () => await fetchArticles())();
      }, [])

    return <main className="main">
    <section className="main__article">
        <div className="article__container container">
            <h2 className="article__header">{article.title}</h2>
            <p className="article__text">{article.text}</p>
        </div>
    </section>
    </main>
}

export default ArticlePage