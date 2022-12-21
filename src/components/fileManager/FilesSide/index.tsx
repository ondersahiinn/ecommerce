import axios from 'axios'
import classNames from 'classnames'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setSelectedImage } from '@redux/slices/fileManager'
import { useSelector } from 'react-redux'
import { RootState } from '@redux/reducers'


interface IFilesSide {
    imageList: string[]
    minShow?: number
    maxShow?: number
}
const FilesSide: React.FC<IFilesSide> = ({ imageList, maxShow, minShow }) => {
    const dispatch = useDispatch();
    // const [selectedImage, setSelectedImage] = useState('')
    const selectedImage = useSelector((state: RootState) => state.fileManager.selectedImage)


    return (
        <div className='flex flex-wrap items-center gap-3 '>
            {imageList.slice(minShow, maxShow).map((item: any, index) =>
                <div key={index} className={classNames({
                    "flex items-center justify-center rounded overflow-hidden cursor-pointer shadow ": true,
                    "outline outline-offset-2 outline-primary-darken": item === selectedImage
                })}>
                    <Image
                        src={item}
                        blurDataURL={item}
                        width={80}
                        height={80}
                        placeholder='blur'
                        loading='lazy'
                        objectFit='cover'
                        onClick={(e) => {
                            // setSelectedImage(item)
                            dispatch(setSelectedImage(item))
                        }
                        }
                    />
                </div>

            )}
        </div>
    )
}

export default FilesSide