import { CloseIcon, DropdownIcon, SearchIcon, ThickIcon } from '@components/icons';
import usePrevious from '@utils/hooks/usePrevious';
import { ISelectedLocation } from 'interfaces/selectedLocation';
import { Number } from 'mongoose';
import React, { useEffect, useState, useRef } from 'react'
import styles from './style.module.scss'


interface dropdownProps {
    searchable?: boolean,
    className?: string,
    selectedItem: any,
    type: string,
    disabled?: boolean,
    options: ISelectedLocation[],
}
const SearchableDropdown: React.FC<dropdownProps> = (props) => {
    const { searchable = false, className = '', selectedItem, type = 'default', options, disabled = false } = props

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selection, setSelection] = useState<ISelectedLocation[]>([]);
    const [searchText, setSearchText] = useState("");
    const ref = useRef<HTMLDivElement>(null);



    const selected = selection.length > 0 && selection.find((item: ISelectedLocation) => item.type === type)
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

    useEffect(() => {
        if (!!selection && selection.length > 0) {
            console.log("data değişti")
            selectedItem(selection)
        }
    }, [JSON.stringify(selection)])

    const handleMenuOpen = () => {
        setDropdownOpen((prevState) => !prevState);
    }

    const handleClose = (type: string, id: number, label: string, value: string | number) => {

        if (selection.length === 0) {
            console.log("close")

            setSelection([{ type, id, label, value }])
        } else {
            console.log("girdi")
            for (const obj of selection) {
                console.log("obj", obj)

                if (!!obj && obj.type === type) {
                    console.log("type", type)
                    obj.id = id;
                    obj.label = label;
                    obj.value = value;
                    setSelection([...selection]);
                    break;
                } else {
                    console.log("ilçede burada")
                    setSelection((prevState) => [...prevState, { type, id, label, value }]);
                }
            }
        }
        // if (selection === undefined || (selected && id !== selected.id)) {
        //     if (selection === 0) {
        //         // selectedItem([{ type, id, label, value }]);
        //         setSelection({ type, id, label, value });
        //     } else {
        //         for (const obj of selection) {
        //             if (!!obj && obj.type === type) {
        //                 obj.id = id;
        //                 obj.label = label;
        //                 obj.value = value;
        //                 selectedItem([...prevItems]);
        //                 break;
        //             } else {

        //                 selectedItem([...prevItems, { type: type, id, label, value }]);
        //             }
        //         }
        //     }
        //     prevItems.push({ type: type, id, label, value });
        // }


        setDropdownOpen(false);
        setSearchText('');

    }
    const handleSearchChange = (e: any) => {
        setSearchText(e.target.value);
    }

    const renderDropdownMenu = () => {
        const displayOptions = options.filter(option => option.label.toLowerCase().includes(searchText.toLowerCase()));

        const renderOption = (type: string, id: number, label: string, value: string | number) => {

            const isSelected = !!selected && selected.id === id
            return <div key={id} className={`${styles.dropdownItem} ${isSelected ? styles.selected : ''}`} onClick={() => handleClose(type, id, label, value)}>
                {label} {isSelected && <ThickIcon className="w-4 h-3" />}
            </div>
        }
        return (
            <>

                <div className={styles.dropdownMenu} >
                    {searchable && <div className="flex items-center">
                        <SearchIcon className="w-5 h-5 fill-[#9b9b9b]" />
                        <input type="text" className={styles.searchInput} placeholder="Filtrele" value={searchText} onChange={(e) => handleSearchChange(e)} />
                        <CloseIcon className="w-3 h-3 fill-[#9b9b9b] cursor-pointer" onClick={() => setSearchText('')} />
                    </div>}


                    {displayOptions.map((option: any) =>
                        renderOption(type, option.id, option.label, option.value)
                    )}
                </div>
            </>
        )
    }
    console.log("selection", selection)
    return (

        <div ref={ref} className={`${styles.dropdownContainer} ${className}`}>
            <div onClick={handleMenuOpen} data-disabled={disabled} className={`dropdownButton`}>
                <div className='whitespace-nowrap overflow-hidden text-ellipsis'>{!!selected ? selected.label : "İl Seçin"}</div> <div><DropdownIcon className="w-5 h-5" /> </div>
            </div>
            <div className='relative'>
                {dropdownOpen && renderDropdownMenu()}

            </div>
        </div>

    )
}

export default SearchableDropdown