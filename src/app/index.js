import React, { useState, useEffect } from "react";
import "./app.css";
import Canvas from '../canvas';
import Toolbox from "../toolbox";

const initialAppState = {
  canvas: {
    width: 0,
    height: 0,
    translation: {
      x: 0,
      y: 0
    }
  },
  toolbox: {
    width: 0,
    height: 0,
    selectedTool: 'draw'
  }
}

const App = () => {
  const [appState, setAppState] = useState(initialAppState);

  const onResize = () => {
    const toolBoxWidth = window.innerWidth * 0.20; // 20%  of the screen width
    const canvasWidth = window.innerWidth - toolBoxWidth;

    setAppState({
      toolbox: {
        width: toolBoxWidth,
        height: window.innerHeight
      },
      canvas: {
        width: canvasWidth,
        height: window.innerHeight,
        translation: {
          x: -toolBoxWidth,
          y: 0
        }
      }
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
      <Toolbox width={appState.toolbox.width} height={appState.toolbox.height}/>
      <Canvas
        height={appState.canvas.height}
        width={appState.canvas.width}
        translation={appState.canvas.translation}
        tool={appState.toolbox.selectedTool}
      />
    </div>
  );
};

export default App;