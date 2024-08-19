import React from 'react';

import { ROUTES } from '../../global/routes';

import * as styles from './Info.module.css';

import FOOTER_LOGO from '../../../../public/images/footer/footer-logo.svg';
import INSTA from '../../../../public/images/footer/instagram.svg';

const Info = () => {
    return (
        <div className={styles.inner}>
            <a href={ROUTES.HOME}><img className={styles.logo} src={FOOTER_LOGO} alt="Footer-logo" /></a>
            <div>
                <div>
                    <p className={styles.subtitle}>График работы</p>
                    <p className={styles.text}>Понедельник – пятница: 10:00 — 19:00</p>
                </div>
                <div>
                    <p className={styles.subtitle}>Телефон</p>
                    <a className={styles.text} href="tel:84991108022">+7 499 110-80-22</a>
                </div>
                <a href="#">
                    <img src={INSTA} alt="Social-instagram" />
                </a>
            </div>
        </div>
    )
}

export default Info;