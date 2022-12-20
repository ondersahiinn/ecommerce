// import Button from 'components/Button'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ProductItemProps } from 'interfaces/productCard'
import styles from './styles.module.scss'
import { Button } from '..'
import HButton from '@components/HButton'

const ProductItem: React.FC<ProductItemProps> = (props) => {
    const { name, brand, id, image, disabled, discount_percentage, price } = props

    return (
        <div className="flex flex-col gap-3 cursor-pointer border border-[#e5e5e5] rounded-lg overflow-hidden relative group hover:shadow-productCard hover:border-transparent">
            <div className="w-full h-80 bg-white   overflow-hidden group-hover:border-transparent">
                <img className='w-full h-full object-contain max-w-full' src={image} alt={name} />
            </div>
            <div className="flex flex-col gap-2 text-[#484848] h-36 p-3">
                <div className="leading-4 line-clamp-2 min-h-[36px]">VA2223-H 21.5" 60Hz 5ms (VGA+HDMI) Full HD Vesa LED Monitör</div>
                <div className="leading-4 mb-4 group-hover:hidden"><strong className='font-bold'>Marka:</strong> Apple</div>
                <div className="flex flex-col mt-auto group-hover:hidden">
                    <span className="text-[#212121] text-sm font-bold leading-4">1.798,99 TL</span>
                    {discount_percentage && <span className="text-[#646464] text-xs line-through leading-4">1.200,99 TL <div className="ml-1 text-[#fa0000] inline-block font-bold text-xs leading-4">%{23}</div></span>}
                </div>

            </div>
            <div className="hidden items-center justify-center pr-3 pb-3 pl-3 absolute bottom-0 left-0 w-full group-hover:flex">

                <HButton theme="Primary" size={"Small"} className={'w-full'}> Sepete Ekle</HButton>

            </div>
        </div>
    )
}

export default ProductItem