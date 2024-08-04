import React from 'react';
import Container from '../../global/Container.jsx';
import Form from '../../global/Form.jsx';
import Subtitle from '../../global/Subtitle.jsx';
import Title from '../../global/Title.jsx';
import * as styles from './Contacts.module.css';
import MyMap from './map/Map.jsx';

const Contacts = () => {
    return (
        <section className={styles.section}>
            <Container>
                <div>
                    <Title>
                        Контакты
                    </Title>
                    <ul className={styles.info}>
                        <li className={styles.item}>
                            <Subtitle>Телефон</Subtitle>
                            <p className={styles.text}>Контактный номер телефона:</p>
                            <p className={styles.contact}>+7 499 110-80-22</p>
                        </li>
                        <li className={styles.item}>
                            <Subtitle>E-mail</Subtitle>
                            <p className={styles.text}>Свяжитесь с нами по почте:</p>
                            <p className={styles.contact}>dizain_studio@inbox.ru</p>
                        </li>
                        <li className={styles.item}>
                            <Subtitle>Адрес</Subtitle>
                            <p className={styles.text}>Наш адрес:</p>
                            <p className={styles.contact}>Россия, 125009, Москва
                            Большой Гнездниковский переулок дом. 3, офис 1/1</p>
                        </li>
                        <li className={styles.item + ' ' + styles.item_last}>
                            <Subtitle>По вопросам сотрудничества</Subtitle>
                            <div className={styles.content}>
                                <p className={styles.text}>Свяжитесь с нами по почте:</p>
                                <p className={styles.contact}>hello@louange.ru</p>
                            </div>
                            <div className={styles.content}>
                                <p className={styles.text}>Или по номеру телефона:</p>
                                <p className={styles.contact}>+7 499 110-80-22</p>
                            </div>
                        </li>
                    </ul>
                    <div className={styles.box}>
                        <Form />
                        <MyMap />
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Contacts;