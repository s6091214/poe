import React, { useEffect } from "react";

const Canvas = () => {
  useEffect(() => {
    let canvas = document.querySelector("canvas");
    let ctx = canvas.getContext("2d");

    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    let dropCount = window.innerWidth / 15;
    let drops = [];

    for (let i = 0; i < dropCount; i++) {
      drops.push({ x: i * 15, y: Math.ceil(Math.random() * 60) * -15 });
    }

    const drop = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < dropCount; i++) {
        let text = String.fromCharCode(Math.random() * 128);
        if (drops[i].y > canvas.height) {
          drops[i].y = -15;
        }
        drops[i].y += 15;
        ctx.font = "15px monospace";
        ctx.fillStyle = "#00FF40";
        ctx.fillText(text, drops[i].x, drops[i].y);
      }
    };

    setInterval(drop, 50);

    window.addEventListener("resize", () => {
      canvas.height = window.innerHeight;
      canvas.width = window.innerWidth;
      dropCount = window.innerWidth / 15;
      drops = [];

      for (let i = 0; i < dropCount; i++) {
        drops.push({ x: i * 15, y: Math.ceil(Math.random() * 60) * -15 });
      }
    });
  }, []);
  return (
    <canvas
      className="h-full w-full absolute"
      style={{ zIndex: "-1" }}
    ></canvas>
  );
};

export default Canvas;
