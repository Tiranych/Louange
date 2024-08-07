import React, { useState } from 'react';
import HeaderSlider from './slider/HeaderSlider.jsx';
import Slogan from './slogan/Slogan.jsx';
import { Link, useLocation } from 'react-router-dom';
import Container from '../global/Container.jsx';
import * as styles from './Header.module.css';

const Header = () => {
    const [isBurgerMenuOpen, setisBurgerMenuOpen] = useState(false);

    const location = useLocation();
    let isHomePage = true;
    if (location.pathname !== '/') { isHomePage = false }

    window.addEventListener('scroll', () => {
        setisBurgerMenuOpen(false)
    })

    return (
        <header id='header' className={isHomePage ? styles.header_home : styles.header}>
            <Container>
                <button onClick={() => { isBurgerMenuOpen ? setisBurgerMenuOpen(false) : setisBurgerMenuOpen(true) }} className={styles.burger}>
                    <span></span>
                </button>
                <div className={isBurgerMenuOpen ? styles.inner + ' ' + styles.inner_active : styles.inner}>
                    <a href={`/`} ><img src="/images/header/logo.svg" alt="Logo" /></a>
                    <nav className={styles.nav}>
                        <ul className={styles.list}>
                            <li>
                                <Link to={`/services`} onClick={() => { setisBurgerMenuOpen(false) }}>Услуги</Link>
                            </li>
                            <li>
                                <Link to={`/catalog`} onClick={() => { setisBurgerMenuOpen(false) }}>Каталог</Link>
                            </li>
                            <li>
                                <Link to={`/projects`} onClick={() => { setisBurgerMenuOpen(false) }}>Проекты</Link>
                            </li>
                            <li>
                                <Link to={`/about`} onClick={() => { setisBurgerMenuOpen(false) }}>О студии</Link>
                            </li>
                            <li>
                                <Link to={`/contacts`} onClick={() => { setisBurgerMenuOpen(false) }}>Контакты</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                {isHomePage && <Slogan />}
            </Container>
            {isHomePage && <HeaderSlider />}
        </header>
    )
}

export default Header;