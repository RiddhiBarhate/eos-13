import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <div className={styles.logo}>
                    <Image src="/wpic.png" alt="eos 13" width={50} height={50}/>
                    <h1 className={styles.logoText}>Eos 13 Studios</h1>
                </div>
                <p className={styles.desc}>
                    Lorem, ipsum dolor sit amet consectetur elit. Enim necessitatibus similique aspernatur obcaecati veritatis. Aperiam cum porro sequi, totam minima consequuntur, aspernatur deleniti vero repellendus dorales.
                </p>
                <div className={styles.icons}>
                    <Image src="/facebook.png" alt="" width={18} height={18}/>
                    <Image src="/instagram.png" alt="" width={18} height={18} />
                    <Image src="/linkedin.png" alt="" width={18} height={18} />
                    <Image src="/twitter.png" alt="" width={18} height={18} />
                </div>
            </div>
            <div className={styles.links}>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Links</span>
                    <Link href="/">Homepage</Link>
                    <Link href="/">Blog</Link>
                    <Link href="/">About</Link>
                    <Link href="/">Contact</Link>
                </div>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Genres</span>
                    <Link href="/">Action</Link>
                    <Link href="/">Adventure</Link>
                    <Link href="/">Racing</Link>
                    <Link href="/">Puzzle</Link>
                </div>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Social</span>
                    <Link href="/">Facebook</Link>
                    <Link href="/">Instagram</Link>
                    <Link href="/">Linkedin</Link>
                    <Link href="/">Twitter</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer