import React from "react";
import { useRef, useState, useEffect } from "react";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}/;
const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%?]).{8,24}$/;

const REGISTER_URL = 'http://127.0.0.1:8000/api/auth/register/';

const Register = () => {
    const userRef = useRef();
    const errorRef = useRef();
    const photoRef = useRef(null);

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [password, setPassword] = useState('');
    const [validPassword, setValidPassword] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [photo, setPhoto] = useState('');
    const [validPhoto, setValidPhoto] = useState(false);
    const [photoFocus, setPhotoFocus] = useState(false);

    const [bio, setBio] = useState('');
    const [validBio, setValidBio] = useState(false);
    const [bioFocus, setBioFocus] = useState(false);

    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        const result = USER_REGEX.test(user);
        console.log(result);
        console.log(user);
        setValidName(result)
    }, [user])

    useEffect(() => {
        const result = EMAIL_REGEX.test(email);
        console.log(result);
        console.log(email);
        setValidEmail(result)
    }, [email])

    useEffect(() => {
        const result = PASSWORD_REGEX.test(password);
        console.log(result);
        console.log(password);
        setValidPassword(result);
        const match = password === matchPwd;
        setValidMatch(match);
    }, [password, matchPwd])

    useEffect(() => {
        setError('');
    }, [user, email, password, matchPwd])

    useEffect(() => {
        console.log(email);
    }, [photo])

    useEffect(() => {
        console.log(bio);
    }, [bio])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const v1 = EMAIL_REGEX.test(email);
        const v2 = PASSWORD_REGEX.test(password);
        if (!v1 || !v2)  {
            setError('Некорректный ввод')
            return;
        }

        const formData = new FormData()
        formData.append('nickname', e.target.nickname.value)
        formData.append('email', e.target.email.value)
        formData.append('password', e.target.password.value)
        formData.append('photo', photoRef.current.files[0])
        formData.append('bio', e.target.bio.value)
        const response = await fetch(REGISTER_URL, {
            method: 'POST',
            headers: {
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Credentials': true,
                // 'Content-Type': 'multipart/form-data; boundary=--WebKitFormBoundaryfgtsKTYLsT7PNUVD'
            },
            body: formData
        });
        const content = await response.json()
        console.log(content)
        } 
    
    return <main className="main">
    <section className="main__register">
        <div className="register__container container">
            <h2 className="register__header">Регистрация</h2>
            <form onSubmit={handleSubmit} className="register__form">
                <div className="form__body">
                <p ref={errorRef} classname={error ? 'error' : 'offscreen'} aria-live='assertive'>{error}</p>
                    <div className="form__item">
                        <label htmlFor="userNickname" className="form__label">
                            Имя пользователя
                        </label>
                        <input className="form__input" 
                        id="userNickname" 
                        placeholder="Имя пользователя" 
                        name="nickname" 
                        ref={userRef} 
                        value={user}
                        autoComplete='off' 
                        onChange={(e) => setUser(e.target.value)} 
                        required
                        aria-invalid={validName ? "false" : "true"}
                        aria-describedby="uidnote"
                        onFocus={() => setUserFocus(true)}
                        onBlur={() => setUserFocus(false)}
                        />
                        <p id='uidnote' className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                            От 4 до 24 символов. <br/>
                            Должно начинаться с буквы. <br/>
                        </p>
                    </div>
                    <div className="form__item">
                        <label htmlFor="userEmail" className="form__label">Эл. почта</label>
                        <input className="form__input" 
                        type="email" 
                        id="userEmail" 
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="example@example.com" 
                        name="email"
                        value={email} 
                        required
                        aria-invalid={validEmail ? 'false' : 'true'}
                        aria-describedby='emailnote'
                        onFocus={() => setEmailFocus(true)}
                        onBlur={() => setEmailFocus(false)}
                        />
                        <p id="emailnote" className={emailFocus && email && !validEmail ? 'instructions' : 'offscreen'}>
                            Убедитесь что e-mail корректен.
                        </p>
                    </div>
                    <div className="form__item">
                        <label htmlFor="userPassword" className="form__label">Пароль</label>
                        <input type="password" 
                        className="form__input" 
                        id="userPassword"
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Пароль" 
                        name="password"
                        value={password} 
                        required
                        aria-invalid={validPassword ? 'false' : 'true'}
                        aria-describedby='pwdnote'
                        onFocus={() => setPasswordFocus(true)}
                        onBlur={() => setPasswordFocus(false)}/>
                        <p id='pwdnote' className={passwordFocus && !validPassword ? "instructions" : "offscreen"}>
                            От 8 до 24 символов. <br/>
                            Должен включать: <br/>
                            -буквы верхнего и нижнего регистра <br/>
                            -цифры <br/>
                            -специальные символы: !, @, #, $, %, ?
                        </p>
                    </div>
                    <div className="form__item">
                        <label htmlFor="confirmPassword" className="form__label">Подтверждение пароля</label>
                        <input type="password" 
                        className="form__input" 
                        id="confirmPassword" 
                        onChange={(e) => setMatchPwd(e.target.value)}
                        placeholder="Введите пароль ещё раз" 
                        name="confrimPassword" 
                        required
                        aria-invalid={validMatch ? 'false' : 'true'}
                        aria-describedby='confirmnote'
                        onFocus={() => setMatchFocus(true)}
                        onBlur={() => setMatchFocus(false)}
                        />
                        <p id="confirmnote" className={matchFocus && !validMatch ? 'instructions' : 'offscreen'}>
                            Убедитесь что пароли совпадают
                        </p>
                    </div>
                    <div className="form__item">
                        <label htmlFor="userPhoto" className="form__label">Фото</label>
                        <input className="form__input" 
                        type="file" 
                        id="userPhoto" 
                        ref={photoRef}
                        onChange={(e) => setPhoto(e.target.value)}
                        placeholder="example@example.com" 
                        name="photo" 
                        aria-invalid={validPhoto ? 'false' : 'true'}
                        required
                        accept="image/png, image/jpg, image/jpeg"
                        value={photo}
                        onFocus={() => setPhotoFocus(true)}
                        onBlur={() => setPhotoFocus(false)}/>
                    </div>
                    <div className="form__item">
                        <label htmlFor="userBio" className="form__label">Биография</label>
                        <textarea className="form__textarea" 
                        cols="30" 
                        rows="10"
                        onChange={(e) => setBio(e.target.value)}
                        id="userBio" 
                        placeholder="Расскажите о себе" 
                        name="bio"
                        required
                        value={bio}
                        onFocus={() => setBioFocus(true)}
                        onBlur={() => setBioFocus(false)}/>
                    </div>
                    <div className="form__item">
                        <button disabled={!validName || !validEmail || !validMatch ? true : false} className="form__register-btn" type="submit">Зарегистрироваться</button>
                    </div>
                </div>
            </form>
        </div>
    </section>
</main>
}


export default Register;