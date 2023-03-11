import Breadcrumb from '@components/breacrumb';
import Carousel from '@components/carousel';
import CarouselItem from '@components/carousel/carouselItem';
import { Container } from '@components/container';
import { useRouter } from 'next/router'
import React from 'react'

const ProductDetailPage = () => {
    const router = useRouter()
    console.log(router.query);
    const carouselImages = [
        { id: 1, img: 'https://productimages.hepsiburada.net/s/318/1100/110000312020816.jpg' },
        { id: 2, img: 'https://productimages.hepsiburada.net/s/289/1100/110000278798709.jpg' },
        { id: 3, img: 'https://productimages.hepsiburada.net/s/308/600-800/110000300955560.jpg' },
        { id: 4, img: 'https://productimages.hepsiburada.net/s/339/600-800/110000345718219.jpg' },
        { id: 5, img: 'https://productimages.hepsiburada.net/s/288/1100/110000277075962.jpg' },
    ]
    return (
        <section className='w-full'>
            <Container>
                <Breadcrumb />
            </Container>
            <Container>
                <div className='mt-2 flex w-full gap-8'>
                    <div className='w-1/2'>
                        <div className='h-[600px] w-full'>

                            <Carousel show={1} items={carouselImages}>
                                {carouselImages.map((item) => <CarouselItem key={item.id} {...item} />)}
                            </Carousel>
                        </div>
                    </div>

                </div>
            </Container>

        </section>
    )
}

export default ProductDetailPage