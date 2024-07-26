import React from "react";
import * as styles from './Item.module.css';


const Item = ({text}) => {
    
    const openAccrodeon = (event) => {
        event.stopPropagation();
        event.target.classList.toggle(styles.btn_active)
    }

    return (
        <li className={styles.item}>
            <button className={styles.btn} href='#' onClick={(event) => { openAccrodeon(event) }}>
                <p className={styles.text}>{text}</p>
            </button>
            <div className={styles.accordeon}>
                <p>{text}</p>
                <p>{text}</p>
                <p>{text}</p>
                <p>{text}</p>
                <p>{text}</p>
            </div>
        </li>
    )
}

export default Item;