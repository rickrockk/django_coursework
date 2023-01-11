import React from "react";
import Button from '@mui/material/Button';

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
                <Button variant="contained" onClick={() => window.open("https://github.com/rickrockk/django_coursework/tree/frontend", "_blank")}>Ссылка на Git</Button>
            </div>
        </section>
    </main>
}

export default About;