import React, { useState } from "react";

const ArticleForm = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [text, setText] = useState('');

    const ARTICLES_URL = ('http://127.0.0.1:8000/api/articles/')

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch(ARTICLES_URL, {
            method: 'POST',
            headers: {
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Credentials': true,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title, description, text})
        });
        const content = await response.json()

        console.log(content);
    }

    return <main className="main">
    <section className="main__article-form">
        <div className="article-form__container container">
            <h2 className="article-form__header">Добавить статью</h2>
            <form id="form" onSubmit={handleSubmit} className="article-form__form">
                <div className="form__body">
                    <div className="form__item">
                        <label htmlFor="articleName" className="form__label">Название статьи</label>
                        <input type="text" className="form__input" id="articleName" onChange={(e) => setTitle(e.target.value)} value={title} required/>
                    </div>
                    <div class="form__item">
                        <label htmlFor="articleDescription" className="form__label">Краткое описание</label>
                        <textarea className="form__textarea" id="articleDescription" onChange={(e) => setDescription(e.target.value)} value={description} cols="30" rows="10" required/>
                    </div>
                    <div class="form__item">
                        <label htmlFor="articleText" className="form__label">Текст статьи</label>
                        <textarea className="form__textarea" id="articleText" cols="30" onChange={(e) => setText(e.target.value)} value={text} rows="10" required/>
                    </div>
                    <div class="form__item">
                        <button className="form__btn" type="submit">Добавить статью</button>
                    </div>
                </div>
            </form>
        </div>
    </section>
</main>

}

export default ArticleForm