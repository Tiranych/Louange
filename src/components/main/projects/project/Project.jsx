import React from 'react';
import { useLocation } from 'react-router-dom';
import Container from '../../../global/Container';
import Title from '../../../global/Title';
import ProjectSlider from './projectSlider/projectSlider';
import * as styles from './Project.module.css';

const Project = () => {
    const location = useLocation();
    
    const width = window.innerWidth;

    const inlineStyles = {
        title: {
            paddingBottom: "32px"
        }
    }

    if (width < 755) {
        inlineStyles.title.paddingBottom = "24px";
    }

    return (
        <section className={styles.section}>
            <Container>
                <Title style={inlineStyles.title}>{location.state}</Title>
                <div className={styles.address}><span>Локация:</span> Россия, Рублево-Успенское шоссе</div>
                <div className={styles.content}>
                    <div>
                        <p className={styles.subtitle}>Задачи проекта</p>
                        <p className={styles.text}>
                            Основные задачи проекта заключались в разработке текстильных декораций,
                            которые будут не только утонченными и изысканными, но и гармонировать со стилем и цветовой палитрой дворцовых интерьеров.
                        </p>
                        <p className={styles.text}>
                            Нацелиться на формирование атмосферы роскоши и изыска, которая станет воплощением элегантности и безупречного стиля.
                            Каждый элемент текстильного декора должен идеально вписываться в общий амбиент, дополняя его и придавая пространству неповторимый шарм и изысканность.
                        </p>
                    </div>
                    <img className={styles.img} src="/images/projects/project/1.jpg" alt="" />
                </div>
                <div className={styles.box}>
                    <p className={styles.subtitle}>Решение</p>
                    <p className={styles.text}>
                        Уникальные ткани, уникальная аутентичная мебель, итальянский мрамор, лепнина и роспись стен —
                        декораторам этого загородного особняка удалось не только передать атмосферу Версаля, но и поспорить с его королевской роскошью.
                    </p>
                </div>
            </Container>
            <ProjectSlider />
        </section>
    )
}

export default Project;