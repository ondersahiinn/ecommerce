
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';


import styles from './styles.module.scss'

interface CarouselProps {
    children: React.ReactNode[] | React.ReactNode;
    classNames?: string;
    show: number;
    items: any
}


const Carousel: React.FC<CarouselProps> = (props) => {
    const { children, classNames = "", show, items } = props;

    const contentRef = useRef<HTMLDivElement>(null);

    const [currentSlide, setCurrentSlide] = useState(0);

    const [buttonsIsDisabled, setButtonsIsDisabled] = useState(false);
    // useEffect(() => {
    //     setLength(Array.isArray(children) ? children.length : 1);
    // }, [children])

    const nextSlide = () => {
        if (currentSlide < items.length - show) {
            setCurrentSlide(prevState => prevState + 1);
        }
    }

    const prevSlide = () => {
        if (currentSlide > 0) {
            setCurrentSlide(prevState => prevState - 1);
        }
    }

    useEffect(() => {
        if (contentRef.current) {
            contentRef.current.style.transform = `translateX(-${currentSlide * (100 / show)}%)`;

            contentRef.current?.childNodes.forEach((child: any) => {
                child.style.width = `calc(100% / ${show})`;

            })
        }

    }, [show, currentSlide])

    // useEffect(() => {

    //     let slider = setInterval(() => {
    //         setButtonsIsDisabled(true);

    //         if (currentSlide < items.length - show) {
    //             setCurrentSlide(prevState => prevState + 1);
    //         } else {
    //             setCurrentSlide(0);
    //         }
    //         setTimeout(() => {
    //             setButtonsIsDisabled(false);
    //         }, 600)
    //     }, 10000);
    //     return () => clearInterval(slider);
    // }, [currentSlide, items.length, show]);
    return (
        <div className={`${styles.carouselContainer} ${classNames}`}>
            <div className={styles.carouselWrapper}>

                <div className={styles.dots}>
                    {items.map((item: any, index: number) => <div key={index} onClick={() => setCurrentSlide(index)} className={`${styles.dot} ${index === currentSlide ? styles.active : ""}`}>
                        <div className='block relative overflow-hidden pb-[130%] w-full'>
                            <Image src={item.img} layout="fill" objectFit='contain' alt='thumbnails' />
                        </div>
                    </div>)}

                </div>
                <div className={styles.carouselContentWrapper}>
                    {<button className={`${styles.arrows} ${styles.arrowLeft}`} onClick={prevSlide} disabled={buttonsIsDisabled}>

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg>
                    </button>}
                    <div className={styles.carouselContent} ref={contentRef} >
                        {children}
                    </div>
                    {<button className={`${styles.arrows} ${styles.arrowRight}`} onClick={nextSlide} disabled={buttonsIsDisabled}>


                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg>
                    </button>}
                </div>



            </div>
        </div>
    )
}

export default Carousel