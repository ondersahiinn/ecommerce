// import Button from 'components/Button'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ProductItemProps } from 'interfaces/productCard'
import styles from './styles.module.scss'
import { Button } from '..'
import HButton from '@components/HButton'
import classNames from 'classnames'

const ProductItem: React.FC<ProductItemProps> = (props) => {
    const { type = "default", name, brand, id, image, disabled, discount_percentage, price } = props
    const [showAddToCart, setShowAddToCart] = useState(false)
    return (
        <div className="py-3 flex flex-col gap-3 cursor-pointer border border-[#e5e5e5] rounded-lg overflow-hidden relative group hover:shadow-productCard hover:border-transparent" onMouseEnter={() => setShowAddToCart(true)} onMouseLeave={() => setShowAddToCart(false)}>
            <div className={classNames({
                "w-full h-80 bg-white  overflow-hidden": true,
                "order-2 h-48": type === "small"
            })}>
                <img className='w-full h-full object-contain max-w-full' src={image} alt={name} />
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