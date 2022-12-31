import { RootState } from "@redux/reducers";
import { clearAllData, setFileList, setFolderList } from "@redux/slices/fileManager";
import { Dispatch } from "@reduxjs/toolkit";
import { storage } from "@utils/firebase";
import { getDownloadURL, getMetadata, listAll, ref } from "firebase/storage";
import { IFileList } from "interfaces/fileManager";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';

export function fetchFileManagerData(dispatch: Dispatch, breadcrumbList: string[]) {
    const items: IFileList[] = [];

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
            if (res.items.length > 0) {
                res.items.forEach((item) => {
                    getMetadata(item).then((metadata) => {
                        if (metadata.contentType?.startsWith('image/')) {
                            metadata.ref && getDownloadURL(metadata.ref).then(url => {
                                items.push({
                                    url: url,
                                    name: metadata.name,
                                    size: metadata.size,
                                    createdAt: metadata.timeCreated,
                                })
                                const sortedItems = [...items].sort((a, b) => new Date(b.createdAt).getMilliseconds() - new Date(a.createdAt).getMilliseconds())

                                dispatch(setFileList(sortedItems))

                            })
                        }

                    })
                })
            }

        })
        .catch((error) => {
            // Uh-oh, an error occurred!
            console.log("error", error);
        })
}