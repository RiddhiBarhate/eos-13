import React from 'react'
import styles from './list.module.css'
import Information from '../information/Information'
import Card from '../card/Card'

const List = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Recent Posts</h1>
            <div className={styles.posts}>
                <Card/>
                <Card />
                <Card />
                <Card />
            </div>
            <Information/>
        </div>
    )
}

export default List