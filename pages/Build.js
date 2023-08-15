import { React, useState, useEffect } from 'react';

const Build = () => {
  const chapters = Array.from({ length: 8 }, (_, i) => `Act ${i + 1}`);
  const [active, setActive] = useState('Act 1');

  useEffect(() => {
    const activeAct = window.localStorage.getItem('activeAct', activeAct);
    if (activeAct) setActive(activeAct);
  }, []);

  const selectAct = (activeAct) => {
    if (activeAct) {
      setActive(activeAct);
      window.localStorage.setItem('activeAct', activeAct);
    }
  };

  return (
    <div
      className={
        'h-full w-full bg-black bg-poe bg-cover bg-fixed bg-no-repeat pt-16'
      }
    >
      <h1 className="h-auto w-full py-4 text-center text-2xl text-yellow-300">
        祖靈聯盟 3.22
      </h1>
      <div className="flex flex-wrap justify-center py-5">
        {chapters.map((title) => (
          <span
            key={title}
            className={`cursor-pointer px-5 ${
              active === title ? 'text-yellow-500' : 'text-white'
            }`}
            onClick={() => selectAct(title)}
          >
            {title}
          </span>
        ))}
      </div>
      <div className="container mx-auto flex flex-wrap">
        <div className="w-full px-1 sm:w-2/4">
          <h2 className="text-center text-xl text-green-400">追獵者毒雨</h2>
          <h3 className="text-center text-lg text-white">特色：拓荒穩定</h3>
          <h2 className="text-xl text-yellow-500">{active}</h2>
          <div className="content">
            {(() => {
              switch (active) {
                case 'Act 1':
                  return (
                    <div className="text-center text-2xl text-white">
                      <p className="p-2">
                        <span className="text-green-500">
                          腐蝕箭矢 + 穿透 + 幻影射手(Lv4)
                        </span>
                      </p>
                      <p className="p-2">
                        <span className="text-green-500">
                          彈片砲塔(Lv4) + 穿透 + 快速攻擊(Lv8) 幻步
                        </span>
                      </p>
                      <p className="p-2">
                        <span className="text-green-500">放血(Lv8)</span>
                        <span>(打典獄長)</span>
                        <span className="text-green-500">
                          {' '}
                          閃現射擊(Lv10) 凋零之步(Lv10)
                        </span>
                      </p>
                      <p className="p-2">
                        <span className="text-blue-500">清晰</span>
                        <span className="px-2">/</span>
                        <span className="text-red-500">活力</span>
                        <span>(看個人)</span>
                      </p>
                      <p>
                        <span>{'---殺完船長--> '}</span>
                        <span className="text-green-500">
                          腐蝕毒雨(Lv12) + 幻影射手 + 快速攻擊
                        </span>
                      </p>
                      <div className="mt-8 flex text-left">
                        <span className="flex-basis-[96px] flex-shrink-0 flex-grow-0">
                          Tips：
                        </span>
                        <div>
                          <p>磨刀石換鑑定卷軸</p>
                          <p>藍技能+鑄鋼戒指=冰抗戒指 *2 打海妖</p>
                          <p>海妖打完買砲塔圖騰輔助放身上練</p>
                        </div>
                      </div>
                      <p className="flex pt-4 text-left">
                        <span className="flex-basis-[96px] flex-shrink-0 flex-grow-0">
                          注意：
                        </span>
                        <span className="block">
                          弓跟箭袋稀有的要鑑定，前期選點傷高的。其他選連線都綠色即可，其他道具都撿起來賣，缺蛻變。
                        </span>
                      </p>
                      <img
                        src={'/images/act1.png'}
                        alt="talent"
                        className="mx-auto mt-4 block"
                      />
                    </div>
                  );
                case 'Act 2':
                  return (
                    <div className="text-center text-2xl text-white">
                      <p className="p-2">
                        <span className="text-green-500">腐蝕毒雨 +</span>
                        <span className="text-red-500"> 砲塔圖騰輔助 </span>
                        <span className="text-green-500">+ 快速攻擊</span>
                      </p>
                      <p className="p-2">
                        <span className="text-green-500">
                          閃現射擊 凋零之步 幻步/
                        </span>
                        <span className="text-blue-500">霜濂之瞬</span>
                      </p>
                      <p className="p-2">
                        <span className="text-blue-500">探測機獸 </span>
                        <span className="text-green-500">
                          鮮血狂怒/狂怒 + 低階多重
                        </span>
                        <span>(手拿綠球麻煩)</span>
                      </p>
                      <p className="p-2">
                        <span>盜賊天賦全殺</span>
                      </p>
                      <p className="flex text-left">
                        <span className="flex-basis-[96px] flex-shrink-0 flex-grow-0">
                          注意：
                        </span>
                        <span className="block">
                          弓找攻速快的基底即可，些微點傷也可以幫助拓荒。
                        </span>
                      </p>
                      <img
                        src={'/images/act2.png'}
                        alt="talent"
                        className="mx-auto mt-4 block"
                      />
                    </div>
                  );
                case 'Act 3':
                  return (
                    <div className="text-center text-2xl text-white">
                      <p className="p-2">
                        <span className="pr-4">24等</span>
                        <span className="text-blue-500">探測機獸</span>
                        <span>換為</span>
                        <span className="text-blue-500">惡意/元素淨化/</span>
                        <span className="text-green-500">優雅</span>
                        <span className="text-blue-500"> 絕望</span>
                      </p>
                      <p className="p-2">
                        <span className="text-green-500">
                          腐蝕毒雨 + 幻影射手 + 虛空操作 +{' '}
                        </span>
                        <span className="text-blue-500">效能 </span>
                      </p>
                      <p className="p-2">
                        <span className="text-green-500">腐蝕毒雨 +</span>
                        <span className="text-red-500"> 砲台輔助 </span>
                        <span className="text-green-500">+ 快速攻擊 + </span>
                        <span className="text-blue-500">效能 </span>
                      </p>
                      <p className="p-2">
                        <span className="text-green-500">
                          閃現射擊 凋零之步 幻步/
                        </span>
                        <span className="text-blue-500">霜濂之瞬</span>
                      </p>
                      <p className="p-2">
                        <span className="pr-4">怕死可補</span>
                        <span className="text-red-500">
                          鋼筋鐵骨(卡鍵)/不朽怒號 + 受傷施放
                        </span>
                      </p>
                      <p className="flex text-left">
                        <span className="flex-basis-[96px] flex-shrink-0 flex-grow-0">
                          注意：
                        </span>
                        <span className="block">
                          這裡請按照自己防禦面傷害做決定，如果生命抗性都覺得足夠，選惡意。
                          抗性都低於 50%
                          且為了第六章，選元素淨化。抗性夠高還想更多防禦面，選優雅永不過時。
                        </span>
                      </p>
                      <img
                        src={'/images/act3-1.png'}
                        alt="talent"
                        className="mx-auto mt-4 block"
                      />
                      <img
                        src={'/images/act3-2.png'}
                        alt="talent"
                        className="mx-auto mt-4 block"
                      />
                      <img
                        src={'/images/act3-3.png'}
                        alt="talent"
                        className="mx-auto mt-4 block"
                      />
                    </div>
                  );
                default:
                  return (
                    <div className="text-center text-2xl text-white">
                      <p className="p-2">
                        <span>接下來都不用換直到昇華3進圖</span>
                      </p>
                      <p className="p-2">
                        <span className="text-green-500">
                          腐蝕毒雨 + 幻影射手 + 虛空操作 +{' '}
                        </span>
                        <span className="text-blue-500">效能 + </span>
                        <span className="text-green-500">
                          猛毒投射物/撲殺 +{' '}
                        </span>
                        <span className="text-red-500">活栓/賦予</span>
                      </p>
                      <p className="p-2">
                        <span className="text-green-500">腐蝕毒雨 +</span>
                        <span className="text-red-500"> 砲台輔助 </span>
                        <span className="text-green-500">+ 快速攻擊 + </span>
                        <span className="text-blue-500">效能 + </span>
                        <span className="text-green-500">
                          猛毒投射物 + 虛空操作 +{' '}
                        </span>
                        <span className="text-red-500">活栓/賦予</span>
                      </p>
                      <p>
                        <span className="text-green-500">
                          閃現射擊 凋零之步 幻步/
                        </span>
                        <span className="text-blue-500">霜濂之瞬/烈焰衝刺</span>
                      </p>
                      <p>
                        <span className="text-green-500">
                          鮮血狂怒 狂怒 + 低接多重投射(選用)
                        </span>
                        <span className="text-blue-500">霜濂之瞬/烈焰衝刺</span>
                      </p>
                      <p>
                        <span className="text-green-500">優雅 </span>
                        <span className="text-blue-500">惡意 </span>
                        <span className="text-blue-500">絕望 </span>
                        <span className="text-red-500">石化之血</span>
                      </p>
                      <p className="p-2">
                        <span className="text-red-500">
                          受傷施放 + 不朽怒號 + 持續時間延長 + 活栓
                        </span>
                      </p>
                      <p className="p-2">
                        <span>還有位置可放</span>
                        <span className="text-green-500">瓦爾迅捷</span>
                        <span>爆發</span>
                      </p>
                      <img
                        src={'/images/later.png'}
                        alt="talent"
                        className="mx-auto mt-4 block"
                      />
                      <img
                        src={'/images/later-2.png'}
                        alt="talent"
                        className="mx-auto mt-4 block"
                      />
                      <img
                        src={'/images/later-3.png'}
                        alt="talent"
                        className="mx-auto mt-4 block"
                      />
                    </div>
                  );
              }
            })()}
          </div>
          <div className="py-4 text-center text-xl text-yellow-500">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.youtube.com/watch?v=RboSg_BWG-o"
            >
              資料來源 Yotuber Change
            </a>
          </div>
        </div>
        <div className="w-full px-1 sm:w-2/4">
          <h2 className="text-center text-xl text-green-400">
            赦免轉鑄影(死靈 or 守護者)
          </h2>
          <h3 className="text-center text-lg text-white"></h3>
          <h2 className="text-xl text-yellow-500">{active}</h2>
          <div className="content">
            {(() => {
              switch (active) {
                case 'Act 1':
                  return (
                    <div className="text-center text-2xl text-white">
                      <p className="p-2">
                        <span className="text-blue-500">
                          冰霜脈衝 + 秘能波動輔助
                        </span>
                      </p>
                      <p className="p-2">
                        <span>拿完跑水後</span>
                      </p>
                      <p className="p-2">
                        <span className="text-blue-500">召喚幻影輔助</span>
                        <span className="text-red-500"> + 神聖火舌圖騰 + </span>
                        <span className="text-blue-500">燃燒輔助</span>
                      </p>
                      <p className="p-2">
                        <span className="text-blue-500">烈焰之牆</span>
                      </p>
                      <p className="p-2">
                        <span className="text-blue-500">
                          霜濂之瞬 + 秘能波動輔助
                        </span>
                        <span>(只需 2 等)</span>
                      </p>
                      <p className="p-2">
                        <span className="text-blue-500">
                          寒霜爆 + 秘能波動輔助
                        </span>
                      </p>
                      <p className="p-2">
                        <span>打完船長後</span>
                      </p>
                      <p className="p-2">
                        <span className="text-red-500">赦免 + </span>
                        <span className="text-green-500">附加冰冷傷害 + </span>
                        <span className="text-blue-500">附加閃電傷害</span>
                      </p>
                      <p className="p-2">
                        <span className="pr-2">丟掉</span>
                        <span className="pr-2 text-blue-500">冰霜脈衝</span>
                        <span className="pr-2 text-red-500">神聖火舌圖騰</span>
                        <span className="pr-2 text-blue-500">烈焰之牆</span>
                        <span className="text-blue-500">寒霜爆</span>
                      </p>
                      <div className="flex">
                        <img
                          src={'/images/tip1.png'}
                          alt="talent"
                          className="mx-auto mt-4 block"
                        />
                        <img
                          src={'/images/tip2.png'}
                          alt="talent"
                          className="mx-auto mt-4 block"
                        />
                      </div>
                      <img
                        src={'/images/build1.png'}
                        alt="talent"
                        className="mx-auto mt-4 block"
                      />
                    </div>
                  );
                case 'Act 2':
                  return (
                    <div className="text-center text-2xl text-white">
                      <p className="p-2">
                        <span>拿到邪影寶石後</span>
                      </p>
                      <p className="p-2">
                        <span className="text-red-500">純淨之捷 + </span>
                        <span className="text-blue-500">附加閃電傷害</span>
                        <span className="text-green-500">
                          {'(附加冰冷傷害) + '}
                        </span>
                        <span className="text-blue-500">幻影召喚輔助</span>
                      </p>
                      <p className="p-2">
                        <span className="text-blue-500">閃電之捷</span>
                      </p>
                      <p className="p-2">
                        <span>跑完織網者巢穴</span>
                      </p>
                      <p className="p-2">
                        <span className="ml-5 text-green-500">褻瀆 + </span>
                        <span className="ml-5 text-blue-500">
                          秘能波動輔助 + 快速施放
                        </span>
                      </p>
                    </div>
                  );
                case 'Act 3':
                  return (
                    <div className="text-center text-2xl text-white">
                      <p className="p-2">
                        <span>打格拉維奇將軍後</span>
                      </p>
                      <p className="p-2">
                        <span className="text-red-500">脆弱</span>
                      </p>
                      <p className="p-2">
                        <span className="text-blue-500">
                          號召 喚醒幽魂(河道抓冥河銀背獸)
                        </span>
                      </p>
                      <p className="p-2">
                        <span>解完圖書館黃金之頁</span>
                      </p>
                      <p className="p-2">
                        <span className="text-red-500">純淨之捷 + </span>
                        <span className="text-blue-500">
                          豢養狂熱 + 召喚幻影輔助 +{' '}
                        </span>
                        <span className="text-red-500">癱瘓輔助</span>
                      </p>
                      <p className="p-2">
                        <span className="text-red-500">
                          重盾衝鋒 or 躍擊 +{' '}
                        </span>
                        <span className="text-green-500">快速攻擊</span>
                      </p>
                      <p className="p-2">
                        <span className="text-red-500">堅定</span>
                        <span>(點完光環圈可開)</span>
                      </p>
                    </div>
                  );
                default:
                  return (
                    <div className="text-center text-2xl text-white">
                      <p className="text-right text-3xl">
                        洞色連線不夠不用強求
                      </p>
                      <p className="p-2">
                        <span>打福爾拿旗子 {'=>'} 開啟礦坑門後</span>
                      </p>
                      <p className="p-2">
                        <span className="text-blue-500">
                          食腐魔像 + 豢養狂熱 +{' '}
                        </span>
                        <span className="text-red-500">癱瘓輔助</span>
                      </p>
                      <p className="p-2">
                        <span className="text-red-500">赦免 + </span>
                        <span className="text-blue-500">
                          召喚幻影輔助 + 附加閃電傷害 + 快速施放
                        </span>
                      </p>
                      <p className="p-2">
                        <span className="text-red-500">純淨之捷</span>
                      </p>
                      <p className="p-2">
                        <span className="text-blue-500">
                          喚醒幽魂 + 召喚生命輔助
                        </span>
                      </p>
                      <p className="p-2">
                        <span className="text-blue-500">霜濂之瞬/</span>
                        <span className="text-red-500">
                          重盾衝鋒 or 躍擊 +{' '}
                        </span>
                        <span className="text-green-500">快速攻擊/</span>
                        <span className="text-blue-500">號召</span>
                      </p>
                      <img
                        src={'/images/build2.png'}
                        alt="talent"
                        className="mx-auto mt-4 block"
                      />
                      <img
                        src={'/images/build3.png'}
                        alt="talent"
                        className="mx-auto mt-4 block"
                      />
                    </div>
                  );
              }
            })()}
          </div>
          <div className="py-4 text-center text-xl text-yellow-500">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.youtube.com/watch?v=_EPN07rITJs&list=WL&index=33"
            >
              資料來源 Yotuber 惡魔貓和幾吉和點點
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Build;
