import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return <footer className="footer">
    <div className="footer__container container">
        <ul className="footer__list">
            <li className="footer__item">
                <Link to="/" className="footer__logo logo">
                    <img className="logo__img" src="./assets/images/logo.svg" alt="Кухонька"/>
                </Link>
            </li>
            <li className="footer__item">
                <ul className="footer__socials">
                    <li className="social">
                        <a href="mailto:mrkillraider@yandex.ru">
                            <img src="./assets/images/mail.svg" alt="e-mail"/>
                        </a>
                    </li>
                    <li className="social">
                        <a href="https://vk.com/rick_kk" target="_blank" rel="noopener noreferrer">
                            <img src="./assets/images/vk.svg" alt="vk"/>
                        </a>
                    </li>
                    <li className="social">
                        <a href="https://t.me/rickrockkk" target="_blank" rel="noopener noreferrer">
                            <img src="./assets/images/telegram.svg" alt="telegram"/>
                        </a>
                    </li> 
                    <li className="social">
                        <a href="https://github.com/rickrockk/django_coursework/tree/frontend" target="_blank" rel="noopener noreferrer">
                            <img src="./assets/images/github.svg" alt="github"/>
                        </a>
                    </li>   
                </ul>
            </li>
        </ul>
    </div>
</footer>
}

export default Footer;