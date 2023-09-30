import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import JOBS from '../public/jobs.json';
import styles from '../styles/Task.module.css';

const jobs = [...JOBS].map((job, index) => ({ ...job, id: index + 1 }));

const Task = () => {
  const [selected, setActive] = useState(4);

  const [classes, setClasses] = useState([]);

  const [selectedClass, setActiveClass] = useState(0);

  const carouselRef = useRef(null);

  const [styleList, setStyleList] = useState([]);

  const setStyle = (styles) => {
    if (styles?.length) {
      const resultSort = styles.sort((a, b) => a.cateIndex - b.cateIndex);
      const result = resultSort.map((style) => {
        const { xtrans, scale, zIndex, opacity } = style;
        const transform = `translate(${xtrans - 50}%, ${
          0 - 50
        }%) scale(${scale})`;
        return {
          zIndex,
          transform,
          display: opacity === 0 ? 'none' : 'inline-block',
        };
      });
      setStyleList(result);
    }
    return [];
  };

  const mod = (n, m) => ((n % m) + m) % m;

  useEffect(() => {
    if (selected) {
      const currentJob = jobs.find((job) => job.id === selected);
      if (currentJob && currentJob.classes) setClasses(currentJob.classes);
      else setClasses([]);
    }
  }, [selected]);

  const arrangeHandler = (active) => {
    if (typeof active === 'number' && active <= styleList.length) {
      setActiveClass(active);
    }
  };

  const arrange = (centerIndex) => {
    const catesReference = carouselRef.current;
    if (catesReference.children && classes?.length) {
      setStyleList([]);
      const half = (classes.length - 1) / 2;

      const before = [];
      for (let i = centerIndex - 1; before.length < half; i--) {
        const cateIndex = mod(i, classes.length);
        before.push({
          cateIndex,
          zIndex: 0,
          xtrans: 0,
          scale: 1,
          opacity: 1,
        });
      }

      const after = [];
      for (
        let i = centerIndex + 1;
        after.length < classes.length - before.length - 1;
        i++
      ) {
        const cateIndex = mod(i, classes.length);
        after.push({
          cateIndex,
          zIndex: 0,
          xtrans: 0,
          scale: 1,
          opacity: 1,
        });
      }

      // console.log(before, after);

      const centerZIndex = Math.max(before.length, after.length) + 1;
      const beforeItems = beforeSetStyle(before, 0);
      const afterItems = beforeSetStyle(after, 1);
      const sequenceList = [
        ...beforeItems,
        {
          cateIndex: centerIndex,
          xtrans: 0,
          scale: 1,
          opacity: 1,
          zIndex: centerZIndex,
        },
        ...afterItems,
      ];

      setStyle(sequenceList);

      function beforeSetStyle(list, listIndex) {
        let parentTrans = 0;
        if (list?.length) {
          return list.map((item, i) => {
            const scale = 0.8 ** (i + 1);
            const absolute = 105 * scale * 1.125 + parentTrans;
            parentTrans = absolute;
            const xtrans = (listIndex === 0 ? -1 : 1) * absolute;
            // eslint-disable-next-line no-mixed-operators
            const opacity = Math.max(1 - 0.25 * (i / 2 + 1) ** 2, 0);
            const zIndex = Math.max(before.length, after.length) - i;
            return {
              cateIndex: item.cateIndex,
              xtrans,
              scale,
              opacity,
              zIndex,
            };
          });
        }
        return [];
      }
    }
  };

  useEffect(() => {
    if (
      carouselRef.current.children.length &&
      typeof selectedClass === 'number'
    ) {
      arrange(selectedClass);
    }
  }, [carouselRef.current?.children, selectedClass]);

  return (
    <div className="container mx-auto text-center text-white">
      <h1 className="h-auto w-full py-4 text-center text-2xl text-yellow-300">
        職業
      </h1>
      <ul className="mb-16 flex w-full justify-center">
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
      <div
        className={`mx-0 flex justify-between ${styles.carousel}`}
        ref={carouselRef}
        style={{
          minWidth: '100%',
          position: 'relative',
          zIndex: 10,
          overflowX: 'visible',
          padding: '130px 0',
        }}
      >
        {classes?.length
          ? classes.map((item, index) => {
              return (
                <button
                  key={`class${index}`}
                  className={`${styles.gametype} side reset ${
                    selectedClass === index ? styles.center : ''
                  }`}
                  style={{
                    ...styleList[index],
                  }}
                  onClick={() => arrangeHandler(index)}
                >
                  <iframe
                    src={`/images/classes/${item}.svg`}
                    className="d-block pointer-events-none h-full w-full"
                  ></iframe>
                </button>
              );
            })
          : ''}
      </div>
    </div>
  );
};

export default Task;
