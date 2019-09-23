import React, { useEffect, useRef } from 'react';
const DRAW_TOOL = 'draw';
const ERASE_TOOL = 'erase';

const Canvas = ({ height, width, tool = DRAW_TOOL }) => {
  let ctx = null,
    mouseClicked = false;

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
      e.preventDefault();
      _handleMouseMove(e);
    },
    _handleTouchStart = (e) => {
      e.preventDefault();
      _handleMouseDown(e);
    },
    _handleMouseMove = (e) => {
      if (mouseClicked) {
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
      }
    },
    _handleMouseUp = () => {
      mouseClicked = false;
    },
    _handleMouseDown = () => {
      ctx.beginPath();
      mouseClicked = true;
    };

  useEffect(() => {
    // React does not have any API to pass event listener options
    // In this case, passive false
    // Chrome by default has touch events passive by default
    // We cannot prevent default on passive event. Thus this hack.
    canvasEl.current.addEventListener('touchstart', _handleTouchStart, { passive: false });
    canvasEl.current.addEventListener('touchmove', _handleTouchMove, { passive: false });

    // This hook has no dependency and thus only be called when component mounts
    // and clean-up when component unmounts
    return () => {
      canvasEl.current.removeEventListener('touchstart', _handleTouchStart, { passive: false });
      canvasEl.current.removeEventListener('touchmove', _handleTouchMove, { passive: false });
    }
  }, []);

  useEffect(() => {
    canvasEl.current.height = height;
    canvasEl.current.width = width;
    ctx = canvasEl.current.getContext('2d');
  }, [height, width]);

  return (
    <canvas
      ref={canvasEl}
      onMouseDown={_handleMouseDown}
      onMouseUp={_handleMouseUp}
      onMouseMove={_handleMouseMove}
    />
  );
};

export default Canvas;