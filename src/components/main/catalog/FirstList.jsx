import React from "react";
import { Link } from 'react-router-dom';

import * as styles from './FirstList.module.css';

import { ROUTES } from "../../global/routes";

import Catalog_Photo_1 from '../../../../public/images/catalog/main-1.jpg';
import Catalog_Photo_2 from '../../../../public/images/catalog/main-2.jpg';
import Catalog_Photo_3 from '../../../../public/images/catalog/main-3.jpg';
import Catalog_Photo_4 from '../../../../public/images/catalog/main-4.jpg';

const FirstList = () => {
    return (
        <ul className={styles.firstlist}>
            <li className={styles.item}>
                <Link to={ROUTES.ENTRY}>
                    <img className={styles.img} src={Catalog_Photo_1} alt="Catalog-photo" />
                    <p className={styles.caption}>Ткани</p>
                </Link>
            </li>
            <li className={styles.item}>
                <Link to={ROUTES.ENTRY}>
                    <img className={styles.img} src={Catalog_Photo_2} alt="Catalog-photo" />
                    <p className={styles.caption}>Аксессуары для штор</p>
                </Link>
            </li>
            <li className={styles.item}>
                <Link to={ROUTES.ENTRY}>
                    <img className={styles.img} src={Catalog_Photo_3} alt="Catalog-photo" />
                    <p className={styles.caption}>Мебель</p>
                </Link>
            </li>
            <li className={styles.item}>
                <Link to={ROUTES.ENTRY}>
                    <img className={styles.img} src={Catalog_Photo_4} alt="Catalog-photo" />
                    <p className={styles.caption}>Постельное белье</p>
                </Link>
            </li>
        </ul>
    )
}

export default FirstList;