import React from "react";
import Title from "../../../global/Title.jsx";
import * as styles from './WhyLouange.module.css';

const WhyLouange = () => {
    return (
        <section className={styles.section}>
            <Title>Почему LOUANGE</Title>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <img className={styles.img} src="images/home/whyLouange/1.svg" alt="" />
                    <p className={styles.text}>Собственная мастерская для пошива индивидуальных проектов ручной работы</p>
                </li>
                <li className={styles.item}>
                    <img className={styles.img} src="images/home/whyLouange/2.svg" alt="" />
                    <p className={styles.text}>Идеальный результат в кратчайшие сроки с помощью профессионализма наших мастеров</p>
                </li>
                <li className={styles.item}>
                    <img className={styles.img} src="images/home/whyLouange/3.svg" alt="" />
                    <p className={styles.text}>Обширная складская программа от ведущих европейских производителей</p>
                </li>
                <li className={styles.item}>
                    <img className={styles.img} src="images/home/whyLouange/4.svg" alt="" />
                    <p className={styles.text}>Прямые поставки текстиля, мебели, предметов интерьера от ведущих мировых производителей</p>
                </li>
            </ul>
        </section>
    )
}

export default WhyLouange;