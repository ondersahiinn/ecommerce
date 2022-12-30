import axios from 'axios'
import classNames from 'classnames'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { clearAllData, setBreadcrumb, setFileList, setFolderList, setSelectedImage } from '@redux/slices/fileManager'
import { useSelector } from 'react-redux'
import { RootState } from '@redux/reducers'
import { IFileList, IFiles } from 'interfaces/fileManager'
import { getDownloadURL, getMetadata, listAll, ref } from "firebase/storage";
import { storage } from "@utils/firebase";
import { FolderFilled } from '@ant-design/icons'
import { Empty } from 'antd'
import HButton from '@components/HButton'

interface IFilesSide {
    minShow?: number
    maxShow?: number
}
const FilesSide: React.FC<IFilesSide> = ({ maxShow, minShow }) => {
    const dispatch = useDispatch();
    // const files = useSelector((state: RootState) => state.fileManager.files)

    const selectedImage = useSelector((state: RootState) => state.fileManager.selectedImage)
    const fileList = useSelector((state: RootState) => state.fileManager.filesList)
    const folderList = useSelector((state: RootState) => state.fileManager.folderList)
    const breadcrumbList = useSelector((state: RootState) => state.fileManager.breadCrumbs)
    const [loadingImage, setLoadingImage] = useState(true)

    const [deneme, setDeneme] = useState('')

    useEffect(() => {
        const folderBreadcrumb = breadcrumbList.length === 0 ? '' : breadcrumbList.join('/') + '/';

        const listRef = ref(storage, `${folderBreadcrumb}`)
        // Find all the prefixes and items.
        listAll(listRef)
            .then((res) => {
                dispatch(clearAllData())

                if (res.prefixes.length > 0) {
                    res.prefixes.forEach((folderRef) => {
                        dispatch(setFolderList(folderRef.name))
                    })
                }
                res.items.forEach((item) => {
                    getMetadata(item).then((metadata) => {
                        if (metadata.contentType?.startsWith('image/')) {
                            metadata.ref && getDownloadURL(metadata.ref).then(url => {
                                dispatch(setFileList({
                                    url: url,
                                    name: metadata.name,
                                    size: metadata.size,
                                    createdAt: metadata.timeCreated,
                                }))
                            })
                        }

                    })

                })
            })
            .catch((error) => {
                // Uh-oh, an error occurred!
                console.log("error", error);
            });


    }, [breadcrumbList])

    const sortedFileList = [...fileList].sort((a, b) => new Date(b.createdAt).getMilliseconds() - new Date(a.createdAt).getMilliseconds())

    return (
        <>
            {(folderList.length !== 0 || fileList.length !== 0) ? <div className='grid grid-cols-9 gap-1 items-center'>
                {folderList.map((item: string) =>
                    <div key={item}
                        onDoubleClick={() => dispatch(setBreadcrumb(item))}
                        onClick={() => setDeneme(item)}
                        className={classNames({
                            "w-full p-2  gap-2 cursor-pointer select-none rounded-md hover:bg-[#484848]/20 transition-all": true,
                            "bg-[#484848]/20": item === deneme
                        })}>
                        <div className='h-20 flex flex-col items-center justify-between'>
                            <FolderFilled className='flex text-6xl' />
                            <div className='font-medium text-base'>{item}</div>
                        </div>

                    </div>)}
                {sortedFileList.length > 0 && sortedFileList.map((item: IFileList) =>
                    <div key={item.url}
                        onClick={() => setDeneme(item.url)}

                        className={classNames({
                            "flex items-center justify-center rounded overflow-hidden cursor-pointer  w-full  hover:bg-[#484848]/20 transition-all p-2": true,
                            "bg-[#484848]/20": item.url === deneme
                        })}>
                        <div className='w-full h-20 relative overflow-hidden'>
                            <Image
                                src={item.url}
                                layout='fill'
                                loading='lazy'
                                objectFit='cover'
                                className={classNames({
                                    "duration-700 ease-out rounded": true,
                                    "grayscale blur-2xl scale-110": loadingImage,
                                    "grayscale-0 blur-0 scale-100": !loadingImage
                                })}
                                onLoadingComplete={() => setLoadingImage(false)}
                                onClick={() => { dispatch(setSelectedImage(item)) }} />
                        </div>

                    </div>

                )}
            </div> : <Empty
                className='h-full flex flex-col items-center justify-center'
                description={
                    <span className='font-semibold text-lg text-[#b0b0b0]'>
                        Dosya bulunamadı!
                    </span>
                } />}


        </>
    )
}

export default FilesSide