import React, { useState } from 'react';
import Image from 'next/image';
import JOBS from '../public/jobs.json';

const Task = () => {
  const [selected, setActive] = useState(3);

  return (
    <div className="container mx-auto text-center text-white">
      <h1 className="h-auto w-full py-4 text-center text-2xl text-yellow-300">
        職業
      </h1>
      <ul className="flex w-full justify-center">
        {JOBS.map((job, index) => {
          return (
            <li
              className="flex cursor-pointer flex-col items-center px-2"
              onClick={() => setActive(index)}
              key={`class${index}`}
            >
              <div
                className={`p-2 text-[0] ${
                  selected === index ? 'bg-green-300' : ''
                }`}
              >
                {job.img && (
                  <Image
                    src={job.img}
                    alt="icon"
                    width={100}
                    height={100}
                    priority={true}
                  />
                )}
              </div>
              <span className="">{job.name}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Task;
