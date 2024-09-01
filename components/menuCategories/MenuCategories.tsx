import React from 'react'
import styles from "./menuCategories.module.css"
import Link from 'next/link'

const MenuCategories = () => {
  return (
      <div className={styles.categoryList}>
          <Link href="/blog?cat=style" className={`${styles.categoryItem} ${styles.action}`}>
              Action
          </Link>
          <Link href="/blog" className={`${styles.categoryItem} ${styles.adventure}`}>
              Adventure
          </Link>
          <Link href="/blog" className={`${styles.categoryItem} ${styles.simulation}`}>
              Simulation
          </Link>
          <Link href="/blog" className={`${styles.categoryItem} ${styles.puzzle}`}>
              Puzzle
          </Link>
          <Link href="/blog" className={`${styles.categoryItem} ${styles.strategy}`}>
              Strategy
          </Link>
          <Link href="/blog" className={`${styles.categoryItem} ${styles.horror}`}>
              Horror
          </Link>
          <Link href="/blog" className={`${styles.categoryItem} ${styles.racing}`}>
              Racing
          </Link>
      </div>
  )
}

export default MenuCategories