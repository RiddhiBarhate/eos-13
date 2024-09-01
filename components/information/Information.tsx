import React from 'react'
import styles from './information.module.css'

const Information = () => {
    return (
        <div className={styles.container}>
            <button className={styles.button}>Previous</button>
            <button className={styles.button}>Next</button>
        </div>
    )
}

export default Information