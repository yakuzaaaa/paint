import React, { useState, useEffect } from "react";
import "./app.css";
import Canvas from '../canvas';
import Toolbox from "../toolbox";

const App = () => {
  const [canvasHeight, setCanvasHeight] = useState(0);
  const [canvasWidth, setCanvasWidth] = useState(0);
  const [canvasTranslation, setCanvasTranslation] = useState({x: 0, y: 0});
  const [toolboxWidth, setToolboxWidth] = useState(0);
  const [toolboxHeight, setToolboxHeight] = useState(0);

  const onResize = () => {
    const toolBoxWidth = (window.innerWidth * 0.20); // 20%  of the screen width
    const canvasWidth = window.innerWidth - toolBoxWidth;

    setToolboxHeight(window.innerHeight);
    setToolboxWidth(toolBoxWidth)
    setCanvasHeight(window.innerHeight);
    setCanvasWidth(canvasWidth);
    setCanvasTranslation({
      x: 0,
      y: toolBoxWidth
    });
  };

  useEffect(() => {
    onResize();
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div className="container rows">
      <div className="header"></div>
      <Toolbox width={toolboxWidth} height={toolboxHeight}/>
      <Canvas
        height={canvasHeight}
        width={canvasWidth}
        translation={canvasTranslation}
        tool={"draw"}
      />
    </div>
  );
};

export default App;