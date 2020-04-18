import React from 'react';
import styles from './Button.module.css';



function Button(props) {
    const {text} = props;
    return (
        <div>
            <button className={styles.default}> {text} </button>
        </div>
    );
}

export default Button;