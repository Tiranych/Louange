import React from 'react';
import { Link } from 'react-router-dom';

import Subtitle from './Subtitle';

import * as styles from './ContactUs.module.css';

import {ROUTES} from '../global/routes';

import CORNICE from '../../../public/images/about/About_3.jpg';

const ContactUs = () => {
    return (
        <section className={styles.section}>
            <div className={styles.titles}>
                <Subtitle>Свяжитесь с нами</Subtitle>
                <p className={styles.subtitle}>Заполните форму, чтобы связаться с нами по вопросам сотрудничества или уточнить интересующие вас моменты</p>
            </div>
            <div className={styles.content}>
                <div className={styles.box}>
                    <p className={styles.callToAct}>Сделайте ваш дизайн уникальным вместе с Louange</p>
                    <form className={styles.form}>
                        <input className={styles.input} type="text" name='text' required placeholder='Ваше имя' />
                        <input className={styles.input} type="email" name='email' autoComplete='off' required placeholder='Ваш e-mail' />
                        <textarea className={styles.input + ' ' + styles.textarea} name='textarea' required placeholder='Опишите ваш проект'></textarea>
                        <div className={styles.row}>
                            <input className={styles.checkbox} name='checkbox' required type="checkbox" />
                            <p className={styles.text}>Я согласен с <Link to={ROUTES.PRIVACY_POLICY} className={styles.link}>политикой обработки персональных данных</Link> и даю
                                <Link to={ROUTES.PRIVACY_POLICY} className={styles.link}> согласие</Link> на обработку своих персональных данных
                            </p>
                        </div>
                        <button className={styles.btn} type='submit'>Отправить заявку</button>
                    </form>
                </div>
                <img className={styles.img} src={CORNICE} alt="Cornice" />
            </div>
        </section>
    )
}

export default ContactUs;