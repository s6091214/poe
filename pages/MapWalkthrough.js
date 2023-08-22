import { React, useState, useEffect } from 'react';

const jobs = [
  { name: '追獵', value: 'Deadeye', color: 'text-green-400' },
  { name: '死靈師(鑄影)', value: 'Necromancer', color: 'text-green-400' },
  { name: '待補', value: 'null', color: 'text-yellow-500' },
];

const MapTalent = () => {
  const [job, setJob] = useState('Deadeye');

  const selectJob = (job) => {
    if (job) setJob(job);
  };

  return (
    <div className="w-full">
      <div className="container mx-auto text-center">
        <h1 className="h-auto w-full py-4 text-center text-2xl text-yellow-300">
          後期刷圖轉型
        </h1>
        <div className="flex flex-wrap justify-center py-5">
          {jobs.map((item) => (
            <span
              key={item.name}
              className={`cursor-pointer px-5 text-xl ${
                job === item.value ? item.color : 'text-white'
              }`}
              onClick={() => selectJob(item.value)}
            >
              {item.name}
            </span>
          ))}
        </div>
        <div className="min-h-[50vh] w-full">
          {(() => {
            switch (job) {
              case 'Deadeye':
                return (
                  <div>
                    <div>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.pathofexile.com/passive-skill-tree/AAAABgIDeTQ_BnAUdfauRA3pdkrEjX1sCP_4P2wNjY2_9xOfbfUY1lSxMFuvYqz8xfsJbIzOqIAi9Hz3Pfba_5NQAPGKo4rveu5vwuwcX-sUW5kY2-na6NYZiuOwAiDextvntNMKm02ScOdB06CxtqlRR9N-Vsl6f9FvI_YL4viCEo7DOsjwSVLHnb18e2G6f9dwz3oaj3TxQNqyGUV-h3YvJLCSrRwDhyLqEjAlP5uNm7UuI3hpDlxzDgG8MgGExTu6f5ZAoHrvZKYwfKqkXhMY7yxkBS2SfgahJJ2SgAW1DHO0xUp9jZJR2WzZ_QEhYGJaN0xbjiynAAve8v_4U9z0fPWxcOdyHraphk_Rb5Y2C-LPDb18McvXcLoarRyQZ5J-schs2Q=="
                      >
                        <img
                          src={'/images/talent.png'}
                          alt="talent"
                          className="inline-block"
                        />
                      </a>
                      <img
                        src={'/images/talent-text-content.png'}
                        alt="talent"
                        className="inline-block"
                      />
                    </div>
                    <div className="pt-4 text-center text-xl text-yellow-500">
                      <h2 className="py-2 text-2xl text-white">資料來源</h2>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://poe.ninja/pob/Wil"
                        className="block py-2"
                      >
                        忍者網
                      </a>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.youtube.com/watch?v=m5mpMynHyQ8&t=305s"
                        className="block py-2"
                      >
                        【流亡黯道3.21】毒火力弩炮 快速指南
                      </a>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.youtube.com/watch?v=H8TlLOT6OBo&t=346s"
                        className="block py-2"
                      >
                        【POE3.21】追獵毒雨砲台畢業機體！喝水各種坦uber王招式！歷代聯盟以來最舒服的體驗【Change】
                      </a>
                    </div>
                  </div>
                );
              case 'Necromancer':
                return (
                  <div>
                    <div>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.pathofexile.com/passive-skill-tree/AAAABgMDcVwU_EdKnwj07DhZ8ySwVeBakbzqakOiAB4Im4rZE75PGmyCHlvVFy8zcpAzL13AZoCkVcaTJyL0LJxsC--ISVHsii9vaxfWQWjyZ3ERlmqsqqkWb1haBLMLYWL042oEB9WLTLN98fAfZrpg-DbpU1IVJ20ZRv7XzzrGJy-npSqYUilFnX_GZp5WLho4Bx4reDpYH8eD24m82wvfsMaK7BhxshEtqn8y0ZhNpqyOvlXW-tI66ZBVqH2VLiSqLOKg5mTn-TevbIhAa9uMsXyDRUeSwfDVcLvT-0oumuDBxevuvKIGAWABZgFiAWcBZQFqBft9L125RdZBuhp98d9bqn-2LLyi"
                      >
                        <img
                          src={'/images/talent2.png'}
                          alt="talent"
                          className="inline-block"
                        />
                      </a>
                      <img
                        src={'/images/talent-text-content2.png'}
                        alt="talent"
                        className="inline-block"
                      />
                    </div>
                    <div className="pt-4 text-center text-xl text-yellow-500">
                      <h2 className="py-2 text-2xl text-white">資料來源</h2>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.youtube.com/watch?v=5GqLQafwJ2Y&list=WL&index=31&t=1024s"
                        className="block py-2"
                      >
                        POE 3.21
                        鑄影新手開荒指南/如何一拿到鑄影就有300萬輸出/最頂級的開荒流派之一
                      </a>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.youtube.com/watch?v=_EPN07rITJs&list=WL&index=33"
                        className="block py-2"
                      >
                        【POE 3.21
                        手把手教你玩死靈師/守護者赦免！最速章節拓荒系列/章節起手流派
                      </a>
                    </div>
                  </div>
                );
              default:
                return <div>none</div>;
            }
          })()}
        </div>
      </div>
    </div>
  );
};

export default MapTalent;
