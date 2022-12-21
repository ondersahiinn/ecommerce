import { RootState } from '@redux/reducers';
import { Space, Table } from 'antd';
import { useSelector } from 'react-redux';
const columns: any = [
  {
    title: <img width={32} height={32} src='https://www.ondersahin.com.tr/apple-touch-icon.png' />,
    dataIndex: 'images',
    render: (_: any, record: any) => (
      <Space size="middle">
        {record.images.length > 0 ? <img src={record.images[0]} /> :
          <img width={32} height={32} src='https://www.ondersahin.com.tr/apple-touch-icon.png' />
        }

      </Space>
    ),
  },
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: (a: any, b: any) => a.name - b.name,
  },
  {
    title: 'Alt Kategoriler',
    dataIndex: 'subCategory',
    render: (_: any, record: any) => (
      <Space size="middle">
        {record.subCategory.map((e: any) => {
          return e + ' > '
        })}
        {`onder > test`}

      </Space>
    ),
  },
  {
    title: 'Link',
    dataIndex: 'slug',
    sorter: (a: any, b: any) => a.slug - b.slug,
    sortDirections: ['descend'],
  },
  {
    title: 'Toplam Ürün Sayısı',
    dataIndex: 'productCount',

  },
];






const CategoryTable = () => {
  const categories = useSelector((state: RootState) => state.categories.categories)
  const tableData: any = []
  categories.forEach((e: any, index: number) => {
    const newObj: any = { ...e }
    newObj.key = e._id
    newObj.productCount = 12 + index
    newObj.subCategory = e.children
    delete newObj.children
    tableData.push(newObj)
  })
  const onChange = (pagination: any, filters: any, sorter: any, extra: any) => {
    console.log('params', pagination, filters, sorter, extra);
  };
  return (
    <Table columns={columns} dataSource={tableData} onChange={onChange} />
  )
}

export default CategoryTable;