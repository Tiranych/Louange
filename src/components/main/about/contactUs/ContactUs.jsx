import React from 'react';
import { Link } from 'react-router-dom';
import Subtitle from '../../../global/Subtitle.jsx';
import * as styles from './ContactUs.module.css';

const ContactUs = () => {
    return (
        <section className={styles.section}>
            <Subtitle>Свяжитесь с нами</Subtitle>
            <p className={styles.subtitle}>Заполните форму, чтобы связаться с нами по вопросам сотрудничества или уточнить интересующие вас моменты</p>
            <div className={styles.content}>
                <form className={styles.form}>
                    <input className={styles.input} type="text" placeholder='Ваше имя' />
                    <input className={styles.input} type="text" placeholder='Ваш e-mail' />
                    <textarea className={styles.input + ' ' + styles.textarea} placeholder='Опишите ваш проект'></textarea>
                    <div className={styles.row}>
                        <input className={styles.checkbox} type="checkbox" />
                        <p className={styles.text}>Я согласен с <Link to={`/privacy-policy`} className={styles.link}>политикой обработки персональных данных</Link> и даю
                            <Link to={`/privacy-policy`} className={styles.link}> согласие</Link> на обработку своих персональных данных
                        </p>
                    </div>
                    <button className={styles.btn} type='submit'>Отправить заявку</button>
                </form>
                <img src="/images/about/3.jpg" alt="Cornice" />
            </div>
        </section>
    )
}

export default ContactUs;