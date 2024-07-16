import React from 'react';
import * as styles from './Title.module.css';

const Title = (props) => {
    return(
        <p className={styles.title}>{props.children}</p>
    )
}

export default Title;