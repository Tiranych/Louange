import React from 'react';

import Container from '../../../global/Container';
import Title from '../../../global/Title';
import Subtitle from '../../../global/Subtitle';
import Steps from './steps/Steps';
import ContactUs from './contactUs/ContactUs';

import * as styles from './WindowDecor.module.css';

const WindowDecor = () => {
    return (
        <section className={styles.section}>
            <Container>
                <Title>Услуги</Title>
                <div className={styles.box}>
                <Subtitle>Постельное белье</Subtitle>
                    <button className={styles.btn}>Оставить заявку</button>
                </div>
                <Subtitle>Что мы предлагаем</Subtitle>
                <ul className={styles.row}>
                    <li className={styles.item}>
                        <img src="../public/images/services/bedding.svg" alt="Bedding" />
                        <p>Постельные принадлежности для дома и гостиничного бизнеса</p>
                    </li>
                    <li className={styles.item}>
                        <img src="../public/images/services/person.svg" alt="Person" />
                        <p>Персонализация изделий через вышивки и логотипы</p>
                    </li>
                </ul>
                <ul className={styles.list}>
                    <li className={styles.img_item}>
                        <img className={styles.img} src="../public/images/services/4.jpg" alt="Window-decor" />
                    </li>
                    <li className={styles.img_item}>
                        <img className={styles.img} src="../public/images/services/5.jpg" alt="Upholstery" />
                    </li>
                    <li className={styles.img_item}>
                        <img className={styles.img} src="../public/images/services/6.jpg" alt="Bed-linen" />
                    </li>
                </ul>
                <Steps />
                <ContactUs />
            </Container>
        </section>
    )
}

export default WindowDecor;