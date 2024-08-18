import React from 'react';
import Subtitle from '../../../global/Subtitle';
import * as styles from './Possibilities.module.css';

const Possibilities = () => {
    return (
        <section className={styles.section}>
            <div className={styles.inner}>
                <div>
                    <Subtitle>Наши возможности</Subtitle>
                    <p className={styles.text}>
                        Развиваясь в искусстве, моде и дизайне с 1999 года,
                        наша студия зарекомендовала себя как надежный партнер, который сотрудничает с ведущими мастерами,
                        производителями и поставщиками как в России, так и за рубежом.
                    </p>
                    <p className={styles.text}>
                        Нашими прямыми поставщиками ткани, мебели, предметов интерьера и светового
                        дизайна являются фабрики-производители всемирно известных брендов.
                    </p>
                    <p className={styles.text}>
                        Для экономии вашего времени с заботой о вас, наша компания предоставляет возможность комплексного обслуживания наших изделий:
                        корректировку, ремонт, освежение паром и химчистку.
                    </p>
                </div>
                <img className={styles.img} src="./images/about/2.jpg" alt="Hook" />
            </div>
        </section>
    )
}

export default Possibilities;