import { CartIcon } from '@components/icons'
import Link from 'next/link'
import React from 'react'

export const Cart: React.FC = () => {
    return (
        <Link href="/sepetim">
            <a>
                <div className='w-36 bg-secondary-buttonGray py-4 pl-6 pr-14 rounded-md flex items-center gap-3 text-sm text-white hover:text-white font-semibold'>
                    <div className='flex items-center relative'>
                        <CartIcon className="w-5 h-5 text-white stroke-white" />
                        <div className='absolute -top-2 left-[10px] min-w-[20px] h-5 block text-xs border-2 border-secondary-buttonGray text-secondary-buttonGray bg-white text-center rounded-full'>0</div>
                    </div>
                    <div>Sepetim</div>
                </div>
            </a>
        </Link>

    )
}
