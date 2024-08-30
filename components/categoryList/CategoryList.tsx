import React from 'react'
import styles from './categoryList.module.css'
import Link from 'next/link'
import Image from 'next/image'

const CategoryList = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Popular Categories</h1>
            <div className={styles.categories}>
                <Link href="/blog?cat=style" 
                    className={`${styles.category} ${styles.style}`}>
                    <Image 
                        src="/wpic.png" 
                        alt="" 
                        width={32} 
                        height={32} 
                        className={styles.image}
                    />
                    style
                </Link>

                <Link href={`/blog`} className={`${styles.category} ${styles.adventure}`}>
                    <Image
                        src="/wpic.png"
                        alt="" 
                        width={32}
                        height={32}
                        className={styles.image}
                    />
                    adventure
                </Link>

                <Link href={`/blog`} className={`${styles.category} ${styles.action}`}>
                    <Image
                        src="/wpic.png"
                        alt="" 
                        width={32}
                        height={32}
                        className={styles.image}
                    />
                    action
                </Link>

                <Link href={`/blog`} className={`${styles.category} ${styles.stimulation}`}>
                    <Image
                        src="/wpic.png"
                        alt="" 
                        width={32}
                        height={32}
                        className={styles.image}
                    />
                    stimulation
                </Link>

                <Link href={`/blog`} className={`${styles.category} ${styles.puzzle}`}>
                    <Image
                        src="/wpic.png"
                        alt="" 
                        width={32}
                        height={32}
                        className={styles.image}
                    />
                    puzzle
                </Link>
                
                <Link href={`/blog`} className={`${styles.category} ${styles.strategy}`}>
                    <Image
                        src="/wpic.png"
                        alt="" 
                        width={32}
                        height={32}
                        className={styles.image}
                    />
                    strategy
                </Link>
            </div>
        </div>
    )
}

export default CategoryList