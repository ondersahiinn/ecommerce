import { RootState } from '@redux/reducers';
import { Segmented } from 'antd'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import EditImageData from './components/EditImageData';
import ShowImageData from './components/ShowImageData';
import styles from './styles.module.scss'
const OptionsSide = () => {
    const selectedImage = useSelector((state: RootState) => state.fileManager.selectedImage)
    const [value, setValue] = useState<string | number>('Kaynak');
    const [options, setOptions] = useState<string[]>(['Kaynak'])

    useEffect(() => {
        if (selectedImage) {
            setOptions(['Kaynak', "Dosya"])
        } else {
            setOptions(['Kaynak'])
        }
    }, [selectedImage])
    return (
        <div className='flex flex-col gap-6'>
            <Segmented block options={options} size="large" value={value} onChange={setValue} className={styles.customSegmented} />
            {value === 'Kaynak' ? <EditImageData /> : <ShowImageData />}
        </div>
    )
}

export default OptionsSide