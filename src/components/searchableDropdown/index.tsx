import { CloseIcon, DropdownIcon, SearchIcon, ThickIcon } from '@components/icons';
import { Number } from 'mongoose';
import React, { useEffect, useState, useRef } from 'react'
import styles from './style.module.scss'

interface itemProps {
    name?: string,
    id: number | null,
    label: string,
    value: string | number
}
interface dropdownProps {
    searchable?: boolean,
    className?: string,
    selectedItem: any,
    prevItems: any,
    name?: string,
    options: itemProps[],
}
const SearchableDropdown: React.FC<dropdownProps> = ({ searchable = false, className = '', selectedItem, prevItems, name = 'default', options }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selection, setSelection] = useState<itemProps>({ id: null, label: '', value: '' });
    const [searchText, setSearchText] = useState("");
    const ref: any = useRef();

    // Do something after component renders
    useEffect(() => {
        function handleClickOutSide(e: any) {
            if (dropdownOpen && ref.current && !ref.current.contains(e.target)) {
                setDropdownOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutSide);

        // clean up function before running new effect
        return () => {
            document.removeEventListener('mousedown', handleClickOutSide);
        }
    }, [dropdownOpen])


    const handleMenuOpen = () => {
        setDropdownOpen((prevState) => !prevState);
    }

    const handleClose = (id: number, label: string, value: string | number) => {
        if (id !== selection.id) {
            setSelection({ ...selection, id: id, label: label, value: value });
            if (prevItems.length === 0) {
                selectedItem([{ name: name, id, label, value }]);
            } else {
                for (const obj of prevItems) {

                    if (!!obj && obj.name === name) {

                        obj.id = id;
                        obj.label = label;
                        obj.value = value;
                        selectedItem([...prevItems]);
                        break;
                    } else {

                        selectedItem([...prevItems, { name: name, id, label, value }]);
                    }
                }
            }
        }

        setDropdownOpen(false);
        setSearchText('');
    }
    const handleSearchChange = (e: any) => {
        setSearchText(e.target.value);
    }

    const renderDropdownMenu = () => {
        const displayOptions = options.filter(option => option.label.toLowerCase().includes(searchText.toLowerCase()));

        const renderOption = (id: number, label: string, value: string | number) => {
            const isSelected = selection.id === id
            return <div key={id} className={`${styles.dropdownItem} ${isSelected ? styles.selected : ''}`} onClick={() => handleClose(id, label, value)}>{label} {isSelected && <ThickIcon className="w-4 h-3" />} </div>
        }
        return (
            <>
                <div className={styles.dropdownMenu}>
                    {searchable && <div className="flex items-center">
                        <SearchIcon className="w-5 h-5 fill-[#9b9b9b]" />
                        <input type="text" className={styles.searchInput} placeholder="Filtrele" value={searchText} onChange={(e) => handleSearchChange(e)} />
                        <CloseIcon className="w-3 h-3 fill-[#9b9b9b] cursor-pointer" />
                    </div>}


                    {displayOptions.map((option: any) =>
                        renderOption(option.id, option.label, option.value)
                    )}
                </div>
            </>
        )
    }
    return (
        <div ref={ref} className={`inline-block w-full min-w-[150px] ${className}`}>
            <div onClick={handleMenuOpen} className="flex items-center justify-between px-4 py-3 bg-secondary-extraExtraLightGray text-secondary-lightDarkGray rounded-lg border-2 border-secondary-extraExtraLightGray text-base cursor-pointer gap-2 ">
                <div className='whitespace-nowrap overflow-hidden text-ellipsis'>{!!selection.label ? selection.label : "İl Seçin"}</div> <div><DropdownIcon className="w-5 h-5" /> </div>
            </div>
            <div className='relative'>
                {dropdownOpen && renderDropdownMenu()}

            </div>
        </div>
    )
}

export default SearchableDropdown