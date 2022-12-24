import HButton from '@components/HButton'
import { RootState } from '@redux/reducers'
import { Image, Modal } from 'antd'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from '@utils/firebase';
const ShowImageData = () => {
    const selectedImage = useSelector((state: RootState) => state.fileManager.selectedImage)
    const [visible, setVisible] = useState(false);
    const download = (url: string) => {

        //Firebase storage image download local file
        const storageRef = ref(storage, url);
        getDownloadURL(storageRef).then((url) => {
            const xhr = new XMLHttpRequest();
            xhr.responseType = 'blob';
            xhr.onload = (event) => {
                const blob = xhr.response;
            };
            xhr.open('GET', url);
            xhr.send();
        }
        ).catch((error) => {
            // Handle any errors
        }
        );





    };
    return (
        <div className='flex flex-col gap-4'>
            <div className='w-full flex items-center justify-center'>
                <Image src={selectedImage} preview={{
                    visible: visible,
                    onVisibleChange: (visible) => setVisible(visible),
                    mask: <div>Görüntüle</div>,
                    maskClassName: 'rounded-md'

                }} className="rounded object-cover shadow" width={150} height={150} loading='lazy' />
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
                <HButton theme='Variant' size='Tiny' className="w-36" onClick={() => download(selectedImage)}>
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