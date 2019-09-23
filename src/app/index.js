import React, { useState, useEffect } from "react";
import "./app.css";
import Canvas from '../canvas';

const App = () => {
  const [canvasHeight, setCanvasHeight] = useState(0);
  const [canvasWidth, setCanvasWidth] = useState(0);
  const onResize = () => {
    setCanvasHeight(window.innerHeight);
    setCanvasWidth(window.innerWidth);
  };

  useEffect(() => {
    onResize();
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <Canvas
      height={canvasHeight}
      width={canvasWidth}
      tool={"draw"}
    />
  );
};

export default App;