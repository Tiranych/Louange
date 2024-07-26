import React from 'react';
import * as styles from './Catalog.module.css';
import Title from '../../global/Title.jsx';
import FirstList from './FirstList.jsx';
import SecondList from './SecondList.jsx';
import Button from '../../global/Button.jsx';

const Catalog = () => {
    return (
        <section className={styles.section}>
            <Title>Каталог</Title>
            <div className={styles.box}>
                <p>
                    Мы работаем с прямыми поставками текстиля, мебели и предметов интерьера от ведущих мировых производителей,
                    с которыми вы можете ознакомиться в нашем каталоге. Если вас заинтересовал конкретный бренд, вы можете указать
                    эту информацию в заявке
                </p>
                <Button />
            </div>
            <div className={styles.content}>
                <FirstList />
                <SecondList />
            </div>
        </section>
    )
}

export default Catalog;