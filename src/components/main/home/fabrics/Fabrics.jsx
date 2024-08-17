import React from "react";
import * as styles from './Fabrics.module.css';
import { Link } from "react-router-dom";
import Title from "../../../global/Title";

const Fabrics = () => {
    return (
        <section className={styles.section}>
            <Title>Ткани</Title>
            <Link className={styles.link} to={`catalog`}>В каталог</Link>
            <p className={styles.text}>Мы сотрудничаем с ведущими мировыми поставщиками тканей</p>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <img className={styles.img} src="/images/home/fabrics/1.jpg" alt="" />
                    <p className={styles.caption}>DEDAR Milano</p>
                </li>
                <li className={styles.item}>
                    <img className={styles.img} src="/images/home/fabrics/2.jpg" alt="" />
                    <p className={styles.caption}>JAB Anstoez</p>
                </li>
                <li className={styles.item}>
                    <img className={styles.img} src="/images/home/fabrics/3.jpg" alt="" />
                    <p className={styles.caption}>Zimmer+Rohde</p>
                </li>
                <li className={styles.item}>
                    <img className={styles.img} src="/images/home/fabrics/4.jpg" alt="" />
                    <p className={styles.caption}>HOULES</p>
                </li>
            </ul>
        </section>
    )
}

export default Fabrics;