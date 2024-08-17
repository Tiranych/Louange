import React, {useState} from "react";
import Item from "./item/Item";
import * as styles from './Categories.module.css';

const Categories = () => {
    const [isListOpen, setIsListOpen] = useState(false);

    return (
        <div className={styles.content}>
            <p className={styles.title}>Категории</p>
            <button onClick={() => {isListOpen ? setIsListOpen(false) : setIsListOpen(true)}} 
            className={isListOpen ? styles.btn + ' ' + styles.btn_active : styles.btn}>Категории</button>
            <ul className={isListOpen ? styles.list + ' ' + styles.list_active : styles.list}>
                <Item text={"Ткани"} />
                <Item text={"Аксессуары для штор"} />
                <Item text={"Мебель"} />
                <Item text={"Постельное белье"} />
                <Item text={"Текстиль для ресторанов и гостинниц"} />
                <Item text={"Ковры и напольные покрытия"} />
                <Item text={"Карнизы"} />
            </ul>
        </div>
    )
}

export default Categories;