import SearchableDropdown from '@components/searchableDropdown';
import { Button, Form, Input, Select } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './style.module.scss';
import axios from 'axios';
import { RootState } from '@redux/reducers';
import { fetchCities } from '@redux/slices/cities';
const { Option } = Select;

export const AddressSelect: React.FC = () => {
  const [address, setAddress] = useState([])
  const onFinish = (values: any) => {
    console.log(values);
  };
  const il = [
    {
      id: 1,
      value: "Susan",
      label: "Susan",
    },
    {
      id: 2,
      value: "Sally",
      label: "Sally Sally Mally Londerast",
    },
    {
      id: 3,
      value: "Sue",
      label: "Sue",
    },
    {
      id: 4,
      value: "Berkin",
      label: "Berkin",
    }
  ]
  const citiesStatus = useSelector((state: RootState) => state.cities.status);
  const cities = useSelector((state: RootState) => state.cities.cities);
  const dispatch = useDispatch();
  useEffect(() => {
    if (citiesStatus === 'idle') {
      dispatch(fetchCities())
    }
  }, [dispatch, citiesStatus])

  console.log(cities)
  const ilce = [
    {
      id: 1,
      value: "Kadıköy",
      label: "Kadıköy",
    },
    {
      id: 2,
      value: "Osmangazi",
      label: "Osmangazi",
    },
    {
      id: 3,
      value: "Osmanpaşa",
      label: "Osmanpaşa",
    }
  ]
  const mahalle = [
    {
      id: 1,
      value: "Veri 1",
      label: "Veri 1",
    },
    {
      id: 2,
      value: "Veri 2",
      label: "Veri 2",
    },
    {
      id: 3,
      value: "Veri 3",
      label: "Veri 3",
    }
  ]

  console.log("address", address)
  return (
    <form className='flex flex-col gap-4'>
      <SearchableDropdown searchable selectedItem={setAddress} prevItems={address} name="il" options={il} />
      <SearchableDropdown selectedItem={setAddress} prevItems={address} name="ilce" options={ilce} />
      <SearchableDropdown selectedItem={setAddress} prevItems={address} name="mahalle" options={mahalle} />
    </form>
    // <Form name="control-hooks" onFinish={onFinish}>
    //   <Form.Item name="il" rules={[{ required: true }]}>
    //     <Select
    //       className={'searchSelect'}
    //       showSearch
    //       placeholder="İl seçiniz"
    //       optionFilterProp="children"
    //       filterOption={(input, option) =>
    //         (option!.children as unknown as string).includes(input)
    //       }
    //       filterSort={(optionA, optionB) =>
    //         (optionA!.children as unknown as string)
    //           .toLowerCase()
    //           .localeCompare(
    //             (optionB!.children as unknown as string).toLowerCase()
    //           )
    //       }
    //     >
    //       <Option value="1">Not Identified</Option>
    //       <Option value="2">Closed</Option>
    //       <Option value="3">Communicated</Option>
    //       <Option value="4">Identified</Option>
    //       <Option value="5">Resolved</Option>
    //       <Option value="6">Cancelled</Option>
    //     </Select>
    //   </Form.Item>
    //   <Form.Item name="ilce" rules={[{ required: true }]}>
    //     <Select
    //       className={styles.searchSelect}
    //       showSearch
    //       placeholder="İlçe seçiniz"
    //       optionFilterProp="children"
    //       filterOption={(input, option) =>
    //         (option!.children as unknown as string).includes(input)
    //       }
    //       filterSort={(optionA, optionB) =>
    //         (optionA!.children as unknown as string)
    //           .toLowerCase()
    //           .localeCompare(
    //             (optionB!.children as unknown as string).toLowerCase()
    //           )
    //       }
    //     >
    //       <Option value="1">Not Identified</Option>
    //       <Option value="2">Closed</Option>
    //       <Option value="3">Communicated</Option>
    //       <Option value="4">Identified</Option>
    //       <Option value="5">Resolved</Option>
    //       <Option value="6">Cancelled</Option>
    //     </Select>
    //   </Form.Item>
    //   <Form.Item name="mahalle" rules={[{ required: true }]}>
    //     <Select
    //       className={styles.searchSelect}
    //       showSearch
    //       placeholder="Mahalle seçiniz"
    //       optionFilterProp="children"
    //       filterOption={(input, option) =>
    //         (option!.children as unknown as string).includes(input)
    //       }
    //       filterSort={(optionA, optionB) =>
    //         (optionA!.children as unknown as string)
    //           .toLowerCase()
    //           .localeCompare(
    //             (optionB!.children as unknown as string).toLowerCase()
    //           )
    //       }
    //     >
    //       <Option value="1">Not Identified</Option>
    //       <Option value="2">Closed</Option>
    //       <Option value="3">Communicated</Option>
    //       <Option value="4">Identified</Option>
    //       <Option value="5">Resolved</Option>
    //       <Option value="6">Cancelled</Option>
    //     </Select>
    //   </Form.Item>
    //   <Form.Item>
    //     <Button htmlType="submit" className="primary-button">
    //       Kaydet
    //     </Button>
    //   </Form.Item>
    // </Form>
  );
};
