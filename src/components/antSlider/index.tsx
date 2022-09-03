import React from 'react'
import { Carousel } from 'antd';
import ContentItem from './contentItem';
import styles from './styles.module.scss'
import Image from 'next/image';
const ImageSlider: React.FC = () => {
    const onChange = (currentSlide: number) => {
        console.log(currentSlide);
    };

    const appendDots = (dots: any) => {
        return (<div>
            <ul className={styles.dotsContainer}> {dots} </ul>
        </div>)
    }
    const customPaging = (i: any) => {
        return (<div className={styles.dotBox}>
            <Image src={"/images/slider-resim.jpeg"} alt="Resim" layout='fill' objectFit='cover' />
        </div>)
    }
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className='max-w-7xl mx-auto my-12 px-3'>

            <Carousel {...settings} afterChange={onChange} appendDots={appendDots} customPaging={customPaging} className={styles.sliderContainer} >
                <ContentItem />
                <ContentItem />
                <ContentItem />
            </Carousel>

        </div>
    )
}

export default ImageSlider