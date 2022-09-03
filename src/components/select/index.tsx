import React, { useEffect, useState, useRef } from 'react';
import { Divider, Input, Select, Space, Button } from 'antd';
import { CloseIcon, DropdownIcon, SearchIcon, ThickIcon } from '@components/icons';
import styles from './style.module.scss';
import { ISelectedLocation } from 'interfaces/selectedLocation';
import { INeighbour } from 'interfaces/cities';


const { Option } = Select;

interface IHBSelectProps {
    items: ISelectedLocation[] | [];
    disabled?: boolean;
    selected?: any;
    placeholder?: string;

}
const HBSelect: React.FC<IHBSelectProps> = (props) => {
    const [selectedValue, setSelectValue] = useState(undefined);
    const [searchText, setSearchText] = useState('');
    const { items, disabled = false, selected, placeholder } = props;
    // const [filteredItems, setFilteredItems] = useState(items);


    // useEffect(() => {
    //     if (!!items && items.length > 0) {
    //         const filtered = items.filter((item) => item.label.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()));
    //         setFilteredItems(filtered);
    //     }

    // }, [searchText, items])

    return (
        <React.Fragment>
            <Select

                disabled={disabled}
                suffixIcon={<DropdownIcon className={"w-5 h-5"} />}
                className={styles.locationSelect}
                menuItemSelectedIcon={<ThickIcon className={"w-4 h-3"} />}
                bordered={false}

                onChange={selected}
                dropdownClassName={styles.locationDropdown}
                placeholder={placeholder}
                onDropdownVisibleChange={(open) => !open && setSearchText('')}
                dropdownRender={menu => (
                    <>
                        <Space
                            style={{
                                padding: '12px 8px',
                            }}
                        >
                            <div className={styles.searchContainer}>
                                <div>
                                    <SearchIcon className="w-5 h-5 fill-[#9b9b9b]" />
                                </div>
                                <div className='flex items-center flex-1 justify-between'>
                                    <Input type="text" className={styles.searchInput} placeholder="Filtrele" value={searchText} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchText(e.target.value)}
                                    />
                                    <div>
                                        <CloseIcon className="w-3 h-3 fill-[#9b9b9b] cursor-pointer" onClick={() => setSearchText('')} />
                                    </div>
                                </div>


                            </div>
                        </Space>
                        {menu}
                    </>
                )
                }
            >
                {
                    items.map(item => (
                        <Option key={item.id} value={item.value}>{item.label}</Option>
                    ))
                }
            </Select >
        </React.Fragment>
    )
}

export default HBSelect