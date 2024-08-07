import React from "react";
import * as styles from './Slogan.module.css';

const Slogan = () => {
    return (
        <div className={styles.slogan}>
            <p className={styles.title}>Louange</p>
            <p className={styles.text}>Мечта об уютном пространстве — это реальность</p>
            <button className={styles.btn}>Оставить заявку</button>
        </div>
    )
}

export default Slogan;