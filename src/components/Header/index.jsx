import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

const Header = ({token}) => {
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
                            <li className="nav__item"><Link className='item__link' to="/about">О нас</Link></li>
                            {!token ? 
                            <li className="nav__item"><Link className='item__link' to="/login">Войти</Link></li>
                            :
                            <li className="nav__item"><Link className='item__link' to="/profile"> Профиль</Link></li>
                            }
                            <li className="nav__item">
                            <Badge color="secondary" variant="dot">
                                <MailIcon />
                            </Badge>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
 
}

export default Header