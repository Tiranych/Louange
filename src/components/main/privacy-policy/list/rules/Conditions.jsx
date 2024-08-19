import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../../global/routes';

const Conditions = ({ link, rules }) => {
    return (
        <ol>
            <li className={rules}>
                <p>3.1. Сайт <Link className={link} to={ROUTES.HOME}>louange.ru</Link> хранит персональную информацию Пользователей в соответствии с внутренним регламентом 
                    ООО «ЛУАНЖ» и законодательством РФ.
                </p>
            </li>
            <li className={rules}>
                <p>3.2. В отношении персональной информации Пользователя сохраняется ее конфиденциальность, 
                кроме случаев добровольного предоставления пользователем информации о себе для общего доступа неограниченному кругу лиц.
                </p>
            </li>
            <li className={rules}>
                <p>3.3. Сайт <Link className={link} to={ROUTES.HOME}>louange.ru</Link> вправе передать персональную информацию пользователя третьим лицам в следующих случаях:</p>
            </li>
            <li className={rules}>
                <ol>
                    <li className={rules}>
                        <p>3.3.1. Пользователь выразил свое согласие на такие действия, путем согласия, выразившегося 
                        в предоставлении таких данных;
                        </p>
                    </li>
                    <li className={rules}>
                        <p>3.3.2. Передача необходима в рамках использования Пользователем сайта <Link className={link} to={ROUTES.HOME}>louange.ru</Link>, 
                        либо для оказания услуги Пользователю;
                        </p>
                    </li>
                    <li className={rules}>
                        <p>3.3.3. Передача предусмотрена российским законодательством в рамках установленной 
                            законодательством процедуры;
                        </p>
                    </li>
                    <li>
                        <p>3.3.4. В целях обеспечения возможности защиты прав и законных интересов сайта 
                        amelistudio.com или третьих лиц в случаях, когда Пользователь нарушает Пользовательское соглашение сайта <Link className={link} to={`/`}>louange.ru</Link>.
                        </p>
                    </li>
                </ol>
            </li>
            <li className={rules}>
                <p>3.4. При обработке персональных данных пользователей сайт <Link className={link} to={ROUTES.HOME}>louange.ru</Link> руководствуется 
                    Федеральным законом РФ «О персональных данных».
                </p>
            </li>
        </ol>
    )
}

export default Conditions;