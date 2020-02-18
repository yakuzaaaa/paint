import React, { useState, useEffect, useContext } from "react";
import "./app.css";
import { PaintProvider } from "../context/paint";
import Canvas from "../canvas";
import Toolbox from "../toolbox";
import { DRAW_TOOL } from "../constants";
import { usePaintState, usePaintDispatch } from "../hooks/paint-context";
import { windowResized } from "../actions";
import appWithContext from "./appWithContext";

const App = () => {
  const appState = usePaintState();
  const dispatch = usePaintDispatch();
  const context = useContext(PaintProvider);

  const onResize = () => {
    const toolBoxWidth = window.innerWidth * 0.2; // 20%  of the screen width
    const canvasWidth = window.innerWidth - toolBoxWidth;

    dispatch(windowResized(window, toolBoxWidth, canvasWidth));
  };

  useEffect(() => {
    onResize();
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <PaintProvider>
      <div className="container rows">
        <div className="header"></div>
        <div className="container rows">
          <div className="header"></div>
          <Toolbox
            width={appState.toolbox.width}
            height={appState.toolbox.height}
          />
          <Canvas
            height={appState.canvas.height}
            width={appState.canvas.width}
            translation={appState.canvas.translation}
            tool={appState.toolbox.selectedTool}
          />
        </div>
      </div>
    </PaintProvider>
  );
};

export default appWithContext(App);
