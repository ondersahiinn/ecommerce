import axios from 'axios'
import classNames from 'classnames'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const FilesSide = () => {
    const [imageArray, setImageArray] = useState([])
    const [selectedImage, setSelectedImage] = useState('')

    useEffect(() => {
        axios.get("https://picsum.photos/v2/list?page=2&limit=100").then(res => {
            const justLinks = res.data.map((item: any) => item.download_url)
            setImageArray(justLinks)
        })
    }, [])
    return (
        <div className='flex flex-wrap items-center gap-3 '>
            {imageArray.slice(0, 50).map((item: any, index) =>
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
                        onClick={(e) =>
                            setSelectedImage(item)
                        }
                    />
                </div>

            )}
        </div>
    )
}

export default FilesSide