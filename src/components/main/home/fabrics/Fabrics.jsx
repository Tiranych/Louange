import React from "react";
import { Link } from "react-router-dom";

import Title from "../../../global/Title";

import * as styles from './Fabrics.module.css';

import {ROUTES} from '../../../global/routes';

import Fabric_1 from '../../../../../public/images/home/fabrics/1.jpg';
import Fabric_2 from '../../../../../public/images/home/fabrics/2.jpg';
import Fabric_3 from '../../../../../public/images/home/fabrics/3.jpg';
import Fabric_4 from '../../../../../public/images/home/fabrics/4.jpg';

const Fabrics = () => {
    return (
        <section className={styles.section}>
            <Title>Ткани</Title>
            <Link className={styles.link} to={ROUTES.CATALOG}>В каталог</Link>
            <p className={styles.text}>Мы сотрудничаем с ведущими мировыми поставщиками тканей</p>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <img className={styles.img} src={Fabric_1} alt="Fabric" />
                    <p className={styles.caption}>DEDAR Milano</p>
                </li>
                <li className={styles.item}>
                    <img className={styles.img} src={Fabric_2} alt="Fabric" />
                    <p className={styles.caption}>JAB Anstoez</p>
                </li>
                <li className={styles.item}>
                    <img className={styles.img} src={Fabric_3} alt="Fabric" />
                    <p className={styles.caption}>Zimmer+Rohde</p>
                </li>
                <li className={styles.item}>
                    <img className={styles.img} src={Fabric_4} alt="Fabric" />
                    <p className={styles.caption}>HOULES</p>
                </li>
            </ul>
        </section>
    )
}

export default Fabrics;