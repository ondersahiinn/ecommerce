import { Segmented } from 'antd'
import React, { useState } from 'react'
import EditImageData from './components/EditImageData';
import ShowImageData from './components/ShowImageData';
import styles from './styles.module.scss'
const OptionsSide = () => {
    const [value, setValue] = useState<string | number>('Kaynak');

    return (
        <div className='flex flex-col gap-6'>
            <Segmented block options={['Kaynak', 'Dosya']} size="large" value={value} onChange={setValue} className={styles.customSegmented} />
            {value === 'Kaynak' ? <EditImageData /> : <ShowImageData />}
        </div>
    )
}

export default OptionsSide