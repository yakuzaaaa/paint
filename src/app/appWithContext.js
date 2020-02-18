import React from "react";
import { PaintProvider } from "../context/paint";

export default App => {
  return () => (
    <PaintProvider>
      <App />
    </PaintProvider>
  );
};
