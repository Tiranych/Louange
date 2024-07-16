import React from 'react';
import * as styles from './Nav.module.css';

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.content}>
                <p className={styles.subtitle}>Услуги</p>
                <ul>
                    <li className={styles.item}><a href='#'>Постельное белье</a></li>
                    <li className={styles.item}><a href='#'>Пошив штор, покрывал, подушек</a></li>
                    <li className={styles.item}><a href='#'>Обивка мебели</a></li>
                </ul>
            </div>
            <div className={styles.content}>
                <p className={styles.subtitle}>Каталог</p>
                <ul>
                    <li className={styles.item}><a href='#'>Ткани</a></li>
                    <li className={styles.item}><a href='#'>Карнизы</a></li>
                    <li className={styles.item}><a href='#'>Обои</a></li>
                    <li className={styles.item}><a href='#'>Постельное белье</a></li>
                    <li className={styles.item}><a href='#'>Текстиль для ресторанов и гостиниц</a></li>
                </ul>
            </div>
            <div className={styles.content}>
                <p className={styles.subtitle}>Проекты</p>
                <ul>
                    <li className={styles.item}><a href='#'>Кремль</a></li>
                    <li className={styles.item}><a href='#'>Все проекты</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;