import { React, useState, useEffect } from 'react';

const MapTalent = () => {
  return (
    <div className="w-full">
      <div className="container mx-auto pt-8 text-center">
        <img
          src={'/images/map-talent.png'}
          alt="talent"
          className="inline-block"
        />
        <div className="pt-4 text-center text-xl text-yellow-500">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.youtube.com/watch?v=acAGYnTpxjQ&t=6s"
          >
            資料來源 Yotuber Change
          </a>
        </div>
      </div>
    </div>
  );
};

export default MapTalent;
