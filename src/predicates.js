'use strict';

const kc = require('keycode');

module.exports = {
  CTRL_A: function({ ctrlKey, metaKey, keyCode }){
    return ((ctrlKey === true || metaKey === true) && keyCode === kc('a'));
  },
  CTRL_C: function({ ctrlKey, metaKey, keyCode }){
    return ((ctrlKey === true || metaKey === true) && keyCode === kc('c'));
  },
  CTRL_F: function({ ctrlKey, metaKey, keyCode }){
    return ((ctrlKey === true || metaKey === true) && keyCode === kc('f'));
  },
  CTRL_V: function({ ctrlKey, metaKey, keyCode }){
    return ((ctrlKey === true || metaKey === true) && keyCode === kc('v'));
  },
  CTRL_X: function({ ctrlKey, metaKey, keyCode }){
    return ((ctrlKey === true || metaKey === true) && keyCode === kc('x'));
  },
  CTRL_Z: function({ ctrlKey, metaKey, keyCode }){
    return ((ctrlKey === true || metaKey === true) && keyCode === kc('z'));
  },
  CTRL_W: function({ ctrlKey, metaKey, keyCode }){
    return ((ctrlKey === true || metaKey === true) && keyCode === kc('w'));
  },
  CTRL_SHIFT_Z: function({ ctrlKey, metaKey, keyCode }){
    return ((ctrlKey === true || metaKey === true) && shiftKey === true && keyCode === kc('z'));
  },
  TAB: function({ ctrlKey, shiftKey, altKey, metaKey, keyCode }){
    return (ctrlKey === false &&
      shiftKey === false &&
      altKey === false &&
      metaKey === false &&
      keyCode === kc('tab'));
  },
  SHIFT_TAB: function({ shiftKey, keyCode }){
    return (shiftKey === true && keyCode === kc('tab'));
  },
  ALT_SHIFT_TAB: function({ altKey, shiftKey, keyCode }){
    return (altKey === true && shiftKey === true && keyCode === kc('tab'));
  },
  ALT_TAB: function({ altKey, keyCode }){
    return (altKey === true && keyCode === kc('tab'));
  },
  F3: function({ ctrlKey, shiftKey, altKey, metaKey, keyCode }){
    return (ctrlKey === false &&
      shiftKey === false &&
      altKey === false &&
      metaKey === false &&
      keyCode === kc('f3'));
  },
  SHIFT_F3: function({ shiftKey, keyCode }){
    return (shiftKey === true && keyCode === kc('f3'));
  },
  F4: function({ ctrlKey, shiftKey, altKey, metaKey, keyCode }){
    return (ctrlKey === false &&
      shiftKey === false &&
      altKey === false &&
      metaKey === false &&
      keyCode === kc('f4'));
  },
  CTRL_F4: function({ ctrlKey, keyCode }){
    return (ctrlKey === true && keyCode === kc('f4'));
  },
  CTRL_HOME: function({ ctrlKey, keyCode }){
    return (ctrlKey === true && keyCode === kc('home'));
  },
  CTRL_END: function({ ctrlKey, keyCode }){
    return (ctrlKey === true && keyCode === kc('end'));
  },
  CTRL_UP: function({ ctrlKey, metaKey, keyCode }){
    return ((ctrlKey === true || metaKey === true) && keyCode === kc('up'));
  },
  CTRL_DOWN: function({ ctrlKey, metaKey, keyCode }){
    return ((ctrlKey === true || metaKey === true) && keyCode === kc('down'));
  },
  CTRL_MINUS: function({ ctrlKey, metaKey, keyCode }){
    return ((ctrlKey === true || metaKey === true) && keyCode === kc('-'));
  },
  CTRL_EQUALS: function({ ctrlKey, metaKey, keyCode }){
    return ((ctrlKey === true || metaKey === true) && keyCode === kc('='));
  },
  CTRL_O: function({ ctrlKey, metaKey, keyCode }){
    return ((ctrlKey === true || metaKey === true) && keyCode === kc('o'));
  },
  BACSPACE: function({ ctrlKey, shiftKey, altKey, metaKey, keyCode }){
    return (ctrlKey === false &&
      shiftKey === false &&
      altKey === false &&
      metaKey === false &&
      keyCode === kc('backspace'));
  },
  CTRL_S: function({ ctrlKey, metaKey, keyCode }){
    return ((ctrlKey === true || metaKey === true) && keyCode === kc('s'));
  },
  CTRL_P: function({ ctrlKey, metaKey, keyCode }){
    return ((ctrlKey === true || metaKey === true) && keyCode === kc('p'));
  },
  CTRL_TAB: function({ ctrlKey, metaKey, keyCode }){
    return ((ctrlKey === true || metaKey === true) && keyCode === kc('tab'));
  },
  CTRL_SHIFT_TAB: function({ ctrlKey, metaKey, shiftKey, keyCode }){
    return ((ctrlKey === true || metaKey === true) &&
      shiftKey === true &&
      keyCode === kc('tab'));
  },
  CTRL_I: function({ ctrlKey, metaKey, keyCode }){
    return ((ctrlKey === true || metaKey === true) && keyCode === kc('i'));
  },
  F6: function({ ctrlKey, shiftKey, altKey, metaKey, keyCode }){
    return (ctrlKey === false &&
      shiftKey === false &&
      altKey === false &&
      metaKey === false &&
      keyCode === kc('f6'));
  },
  CTRL_T: function({ ctrlKey, metaKey, keyCode }){
    return ((ctrlKey === true || metaKey === true) && keyCode === kc('t'));
  },
  F7: function({ ctrlKey, shiftKey, altKey, metaKey, keyCode }){
    return (ctrlKey === false &&
      shiftKey === false &&
      altKey === false &&
      metaKey === false &&
      keyCode === kc('f7'));
  },
  CTRL_M: function({ ctrlKey, metaKey, keyCode }){
    return ((ctrlKey === true || metaKey === true) && keyCode === kc('m'));
  },
  F8: function({ ctrlKey, shiftKey, altKey, metaKey, keyCode }){
    return (ctrlKey === false &&
      shiftKey === false &&
      altKey === false &&
      metaKey === false &&
      keyCode === kc('f8'));
  },
  CTRL_R: function({ ctrlKey, metaKey, keyCode }){
    return ((ctrlKey === true || metaKey === true) && keyCode === kc('r'));
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
  }
};
