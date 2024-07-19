import React from 'react';
import Subtitle from '../../../global/Subtitle.jsx';
import * as styles from './Cooperation.module.css';

const Cooperation = () => {
    return(
        <section className={styles.section}>
            <Subtitle>Сотрудничество</Subtitle>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <img className={styles.img} src="/images/about/users.svg" alt="Users" />
                    <p className={styles.subtitle}>Клиентам</p>
                    <p className={styles.text}>Поэтапная работа с проектом: выезд дизайнера, эскизы, пошив, навеска, обслуживание, химчистка</p>
                </li>
                <li className={styles.item}>
                    <img className={styles.img} src="/images/about/delivery-truck.svg" alt="Delivery-truck" />
                    <p className={styles.subtitle}>Поставщикам</p>
                    <p className={styles.text}>С нами уже работают самые крупные мировые поставщики. Присоединяйтесь! </p>
                </li>
                <li className={styles.item}>
                    <img className={styles.img} src="/images/about/clipboard.svg" alt="Clipboard" />
                    <p className={styles.text + ' ' + styles.subtitle}>Специалистам</p>
                    <p className={styles.text}>LOUANGE предлагает самые выгодные условия работы для дизайнеров и архитекторов</p>
                </li>
            </ul>
        </section>
    )
}

export default Cooperation;