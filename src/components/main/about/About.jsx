import React from 'react';
import Container from '../../global/Container.jsx';
import Title from '../../global/Title.jsx';
import * as styles from './About.module.css';
import Approach from './approach/Approach.jsx';
import ContactUs from '../../global/ContactUs.jsx';
import Cooperation from './cooperation/Cooperation.jsx';
import Partners from '../../global/partners/Partners.jsx';
import Possibilities from './possibilities/Possibilities.jsx';

const About = () => {
    return(
        <section className={styles.section}>
            <Container>
                <div>
                    <Title>
                        О студии
                    </Title>
                    <div className={styles.content}>
                        <img className={styles.img} src="/images/about/1.jpg" alt="Sewing machine" />
                        <div className={styles.box}>
                            <p className={styles.text}>
                                LOUANGE — это собственная мастерская по пошиву, которая более 25 лет 
                                специализируется на авторском текстильном декорировании для ценителей индивидуальности. 
                            </p>
                            <p className={styles.text}>
                                Сегодня наша студия — это талантливая команда дизайнеров, художников, 
                                мастеров по обивке и реставрации мебели, мастеров пошива текстиля любой 
                                сложности. За время нашей работы мы получили огромное количество
                                <br></br> 
                                рекомендаций
                                <br></br>
                                и положительных отзывов от наших клиентов.
                            </p>
                            <p className={styles.textbg}>Сделаем реальностью - вашу мечту о красивом и уютном доме.</p>
                        </div>
                    </div>
                    <Approach />
                    <Possibilities />
                    <Cooperation />
                    <ContactUs />
                    <Partners />
                </div>
            </Container>
        </section>
    )
}

export default About;