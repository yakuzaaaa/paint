import React, { useEffect, useRef } from 'react';
const DRAW_TOOL = 'draw';
const ERASE_TOOL = 'erase';

const Canvas = ({ height, width, tool = DRAW_TOOL }) => {
  let ctx = null;
  const canvasEl = useRef(null),
    _drawLine = (e) => {
      const x = e.clientX, y = e.clientY;
      ctx.lineTo(x, y);
      ctx.stroke();
    },
    _erase = (e) => {
      const x = e.clientX, y = e.clientY;
      ctx.clearRect(x - 25, y - 25, 50, 50);
    },
    _handleMouseMove = (e) => {
      switch (tool) {
        case ERASE_TOOL:
          _erase(e);
          break;
        case DRAW_TOOL:
        default:
        _drawLine(e);
          break;
      }
    },
    _handleMouseUp = () => {
      canvasEl.current.removeEventListener('mousemove', _handleMouseMove);
    },
    _handleMouseDown = () => {
      ctx.beginPath();
      canvasEl.current.addEventListener('mousemove', _handleMouseMove);
      canvasEl.current.addEventListener('mouseup', _handleMouseUp);
    };

  useEffect(() => {
    canvasEl.current.height = height;
    canvasEl.current.width = width;

    ctx = canvasEl.current.getContext('2d');
  }, [height, width]);

  return (
    <canvas
      ref={canvasEl}
      onMouseDown={_handleMouseDown}
    />
  );
};

export default Canvas;