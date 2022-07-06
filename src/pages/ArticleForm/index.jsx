import React from "react";

const ArticleForm = () => {

    return <main className="main">
    <section className="main__article-form">
        <div className="article-form__container container">
            <h2 className="article-form__header">Добавить статью</h2>
            <form id="form" className="article-form__form">
                <div className="form__body">
                    <div className="form__item">
                        <label htmlFor="articleName" className="form__label">Название статьи</label>
                        <input type="text" className="form__input" id="articleName" required/>
                    </div>
                    <div class="form__item">
                        <label htmlFor="articleDescription" className="form__label">Краткое описание</label>
                        <textarea className="form__textarea" id="articleDescription" cols="30" rows="10" required/>
                    </div>
                    <div class="form__item">
                        <label htmlFor="articleText" className="form__label">Текст статьи</label>
                        <textarea className="form__textarea" id="articleText" cols="30" rows="10" required/>
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