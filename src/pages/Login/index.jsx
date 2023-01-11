import React from "react";

import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
const LOGIN_URL = 'http://rickrockk.pythonanywhere.com/api/auth/login/';

const Login = ({ setToken }) => {
    const emailRef = useRef()
    const errRef = useRef()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        emailRef.current.focus();
    }, [])

    useEffect(() => {
        setError('');
    }, [email, password]);

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch(LOGIN_URL, {
            method: 'POST',
            headers: {
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Credentials': true,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        });
        const content = await response.json()
        setToken(content)
        console.log(content);
    }
    return <main className="main">
        <section className="main__login">
            <div className="login__container container">
                <h2 className="login__header">Войти</h2>
                <form onSubmit={handleSubmit} className="login__form">
                    <div className="form__body">
                            <p ref={errRef} classname={error ? 'error' : 'offscreen'} aria-live='assertive'>{error}</p>
                            <div className="form__item">
                                <label htmlFor="userEmail" className="form__label">E-mail</label>
                                <input type='email' className="form__input" id="userEmail" placeholder="example@example.com" name="userEmail" ref={emailRef} autoComplete='off' onChange={(e) => setEmail(e.target.value)} value={email} required/>
                            </div>
                            <div class="form__item">
                                <label htmlFor="userName" className="form__label">Пароль</label>
                                <input type="password" className="form__input" id="userPassword" placeholder="Пароль" name="userPassword" onChange={(e) => setPassword(e.target.value)} value={password} required/>
                            </div>
                            <div class="form__item">
                                <button className="form__btn" type="submit">Войти</button>
                            </div>
                            <div className="form__item">
                                <Link to='/register' className="form__register-btn">Зарегистрироваться</Link>
                            </div>
                        </div>
                </form>
            </div>
        </section>
    </main>
}

export default Login;