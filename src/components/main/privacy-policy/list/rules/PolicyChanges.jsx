import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../../global/routes';

const PolicyChanges = ({ link, rules }) => {
    return (
        <ol>
            <li className={rules}>
                <p>
                    6.1. Сайт имеет право вносить изменения в настоящую Политику конфиденциальности.
                    При внесении изменений в актуальной редакции указывается дата последнего обновления.
                    Новая редакция Политики вступает в силу с момента ее размещения, если иное не предусмотрено новой редакцией Политики.
                    Действующая редакция всегда находится на странице по адресу: 
                    <Link className={link} to={ROUTES.PRIVACY_POLICY}>https://louange.ru/privacy-policy</Link>
                </p>
            </li>
            <li className={rules}>
                <p>
                    6.2. К настоящей Политике и отношениям между пользователем и Сайтом,
                    возникающим в связи с применением Политики конфиденциальности, подлежит применению право Российской Федерации.
                </p>
            </li>
        </ol>
    )
}

export default PolicyChanges;