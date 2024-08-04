import React from 'react';
import * as styles from './Title.module.css';

const Title = (props) => {
    
    return(
        <p style={props.style} className={styles.title}>{props.children}</p>
    )
}

export default Title;