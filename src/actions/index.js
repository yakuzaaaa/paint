import {WINDOW_RESIZED} from '../constants';

function windowResized (window, toolBoxWidth, canvasWidth) {
    return {
        type: WINDOW_RESIZED,
        payload: {
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
          }
    };
}

export {
  windowResized
}