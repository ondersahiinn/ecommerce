import React, { useRef, useState } from 'react'
import HButton from '@components/HButton'
import { RootState } from '@redux/reducers'
import { Image } from 'antd'
import { useSelector } from 'react-redux'
import { formatBytes } from '@utils/functions/imageFormatSize'

const ShowImageData = () => {
    const selectedImage = useSelector((state: RootState) => state.fileManager.selectedImage)

    const downloadRef = useRef<HTMLAnchorElement>(null)
    const [visible, setVisible] = useState(false);
    const download = (url: string) => {
        // download image directly via url
        var xhr = new XMLHttpRequest();
        xhr.responseType = 'blob';
        xhr.onload = (event) => {
            var blob = xhr.response;
            //create a file from the returned blob
            var file = new File([blob], "image name", { type: blob.type });
            //grab the a tag

            //set the download attribute of the a tag to the name stored in the file
            if (downloadRef.current) {
                downloadRef.current.download = file.name;
                //generate a temp url to host the image for download
                downloadRef.current.href = URL.createObjectURL(file);
                //trigger the click event of the a tag
                downloadRef.current.click();

            }
            //generate a temp url to host the image for download
        };
        xhr.open('GET', url);
        xhr.send();


    };
    return (
        <div className='flex flex-col gap-4'>
            <div className='w-full flex items-center justify-center'>
                <Image src={selectedImage?.url} preview={{
                    visible: visible,
                    onVisibleChange: (visible) => setVisible(visible),
                    mask: <div>Görüntüle</div>,
                    maskClassName: 'rounded-md'

                }} className="rounded object-cover shadow" width={150} height={150} loading='lazy' />
            </div>
            <div className='flex items-center justify-center flex-col gap-2'>
                <div className="text-center font-bold">{selectedImage?.name}</div>
                <div>
                    {formatBytes(selectedImage?.size || 0)}
                </div>
                <div>
                    {selectedImage?.createdAt && new Date(selectedImage?.createdAt).toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' })}

                </div>
            </div>
            <div className='flex flex-col gap-2 items-center justify-center'>
                <HButton theme='Variant' size='Tiny' className="w-36" onClick={() => setVisible(true)}>
                    Resmi Görüntüle
                </HButton>
                <HButton theme='Variant' size='Tiny' className="w-36" onClick={() => selectedImage && download(selectedImage?.url)}>
                    Resmi İndir
                </HButton>
                <HButton theme='Danger' size='Tiny' className="w-36">
                    Resmi Sil
                </HButton>
            </div>
            <a id='downloadImage' ref={downloadRef}></a>
        </div>
    )
}

export default ShowImageData