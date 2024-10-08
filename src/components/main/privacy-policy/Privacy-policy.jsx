import React from 'react';
import { Link } from 'react-router-dom';

import Container from '../../global/Container';
import List from './list/List';

import * as styles from './Privacy-policy.module.css';

import {ROUTES} from '../../global/routes';

const Privacy = () => {
    return (
        <section className={styles.section}>
            <Container>
                <div>
                    <div className={styles.box}>
                        <p className={styles.title}>Политика конфиденциальности</p>
                        <button className={styles.btn}>Читать PDF-файл</button>
                    </div>
                    <p className={styles.text}>Настоящая Политика конфиденциальности персональной информации (далее — Политика)
                        действует в отношении всей информации, которую ООО «ЛУАНЖ», и/или его аффилированные лица, могут получить
                        о Пользователе во время использования им сайта <Link className={styles.link} to={ROUTES.HOME}>louange.ru</Link>.
                    </p>
                    <p className={styles.text}>Использование сайта <Link className={styles.link} to={ROUTES.HOME}>louange.ru</Link> означает безоговорочное согласие Пользователя с настоящей 
                        Политикой и указанными в ней условиями обработки его персональной информации; в случае несогласия с этими условиями 
                        Пользователь должен воздержаться от использования данного ресурса.
                    </p>
                    <List link={styles.link} />
                </div>
            </Container>
        </section>
    )
}

export default Privacy;