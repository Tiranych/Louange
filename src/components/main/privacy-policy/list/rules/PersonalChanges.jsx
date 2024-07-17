import React from 'react';

const PersonalChanges = ({link, rules}) => {
    return (
        <ol>
            <li className={rules}>
                <p>
                    4.1. Пользователь может в любой момент изменить (обновить, дополнить) предоставленную им персональную информацию или её часть, 
                    а также параметры её конфиденциальности, отправив заявление в простой письменной форме в адрес администрации сайта через 
                    электронную почту: <a className={link} href='mailto:dizain_studio@inbox.ru'>dizain_studio@inbox.ru</a>
                </p>
            </li>
            <li className={rules}>
                <p>
                    4.2. Пользователь может в любой момент, отозвать свое согласие на обработку персональных данных, 
                    отправив заявление в простой письменной форме в адрес администрации сайта через электронную почту: 
                    <a className={link} href='mailto:dizain_studio@inbox.ru'>dizain_studio@inbox.ru</a>
                </p>
            </li>
        </ol>
    )
}

export default PersonalChanges;