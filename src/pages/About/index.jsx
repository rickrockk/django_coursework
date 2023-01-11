import React from "react";

const About = () => {
    return <main className="main">
        <section className="main__about">
            <div className="about__container container">
                <h2 className="about__header">
                    О нас
                </h2>
                <div className="about__content">
                    <p className="about__text">
                        Этот сайт является курсовым проектом по предмету "Инженерное проектирование" <br/>
                        Работу сделал студент 2 курса Московского политехнического университета <br/>
                        Королёв Кирилл, группа 211-323
                    </p>
                    <img className="about__img" src='/assets/images/me.jpg' alt="Создатель" width='250' />
                </div>
            </div>
        </section>
    </main>
}

export default About;