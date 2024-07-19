import React from 'react';
import * as styles from './Subtitle.module.css';

const Subtitle = (props) => {
    return(
        <p className={styles.title}>{props.children}</p>
    )
}

export default Subtitle;