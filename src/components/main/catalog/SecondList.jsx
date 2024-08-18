import React from "react";
import { Link } from 'react-router-dom';
import * as styles from './SecondList.module.css';

const SecondList = () => {
    return (
        <ul className={styles.secondlist}>
            <li className={styles.item}>
                <Link to={`entry`}>
                    <img className={styles.img} src="./images/catalog/main-5.jpg" alt="Catalog-photo" />
                    <p className={styles.caption}>Текстиль для <br /> ресторанов и гостинниц</p>
                </Link>
            </li>
            <li className={styles.item}>
                <Link to={`entry`}>
                    <img className={styles.img} src="./images/catalog/main-6.jpg" alt="Catalog-photo" />
                    <p className={styles.caption}>Ковры и напольные <br /> покрытия</p>
                </Link>
            </li>
            <li className={styles.item}>
                <Link to={`entry`}>
                    <img className={styles.img} src="./images/catalog/main-7.jpg" alt="Catalog-photo" />
                    <p className={styles.caption}>Карнизы</p>
                </Link>
            </li>
        </ul>
    )
}

export default SecondList;