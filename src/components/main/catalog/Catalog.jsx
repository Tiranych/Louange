import React from 'react';
import * as styles from './Catalog.module.css';
import Container from '../../global/Container';
import Title from '../../global/Title';
import FirstList from './FirstList';
import SecondList from './SecondList';
import Button from '../../global/Button';

const Catalog = () => {
    return (
        <section className={styles.section}>
            <Container>
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
            </Container>
        </section>
    )
}

export default Catalog;