import React from "react";
import { Link } from "react-router-dom";

import { ROUTES } from "../../../../global/routes";

import * as styles from './Box.module.css';

const Box = ({index, text}) => {
    return (
        <Link to={ROUTES.PROJECT} state={text} className={styles.box}>
            <img className={styles.img} src={`../public/images/projects/slide-${index}.jpg`} />
            <p className={styles.text}>{text}</p>
        </Link>
    )
}

export default Box;