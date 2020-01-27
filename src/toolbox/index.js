import React, { useEffectx } from 'react';
import './toobox.css';

const Toolbox = ({width, height}) => {
  const toolboxStyles = {
    width: `${width}px`,
    height: `${height}px`
  };

  return (
    <div className="toolbox" style={toolboxStyles}></div>
  );
};

export default Toolbox;

