import React, { useState, useRef } from 'react';
import { SearchOutlined, CloseOutlined } from '@ant-design/icons';

interface Props {
  className?: string;
}
export const SearchInput: React.FC<Props> = (props) => {
  const [search, setSearch] = useState('');

  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <div className="flex flex-1 group items-center justify-center border-2 border-secondary-buttonGray focus-within:border-primary-base rounded-md overflow-hidden">
      <SearchOutlined
        style={{ color: '#ccc', fontSize: '1.4rem', paddingLeft: '16px' }}
      />
      <input
        type="text"
        placeholder="Ürün veya kategori ara"
        onChange={handleSearch}
        value={search}
        ref={searchInputRef}
        className="w-full h-full p-4 text-sm font-bold text-secondary-darkGray placeholder:text-[#ccc] focus:outline-0 "
      />
      {search.trim().length > 0 && (
        <CloseOutlined
          style={{
            padding: '0 16px',
            fontSize: '1rem',
            color: '#9b9b9b',
            cursor: 'pointer',
          }}
          onClick={() => {
            setSearch('');
            searchInputRef.current?.focus();
          }}
        />
      )}
      <button className="h-full p-4 bg-secondary-buttonGray group-focus-within:bg-primary-base focus:outline-0 text-white text-sm font-semibold ">
        ARA
      </button>
    </div>
  );
};
