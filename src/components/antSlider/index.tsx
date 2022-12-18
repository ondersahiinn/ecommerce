import React, { ReactElement } from 'react'
import { Carousel } from 'antd';
import ContentItem from './contentItem';
import styles from './styles.module.scss'
import Image from 'next/image';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { SliderArrowIcon } from '@components/icons';

const ImageSlider: React.FC<React.PropsWithChildren> = ({ children }) => {
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
    function SliderPrevArrow(props: any) {
        const { className, style, onClick } = props
        return (
            <div
                className={className}
                style={{ ...style, display: "block" }}
                onClick={onClick}
            >
                <ArrowLeftOutlined />
            </div>
        )
    }

    function SliderNextArrow(props: any) {
        const { className, style, onClick } = props
        return (
            <div
                className={className}
                style={{ ...style, display: "block", color: '#000' }}
                onClick={onClick}
            >
                <ArrowRightOutlined />
            </div>
        )
    }
    const responsive = [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                fade: false,
                arrows: false,
                draggable: false
            }
        }]
    const settings = {
        dots: true,
        infinite: true,
        fade: true,
        arrows: true,
        draggable: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SliderNextArrow />,
        prevArrow: <SliderPrevArrow />,



    };
    return (
        <div className='max-w-7xl mx-auto my-12 px-3'>

            <Carousel {...settings} afterChange={onChange} appendDots={appendDots} customPaging={customPaging} className={styles.sliderContainer} responsive={responsive}>
                {children}

            </Carousel>

        </div>
    )
}

export default ImageSlider