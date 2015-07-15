'use strict';

const kc = require('keycode');

module.exports = {
  CTRL_A: function({ ctrlKey, shiftKey, altKey, metaKey, keyCode }){
    return ((ctrlKey === true || metaKey === true) &&
      altKey === false &&
      shiftKey === false &&
      keyCode === kc('a'));
  },
  CTRL_C: function({ ctrlKey, shiftKey, altKey, metaKey, keyCode }){
    return ((ctrlKey === true || metaKey === true) &&
      altKey === false &&
      shiftKey === false &&
      keyCode === kc('c'));
  },
  CTRL_F: function({ ctrlKey, shiftKey, altKey, metaKey, keyCode }){
    return ((ctrlKey === true || metaKey === true) &&
      altKey === false &&
      shiftKey === false &&
      keyCode === kc('f'));
  },
  CTRL_V: function({ ctrlKey, shiftKey, altKey, metaKey, keyCode }){
    return ((ctrlKey === true || metaKey === true) &&
      altKey === false &&
      shiftKey === false &&
      keyCode === kc('v'));
  },
  CTRL_X: function({ ctrlKey, shiftKey, altKey, metaKey, keyCode }){
    return ((ctrlKey === true || metaKey === true) &&
      altKey === false &&
      shiftKey === false &&
      keyCode === kc('x'));
  },
  CTRL_Z: function({ ctrlKey, shiftKey, altKey, metaKey, keyCode }){
    return ((ctrlKey === true || metaKey === true) &&
      altKey === false &&
      shiftKey === false &&
      keyCode === kc('z'));
  },
  CTRL_G: function({ ctrlKey, shiftKey, altKey, metaKey, keyCode }){
    return ((ctrlKey === true || metaKey === true) &&
      altKey === false &&
      shiftKey === false &&
      keyCode === kc('g'));
  },
  CTRL_W: function({ ctrlKey, shiftKey, altKey, metaKey, keyCode }){
    return ((ctrlKey === true || metaKey === true) &&
      altKey === false &&
      shiftKey === false &&
      keyCode === kc('w'));
  },
  CTRL_SHIFT_Z: function({ ctrlKey, shiftKey, altKey, metaKey, keyCode }){
    return ((ctrlKey === true || metaKey === true) &&
      shiftKey === true &&
      altKey === false &&
      keyCode === kc('z'));
  },
  CTRL_SHIFT_G: function({ ctrlKey, shiftKey, altKey, metaKey, keyCode }){
    return ((ctrlKey === true || metaKey === true) &&
      shiftKey === true &&
      altKey === false &&
      keyCode === kc('g'));
  },
  TAB: function({ ctrlKey, shiftKey, altKey, metaKey, keyCode }){
    return (ctrlKey === false &&
      shiftKey === false &&
      altKey === false &&
      metaKey === false &&
      keyCode === kc('tab'));
  },
  SHIFT_TAB: function({ ctrlKey, shiftKey, altKey, metaKey, keyCode }){
    return (shiftKey === true &&
      altKey === false &&
      ctrlKey === false &&
      metaKey === false &&
      keyCode === kc('tab'));
  },
  ALT_SHIFT_TAB: function({ ctrlKey, shiftKey, altKey, metaKey, keyCode }){
    return (altKey === true &&
      shiftKey === true &&
      ctrlKey === false &&
      metaKey === false &&
      keyCode === kc('tab'));
  },
  ALT_TAB: function({ ctrlKey, shiftKey, altKey, metaKey, keyCode }){
    return (altKey === true &&
      shiftKey === false &&
      ctrlKey === false &&
      metaKey === false &&
      keyCode === kc('tab'));
  },
  ALT_CTRL_F: function({ ctrlKey, shiftKey, altKey, metaKey, keyCode }){
    return ((ctrlKey === true || metaKey === true) &&
      altKey === true &&
      shiftKey === false &&
      keyCode === kc('f'));
  },
  ALT_CTRL_G: function({ ctrlKey, shiftKey, altKey, metaKey, keyCode }){
    return ((ctrlKey === true || metaKey === true) &&
      altKey === true &&
      shiftKey === false &&
      keyCode === kc('g'));
  },
  F3: function({ ctrlKey, shiftKey, altKey, metaKey, keyCode }){
    return (ctrlKey === false &&
      shiftKey === false &&
      altKey === false &&
      metaKey === false &&
      keyCode === kc('f3'));
  },
  SHIFT_F3: function({ ctrlKey, shiftKey, altKey, metaKey, keyCode }){
    return (shiftKey === true &&
      ctrlKey === false &&
      metaKey === false &&
      altKey === false &&
      keyCode === kc('f3'));
  },
  F4: function({ ctrlKey, shiftKey, altKey, metaKey, keyCode }){
    return (ctrlKey === false &&
      shiftKey === false &&
      altKey === false &&
      metaKey === false &&
      keyCode === kc('f4'));
  },
  CTRL_F4: function({ ctrlKey, shiftKey, altKey, metaKey, keyCode }){
    return (ctrlKey === true &&
      shiftKey === false &&
      altKey === false &&
      metaKey === false &&
      keyCode === kc('f4'));
  },
  CTRL_HOME: function({ ctrlKey, shiftKey, altKey, metaKey, keyCode }){
    return (ctrlKey === true &&
      shiftKey === false &&
      altKey === false &&
      metaKey === false &&
      keyCode === kc('home'));
  },
  CTRL_META_LEFT: function({ ctrlKey, shiftKey, altKey, metaKey, keyCode }){
    return (ctrlKey === true &&
      metaKey === true &&
      shiftKey === false &&
      altKey === false &&
      keyCode === kc('left'));
  },
   CTRL_META_RIGHT: function({ ctrlKey, shiftKey, altKey, metaKey, keyCode }){
    return (ctrlKey === true &&
      metaKey === true &&
      shiftKey === false &&
      altKey === false &&
      keyCode === kc('right'));
  },
  CTRL_END: function({ ctrlKey, shiftKey, altKey, metaKey, keyCode }){
    return (ctrlKey === true &&
      metaKey === false &&
      shiftKey === false &&
      altKey === false &&
      keyCode === kc('end'));
  },
  CTRL_UP: function({ ctrlKey, shiftKey, altKey, metaKey, keyCode }){
    return ((ctrlKey === true || metaKey === true) &&
      shiftKey === false &&
      altKey === false &&
      keyCode === kc('up'));
  },
  CTRL_DOWN: function({ ctrlKey, shiftKey, altKey, metaKey, keyCode }){
    return ((ctrlKey === true || metaKey === true) &&
      shiftKey === false &&
      altKey === false &&
      keyCode === kc('down'));
  },
  CTRL_MINUS: function({ ctrlKey, shiftKey, altKey, metaKey, keyCode }){
    return ((ctrlKey === true || metaKey === true) &&
      shiftKey === false &&
      altKey === false &&
      keyCode === kc('-'));
  },
  CTRL_EQUALS: function({ ctrlKey, shiftKey, altKey, metaKey, keyCode }){
    return ((ctrlKey === true || metaKey === true) &&
      shiftKey === false &&
      altKey === false &&
      keyCode === kc('='));
  },
  CTRL_O: function({ ctrlKey, shiftKey, altKey, metaKey, keyCode }){
    return ((ctrlKey === true || metaKey === true) &&
      altKey === false &&
      shiftKey === false &&
      keyCode === kc('o'));
  },
  BACKSPACE: function({ ctrlKey, shiftKey, altKey, metaKey, keyCode }){
    return (ctrlKey === false &&
      shiftKey === false &&
      altKey === false &&
      metaKey === false &&
      keyCode === kc('backspace'));
  },
  CTRL_S: function({ ctrlKey, shiftKey, altKey, metaKey, keyCode }){
    return ((ctrlKey === true || metaKey === true) &&
      altKey === false &&
      shiftKey === false &&
      keyCode === kc('s'));
  },
  CTRL_SHIFT_S: function({ altKey, ctrlKey, metaKey, shiftKey, keyCode}){
    return ((ctrlKey === true || metaKey === true) &&
      shiftKey === true &&
      altKey === false) &&
      keyCode === kc('s');
  },
  CTRL_P: function({ ctrlKey, shiftKey, altKey, metaKey, keyCode }){
    return ((ctrlKey === true || metaKey === true) &&
      altKey === false &&
      shiftKey === false &&
      keyCode === kc('p'));
  },
  CTRL_TAB: function({ ctrlKey, shiftKey, altKey, metaKey, keyCode }){
    return ((ctrlKey === true || metaKey === true) &&
      altKey === false &&
      shiftKey === false &&
      keyCode === kc('tab'));
  },
  CTRL_SHIFT_TAB: function({ ctrlKey, shiftKey, altKey, metaKey, keyCode }){
    return ((ctrlKey === true || metaKey === true) &&
      shiftKey === true &&
      altKey === false &&
      keyCode === kc('tab'));
  },
  CTRL_I: function({ ctrlKey, shiftKey, altKey, metaKey, keyCode }){
    return ((ctrlKey === true || metaKey === true) &&
      altKey === false &&
      shiftKey === false &&
      keyCode === kc('i'));
  },
  F6: function({ ctrlKey, shiftKey, altKey, metaKey, keyCode }){
    return (ctrlKey === false &&
      shiftKey === false &&
      altKey === false &&
      metaKey === false &&
      keyCode === kc('f6'));
  },
  CTRL_T: function({ ctrlKey, shiftKey, altKey, metaKey, keyCode }){
    return ((ctrlKey === true || metaKey === true) &&
      altKey === false &&
      shiftKey === false &&
      keyCode === kc('t'));
  },
  F7: function({ ctrlKey, shiftKey, altKey, metaKey, keyCode }){
    return (ctrlKey === false &&
      shiftKey === false &&
      altKey === false &&
      metaKey === false &&
      keyCode === kc('f7'));
  },
  CTRL_M: function({ ctrlKey, shiftKey, altKey, metaKey, keyCode }){
    return ((ctrlKey === true || metaKey === true) &&
      altKey === false &&
      shiftKey === false &&
      keyCode === kc('m'));
  },
  CTRL_N: function({altKey, ctrlKey, metaKey, shiftKey, keyCode}){
    return ((ctrlKey === true || metaKey === true) &&
      altKey === false &&
      shiftKey === false &&
      keyCode === kc('n'));
  },
  F8: function({ ctrlKey, shiftKey, altKey, metaKey, keyCode }){
    return (ctrlKey === false &&
      shiftKey === false &&
      altKey === false &&
      metaKey === false &&
      keyCode === kc('f8'));
  },
  CTRL_R: function({ ctrlKey, shiftKey, altKey, metaKey, keyCode }){
    return ((ctrlKey === true || metaKey === true) &&
      altKey === false &&
      shiftKey === false &&
      keyCode === kc('r'));
  },
  F9: function({ ctrlKey, shiftKey, altKey, metaKey, keyCode }){
    return (ctrlKey === false &&
      shiftKey === false &&
      altKey === false &&
      metaKey === false &&
      keyCode === kc('f9'));
  },
  ESC: function({ ctrlKey, shiftKey, altKey, metaKey, keyCode }){
    return (ctrlKey === false &&
      shiftKey === false &&
      altKey === false &&
      metaKey === false &&
      keyCode === kc('ESC'));
  },
  UP: function({ ctrlKey, shiftKey, altKey, metaKey, keyCode }){
    return (ctrlKey === false &&
      shiftKey === false &&
      altKey === false &&
      metaKey === false &&
      keyCode === kc('UP'));
  },
  DOWN: function({ ctrlKey, shiftKey, altKey, metaKey, keyCode }){
    return (ctrlKey === false &&
      shiftKey === false &&
      altKey === false &&
      metaKey === false &&
      keyCode === kc('DOWN'));
  },
  LEFT: function({ ctrlKey, shiftKey, altKey, metaKey, keyCode }){
    return (ctrlKey === false &&
      shiftKey === false &&
      altKey === false &&
      metaKey === false &&
      keyCode === kc('LEFT'));
  },
  RIGHT: function({ ctrlKey, shiftKey, altKey, metaKey, keyCode }){
    return (ctrlKey === false &&
      shiftKey === false &&
      altKey === false &&
      metaKey === false &&
      keyCode === kc('RIGHT'));
  },
  ENTER: function({ ctrlKey, shiftKey, altKey, metaKey, keyCode }){
    return (ctrlKey === false &&
      shiftKey === false &&
      altKey === false &&
      metaKey === false &&
      keyCode === kc('ENTER'));
  }
};
