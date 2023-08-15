import { React, useState } from 'react';

const Tips = () => {
  const [active, selectTab] = useState(0);
  const btns = ['中文化', '過濾器'];

  return (
    <div>
      <h1 className="h-auto w-full py-4 text-center text-2xl text-yellow-300">
        國際服豆知識
      </h1>
      <div className="flex flex-wrap justify-center py-5">
        {btns.map((title, index) => (
          <span
            key={title}
            className={`cursor-pointer px-5 ${
              active === index ? 'text-yellow-500' : 'text-white'
            }`}
            onClick={() => selectTab(index)}
          >
            {title}
          </span>
        ))}
      </div>
      <div className="container mx-auto flex">
        <div className="content text-center text-white">
          {(() => {
            switch (active) {
              case 0:
                return (
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://poedb.tw/tw/chinese#blog27"
                  >
                    流亡編年史
                  </a>
                );
              case 1:
                return (
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://forum.gamer.com.tw/C.php?bsn=18966&snA=121633"
                  >
                    巴哈姆特
                  </a>
                );

              default:
                return '';
            }
          })()}
        </div>
      </div>
    </div>
  );
};

export default Tips;
