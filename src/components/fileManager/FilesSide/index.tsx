import axios from 'axios'
import classNames from 'classnames'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setSelectedImage } from '@redux/slices/fileManager'
import { useSelector } from 'react-redux'
import { RootState } from '@redux/reducers'
import { IFiles } from 'interfaces/files'


interface IFilesSide {
    minShow?: number
    maxShow?: number
}
const FilesSide: React.FC<IFilesSide> = ({ maxShow, minShow }) => {
    const dispatch = useDispatch();
    const files = useSelector((state: RootState) => state.fileManager.files)

    const selectedImage = useSelector((state: RootState) => state.fileManager.selectedImage)
    const [loadingImage, setLoadingImage] = useState(true)


    return (
        <div className='grid grid-cols-9 items-center gap-3 '>
            {files.map((item: IFiles,) =>
                <div key={item.url} className={classNames({
                    "flex items-center justify-center rounded overflow-hidden cursor-pointer shadow w-full h-20 relative ": true,
                    "outline outline-offset-2 outline-primary-darken ": item.url === selectedImage
                })}>
                    <Image
                        src={item.url}
                        layout='fill'
                        loading='lazy'
                        objectFit='cover'
                        className={classNames({
                            "duration-700 ease-out": true,
                            "grayscale blur-2xl scale-110": loadingImage,
                            "grayscale-0 blur-0 scale-100": !loadingImage
                        })}
                        onLoadingComplete={() => setLoadingImage(false)}
                        onClick={(e) => {
                            dispatch(setSelectedImage(item.url))
                        }
                        }
                    />
                </div>

            )}
        </div>
    )
}

export default FilesSide