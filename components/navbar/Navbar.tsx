import React from 'react'
import styles from './navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import AuthLinks from '../authLinks/AuthLinks'

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.social}>
                <Image src="/instagram.png" alt="instagram" width={24} height={24}/>
                <Image src="/twitter.png" alt="twitter" width={24} height={24}/>
                <Image src="/linkedin.png" alt="linkedin" width={24} height={24} />
                <Image src="/facebook.png" alt="facebook" width={24} height={24} />
            </div>
            <div className={styles.logo}>EOS 13 Studios</div>
            <div className={styles.links}>
                <Link href="/" className={styles.link}>Home</Link>
                <Link href="/" className={styles.link}> Contact</Link>
                <Link href="/" className={styles.link}>About</Link>
                <AuthLinks/>
            </div>
        </div>
    )
}

export default Navbar