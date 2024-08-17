import React from 'react';
import Container from '../global/Container';
import * as styles from './Footer.module.css';
import Info from './info/Info';
import Nav from './nav/Nav';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Container>
                <div className={styles.top}>
                    <div className={styles.inner}>
                        <Info />
                        <Nav />
                    </div>
                </div>
            </Container>
            <div className={styles.bottom}>
                <p className={styles.text}>ООО «ЛУАНЖ» Адрес: 125009, город Москва, Большой Гнездниковский переулок дом 3, офис 1/1</p>
            </div>
        </footer>
    )
}

export default Footer;