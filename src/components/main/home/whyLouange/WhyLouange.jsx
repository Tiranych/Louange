import React from "react";

import Title from "../../../global/Title";

import * as styles from './WhyLouange.module.css';

import Image1 from '../../../../../public/images/home/whyLouange/1.svg';
import Image2 from '../../../../../public/images/home/whyLouange/2.svg';
import Image3 from '../../../../../public/images/home/whyLouange/3.svg';
import Image4 from '../../../../../public/images/home/whyLouange/4.svg';

const WhyLouange = () => {
    return (
        <section className={styles.section}>
            <Title>Почему LOUANGE</Title>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <img className={styles.img} src={Image1} alt="" />
                    <p className={styles.text}>Собственная мастерская для пошива индивидуальных проектов ручной работы</p>
                </li>
                <li className={styles.item}>
                    <img className={styles.img} src={Image2} alt="" />
                    <p className={styles.text}>Идеальный результат в кратчайшие сроки с помощью профессионализма наших мастеров</p>
                </li>
                <li className={styles.item}>
                    <img className={styles.img} src={Image3} alt="" />
                    <p className={styles.text}>Обширная складская программа от ведущих европейских производителей</p>
                </li>
                <li className={styles.item}>
                    <img className={styles.img} src={Image4} alt="" />
                    <p className={styles.text}>Прямые поставки текстиля, мебели, предметов интерьера от ведущих мировых производителей</p>
                </li>
            </ul>
        </section>
    )
}

export default WhyLouange;