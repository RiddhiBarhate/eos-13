import React from 'react'
import styles from './list.module.css'
import Information from '../information/Information'

const List = () => {
    return (
        <div className={styles.container}>List
            <Information/>
        </div>
    )
}

export default List