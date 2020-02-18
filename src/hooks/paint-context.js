import { useContext } from "react";
import { PaintStateContext } from "../context/paint";
import { PaintDispatchContext } from "../context/paint";

function usePaintState() {
  const context = useContext(PaintStateContext);

  if (!context) {
    throw new Error("usePaintState must use around around a provider");
  }

  return context;
}

function usePaintDispatch() {
  const context = useContext(PaintDispatchContext);

  if (!context) {
    throw new Error("usePaintDispatch must use around around a provider");
  }

  return context;
}

export { usePaintState, usePaintDispatch };
