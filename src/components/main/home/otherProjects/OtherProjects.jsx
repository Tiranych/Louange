import React from "react";
import { Link } from "react-router-dom";

import * as styles from './OtherProjects.module.css';

import { ROUTES } from '../../../global/routes';

import Project_1 from '../../../../../public/images/home/otherProjects/1.jpg';
import Project_2 from '../../../../../public/images/home/otherProjects/2.jpg';
import Project_3 from '../../../../../public/images/home/otherProjects/3.jpg';
import Project_4 from '../../../../../public/images/home/otherProjects/4.jpg';

const OtherProjects = () => {
    return (
        <section className={styles.section}>
            <div className={styles.row}>
                <p className={styles.title}>Другие проекты Louange</p>
                <Link className={styles.mainLink} to={ROUTES.PROJECTS}>Все проекты</Link>
            </div>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <img className={styles.img} src={Project_1} alt="Project" />
                    <p className={styles.caption}>Дом в коттеджном поселке Раздоры</p>
                    <Link state={"Дом в коттеджном поселке Раздоры"} className={styles.link} to={ROUTES.PROJECT}>Подробнее</Link>
                </li>
                <li className={styles.item}>
                    <img className={styles.img} src={Project_2} alt="Project" />
                    <p className={styles.caption}>Квартира в ЖК Символ</p>
                    <Link state={"Квартира в ЖК Символ"} className={styles.link} to={ROUTES.PROJECT}>Подробнее</Link>
                </li>
                <li className={styles.item}>
                    <img className={styles.img} src={Project_3} alt="Project" />
                    <p className={styles.caption}>Особняк на Рублево-Успенском шоссе</p>
                    <Link state={"Особняк на Рублево-Успенском шоссе"} className={styles.link} to={ROUTES.PROJECT}>Подробнее</Link>
                </li>
                <li className={styles.item}>
                    <img className={styles.img} src={Project_4} alt="Project" />
                    <p className={styles.caption}>Вилла в Дубае</p>
                    <Link state={"Вилла в Дубае"} className={styles.link} to={ROUTES.PROJECT}>Подробнее</Link>
                </li>
            </ul>
        </section>
    )
}

export default OtherProjects;