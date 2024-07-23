import React from 'react'
import styles from './themeToggle.module.css'
import Image from 'next/image'

const ThemeToggle = () => {
  return (
    <div className={styles.container}>
      <Image src="/moon.png" alt="moon" width={16} height={16}/>
      <div className={styles.ball}></div>
      <Image src="/sun.png" alt="sun" width={16} height={16}/>
    </div>
  )
}

export default ThemeToggle