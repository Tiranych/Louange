import React from "react";
import Title from "../../../global/Title";
import * as styles from './ServiceList.module.css';

const ServiceList = () => {
    return (
        <section className={styles.section}>
            <Title>Услуги</Title>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <img className={styles.img} src="./images/home/services/1.jpg" alt="" />
                    <p className={styles.text}>Постельное белье</p>
                </li>
                <li className={styles.item}>
                    <img className={styles.img} src="./images/home/services/2.jpg" alt="" />
                    <p className={styles.text}>Пошив штор</p>
                </li>
                <li className={styles.item}>
                    <img className={styles.img} src="./images/home/services/3.jpg" alt="" />
                    <p className={styles.text}>Обивка мебели</p>
                </li>
            </ul>
        </section>
    )
}

export default ServiceList;