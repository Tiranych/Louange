import React from "react";
import * as styles from './List.module.css';
import Actions from './rules/Actions.jsx';
import Conditions from './rules/Conditions.jsx';
import PersonalChanges from './rules/PersonalChanges.jsx';
import PersonalInfoRules from './rules/PersonalInfoRules.jsx';
import PolicyChanges from './rules/PolicyChanges.jsx';
import Purposes from "./rules/Purposes.jsx";

const List = ({link}) => {
    return (
        <ol className={styles.list}>
            <li className={styles.item}>
                <p className={styles.title}>1. Персональная информация пользователей, которую получает и обрабатывает сайт louange.ru</p>
                <PersonalInfoRules link={link} rules={styles.rules}/>
                <p className={styles.text}>Нацелиться на формирование атмосферы роскоши и изыска, которая станет воплощением элегантности и безупречного стиля.
                    Каждый элемент текстильного декора должен идеально вписываться в общий амбиент,
                    дополняя его и придавая пространству неповторимый шарм и изысканность.
                </p>
            </li>
            <li className={styles.item}>
                <p className={styles.title}>2. Цели сбора и обработки персональной информации пользователей</p>
                <Purposes link={link} rules={styles.rules} />
            </li>
            <li className={styles.item}>
                <p className={styles.title}>3. Условия обработки персональной информации пользователя и её передачи третьим лицам</p>
                <Conditions link={link} rules={styles.rules} />
            </li>
            <li className={styles.item}>
                <p className={styles.title}>4. Изменение пользователем персональной информации</p>
                <PersonalChanges link={link} rules={styles.rules} />
            </li>
            <li className={styles.item}>
                <p className={styles.title}>5. Меры, применяемые для защиты персональной информации пользователей</p>
                <Actions rules={styles.rules} />
            </li>
            <li className={styles.item}>
                <p className={styles.title}>6. Изменение Политики конфиденциальности. Применимое законодательство</p>
                <PolicyChanges link={link} rules={styles.rules} />
            </li>
        </ol>
    )
}

export default List;