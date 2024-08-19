import React from "react";
import { Link } from 'react-router-dom';

import * as styles from './Slide.module.css';

import { ROUTES } from "../../../../../global/routes";

import SLIDE from '../../../../../../../public/images/catalog/slide.jpg';

const Slide = () => {
    return (
        <div className={styles.slide}>
            <Link className={styles.link} to={ROUTES.PRODUCT}><img className={styles.img} src={SLIDE} alt="slide-photo" /><p className={styles.text}>ADO</p></Link>
        </div>
    )
}

export default Slide;