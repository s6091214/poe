import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import JOBS from '../public/jobs.json';

const jobs = [...JOBS].map((job, index) => ({ ...job, id: index + 1 }));

const Task = () => {
  const [selected, setActive] = useState(4);

  const [classes, setClasses] = useState([]);

  useEffect(() => {
    if (selected) {
      const currentJob = jobs.find((job) => job.id === selected);
      if (currentJob && currentJob.classes) setClasses(currentJob.classes);
      else setClasses([]);
    }
  }, [selected]);

  return (
    <div className="container mx-auto text-center text-white">
      <h1 className="h-auto w-full py-4 text-center text-2xl text-yellow-300">
        職業
      </h1>
      <ul className="flex w-full justify-center">
        {jobs.map((job) => {
          return (
            <li
              className="flex cursor-pointer flex-col items-center px-2"
              onClick={() => setActive(job.id)}
              key={job.id}
            >
              <div
                className={`p-2 text-[0] ${
                  selected === job.id ? 'bg-green-300' : ''
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
      <div className="carousel flex">
        {/* <button
          v-for="(cate, index) in cates"
          :key="cate.code"
          class="gametype side reset"
          :class="{ center: gameType === cate.type }"
          :style="styleArray[index]"
          @click="$emit('set-cate', cate.type)"
        >
          <span
            class="gameUnit"
            :style="{
              backgroundImage: `url(${imgBaseUrl}/images/cates/content_${cate.type}.png)`,
            }"
          ></span>
        </button> */}
      </div>
    </div>
  );
};

export default Task;
