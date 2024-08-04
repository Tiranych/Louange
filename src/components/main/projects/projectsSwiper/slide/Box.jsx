import React from "react";
import { Link } from "react-router-dom";
import * as styles from './Box.module.css';

const Box = ({index, text}) => {
    return (
        <Link to={`project`} state={text} className={styles.box}>
            <img className={styles.img} src={`/images/projects/slide-${index}.jpg`} />
            <p className={styles.text}>{text}</p>
        </Link>
    )
}

export default Box;