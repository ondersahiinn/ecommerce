// import Button from 'components/Button'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ProductItemProps } from 'interfaces/productCard'
import styles from './styles.module.scss'
import { Button } from '..'
import HButton from '@components/HButton'
import classNames from 'classnames'
import Image from 'next/image'

const ProductItem: React.FC<ProductItemProps> = (props) => {
    const { type = "default", name, brand, id, image, disabled, discount_percentage, price } = props
    const [showAddToCart, setShowAddToCart] = useState(false)
    const [activeImage, setActiveImage] = useState(0)
    const images = [
        "https://productimages.hepsiburada.net/s/315/550/110000308343964.jpg",
        "https://productimages.hepsiburada.net/s/168/550/110000131103936.jpg",
        "https://productimages.hepsiburada.net/s/168/550/110000131103937.jpg",
        "https://productimages.hepsiburada.net/s/168/550/110000131103938.jpg"
    ]
    return (
        <div className="py-3 flex flex-col gap-3 cursor-pointer border border-[#e5e5e5] rounded-lg overflow-hidden relative group hover:shadow-productCard hover:border-transparent" onMouseEnter={() => setShowAddToCart(true)} onMouseLeave={() => {
            setShowAddToCart(false)
            setActiveImage(0)
        }}>
            <div className={classNames({
                "w-full h-80 bg-white relative overflow-hidden": true,
                "order-2 h-48": type === "small"
            })}>
                <Image objectFit='cover' layout='fill' className='w-full h-full object-contain max-w-full' src={images[activeImage]} alt={name} />
                {true && <div className='px-3 absolute w-full z-10 right-0 bottom-0 flex items-center justify-end gap-1'>
                    {images.map((_, index) => <div key={index} className={classNames({
                        "inline-block w-[5px] h-[5px] rounded-full bg-[#dadada]": true,
                        "!bg-[#ff6000]": index === activeImage
                    })}></div>)}
                </div>}
                <div className={`grid grid-cols-${images.length} w-full h-full`}>
                    {images.map((_, index) => <div
                        key={`${index}_sliderCols`}
                        className={classNames({
                            "bg-transparent h-full z-10": true,
                        })}
                        onMouseEnter={() => setActiveImage(index)}
                    ></div>)}
                </div>

            </div>
            <div className={classNames({
                "text-[#484848] text-sm leading-4 line-clamp-2 min-h-[36px] px-3": true,
                "order-1 text-center text-xs": type === "small"
            })}>VA2223-H 21.5" 60Hz 5ms (VGA+HDMI) Full HD Vesa LED Monitör</div>

            {type === "default" && <div className="text-[#484848] leading-4 min-h-[16px] px-3">
                <div className='group-hover:hidden'>
                    <strong className='font-bold'>Marka:</strong> Apple
                </div>
            </div>}
            {!showAddToCart ? <div className={classNames({
                " flex flex-col mt-6 group-hover:hidden px-3 min-h-[40px]": true,
                "order-3 text-center": type === "small"
            })}>
                <span className={classNames({
                    "text-[#212121] text-lg font-bold leading-4": type === "default",
                    "text-[#ff6000] text-xl font-bold leading-4": type === "small"
                })}>
                    1.798,99 TL
                </span>
                {discount_percentage && <span className={classNames({
                    "mt-1 text-[#646464] text-sm line-through leading-4": type === "default",
                    "mt-2 text-[#9b9b9b] text-sm line-through leading-4": type === "small"
                })}>
                    1.200,99 TL
                    {type === "default" && <div className="ml-1 text-[#fa0000] inline-block font-bold text-xs leading-4">%{23}</div>} </span>}
            </div> : null}

            <div className={classNames({
                "px-3 hidden items-center justify-center mt-6 w-full group-hover:flex group-hover:flex-col": true,
                "order-4": type === "small"
            })}>
                <HButton theme="Primary" size={"Small"} className="w-full"> Sepete Ekle</HButton>
            </div>

        </div>
    )
}

export default ProductItem