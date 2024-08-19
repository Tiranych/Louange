import React from "react";

import Title from '../../../../global/Title';
import Container from '../../../../global/Container';
import Subtitle from '../../../../global/Subtitle';
import Button from '../../../../global/Button';
import ProductSwiper from './productSwiper/ProductSwiper';

import * as styles from './Product.module.css';

import Product_1 from '../../../../../../public/images/catalog/product/1.jpg';
import Product_2 from '../../../../../../public/images/catalog/product/2.jpg';
import Product_3 from '../../../../../../public/images/catalog/product/3.jpg';
import Product_4 from '../../../../../../public/images/catalog/product/4.jpg';

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
                        <li className={styles.item}><img className={styles.img} src={Product_1} alt="product-1" /></li>
                        <li className={styles.item}><img className={styles.img} src={Product_2} alt="product-2" /></li>
                        <li className={styles.item}><img className={styles.img} src={Product_3} alt="product-3" /></li>
                        <li className={styles.item}><img className={styles.img} src={Product_4} alt="product-4" /></li>
                    </ul>
                </div>
            </Container>
        </section>
    )
}

export default Product;