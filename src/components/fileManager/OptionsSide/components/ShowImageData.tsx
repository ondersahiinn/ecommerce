import HButton from '@components/HButton'
import { RootState } from '@redux/reducers'
import { Image, Modal } from 'antd'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const ShowImageData = () => {
    const selectedImage = useSelector((state: RootState) => state.fileManager.selectedImage)
    const [visible, setVisible] = useState(false);

    return (
        <div className='flex flex-col gap-4'>
            <div className='w-full flex items-center justify-center overflow-hidden'>
                <Image src={selectedImage} className="rounded object-cover" width={150} height={150} loading='lazy' />
            </div>
            <div className='flex items-center justify-center flex-col'>
                <div className="font-bold">lorem-ipsum-dolar.jpg</div>
                <div>20.77 KB</div>
                <div>07-01-2019 15:19:04</div>
            </div>
            <div className='flex flex-col gap-2 items-center justify-center'>
                <HButton theme='Variant' size='Tiny' className="w-36" onClick={() => setVisible(true)}>
                    Resmi Görüntüle
                </HButton>
                <HButton theme='Variant' size='Tiny' className="w-36">
                    Resmi İndir
                </HButton>
                <HButton theme='Danger' size='Tiny' className="w-36">
                    Resmi Sil
                </HButton>
            </div>
        </div>
    )
}

export default ShowImageData