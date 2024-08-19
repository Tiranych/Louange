import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import HeaderSlider from './slider/HeaderSlider';
import Slogan from './slogan/Slogan';
import Container from '../global/Container';

import * as styles from './Header.module.css';

import LOGO from "../../../public/images/header/logo.svg";

import { ROUTES } from '../global/routes';

const Header = () => {
    const [isBurgerMenuOpen, setisBurgerMenuOpen] = useState(false);

    const location = useLocation();
    let isHomePage = true;
    if (location.pathname !== ROUTES.HOME) { isHomePage = false }

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
                    <a href={ROUTES.HOME} ><img src={LOGO} alt="Logo" /></a>
                    <nav className={styles.nav}>
                        <ul className={styles.list}>
                            <li>
                                <Link to={ROUTES.SERVICES} onClick={() => { setisBurgerMenuOpen(false) }}>Услуги</Link>
                            </li>
                            <li>
                                <Link to={ROUTES.CATALOG} onClick={() => { setisBurgerMenuOpen(false) }}>Каталог</Link>
                            </li>
                            <li>
                                <Link to={ROUTES.PROJECTS} onClick={() => { setisBurgerMenuOpen(false) }}>Проекты</Link>
                            </li>
                            <li>
                                <Link to={ROUTES.ABOUT} onClick={() => { setisBurgerMenuOpen(false) }}>О студии</Link>
                            </li>
                            <li>
                                <Link to={ROUTES.CONTACTS} onClick={() => { setisBurgerMenuOpen(false) }}>Контакты</Link>
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