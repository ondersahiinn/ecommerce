import { DeleteOutlined, EyeOutlined, FormOutlined, RightOutlined, UserOutlined } from '@ant-design/icons';
import { RootState } from '@redux/reducers';
import { Dropdown, Image, MenuProps, Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/lib/table';
import classNames from 'classnames';
import Link from 'next/link';
import { useState } from 'react';
import { useSelector } from 'react-redux';
interface DataType {
  key: string;
  categoryName: string;
  age: number;
  slug: string;
  categoryDescription: string;
  parentCategories: string[] | null;
  status: string;
  productCount: number;
  children?: DataType[];

}
const CategoryTable = () => {
  const categories = useSelector((state: RootState) => state.categories.categories)
  console.log(categories);


  const columns: ColumnsType<DataType> = [
    {
      title: '#',
      dataIndex: 'key',
      key: 'key',
      width: 50,
      align: 'center',
    },
    {
      title: 'Kategori Resmi',
      dataIndex: 'categoryImage',
      key: 'categoryImage',
      width: 150,
      align: 'center',
      render: text => <Image className='object-cover rounded-md' preview={{
        mask: <div className='flex items-center justify-center text-white text-2xl'>
          <EyeOutlined />
        </div>,
        maskClassName: 'rounded-md'
      }} src={"https://ondersahin.vercel.app/apple-touch-icon.png"} placeholder width={50} height={50} />,
    },
    {
      title: 'Kategori Adı',
      dataIndex: 'name',
      key: 'name',
      align: 'center',

    },
    {
      title: 'Kısa Link',
      dataIndex: 'slug',
      key: 'slug',
      width: 200,
      align: 'center',

    },
    {
      title: 'Üst Kategoriler',
      key: 'parentCategories',
      dataIndex: 'parentCategories',
      width: 300,
      align: 'center',
      render: (value, record) => <div className='flex flex-wrap gap-1 items-center text-sm'>
        {!!value ? value?.map((item: string, index: number) => <Link key={item} href="#">
          <a className='flex items-center gap-1'>
            {item} {index !== value.length - 1 && <RightOutlined className='text-[#484848] text-xs' />}
          </a>
        </Link>) : <span className='mx-auto'>&#8212;</span>}
        { }
      </div>
    },
    {
      title: 'Ürün Sayısı',
      key: 'productCount',
      dataIndex: 'productCount',
      width: 120,
      align: 'center',
      render: text => <div className='text-[#6b83fa] '>
        <Link href={"#"} >
          <a className="px-2 py-1 hover:underline">
            0
          </a>
        </Link>
      </div>,
    },
    {
      title: 'Durum',
      key: 'status',
      dataIndex: 'status',
      width: 90,
      align: 'center',
      render: text => <div className={classNames({
        'flex items-center justify-center text-white text-xs p-1 font-bold rounded-full': true,
        'bg-[#36b23e]': text === 'aktif',
        'bg-[#fa0000]': text === 'pasif'
      })} key={text}>
        {text?.toLocaleUpperCase()}
      </div>,

    },
    {
      title: 'İşlemler',
      key: 'action',
      width: 180,
      align: 'center',
      render: (_, record) => (
        <Space size="middle">
          <Link href={`/admin/kategoriler/${record.key}`}>
            <a className="text-[#6c84fa] flex items-center gap-1">
              <FormOutlined /> Düzenle
            </a>
          </Link>
          <Link href={`/admin/kategoriler/${record.key}`}>
            <a className="text-[#fa0000] flex items-center gap-1">
              <DeleteOutlined /> Sil
            </a>
          </Link>
        </Space>
      ),
    },
  ];

  const data: DataType[] = [
    {
      key: '1',
      categoryName: 'Ev & Yaşam',
      age: 32,
      slug: '/ev-yasam',
      categoryDescription: 'New York No. 1 Lake Park',
      parentCategories: ['Elektronik', 'Bilgisayar & Tablet ', 'Çevre Birimleri'],
      status: 'aktif',
      productCount: 256,

    },
    {
      key: '2',
      categoryName: 'Klavyeler',
      age: 42,
      slug: '/klavyeler',
      categoryDescription: 'London No. 1 Lake Park',
      parentCategories: null,
      status: 'pasif',
      productCount: 5
    },
    {
      key: '3',
      categoryName: 'Moda',
      age: 32,
      slug: '/moda',
      categoryDescription: 'Sidney No. 1 Lake Park',
      parentCategories: null,
      status: 'aktif',
      productCount: 22
    },
  ];
  return (
    <Table columns={columns} dataSource={(categories as DataType[])} />)
}

export default CategoryTable;