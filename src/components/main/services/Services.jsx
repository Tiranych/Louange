import React from 'react';
import * as styles from './Services.module.css';
import Title from '../../global/Title.jsx';
import { Link } from 'react-router-dom';

const Services = () => {
    return(
        <section className={styles.section}>
            <Title>Услуги</Title>
            <div className={styles.box}>
                <p>
                    Мы предлагаем полный спектр услуг по текстильному оформлению интерьеров, 
                    как для частных, так и для корпоративных клиентов, услугу «Выезд дизайнера». 
                    Осуществляем замеры, разработку эскизов, пошив, монтаж и навеску готовых изделий.
                </p>
                <button className={styles.btn}>Оставить заявку</button>
            </div>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link to={`window-decor`} className={styles.link}>
                        <img className={styles.img} src="/images/services/1.jpg" alt="Window-decor" />
                        <p className={styles.caption}>Текстильное декорирование окон</p>
                    </Link>
                </li>
                <li className={styles.item}>
                    <Link to={`upholstery`} className={styles.link}>
                        <img className={styles.img} src="/images/services/2.jpg" alt="Upholstery" />
                        <p className={styles.caption}>Обивка мебели</p>
                    </Link>
                </li>
                <li className={styles.item}>
                    <Link to={`bed-linen`} className={styles.link}>
                        <img className={styles.img} src="/images/services/3.jpg" alt="Bed-linen" />
                        <p className={styles.caption}>Постельное белье</p>
                    </Link>
                </li>
            </ul>
        </section>
    )
}

export default Services;