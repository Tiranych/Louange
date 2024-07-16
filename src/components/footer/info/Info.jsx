import React from 'react';
import * as styles from './Info.module.css';

const Info = () => {
    return (
        <div>
            <img className={styles.logo} src="/images/footer/footer-logo.svg" alt="Footer-logo" />
            <div>
                <p className={styles.subtitle}>График работы</p>
                <p className={styles.text}>Понедельник – пятница: 10:00 — 19:00</p>
            </div>
            <div>
                <p className={styles.subtitle}>Телефон</p>
                <a className={styles.text} href="tel:84991108022">+7 499 110-80-22</a>
            </div>
            <a href="#">
                <img src="/images/footer/instagram.svg" alt="Social-instagram" />
            </a>
        </div>
    )
}

export default Info;