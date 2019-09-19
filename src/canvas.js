(function () {
  const DRAW_TOOL = 'draw';
  const ERASE_TOOL = 'erase';

  document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');

    const config = {};


    function init () {
      resizeCanvas();
      config.tool = DRAW_TOOL;
      const tools = document.querySelectorAll('.tool');
      tools.forEach(tool => {
        tool.addEventListener('click', onToolClick);
      });
    }

    function resizeCanvas () {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function onToolClick (e) {
      const selectedTool = e.target.dataset.type;
      config.tool = selectedTool;
    }

    function drawLine (e) {
      const x = e.clientX, y = e.clientY;

      ctx.lineTo(x, y);
      ctx.stroke();
    }

    function erase (e) {
      const x = e.clientX, y = e.clientY;
      ctx.clearRect(x - 25, y - 25, 50, 50);
    }

    function onMouseMove (e) {
      stickToolIcon(e);
      performToolAction(e);
    }

    function stickToolIcon (e) {
      switch (config.tool) {
        case ERASE_TOOL:
          
          break;
      }
    }

    function performToolAction (e) {
      switch (config.tool) {
        case ERASE_TOOL:
          erase(e);

          break;
        case DRAW_TOOL:
        default:
          drawLine(e);
          break;
      }
    }

    function onMouseUp (e) {
      document.removeEventListener('mousemove', onMouseMove);
    }

    function onMouseDown () {
      // Check if this can be placed in a better place
      ctx.beginPath();
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    }

    window.addEventListener('resize', resizeCanvas);
    document.addEventListener('mousedown', onMouseDown);

    init();
  });
})();