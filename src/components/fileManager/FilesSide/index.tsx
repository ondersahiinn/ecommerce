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

    // const [selectedImage, setSelectedImage] = useState('')
    const selectedImage = useSelector((state: RootState) => state.fileManager.selectedImage)


    return (
        <div className='flex flex-wrap items-center gap-3 '>
            {files.slice(minShow, maxShow).map((item: IFiles,) =>
                <div key={item.url} className={classNames({
                    "flex items-center justify-center rounded overflow-hidden cursor-pointer shadow ": true,
                    "outline outline-offset-2 outline-primary-darken": item.url === selectedImage
                })}>
                    <Image
                        src={item.url}
                        blurDataURL={item.url}
                        width={80}
                        height={80}
                        loading='lazy'
                        objectFit='cover'
                        onClick={(e) => {
                            // setSelectedImage(item)
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