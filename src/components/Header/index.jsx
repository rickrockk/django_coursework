import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const [isFolded, setIsFolded] = useState(true);
    return <header className="header">
                <nav className="nav">
                    <Link to="/" className="nav__logo logo">
                        <img className="logo__img" src="./assets/images/logo.svg" alt="Кухонька"/>
                    </Link>
                    <div className="nav__block">
                        <button onClick={()=>setIsFolded(!isFolded)} className="nav__toggler">
                            <span></span>
                        </button>
                         <ul className={'nav__list ' + (isFolded && 'nav__list_folded')}>
                            <li className="nav__item"><Link className='item__link' to="/recipes">Рецепты</Link></li>
                            <li className="nav__item"><Link className='item__link' to="/desserts">Десерты</Link></li>
                            <li className="nav__item"><Link className='item__link' to="/articles">Статьи</Link></li>
                            <li className="nav__item"><Link className='item__link' to="/">О нас</Link></li>
                            <li className="nav__item"><Link className='item__link' to="/login">Войти</Link></li>
                        </ul>
                    </div>
                </nav>
            </header>
 
}

export default Header