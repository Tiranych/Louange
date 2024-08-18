import React from "react";
import { Link } from 'react-router-dom';
import * as styles from './Slide.module.css';

const Slide = () => {
    return (
        <div className={styles.slide}>
            <Link className={styles.link} to={`product`}><img className={styles.img} src="./images/catalog/slide.jpg" alt="slide-photo" /><p className={styles.text}>ADO</p></Link>
        </div>
    )
}

export default Slide;