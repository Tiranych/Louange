import React from "react";
import * as styles from './CatalogItem.module.css';
import Container from '../../../global/Container';
import Title from '../../../global/Title'
import Button from '../../../global/Button';
import Categories from './categories/Categories';
import MySwiper from './catalogSwiper/catalogSwiper';

const CatalogItem = () => {
    return (
        <section className={styles.section}>
            <Container>
                <Title>Ткани</Title>
                <div className={styles.box}>
                    <p>
                        Мы работаем с прямыми поставками текстиля, мебели и предметов интерьера от ведущих мировых производителей,
                        с которыми вы можете ознакомиться в нашем каталоге. Если вас заинтересовал конкретный бренд, вы можете указать
                        эту информацию в заявке
                    </p>
                    <Button />
                </div>
                <div className={styles.content}>
                    <Categories />
                    <MySwiper />
                </div>
            </Container>
        </section>
    )
}

export default CatalogItem;