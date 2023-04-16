import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Canvas from './Canvas';

const linkConfig = [
  {
    src: '/',
    value: '首頁',
  },
  {
    src: '/Build',
    value: '拓荒流派',
  },
  {
    src: '/',
    value: '任務',
  },
  {
    src: '/Gem',
    value: '寶石',
  },
  {
    src: '/',
    value: '物品',
  },
  {
    src: '/',
    value: '詞綴 ',
  },
  {
    src: '/',
    value: '地圖 ',
  },
  {
    src: '/',
    value: '工具 ',
  },
];

const Layout = ({ children }) => {
  const [active, setActive] = useState('首頁');

  return (
    <>
      <div
        className="fixed z-10 flex h-16 w-full items-center"
        style={{
          backgroundImage:
            'linear-gradient(to top, lightgrey 0%, lightgrey 1%, #e0e0e0 26%, #efefef 48%, #d9d9d9 75%, #bcbcbc 100%)',
        }}
      >
        <Canvas />
        <Image
          src={'/images/logo.png'}
          alt="logo"
          width={48}
          height={48}
          priority
        />
        <ul className="flex w-9/12 items-center justify-center">
          {linkConfig.map(({ src, value }) => {
            return (
              <li
                key={value}
                className={`text-2xl font-bold hover:text-red-900
                ${active === value ? 'text-red-900' : 'text-white'}`}
                onClick={() => setActive(value)}
              >
                <Link href={src}>
                  <a className="p-3">{value}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <main className="min-h-screen">{children}</main>
    </>
  );
};

export default Layout;
