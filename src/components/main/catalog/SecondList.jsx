import React from "react";
import { Link } from 'react-router-dom';

import * as styles from './SecondList.module.css';

import { ROUTES } from "../../global/routes";

import Catalog_Photo_5 from '../../../../public/images/catalog/main-5.jpg';
import Catalog_Photo_6 from '../../../../public/images/catalog/main-6.jpg';
import Catalog_Photo_7 from '../../../../public/images/catalog/main-7.jpg';

const SecondList = () => {
    return (
        <ul className={styles.secondlist}>
            <li className={styles.item}>
                <Link to={ROUTES.ENTRY}>
                    <img className={styles.img} src={Catalog_Photo_5} alt="Catalog-photo" />
                    <p className={styles.caption}>Текстиль для <br /> ресторанов и гостинниц</p>
                </Link>
            </li>
            <li className={styles.item}>
                <Link to={ROUTES.ENTRY}>
                    <img className={styles.img} src={Catalog_Photo_6} alt="Catalog-photo" />
                    <p className={styles.caption}>Ковры и напольные <br /> покрытия</p>
                </Link>
            </li>
            <li className={styles.item}>
                <Link to={ROUTES.ENTRY}>
                    <img className={styles.img} src={Catalog_Photo_7} alt="Catalog-photo" />
                    <p className={styles.caption}>Карнизы</p>
                </Link>
            </li>
        </ul>
    )
}

export default SecondList;