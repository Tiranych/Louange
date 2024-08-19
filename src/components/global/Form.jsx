import React from 'react';
import { Link } from 'react-router-dom';

import * as styles from './Form.module.css';

import { ROUTES } from '../global/routes';

const Form = () => {
    return (
        <form className={styles.form}>
            <div className={styles.inner}>
                <p className={styles.title}>Остались вопросы? Напишите нам!</p>
                <input className={styles.input} required type="text" name='text' placeholder='Ваше имя' />
                <input className={styles.input} required type="email" name='email' placeholder='Ваш e-mail' />
                <textarea className={styles.input + ' ' + styles.textarea} name='textarea' required placeholder='Текст обращения'></textarea>
                <div className={styles.row}>
                    <input className={styles.checkbox} name='checkbox' required type="checkbox" />
                    <p className={styles.text}>Я согласен с <Link to={ROUTES.PRIVACY_POLICY} className={styles.link}>политикой обработки персональных данных</Link> и даю
                        <Link to={ROUTES.PRIVACY_POLICY} className={styles.link}> согласие</Link> на обработку своих персональных данных
                    </p>
                </div>
                <button className={styles.btn} type='submit'>Отправить</button>
            </div>
        </form>
    )
}

export default Form;