import React, { FC } from 'react';
import Link from 'next/link';
const topMenu = [
  {
    name: 'Siparişlerim',
    href: '/',
  },
  {
    name: 'Süper Fiyat, Süper Teklif',
    href: '/',
  },
  {
    name: 'Yurt Dışından',
    href: '/',
  },
  {
    name: 'Kampanyalar',
    href: '/',
  },
  {
    name: 'Girişimci Kadınlar',
    href: '/',
  },
  {
    name: 'Çözüm Merkezi',
    href: '/',
  },
];
export const TopBar: FC = () => {
  return (
    <div className="flex justify-end py-3">
      <ul className="flex items-center gap-5">
        {topMenu.map((item) => (
          <li key={item.name}>
            <Link href={item.href}>
              <a className="text-xs text-secondary-lightGray font-semibold">
                {item.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
