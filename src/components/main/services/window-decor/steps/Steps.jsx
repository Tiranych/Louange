import React from "react";
import * as styles from './Steps.module.css';
import Subtitle from "../../../../global/Subtitle.jsx";

const Steps = () => {
    return (
        <section className={styles.section}>
            <Subtitle>6 шагов к воплощению вашей идеи</Subtitle>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <p className={styles.caption}>Знакомство с проектом</p>
                    <p className={styles.text}>Узнаем детали проекта, выявляем цели и основные задачи</p>
                </li>
                <li className={styles.item}>
                    <p className={styles.caption}>Встреча</p>
                    <p className={styles.text}>Осуществлеям подбор материалов в шоуруме или с выездом на объект</p>
                </li>
                <li className={styles.item}>
                    <p className={styles.caption}>Эскизы</p>
                    <p className={styles.text}>Отрисовываем эскизы, рассчитываем стоимость проекта</p>
                </li>
                <li className={styles.item}>
                    <p className={styles.caption}>Утверждение</p>
                    <p className={styles.text}>Утверждаем смету и подписываем договор</p>
                </li>
                <li className={styles.item}>
                    <p className={styles.caption}>Производство</p>
                    <p className={styles.text}>Пошив проекта профессиональной командой в нашей собственной мастерской </p>
                </li>
                <li className={styles.item}>
                    <p className={styles.caption}>Монтаж, навес, отпаривание</p>
                    <p className={styles.text}>Придаем работе завершенный вид с помощью финальных штрихов</p>
                </li>
            </ul>
        </section>
    )
}

export default Steps;