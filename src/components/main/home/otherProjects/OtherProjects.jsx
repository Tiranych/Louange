import React from "react";
import * as styles from './OtherProjects.module.css';
import { Link } from "react-router-dom";

const OtherProjects = () => {
    return (
        <section className={styles.section}>
            <div className={styles.row}>
                <p className={styles.title}>Другие проекты Louange</p>
                <Link className={styles.mainLink} to={`projects`}>Все проекты</Link>
            </div>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <img className={styles.img} src="./images/home/otherProjects/1.jpg" alt="" />
                    <p className={styles.caption}>Дом в коттеджном поселке Раздоры</p>
                    <Link state={"Дом в коттеджном поселке Раздоры"} className={styles.link} to={`projects/project`}>Подробнее</Link>
                </li>
                <li className={styles.item}>
                    <img className={styles.img} src="./images/home/otherProjects/2.jpg" alt="" />
                    <p className={styles.caption}>Квартира в ЖК Символ</p>
                    <Link state={"Квартира в ЖК Символ"} className={styles.link} to={`projects/project`}>Подробнее</Link>
                </li>
                <li className={styles.item}>
                    <img className={styles.img} src="./images/home/otherProjects/3.jpg" alt="" />
                    <p className={styles.caption}>Особняк на Рублево-Успенском шоссе</p>
                    <Link state={"Особняк на Рублево-Успенском шоссе"} className={styles.link} to={`projects/project`}>Подробнее</Link>
                </li>
                <li className={styles.item}>
                    <img className={styles.img} src="./images/home/otherProjects/4.jpg" alt="" />
                    <p className={styles.caption}>Вилла в Дубае</p>
                    <Link state={"Вилла в Дубае"} className={styles.link} to={`projects/project`}>Подробнее</Link>
                </li>
            </ul>
        </section>
    )
}

export default OtherProjects;