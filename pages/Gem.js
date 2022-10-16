import React from "react";
import Image from "next/image";
import data from "../public/gem.json";

const Gem = () => {
  const { awakened } = data;
  const type = awakened.map((item) => item.type);
  const result = [...new Set(type)].join(",").split(",");
  const res = [...new Set(result)];

  const Items = (props) => {
    const { color, type } = props;
    return (
      <div className="px-2 inline-flex flex-col">
        {awakened.map((item) => {
          const { label, attributes, img, level } = item;
          return (
            attributes === type && (
              <div
                className="text-xl inline-flex items-center"
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
                <span className="text-white">({"LV" + level})</span>
              </div>
            )
          );
        })}
        <div>
          {"數量"}
          {awakened.filter(({ attributes }) => attributes === type).length}
        </div>
      </div>
    );
  };

  return (
    <div
      className={
        "flex justify-center flex-col items-center bg-black bg-fixed bg-cover bg-poe bg-no-repeat pt-16"
      }
    >
      <div className="w-10/12">
        <h1 className="text-2xl font-bold my-2 text-center">
          {"覺醒寶石  "}
          {`數量${awakened.length}`}
        </h1>

        <div className="flex m-2 justify-evenly flex-wrap">
          {res.map((item) => {
            return (
              <div key={item} className="p-2 bg-blue-900">
                {item}
              </div>
            );
          })}
        </div>

        <div className="flex bg-gray-900 p-4">
          <Items color={"#d20000"} type={"str"} />
          <Items color={"#46a239"} type={"dex"} />
          <Items color={"#8888ff"} type={"int"} />
        </div>
      </div>
    </div>
  );
};

export default Gem;
