import React from 'react';

import Container from '../../global/Container';
import Title from '../../global/Title';
import Approach from './approach/Approach';
import ContactUs from '../../global/ContactUs';
import Cooperation from './cooperation/Cooperation';
import Partners from '../../global/partners/Partners';
import Possibilities from './possibilities/Possibilities';

import * as styles from './About.module.css';

import SewingMachine from "../../../../public/images/about/About_1.jpg";

const About = () => {
    return(
        <section className={styles.section}>
            <Container>
                <div>
                    <Title>
                        О студии
                    </Title>
                    <div className={styles.content}>
                        <img className={styles.img} src={SewingMachine} alt="Sewing machine" />
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