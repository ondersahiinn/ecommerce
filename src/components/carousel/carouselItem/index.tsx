import Image from 'next/image';
import styles from './styles.module.scss'

interface CarouselItemProps {
    img: string;
}
const CarouselItem: React.FC<CarouselItemProps> = (props) => {
    const { img } = props

    return (
        <div className={styles.carouselItem}>
            <div className={styles.itemWrapper}>
                <div className='w-full h-full block relative overflow-hidden'>
                    <Image layout='fill' width={"100%"} height="100%" objectPosition="top" objectFit='contain' src={img} alt={"Slider Resim"} />
                </div>



            </div>
        </div>
    )
}

export default CarouselItem