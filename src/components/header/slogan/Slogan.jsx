import React, { useState } from "react";
import * as styles from './Slogan.module.css';
import Modal from "../../global/Modal";

const Slogan = () => {

    const [modalActive, setModalActive] = useState(false);

    return (
        <div className={styles.slogan}>
            <p className={styles.title}>Louange</p>
            <p className={styles.text}>Мечта об уютном пространстве — это реальность</p>
            <button onClick={() => { setModalActive(true) }} className={styles.btn}>Оставить заявку</button>
            <Modal active={modalActive} setActive={setModalActive} />
        </div>
    )
}

export default Slogan;