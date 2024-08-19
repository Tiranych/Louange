import React from "react";

import Title from "../../../global/Title";

import * as styles from './ServiceList.module.css';

import Service_1 from '../../../../../public/images/home/services/1.jpg';
import Service_2 from '../../../../../public/images/home/services/2.jpg';
import Service_3 from '../../../../../public/images/home/services/3.jpg';

const ServiceList = () => {
    return (
        <section className={styles.section}>
            <Title>Услуги</Title>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <img className={styles.img} src={Service_1} alt="Service" />
                    <p className={styles.text}>Постельное белье</p>
                </li>
                <li className={styles.item}>
                    <img className={styles.img} src={Service_2} alt="Service" />
                    <p className={styles.text}>Пошив штор</p>
                </li>
                <li className={styles.item}>
                    <img className={styles.img} src={Service_3} alt="Service" />
                    <p className={styles.text}>Обивка мебели</p>
                </li>
            </ul>
        </section>
    )
}

export default ServiceList;