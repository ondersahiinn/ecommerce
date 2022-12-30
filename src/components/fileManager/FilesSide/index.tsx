import axios from 'axios'
import classNames from 'classnames'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { clearAllData, setBreadcrumb, setFileList, setFolderList, setSelectedImage } from '@redux/slices/fileManager'
import { useSelector } from 'react-redux'
import { RootState } from '@redux/reducers'
import { IFiles } from 'interfaces/files'
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

    useEffect(() => {

        console.log("breadcrumbList", breadcrumbList.join('/'));
        const listRef = ref(storage, `${breadcrumbList.join('/')}`)
        // Find all the prefixes and items.
        listAll(listRef)
            .then((res) => {
                dispatch(clearAllData())

                console.log("girdi", res)
                if (res.prefixes.length > 0) {
                    res.prefixes.forEach((folderRef) => {
                        dispatch(setFolderList(folderRef.name))
                        // return folderRef.name
                    })
                }
                res.items.forEach((item) => {
                    // All the items under listRef.
                    getDownloadURL(item).then(url => {
                        dispatch(setFileList({ url }))
                    })
                })
            })
            .catch((error) => {
                // Uh-oh, an error occurred!
                console.log("error", error);
            });


    }, [breadcrumbList])


    return (
        <>
            {(folderList.length !== 0 || fileList.length !== 0) ? <div className='grid grid-cols-9 gap-3 items-center'>
                {folderList.map((item: string) => <div key={item} onDoubleClick={() => dispatch(setBreadcrumb(item))} className="h-20 flex flex-col items-center justify-between cursor-pointer select-none rounded-md hover:bg-[#484848]/10 transition-all">
                    <FolderFilled className='text-5xl' />
                    <span>{item}</span>
                </div>)}
                {fileList.map((item: any) =>
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