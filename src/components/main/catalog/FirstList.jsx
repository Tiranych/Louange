import React from "react";
import { Link } from 'react-router-dom';
import * as styles from './FirstList.module.css';

const FirstList = () => {
    return (
        <ul className={styles.firstlist}>
            <li className={styles.item}>
                <Link to={`entry`}>
                    <img className={styles.img} src="./images/catalog/main-1.jpg" alt="Catalog-photo" />
                    <p className={styles.caption}>Ткани</p>
                </Link>
            </li>
            <li className={styles.item}>
                <Link to={`entry`}>
                    <img className={styles.img} src="./images/catalog/main-2.jpg" alt="Catalog-photo" />
                    <p className={styles.caption}>Аксессуары для штор</p>
                </Link>
            </li>
            <li className={styles.item}>
                <Link to={`entry`}>
                    <img className={styles.img} src="./images/catalog/main-3.jpg" alt="Catalog-photo" />
                    <p className={styles.caption}>Мебель</p>
                </Link>
            </li>
            <li className={styles.item}>
                <Link to={`entry`}>
                    <img className={styles.img} src="./images/catalog/main-4.jpg" alt="Catalog-photo" />
                    <p className={styles.caption}>Постельное белье</p>
                </Link>
            </li>
        </ul>
    )
}

export default FirstList;