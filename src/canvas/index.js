import React, { useEffect, useRef } from 'react';
const DRAW_TOOL = 'draw';
const ERASE_TOOL = 'erase';

const Canvas = ({ height, width, tool = DRAW_TOOL }) => {
  let ctx = null;
  const canvasEl = useRef(null),
    _drawLine = (position) => {
      const x = position.clientX, y = position.clientY;
      ctx.lineTo(x, y);
      ctx.stroke();
    },
    _erase = (position) => {
      const x = position.clientX, y = position.clientY;
      ctx.clearRect(x - 25, y - 25, 50, 50);
    },
    _handleTouchMove = (e) => {
      // e.preventDefault();
      _handleMouseMove(e);
    },
    _handleMouseMove = (e) => {
      let location = {
        clientX: e.clientX,
        clientY: e.clientY
      };

      if (e.touches && !location.clientX) {
        location.clientX = e.touches[0].clientX;
        location.clientY = e.touches[0].clientY;
      }

      switch (tool) {
        case ERASE_TOOL:
          _erase(location);
          break;
        case DRAW_TOOL:
        default:
          _drawLine(location);
          break;
      }
    },
    _handleMouseUp = () => {
      canvasEl.current.removeEventListener('mousemove', _handleMouseMove);
      canvasEl.current.removeEventListener('touchmove', _handleTouchMove, { passive: false });
    },
    _handleMouseDown = () => {
      ctx.beginPath();
      canvasEl.current.addEventListener('mousemove', _handleMouseMove);
      canvasEl.current.addEventListener('touchmove', _handleTouchMove, { passive: false });
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
      onTouchStart={(event) => {
        // event.preventDefault();
        _handleMouseDown(event);
      }}
    />
  );
};

export default Canvas;