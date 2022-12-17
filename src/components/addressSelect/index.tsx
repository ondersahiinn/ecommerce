import SearchableDropdown from '@components/searchableDropdown';
import { Divider, Input, Select, Space, Button, Form } from 'antd';

import { useDispatch, useSelector } from 'react-redux';
import styles from './style.module.scss';
import axios from 'axios';
import { RootState } from '@redux/reducers';
import { fetchCities } from '@redux/slices/cities';
import { FormatterData } from 'contants';
import { INeighbour } from 'interfaces/cities';
import type { InputRef } from 'antd';
import { DropdownIcon, ThickIcon } from '@components/icons';
import HBSelect from '@components/select';
import { useState, useEffect } from 'react';
import { ISelectedLocation } from 'interfaces/selectedLocation';
import usePrevious from '@utils/hooks/usePrevious';
const { Option } = Select;


let index = 0;

export const AddressSelect: React.FC = () => {
  const [form] = Form.useForm();

  const [ilce, setIlce] = useState<ISelectedLocation[]>([])
  const prevIlce = usePrevious(ilce);
  const [items, setItems] = useState([
    {
      "id": "62fc14a0a6afd3a797c2198e",
      "label": "ADANA",
      "value": 1
    },
    {
      "id": "62fc14a0a6afd3a797c21989",
      "label": "ADIYAMAN",
      "value": 2
    },
    {
      "id": "62fc14a0a6afd3a797c219ad",
      "label": "AFYONKARAHİSAR",
      "value": 3
    },
    {
      "id": "62fc14a0a6afd3a797c2199e",
      "label": "AKSARAY",
      "value": 68
    },
    {
      "id": "62fc14a0a6afd3a797c21995",
      "label": "AMASYA",
      "value": 5
    },
    {
      "id": "62fc14a0a6afd3a797c2198a",
      "label": "ANKARA",
      "value": 6
    },
    {
      "id": "62fc14a0a6afd3a797c219b4",
      "label": "ANTALYA",
      "value": 7
    },
    {
      "id": "62fc14a0a6afd3a797c219b9",
      "label": "ARDAHAN",
      "value": 75
    },
    {
      "id": "62fc14a0a6afd3a797c219ae",
      "label": "ARTVİN",
      "value": 8
    },
    {
      "id": "62fc14a0a6afd3a797c219aa",
      "label": "AYDIN",
      "value": 9
    },
    {
      "id": "62fc14a0a6afd3a797c219af",
      "label": "AĞRI",
      "value": 4
    },
    {
      "id": "62fc14a0a6afd3a797c219a0",
      "label": "BALIKESİR",
      "value": 10
    },
    {
      "id": "62fc14a0a6afd3a797c21983",
      "label": "BARTIN",
      "value": 74
    },
    {
      "id": "62fc14a0a6afd3a797c219ab",
      "label": "BATMAN",
      "value": 72
    },
    {
      "id": "62fc14a0a6afd3a797c21980",
      "label": "BAYBURT",
      "value": 69
    },
    {
      "id": "62fc14a0a6afd3a797c219be",
      "label": "BOLU",
      "value": 14
    },
    {
      "id": "62fc149aa6afd3a797c21975",
      "label": "BURDUR",
      "value": 15
    },
    {
      "id": "62fc14a0a6afd3a797c2197f",
      "label": "BURSA",
      "value": 16
    },
    {
      "id": "62fc14a0a6afd3a797c219c0",
      "label": "BİLECİK",
      "value": 11
    },
    {
      "id": "62fc14a0a6afd3a797c219c4",
      "label": "BİNGÖL",
      "value": 12
    },
    {
      "id": "62fc14a0a6afd3a797c219ac",
      "label": "BİTLİS",
      "value": 13
    },
    {
      "id": "62fc14a0a6afd3a797c219a1",
      "label": "DENİZLİ",
      "value": 20
    },
    {
      "id": "62fc14a0a6afd3a797c219ba",
      "label": "DÜZCE",
      "value": 81
    },
    {
      "id": "62fc14a0a6afd3a797c21992",
      "label": "DİYARBAKIR",
      "value": 21
    },
    {
      "id": "62fc14a0a6afd3a797c219c5",
      "label": "EDİRNE",
      "value": 22
    },
    {
      "id": "62fc14a0a6afd3a797c21999",
      "label": "ELAZIĞ",
      "value": 23
    },
    {
      "id": "62fc14a0a6afd3a797c219b8",
      "label": "ERZURUM",
      "value": 25
    },
    {
      "id": "62fc14a0a6afd3a797c21996",
      "label": "ERZİNCAN",
      "value": 24
    },
    {
      "id": "62fc149ca6afd3a797c21976",
      "label": "ESKİŞEHİR",
      "value": 26
    },
    {
      "id": "62fc14a0a6afd3a797c2197a",
      "label": "GAZİANTEP",
      "value": 27
    },
    {
      "id": "62fc14a0a6afd3a797c2197d",
      "label": "GÜMÜŞHANE",
      "value": 29
    },
    {
      "id": "62fc14a0a6afd3a797c219a8",
      "label": "GİRESUN",
      "value": 28
    },
    {
      "id": "62fc14a0a6afd3a797c21998",
      "label": "GİRNE (KIBRIS)",
      "value": 502
    },
    {
      "id": "62fc14a0a6afd3a797c2199b",
      "label": "HAKKARİ",
      "value": 30
    },
    {
      "id": "62fc14a0a6afd3a797c2197b",
      "label": "HATAY",
      "value": 31
    },
    {
      "id": "62fc14a0a6afd3a797c21997",
      "label": "ISPARTA",
      "value": 32
    },
    {
      "id": "62fc14a0a6afd3a797c21990",
      "label": "IĞDIR",
      "value": 76
    },
    {
      "id": "62fc14a0a6afd3a797c219b7",
      "label": "KAHRAMANMARAŞ",
      "value": 46
    },
    {
      "id": "62fc14a0a6afd3a797c2199a",
      "label": "KARABÜK",
      "value": 78
    },
    {
      "id": "62fc14a0a6afd3a797c219c7",
      "label": "KARAMAN",
      "value": 70
    },
    {
      "id": "62fc14a0a6afd3a797c2199c",
      "label": "KARS",
      "value": 36
    },
    {
      "id": "62fc14a0a6afd3a797c219b5",
      "label": "KASTAMONU",
      "value": 37
    },
    {
      "id": "62fc14a0a6afd3a797c2197c",
      "label": "KAYSERİ",
      "value": 38
    },
    {
      "id": "62fc14a0a6afd3a797c219c6",
      "label": "KIRIKKALE",
      "value": 71
    },
    {
      "id": "62fc14a0a6afd3a797c219a6",
      "label": "KIRKLARELİ",
      "value": 39
    },
    {
      "id": "62fc14a0a6afd3a797c2198f",
      "label": "KIRŞEHİR",
      "value": 40
    },
    {
      "id": "62fc14a0a6afd3a797c21979",
      "label": "KOCAELİ",
      "value": 41
    },
    {
      "id": "62fc14a0a6afd3a797c21987",
      "label": "KONYA",
      "value": 42
    },
    {
      "id": "62fc14a0a6afd3a797c219bf",
      "label": "KÜTAHYA",
      "value": 43
    },
    {
      "id": "62fc14a0a6afd3a797c219c2",
      "label": "KİLİS",
      "value": 79
    },
    {
      "id": "62fc14a0a6afd3a797c21994",
      "label": "LEFKOŞE (KIBRIS)",
      "value": 501
    },
    {
      "id": "62fc14a0a6afd3a797c2199f",
      "label": "MALATYA",
      "value": 44
    },
    {
      "id": "62fc14a0a6afd3a797c21991",
      "label": "MANİSA",
      "value": 45
    },
    {
      "id": "62fc14a0a6afd3a797c219b6",
      "label": "MARDİN",
      "value": 47
    },
    {
      "id": "62fc14a0a6afd3a797c21984",
      "label": "MAĞUSA (KIBRIS)",
      "value": 503
    },
    {
      "id": "62fc14a0a6afd3a797c21985",
      "label": "MERSİN",
      "value": 33
    },
    {
      "id": "62fc14a0a6afd3a797c219a4",
      "label": "MUĞLA",
      "value": 48
    },
    {
      "id": "62fc14a0a6afd3a797c219a2",
      "label": "MUŞ",
      "value": 49
    },
    {
      "id": "62fc14a0a6afd3a797c219b1",
      "label": "NEVŞEHİR",
      "value": 50
    },
    {
      "id": "62fc14a0a6afd3a797c21986",
      "label": "NİĞDE",
      "value": 51
    },
    {
      "id": "62fc14a0a6afd3a797c2198c",
      "label": "ORDU",
      "value": 52
    },
    {
      "id": "62fc14a0a6afd3a797c21978",
      "label": "OSMANİYE",
      "value": 80
    },
    {
      "id": "62fc14a0a6afd3a797c2198d",
      "label": "RİZE",
      "value": 53
    },
    {
      "id": "62fc14a0a6afd3a797c2197e",
      "label": "SAKARYA",
      "value": 54
    },
    {
      "id": "62fc14a0a6afd3a797c219bb",
      "label": "SAMSUN",
      "value": 55
    },
    {
      "id": "62fc14a0a6afd3a797c21982",
      "label": "SİNOP",
      "value": 57
    },
    {
      "id": "62fc14a0a6afd3a797c219b3",
      "label": "SİVAS",
      "value": 58
    },
    {
      "id": "62fc14a0a6afd3a797c219a7",
      "label": "SİİRT",
      "value": 56
    },
    {
      "id": "62fc14a0a6afd3a797c219a5",
      "label": "TEKİRDAĞ",
      "value": 59
    },
    {
      "id": "62fc14a0a6afd3a797c21988",
      "label": "TOKAT",
      "value": 60
    },
    {
      "id": "62fc14a0a6afd3a797c219b2",
      "label": "TRABZON",
      "value": 61
    },
    {
      "id": "62fc14a0a6afd3a797c219c3",
      "label": "TUNCELİ",
      "value": 62
    },
    {
      "id": "62fc14a0a6afd3a797c21993",
      "label": "UŞAK",
      "value": 64
    },
    {
      "id": "62fc14a0a6afd3a797c219bd",
      "label": "VAN",
      "value": 65
    },
    {
      "id": "62fc14a0a6afd3a797c219b0",
      "label": "YALOVA",
      "value": 77
    },
    {
      "id": "62fc14a0a6afd3a797c2198b",
      "label": "YOZGAT",
      "value": 66
    },
    {
      "id": "62fc14a0a6afd3a797c2199d",
      "label": "ZONGULDAK",
      "value": 67
    },
    {
      "id": "62fc14a0a6afd3a797c21981",
      "label": "ÇANAKKALE",
      "value": 17
    },
    {
      "id": "62fc149da6afd3a797c21977",
      "label": "ÇANKIRI",
      "value": 18
    },
    {
      "id": "62fc14a0a6afd3a797c219bc",
      "label": "ÇORUM",
      "value": 19
    },
    {
      "id": "62fc14a0a6afd3a797c219c1",
      "label": "İSTANBUL",
      "value": 34
    },
    {
      "id": "62fc14a0a6afd3a797c219c8",
      "label": "İZMİR",
      "value": 35
    },
    {
      "id": "62fc14a0a6afd3a797c219a9",
      "label": "ŞANLIURFA",
      "value": 63
    },
    {
      "id": "62fc14a0a6afd3a797c219a3",
      "label": "ŞIRNAK",
      "value": 73
    }
  ]);



  // const [address, setAddress] = useState([])


  // useEffect(() => {
  //   if (address.length !== 0) {
  //     selectedDropdown()
  //   }
  // }, [address])

  // const selectedDropdown = async () => {

  // }
  const citiesStatus = useSelector((state: RootState) => state.cities.status);
  const cities = useSelector((state: RootState) => state.cities.cities);
  const dispatch = useDispatch();
  useEffect(() => {
    if (citiesStatus === 'idle') {
      dispatch(fetchCities())
    }
  }, [dispatch, citiesStatus])

  const selectedCity = async (city: any) => {
    console.log(city)
    const res = await axios.get('/api/districts/byid?cityId=' + city)
    const formatted = FormatterData(res.data.data)
    setIlce(formatted)
    console.log(form.getFieldsValue())


    console.log("il seçimi", city)
  }
  const selectedNeig = (neighbour: any) => {
    console.log(form.getFieldsValue())

    console.log("selected neig", neighbour)
  }

  return (
    <Form className='flex flex-col' form={form}>
      <Form.Item name="il">
        <HBSelect items={FormatterData(cities)} placeholder={"İl Seçiniz"} selected={selectedCity} disabled={cities.length === 0 ? true : false} />
      </Form.Item>
      <Form.Item name="ilce">
        <HBSelect items={ilce} placeholder={"İlçe Seçiniz"} selected={selectedNeig} disabled={ilce.length === 0 ? true : false} />
      </Form.Item>

      {/* 
      <SearchableDropdown searchable selectedItem={selectedCity} type="il" options={FormatterData(cities)} disabled={cities.length === 0 ? true : false} />
      <SearchableDropdown selectedItem={selectedCity} type="ilce" options={FormatterData(ilce)} disabled={ilce.length === 0 ? true : false} /> */}
      {/* <SearchableDropdown selectedItem={setAddress} prevItems={address} name="mahalle" options={mahalle} /> */}
    </Form >

  );
};
