import React from "react";
import * as styles from './Product.module.css';
import Title from '../../../../global/Title.jsx';
import Container from '../../../../global/Container.jsx';
import Subtitle from '../../../../global/Subtitle.jsx';
import Button from '../../../../global/Button.jsx';
import ProductSwiper from './productSwiper/ProductSwiper.jsx';

const Product = () => {
    return (
        <section className={styles.section}>
            <Container>
                <Title>Ткани</Title>
                <div className={styles.box}>
                    <Subtitle>JAB Anstoetz</Subtitle>
                    <Button />
                </div>
                <div className={styles.inner}>
                    <div className={styles.content}>
                        <ProductSwiper />
                        <div className={styles.textbox}>
                            <p className={styles.text}>
                                Фирма JAB ANSTOETZ - одна из самых крупных торговых компаний в мире в области текстиля.
                                В любой точке мира удивительные ткани и стильные интерьеры компании JAB ANSTOETZ всегда находятся в центре внимания.
                            </p>
                            <p className={styles.text}>
                                Компания всегда оправдывает свой девиз: "Компания JAB ANSTOETZ реализует не просто ткани, а чувство восприятия жизни."
                                Ведь материалы «Jab» настолько разнообразны, что для любого человека с любым характером и вкусом бренд «Jab» создал специальную коллекцию —
                                от шикарного бархата до тончайшего шелка, от вышивки ручной работы до тесьмы в тон гардинам.
                            </p>
                        </div>
                    </div>
                    <ul className={styles.list}>
                        <li className={styles.item}><img className={styles.img} src="/images/catalog/product/1.jpg" alt="product-1" /></li>
                        <li className={styles.item}><img className={styles.img} src="/images/catalog/product/2.jpg" alt="product-2" /></li>
                        <li className={styles.item}><img className={styles.img} src="/images/catalog/product/3.jpg" alt="product-3" /></li>
                        <li className={styles.item}><img className={styles.img} src="/images/catalog/product/4.jpg" alt="product-4" /></li>
                    </ul>
                </div>
            </Container>
        </section>
    )
}

export default Product;