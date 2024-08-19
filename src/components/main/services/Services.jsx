import React from 'react';
import { Link } from 'react-router-dom';

import Title from '../../global/Title';
import Button from '../../global/Button';
import Container from '../../global/Container';

import { ROUTES } from '../../global/routes';

import * as styles from './Services.module.css';

const Services = () => {
    return(
        <section className={styles.section}>
            <Container>
                <Title>Услуги</Title>
                <div className={styles.box}>
                    <p>
                        Мы предлагаем полный спектр услуг по текстильному оформлению интерьеров, 
                        как для частных, так и для корпоративных клиентов, услугу «Выезд дизайнера». 
                        Осуществляем замеры, разработку эскизов, пошив, монтаж и навеску готовых изделий.
                    </p>
                    <Button />
                </div>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to={ROUTES.WINDOW_DECOR} className={styles.link}>
                            <img className={styles.img} src="../public/images/services/1.jpg" alt="Window-decor" />
                            <p className={styles.caption}>Текстильное декорирование окон</p>
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link to={ROUTES.UPHOLSTERY} className={styles.link}>
                            <img className={styles.img} src="../public/images/services/2.jpg" alt="Upholstery" />
                            <p className={styles.caption}>Обивка мебели</p>
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link to={ROUTES.BED_LINEN} className={styles.link}>
                            <img className={styles.img} src="../public/images/services/3.jpg" alt="Bed-linen" />
                            <p className={styles.caption}>Постельное белье</p>
                        </Link>
                    </li>
                </ul>
            </Container>
        </section>
    )
}

export default Services;