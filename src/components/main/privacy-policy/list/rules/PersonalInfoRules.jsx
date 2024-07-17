import React from 'react';
import { Link } from 'react-router-dom';

const PersonalInfoRules = ({link, rules}) => {
    return (
        <ol>
            <li className={rules}><p>1.1. В рамках настоящей Политики под «персональной информацией пользователя» понимаются:</p></li>
            <li className={rules}>
                <ol>
                    <li className={rules}>
                        <p>1.1.1. Персональная информация, которую Пользователь предоставляет о себе самостоятельно при
                            заполнении формы обратной связи: Имя, телефон, электронная почта.
                        </p>
                    </li>
                    <li>
                        <p>1.1.2 Данные, которые автоматически передаются сайтом <Link className={link} to={`/`}>louange.ru</Link> в процессе его использования
                            с помощью установленного на устройстве пользователя программного обеспечения, в том числе IP-адрес, информация из cookie,
                            информация о браузере пользователя (или иной программе, с помощью которой осуществляется доступ к сайту), время доступа,
                            адрес запрашиваемой страницы.
                        </p>
                    </li>
                </ol>
            </li>
            <li className={rules}>
                <p>1.2. Настоящая Политика применима только к сайту <Link className={link} to={`/`}>louange.ru</Link> и не контролирует, и не несет ответственность
                    за сайты третьих лиц, на которые Пользователь может перейти по ссылкам, доступным на сайте <Link className={link} to={`/`}>louange.ru</Link>. На таких сайтах у пользователя
                    может собираться или запрашиваться иная персональная информация, а также могут совершаться иные действия.
                </p>
            </li>
            <li className={rules}>
                <p>1.3. Сайт в общем случае не проверяет достоверность персональной информации, предоставляемой пользователями,
                    и не осуществляет контроль за их дееспособностью. Однако сайт <Link className={link} to={`/`}>louange.ru</Link> исходит из того, что Пользователь предоставляет достоверную
                    и достаточную персональную информацию по вопросам, предлагаемым в формах настоящего ресурса, и поддерживает эту информацию в
                    актуальном состоянии.
                </p>
            </li>
        </ol>
    )
}

export default PersonalInfoRules;