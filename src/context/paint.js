import React from "react";
import paintReducer from "../reducers/paint";
import { DRAW_TOOL } from "../constants";

const paintAppDefaultState = {
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
    selectedTool: DRAW_TOOL
  }
};

const PaintStateContext = React.createContext();
const PaintDispatchContext = React.createContext();

function PaintProvider({ children }) {
  const [state, dispatch] = React.useReducer(
    paintReducer,
    paintAppDefaultState
  );

  return (
    <PaintStateContext.Provider value={state}>
      <PaintDispatchContext.Provider value={dispatch}>
        {children}
      </PaintDispatchContext.Provider>
    </PaintStateContext.Provider>
  );
}

export { PaintProvider, PaintStateContext, PaintDispatchContext };
