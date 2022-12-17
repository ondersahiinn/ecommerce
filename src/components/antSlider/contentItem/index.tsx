import React from 'react'
import styles from './style.module.scss'
import Link from 'next/link'
import Image from 'next/image'
const ContentItem: React.FC = () => {
    return (
        <div className={styles.sliderItem}>
            <div className={styles.sliderMain}>
                <div className={styles.leftSide}>
                    <div className={styles.contentBox}>
                        <span className={`${styles.text}`}>Mouse'larda</span>
                        <span className={`${styles.text} ${styles.bold}`}>29 TL'den başlayan fiyatlar</span>
                    </div>
                    <Link href={"#"} >
                        <a className={styles.button}>
                            <span className={styles.buttonText}>Acele et kaçırma</span>
                        </a>
                    </Link>
                </div>
                <div className={styles.rightSide}>
                    <Link href={"#"}>
                        <a className={styles.imageContainer}>
                            <Image src={"/images/slider-resim.jpeg"} alt="Resim" layout='fill' objectFit='cover' />

                        </a>
                    </Link>



                </div>
            </div>

        </div >
    )
}

export default ContentItem