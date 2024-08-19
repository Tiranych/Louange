import React from 'react';
import Subtitle from '../../../global/Subtitle';

import * as styles from './Approach.module.css';

import Diamond from '../../../../../public/images/about/diamond.svg';
import Person from '../../../../../public/images/about/person.svg';
import Goal from '../../../../../public/images/about/goal.svg';

const Approach = () => {
    return(
        <section className={styles.section}>
            <Subtitle>Наш подход — это</Subtitle>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <img src={Diamond} alt="Diamond" />
                    <p>Высокое качество</p>
                </li>
                <li className={styles.item}>
                    <img src={Person} alt="Person" />
                    <p>Индивидуальный подход
                    и эксклюзивность</p>
                </li>
                <li className={styles.item}>
                    <img src={Goal} alt="Goal" />
                    <p>Гарантия идеального результата</p>
                </li>
            </ul>
        </section>
    )
}

export default Approach;