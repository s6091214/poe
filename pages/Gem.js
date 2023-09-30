import React from 'react';
import Image from 'next/image';
import data from '../public/gem.json';

const Gem = () => {
  const { awakened } = data;
  const type = awakened.map((item) => item.type);
  const result = [...new Set(type)].join(',').split(',');
  const res = [...new Set(result)];

  const Items = (props) => {
    const { color, type } = props;
    return (
      <div className="inline-flex flex-col px-2">
        {awakened.map((item) => {
          const { label, attributes, img, level } = item;
          return (
            attributes === type && (
              <div
                className="inline-flex items-center text-xl"
                style={{ color: color }}
                key={label}
              >
                {img && (
                  <Image
                    src={`https://web.poecdn.com/${img}`}
                    alt="icon"
                    width={50}
                    height={50}
                    priority={true}
                  />
                )}
                {label}
                <span className="text-white">({'LV' + level})</span>
              </div>
            )
          );
        })}
        <div>
          {'數量'}
          {awakened.filter(({ attributes }) => attributes === type).length}
        </div>
      </div>
    );
  };

  return (
    <div className={'flex flex-col items-center justify-center pt-16'}>
      <div className="w-10/12">
        <h1 className="my-2 text-center text-2xl font-bold">
          {'覺醒寶石  '}
          {`數量${awakened.length}`}
        </h1>

        <div className="m-2 flex flex-wrap justify-evenly">
          {res.map((item) => {
            return (
              <div key={item} className="bg-blue-900 p-2">
                {item}
              </div>
            );
          })}
        </div>

        <div className="flex bg-gray-900 p-4">
          <Items color={'#d20000'} type={'str'} />
          <Items color={'#46a239'} type={'dex'} />
          <Items color={'#8888ff'} type={'int'} />
        </div>
      </div>
    </div>
  );
};

export default Gem;
