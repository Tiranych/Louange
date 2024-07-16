import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Image from '../../../public/images/header/head-img.jpg';
import Container from '../global/Container.jsx';
import * as styles from './Header.module.css';

const HeaderHome = {
    backgroundImage: 'url(' + Image + ')',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh'
}

const HeaderOther = {
    background: 'linear-gradient(rgba(0, 0, 0, 0.24) 31%, rgba(102, 102, 102, 0) 100%)',
    backgroundColor: '#25232B'
}

const Header = () => {
    
    const location = useLocation();
    
    let isHomePage = true;

    if (location.pathname !== '/') {
        isHomePage = false
    }

    return (
        <header style={isHomePage ? HeaderHome : HeaderOther}>
            <div className={styles.wrapper}>
                <Container>
                    <div className={styles.inner}>
                        <Link to={`/`} ><img src="/images/header/logo.svg" alt="Logo" /></Link>
                        <nav className={styles.nav}>
                            <ul className={styles.list}>
                                <li>
                                    <Link to={`/services`} >Услуги</Link>
                                </li>
                                <li>
                                    <Link to={`/catalog`} >Каталог</Link>
                                </li>
                                <li>
                                    <Link to={`/projects`} >Проекты</Link>
                                </li>
                                <li>
                                    <Link to={`/about`} >О студии</Link>
                                </li>
                                <li>
                                    <Link to={`/contacts`} >Контакты</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </Container>
            </div>
        </header>
    )
}

export default Header;