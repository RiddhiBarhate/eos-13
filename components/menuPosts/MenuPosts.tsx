import React from 'react'
import styles  from './menuPosts.module.css'
import Link from 'next/link'
import Image from 'next/image'

const MenuPosts = ({ withImage }) => {
  return (
      <div className={styles.items}>
          <Link href="/" className={styles.item}>
              {withImage && (
                <div className={styles.imageContainer}>
                  <Image src="/wpic.png" alt="" fill className={styles.image} />
              </div>
              )}
                <div className={styles.textContainer}>
                  <span className={`${styles.category} ${styles.action}`}>Action</span>
                  <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                  <div className={styles.detail}>
                      <span className={styles.username}>Mardav </span>
                      <span className={styles.date}> - 01.09.2024</span>
                  </div>
              </div>
          </Link>

          <Link href="/" className={styles.item}>
              {withImage && (
                <div className={styles.imageContainer}>
                  <Image src="/wpic.png" alt="" fill className={styles.image} />
              </div>
              )}
              <div className={styles.textContainer}>
                  <span className={`${styles.category} ${styles.adventure}`}>Action</span>
                  <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                  <div className={styles.detail}>
                      <span className={styles.username}>Mardav </span>
                      <span className={styles.date}> - 01.09.2024</span>
                  </div>
              </div>
          </Link>

          <Link href="/" className={styles.item}>
              {withImage && (
                <div className={styles.imageContainer}>
                  <Image src="/wpic.png" alt="" fill className={styles.image} />
              </div>
              )}
              <div className={styles.textContainer}>
                  <span className={`${styles.category} ${styles.simulation}`}>Action</span>
                  <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                  <div className={styles.detail}>
                      <span className={styles.username}>Mardav </span>
                      <span className={styles.date}> - 01.09.2024</span>
                  </div>
              </div>
          </Link>

          <Link href="/" className={styles.item}>
              {withImage && (
                <div className={styles.imageContainer}>
                  <Image src="/wpic.png" alt="" fill className={styles.image} />
              </div>
              )}
              <div className={styles.textContainer}>
                  <span className={`${styles.category} ${styles.strategy}`}>Action</span>
                  <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                  <div className={styles.detail}>
                      <span className={styles.username}>Mardav </span>
                      <span className={styles.date}> - 01.09.2024</span>
                  </div>
              </div>
          </Link>
      </div>
  )
}

export default MenuPosts