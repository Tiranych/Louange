import React from 'react';
import Subtitle from '../Subtitle.jsx';
import * as styles from './Partners.module.css';
import MySwiper from './partnersSwiper/partnersSwiper.jsx';

const Partners = () => {
    return (
        <section className={styles.section}>
            <div className={styles.subtitle}><Subtitle>Нам доверяют</Subtitle></div>
            <MySwiper />
        </section>
    )
}

export default Partners;