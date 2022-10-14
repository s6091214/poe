// import Head from 'next/head'
// import Image from 'next/image'
import data from "../public/task.json";
import { useBoolean } from "@chakra-ui/react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const { task } = data;
  const [active, setActive] = useBoolean();

  return (
    <div className={"flex justify-center flex-col items-center"}>
      <div className="py-4">
        {task.length > 0 &&
          task.map((item, index) => {
            const { title, content } = item;
            return (
              <div key={index}>
                <h1
                  className="text-3xl text-center font-bold mt-5"
                  style={{ color: "#af6025" }}
                >
                  {title}
                </h1>

                {content.map((item, idx) => {
                  return (
                    <div className="flex items-center" key={idx}>
                      <span>{`${idx + 1}.`}</span>
                      <input
                        className="mx-2"
                        type="checkbox"
                        name={`${title}_${idx}`}
                        id={`${title}_${idx}`}
                      />
                      <label
                        className="text-left text-xl cursor-pointer"
                        for={`${title}_${idx}`}
                      >
                        {item}
                      </label>
                    </div>
                  );
                })}
              </div>
            );
          })}
      </div>
    </div>
  );
}
