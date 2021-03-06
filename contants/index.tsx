import { AppstoreOutlined, TagOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import Link from 'next/link'

type MenuItem = Required<MenuProps>['items'][number];
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}
export const items: MenuProps['items'] = [
  getItem('Ürünler', 'sub1', <TagOutlined />, [
    getItem(<Link href="/panel/categories">Kategoriler</Link>, 'categories'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12'),
  ]),

];
