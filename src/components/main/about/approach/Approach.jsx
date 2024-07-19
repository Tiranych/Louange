import React from 'react';
import Subtitle from '../../../global/Subtitle.jsx';
import * as styles from './Approach.module.css';

const Approach = () => {
    return(
        <section className={styles.section}>
            <Subtitle>Наш подход — это</Subtitle>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <img src="/images/about/diamond.svg" alt="Diamond" />
                    <p>Высокое качество</p>
                </li>
                <li className={styles.item}>
                    <img src="/images/about/person.svg" alt="Person" />
                    <p>Индивидуальный подход
                    и эксклюзивность</p>
                </li>
                <li className={styles.item}>
                    <img src="/images/about/goal.svg" alt="Goal" />
                    <p>Гарантия идеального результата</p>
                </li>
            </ul>
        </section>
    )
}

export default Approach;