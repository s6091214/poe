import React from "react";
import data from "../public/gem.json";

const Gem = () => {
  const { awakened } = data;
  const type = awakened.map((item) => item.type);
  const result = [...new Set(type)].join(",").split(",");
  const res = [...new Set(result)];
  
  return (
    <div
      className={
        "flex justify-center flex-col items-center bg-black bg-fixed bg-cover bg-poe bg-no-repeat pt-16"
      }
    >
      <div className="w-10/12">
        <h1 className="text-2xl font-bold my-2 text-center">
          {"覺醒寶石/"}
          {awakened.length}
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
          <div className="px-2">
            {awakened.map((item) => {
              const { label, attributes } = item;
              return (
                attributes === "str" && (
                  <div
                    className="text-xl"
                    style={{ color: "#d20000" }}
                    key={label}
                  >
                    {label}
                  </div>
                )
              );
            })}
          </div>

          <div className="px-2">
            {awakened.map((item) => {
              const { label, attributes } = item;
              return (
                attributes === "dex" && (
                  <div
                    className="text-xl"
                    style={{ color: "#46a239" }}
                    key={label}
                  >
                    {label}
                  </div>
                )
              );
            })}
          </div>

          <div className="px-2">
            {awakened.map((item) => {
              const { label, attributes } = item;
              return (
                attributes === "int" && (
                  <div
                    className="text-xl"
                    style={{ color: "#8888ff" }}
                    key={label}
                  >
                    {label}
                  </div>
                )
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gem;
