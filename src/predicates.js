'use strict';

const kc = require('keycode');

module.exports = {
  /**
   * Function to determine if key event was the 'CTRL_A' combination.
   * @static
   * @memberOf predicates
   * @param {Object} event The keyboard event.
   * @arg {boolean} [event.ctrlKey] True if 'CTRL' modifer key was pressed during event.
   * @arg {boolean} [event.metaKey] True if 'META' modifer key was pressed during event.
   * @arg {number} [event.keyCode] The ASCII keycode of key.
   * @returns {boolean} True only if 'CTRL' and 'A' keys are pressed together.
   */
  CTRL_A: function({ ctrlKey, metaKey, keyCode }){
    return ((ctrlKey === true || metaKey === true) && keyCode === kc('a'));
  },
  /**
   * Function to determine if key event was the 'CTRL_C' combination.
   * @static
   * @memberOf predicates
   * @param {Object} event The keyboard event.
   * @param {boolean} [event.ctrlKey] True if 'CTRL' modifer key was pressed during event.
   * @param {boolean} [event.metaKey] True if 'META' modifer key was pressed during event.
   * @param {number} [event.keyCode] The ASCII keycode of key.
   * @returns {boolean} True only if 'CTRL' and 'C' keys are pressed together.
   */
  CTRL_C: function({ ctrlKey, metaKey, keyCode }){
    return ((ctrlKey === true || metaKey === true) && keyCode === kc('c'));
  },
  /**
   * Function to determine if key event was the 'CTRL_F' combination.
   * @static
   * @memberOf predicates
   * @param {Object} event The keyboard event.
   * @param {boolean} [event.ctrlKey] True if 'CTRL' modifer key was pressed during event.
   * @param {boolean} [event.metaKey] True if 'META' modifer key was pressed during event.
   * @param {number} [event.keyCode] The ASCII keycode of key.
   * @returns {boolean} True only if 'CTRL' and 'F' keys are pressed together.
   */
  CTRL_F: function({ ctrlKey, metaKey, keyCode }){
    return ((ctrlKey === true || metaKey === true) && keyCode === kc('f'));
  },
  /**
   * Function to determine if key event was the 'CTRL_V' combination.
   * @static
   * @memberOf predicates
   * @param {Object} event The keyboard event.
   * @param {boolean} [event.ctrlKey] True if 'CTRL' modifer key was pressed during event.
   * @param {boolean} [event.metaKey] True if 'META' modifer key was pressed during event.
   * @param {number} [event.keyCode] The ASCII keycode of key.
   * @returns {boolean} True only if 'CTRL' and 'V' keys are pressed together.
   */
  CTRL_V: function({ ctrlKey, metaKey, keyCode }){
    return ((ctrlKey === true || metaKey === true) && keyCode === kc('v'));
  },
  /**
   * Function to determine if key event was the 'CTRL_X' combination.
   * @static
   * @memberOf predicates
   * @param {Object} event The keyboard event.
   * @param {boolean} [event.ctrlKey] True if 'CTRL' modifer key was pressed during event.
   * @param {boolean} [event.metaKey] True if 'META' modifer key was pressed during event.
   * @param {number} [event.keyCode] The ASCII keycode of key.
   * @returns {boolean} True only if 'CTRL' and 'X' keys are pressed together.
   */
  CTRL_X: function({ ctrlKey, metaKey, keyCode }){
    return ((ctrlKey === true || metaKey === true) && keyCode === kc('x'));
  },
  /**
   * Function to determine if key event was the 'CTRL_Z' combination.
   * @static
   * @memberOf predicates
   * @param {Object} event The keyboard event.
   * @param {boolean} [event.ctrlKey] True if 'CTRL' modifer key was pressed during event.
   * @param {boolean} [event.metaKey] True if 'META' modifer key was pressed during event.
   * @param {number} [event.keyCode] The ASCII keycode of key.
   * @returns {boolean} True only if 'CTRL' and 'Z' keys are pressed together.
   */
  CTRL_Z: function({ ctrlKey, metaKey, keyCode }){
    return ((ctrlKey === true || metaKey === true) && keyCode === kc('z'));
  },
  /**
   * Function to determine if key event was the 'CTRL_G' combination.
   * @static
   * @memberOf predicates
   * @param {Object} event The keyboard event.
   * @param {boolean} [event.ctrlKey] True if 'CTRL' modifer key was pressed during event.
   * @param {boolean} [event.metaKey] True if 'META' modifer key was pressed during event.
   * @param {number} [event.keyCode] The ASCII keycode of key.
   * @returns {boolean} True only if 'CTRL' and 'G' keys are pressed together.
   */
  CTRL_G: function({ ctrlKey, metaKey, keyCode }){
    return ((ctrlKey === true || metaKey === true) && keyCode === kc('g'));
  },
  /**
   * Function to determine if key event was the 'CTRL_W' combination.
   * @static
   * @memberOf predicates
   * @param {Object} event The keyboard event.
   * @param {boolean} [event.ctrlKey] True if 'CTRL' modifer key was pressed during event.
   * @param {boolean} [event.metaKey] True if 'META' modifer key was pressed during event.
   * @param {number} [event.keyCode] The ASCII keycode of key.
   * @returns {boolean} True only if 'CTRL' and 'W' keys are pressed together.
   */
  CTRL_W: function({ ctrlKey, metaKey, keyCode }){
    return ((ctrlKey === true || metaKey === true) && keyCode === kc('w'));
  },
  /**
   * Function to determine if key event was the 'CTRL_SHIFT_Z' combination.
   * @static
   * @memberOf predicates
   * @param {Object} event The keyboard event.
   * @param {boolean} [event.ctrlKey] True if 'CTRL' modifer key was pressed during event.
   * @param {boolean} [event.shiftKey] True if 'SHIFT' modifer key was pressed during event.
   * @param {boolean} [event.metaKey] True if 'META' modifer key was pressed during event.
   * @param {number} [event.keyCode] The ASCII keycode of key.
   * @returns {boolean} True only if 'CTRL', 'SHIFT' and 'Z' keys are pressed together.
   */
  CTRL_SHIFT_Z: function({ ctrlKey, metaKey, keyCode, shiftKey }){
    return ((ctrlKey === true || metaKey === true) && shiftKey === true && keyCode === kc('z'));
  },
  /**
   * Function to determine if key event was the 'CTRL_SHIFT_G' combination.
   * @static
   * @memberOf predicates
   * @param {Object} event The keyboard event.
   * @param {boolean} [event.ctrlKey] True if 'CTRL' modifer key was pressed during event.
   * @param {boolean} [event.shiftKey] True if 'SHIFT' modifer key was pressed during event.
   * @param {boolean} [event.metaKey] True if 'META' modifer key was pressed during event.
   * @param {number} [event.keyCode] The ASCII keycode of key.
   * @returns {boolean} True only if 'CTRL', 'SHIFT' and 'G' keys are pressed together.
   */
  CTRL_SHIFT_G: function({ ctrlKey, metaKey, keyCode, shiftKey }){
    return ((ctrlKey === true || metaKey === true) && shiftKey === true && keyCode === kc('g'));
  },
  /**
   * Function to determine if key event was the 'TAB' combination.
   * @static
   * @memberOf predicates
   * @param {Object} event The keyboard event.
   * @param {boolean} [event.altKey] True if 'ALT' modifer key was pressed during event.
   * @param {boolean} [event.ctrlKey] True if 'CTRL' modifer key was pressed during event.
   * @param {boolean} [event.shiftKey] True if 'SHIFT' modifer key was pressed during event.
   * @param {boolean} [event.metaKey] True if 'META' modifer key was pressed during event.
   * @param {number} [event.keyCode] The ASCII keycode of key.
   * @returns {boolean} True only if 'TAB' key was pressed with no modifiers.
   */
  TAB: function({ ctrlKey, shiftKey, altKey, metaKey, keyCode }){
    return (ctrlKey === false &&
      shiftKey === false &&
      altKey === false &&
      metaKey === false &&
      keyCode === kc('tab'));
  },
  /**
   * Function to determine if key event was the 'SHIFT_TAB' combination.
   * @static
   * @memberOf predicates
   * @param {Object} event The keyboard event.
   * @param {boolean} [event.shiftKey] True if 'SHIFT' modifer key was pressed during event.
   * @param {number} [event.keyCode] The ASCII keycode of key.
   * @returns {boolean} True only if 'SHIFT' and 'TAB' keys are pressed together.
   */
  SHIFT_TAB: function({ shiftKey, keyCode }){
    return (shiftKey === true && keyCode === kc('tab'));
  },
  /**
   * Function to determine if key event was the 'ALT_SHIFT_TAB' combination.
   * @static
   * @memberOf predicates
   * @param {Object} event The keyboard event.
   * @param {boolean} [event.altKey] True if 'ALT' modifer key was pressed during event.
   * @param {boolean} [event.shiftKey] True if 'SHIFT' modifer key was pressed during event.
   * @param {number} [event.keyCode] The ASCII keycode of key.
   * @returns {boolean} True only if 'ALT', 'SHIFT' and 'TAB' keys are pressed together.
   */
  ALT_SHIFT_TAB: function({ altKey, shiftKey, keyCode }){
    return (altKey === true && shiftKey === true && keyCode === kc('tab'));
  },
  /**
   * Function to determine if key event was the 'ALT_TAB' combination.
   * @static
   * @memberOf predicates
   * @param {Object} event The keyboard event.
   * @param {boolean} [event.altKey] True if 'ALT' modifer key was pressed during event.
   * @param {number} [event.keyCode] The ASCII keycode of key.
   * @returns {boolean} True only if 'ALT' and 'TAB' keys are pressed together.
   */
  ALT_TAB: function({ altKey, keyCode }){
    return (altKey === true && keyCode === kc('tab'));
  },
  /**
   * Function to determine if key event was the 'ALT_CTRL_F' combination.
   * @static
   * @memberOf predicates
   * @param {Object} event The keyboard event.
   * @param {boolean} [event.altKey] True if 'ALT' modifer key was pressed during event.
   * @param {boolean} [event.ctrlKey] True if 'CTRL' modifer key was pressed during event.
   * @param {boolean} [event.metaKey] True if 'META' modifer key was pressed during event.
   * @param {number} [event.keyCode] The ASCII keycode of key.
   * @returns {boolean} True only if 'ALT', 'CTRL' and 'F' keys are pressed together.
   */
  ALT_CTRL_F: function({ altKey, ctrlKey, metaKey, keyCode }){
    return ((ctrlKey === true || metaKey === true) && altKey === true && keyCode === kc('f'));
  },
  /**
   * Function to determine if key event was the 'ALT_CTRL_G' combination.
   * @static
   * @memberOf predicates
   * @param {Object} event The keyboard event.
   * @param {boolean} [event.altKey] True if 'ALT' modifer key was pressed during event.
   * @param {boolean} [event.ctrlKey] True if 'CTRL' modifer key was pressed during event.
   * @param {boolean} [event.metaKey] True if 'META' modifer key was pressed during event.
   * @param {number} [event.keyCode] The ASCII keycode of key.
   * @returns {boolean} True only if 'ALT', 'CTRL' and 'G' keys are pressed together.
   */
  ALT_CTRL_G: function({ altKey, ctrlKey, metaKey, keyCode }){
    return ((ctrlKey === true || metaKey === true) && altKey === true && keyCode === kc('g'));
  },
  /**
   * Function to determine if key event was the 'F3' combination.
   * @static
   * @memberOf predicates
   * @param {Object} event The keyboard event.
   * @param {boolean} [event.altKey] True if 'ALT' modifer key was pressed during event.
   * @param {boolean} [event.ctrlKey] True if 'CTRL' modifer key was pressed during event.
   * @param {boolean} [event.shiftKey] True if 'SHIFT' modifer key was pressed during event.
   * @param {boolean} [event.metaKey] True if 'META' modifer key was pressed during event.
   * @param {number} [event.keyCode] The ASCII keycode of key.
   * @returns {boolean} True only if 'F3' key was pressed with no modifiers.
   */
  F3: function({ ctrlKey, shiftKey, altKey, metaKey, keyCode }){
    return (ctrlKey === false &&
      shiftKey === false &&
      altKey === false &&
      metaKey === false &&
      keyCode === kc('f3'));
  },
  /**
   * Function to determine if key event was the 'SHIFT_F3' combination.
   * @static
   * @memberOf predicates
   * @param {Object} event The keyboard event.
   * @param {boolean} [event.shiftKey] True if 'SHIFT' modifer key was pressed during event.
   * @param {number} [event.keyCode] The ASCII keycode of key.
   * @returns {boolean} True only if 'SHIFT' and 'F3' keys are pressed together.
   */
  SHIFT_F3: function({ shiftKey, keyCode }){
    return (shiftKey === true && keyCode === kc('f3'));
  },
  /**
   * Function to determine if key event was the 'F4' combination.
   * @static
   * @memberOf predicates
   * @param {Object} event The keyboard event.
   * @param {boolean} [event.altKey] True if 'ALT' modifer key was pressed during event.
   * @param {boolean} [event.ctrlKey] True if 'CTRL' modifer key was pressed during event.
   * @param {boolean} [event.shiftKey] True if 'SHIFT' modifer key was pressed during event.
   * @param {boolean} [event.metaKey] True if 'META' modifer key was pressed during event.
   * @param {number} [event.keyCode] The ASCII keycode of key.
   * @returns {boolean} True only if 'F4' key was pressed with no modifiers.
   */
  F4: function({ ctrlKey, shiftKey, altKey, metaKey, keyCode }){
    return (ctrlKey === false &&
      shiftKey === false &&
      altKey === false &&
      metaKey === false &&
      keyCode === kc('f4'));
  },
  /**
   * Function to determine if key event was the 'CTRL_F4' combination.
   * @static
   * @memberOf predicates
   * @param {Object} event The keyboard event.
   * @param {boolean} [event.ctrlKey] True if 'CTRL' modifer key was pressed during event.
   * @param {number} [event.keyCode] The ASCII keycode of key.
   * @returns {boolean} True only if 'CTRL' and 'F4' keys are pressed together.
   */
  CTRL_F4: function({ ctrlKey, keyCode }){
    return (ctrlKey === true && keyCode === kc('f4'));
  },
  /**
   * Function to determine if key event was the 'CTRL_HOME' combination.
   * @static
   * @memberOf predicates
   * @param {Object} event The keyboard event.
   * @param {boolean} [event.ctrlKey] True if 'CTRL' modifer key was pressed during event.
   * @param {number} [event.keyCode] The ASCII keycode of key.
   * @returns {boolean} True only if 'CTRL' and 'HOME' keys are pressed together.
   */
  CTRL_HOME: function({ ctrlKey, keyCode }){
    return (ctrlKey === true && keyCode === kc('home'));
  },
  /**
   * Function to determine if key event was the 'CTRL_META_LEFT' combination.
   * @static
   * @memberOf predicates
   * @param {Object} event The keyboard event.
   * @param {boolean} [event.ctrlKey] True if 'CTRL' modifer key was pressed during event.
   * @param {boolean} [event.metaKey] True if 'META' modifer key was pressed during event.
   * @param {number} [event.keyCode] The ASCII keycode of key.
   * @returns {boolean} True only if 'CTRL', 'META', and 'LEFT' key was pressed with no modifiers.
   */
  CTRL_META_LEFT: function({ ctrlKey, metaKey, keyCode }){
    return (ctrlKey === true && metaKey === true && keyCode === kc('left'));
  },
  /**
   * Function to determine if key event was the 'CTRL_META_RIGHT' combination.
   * @static
   * @memberOf predicates
   * @param {Object} event The keyboard event.
   * @param {boolean} [event.altKey] True if 'ALT' modifer key was pressed during event.
   * @param {boolean} [event.ctrlKey] True if 'CTRL' modifer key was pressed during event.
   * @param {boolean} [event.shiftKey] True if 'SHIFT' modifer key was pressed during event.
   * @param {boolean} [event.metaKey] True if 'META' modifer key was pressed during event.
   * @param {number} [event.keyCode] The ASCII keycode of key.
   * @returns {boolean} True only if 'CTRL', 'META', and 'RIGHT' key was pressed with no modifiers.
   */
  CTRL_META_RIGHT: function({ ctrlKey, metaKey, keyCode }){
    return (ctrlKey === true && metaKey === true && keyCode === kc('right'));
  },
  /**
   * Function to determine if key event was the 'CTRL_END' combination.
   * @static
   * @memberOf predicates
   * @param {Object} event The keyboard event.
   * @param {boolean} [event.ctrlKey] True if 'CTRL' modifer key was pressed during event.
   * @param {boolean} [event.metaKey] True if 'META' modifer key was pressed during event.
   * @param {number} [event.keyCode] The ASCII keycode of key.
   * @returns {boolean} True only if 'CTRL' and 'END' keys are pressed together.
   */
  CTRL_END: function({ ctrlKey, keyCode }){
    return (ctrlKey === true && keyCode === kc('end'));
  },
  /**
   * Function to determine if key event was the 'CTRL_UP' combination.
   * @static
   * @memberOf predicates
   * @param {Object} event The keyboard event.
   * @param {boolean} [event.ctrlKey] True if 'CTRL' modifer key was pressed during event.
   * @param {boolean} [event.metaKey] True if 'META' modifer key was pressed during event.
   * @param {number} [event.keyCode] The ASCII keycode of key.
   * @returns {boolean} True only if 'CTRL' and 'UP' keys are pressed together.
   */
  CTRL_UP: function({ ctrlKey, metaKey, keyCode }){
    return ((ctrlKey === true || metaKey === true) && keyCode === kc('up'));
  },
  /**
   * Function to determine if key event was the 'CTRL_DOWN' combination.
   * @static
   * @memberOf predicates
   * @param {Object} event The keyboard event.
   * @param {boolean} [event.ctrlKey] True if 'CTRL' modifer key was pressed during event.
   * @param {boolean} [event.metaKey] True if 'META' modifer key was pressed during event.
   * @param {number} [event.keyCode] The ASCII keycode of key.
   * @returns {boolean} True only if 'CTRL' and 'DOWN' keys are pressed together.
   */
  CTRL_DOWN: function({ ctrlKey, metaKey, keyCode }){
    return ((ctrlKey === true || metaKey === true) && keyCode === kc('down'));
  },
  /**
   * Function to determine if key event was the 'CTRL_MINUS' combination.
   * @static
   * @memberOf predicates
   * @param {Object} event The keyboard event.
   * @param {boolean} [event.ctrlKey] True if 'CTRL' modifer key was pressed during event.
   * @param {boolean} [event.metaKey] True if 'META' modifer key was pressed during event.
   * @param {number} [event.keyCode] The ASCII keycode of key.
   * @returns {boolean} True only if 'CTRL' and 'MINUS' keys are pressed together.
   */
  CTRL_MINUS: function({ ctrlKey, metaKey, keyCode }){
    return ((ctrlKey === true || metaKey === true) && keyCode === kc('-'));
  },
  /**
   * Function to determine if key event was the 'CTRL_EQUALS' combination.
   * @static
   * @memberOf predicates
   * @param {Object} event The keyboard event.
   * @param {boolean} [event.ctrlKey] True if 'CTRL' modifer key was pressed during event.
   * @param {boolean} [event.metaKey] True if 'META' modifer key was pressed during event.
   * @param {number} [event.keyCode] The ASCII keycode of key.
   * @returns {boolean} True only if 'CTRL' and 'EQUALS' keys are pressed together.
   */
  CTRL_EQUALS: function({ ctrlKey, metaKey, keyCode }){
    return ((ctrlKey === true || metaKey === true) && keyCode === kc('='));
  },
  /**
   * Function to determine if key event was the 'CTRL_O' combination.
   * @static
   * @memberOf predicates
   * @param {Object} event The keyboard event.
   * @param {boolean} [event.ctrlKey] True if 'CTRL' modifer key was pressed during event.
   * @param {boolean} [event.metaKey] True if 'META' modifer key was pressed during event.
   * @param {number} [event.keyCode] The ASCII keycode of key.
   * @returns {boolean} True only if 'CTRL' and 'O' keys are pressed together.
   */
  CTRL_O: function({ ctrlKey, metaKey, keyCode }){
    return ((ctrlKey === true || metaKey === true) && keyCode === kc('o'));
  },
  /**
   * Function to determine if key event was the 'BACKSPACE' combination.
   * @static
   * @memberOf predicates
   * @param {Object} event The keyboard event.
   * @param {boolean} [event.altKey] True if 'ALT' modifer key was pressed during event.
   * @param {boolean} [event.ctrlKey] True if 'CTRL' modifer key was pressed during event.
   * @param {boolean} [event.shiftKey] True if 'SHIFT' modifer key was pressed during event.
   * @param {boolean} [event.metaKey] True if 'META' modifer key was pressed during event.
   * @param {number} [event.keyCode] The ASCII keycode of key.
   * @returns {boolean} True only if 'BACKSPACE' key was pressed with no modifiers.
   */
  BACSPACE: function({ ctrlKey, shiftKey, altKey, metaKey, keyCode }){
    return (ctrlKey === false &&
      shiftKey === false &&
      altKey === false &&
      metaKey === false &&
      keyCode === kc('backspace'));
  },
  /**
   * Function to determine if key event was the 'CTRL_S' combination.
   * @static
   * @memberOf predicates
   * @param {Object} event The keyboard event.
   * @param {boolean} [event.ctrlKey] True if 'CTRL' modifer key was pressed during event.
   * @param {boolean} [event.metaKey] True if 'META' modifer key was pressed during event.
   * @param {number} [event.keyCode] The ASCII keycode of key.
   * @returns {boolean} True only if 'CTRL' and 'S' keys are pressed together.
   */
  CTRL_S: function({ ctrlKey, metaKey, keyCode }){
    return ((ctrlKey === true || metaKey === true) && keyCode === kc('s'));
  },
  /**
   * Function to determine if key event was the 'CTRL_P' combination.
   * @static
   * @memberOf predicates
   * @param {Object} event The keyboard event.
   * @param {boolean} [event.ctrlKey] True if 'CTRL' modifer key was pressed during event.
   * @param {boolean} [event.metaKey] True if 'META' modifer key was pressed during event.
   * @param {number} [event.keyCode] The ASCII keycode of key.
   * @returns {boolean} True only if 'CTRL' and 'P' keys are pressed together.
   */
  CTRL_P: function({ ctrlKey, metaKey, keyCode }){
    return ((ctrlKey === true || metaKey === true) && keyCode === kc('p'));
  },
  /**
   * Function to determine if key event was the 'CTRL_TAB' combination.
   * @static
   * @memberOf predicates
   * @param {Object} event The keyboard event.
   * @param {boolean} [event.ctrlKey] True if 'CTRL' modifer key was pressed during event.
   * @param {boolean} [event.shiftKey] True if 'SHIFT' modifer key was pressed during event.
   * @param {boolean} [event.metaKey] True if 'META' modifer key was pressed during event.
   * @param {number} [event.keyCode] The ASCII keycode of key.
   * @returns {boolean} True only if 'CTRL' and 'TAB' keys are pressed together.
   */
  CTRL_TAB: function({ ctrlKey, metaKey, shiftKey, keyCode }){
    return ((ctrlKey === true || metaKey === true) &&
      shiftKey === false &&
      keyCode === kc('tab'));
  },
  /**
   * Function to determine if key event was the 'CTRL_SHIFT_TAB' combination.
   * @static
   * @memberOf predicates
   * @param {Object} event The keyboard event.
   * @param {boolean} [event.ctrlKey] True if 'CTRL' modifer key was pressed during event.
   * @param {boolean} [event.shiftKey] True if 'SHIFT' modifer key was pressed during event.
   * @param {boolean} [event.metaKey] True if 'META' modifer key was pressed during event.
   * @param {number} [event.keyCode] The ASCII keycode of key.
   * @returns {boolean} True only if 'CTRL', 'SHIFT' and 'TAB' keys are pressed together.
   */
  CTRL_SHIFT_TAB: function({ ctrlKey, metaKey, shiftKey, keyCode }){
    return ((ctrlKey === true || metaKey === true) &&
      shiftKey === true &&
      keyCode === kc('tab'));
  },
  /**
   * Function to determine if key event was the 'CTRL_I' combination.
   * @static
   * @memberOf predicates
   * @param {Object} event The keyboard event.
   * @param {boolean} [event.ctrlKey] True if 'CTRL' modifer key was pressed during event.
   * @param {boolean} [event.metaKey] True if 'META' modifer key was pressed during event.
   * @param {number} [event.keyCode] The ASCII keycode of key.
   * @returns {boolean} True only if 'CTRL' and 'I' keys are pressed together.
   */
  CTRL_I: function({ ctrlKey, metaKey, keyCode }){
    return ((ctrlKey === true || metaKey === true) && keyCode === kc('i'));
  },
  /**
   * Function to determine if key event was the 'F6' combination.
   * @static
   * @memberOf predicates
   * @param {Object} event The keyboard event.
   * @param {boolean} [event.altKey] True if 'ALT' modifer key was pressed during event.
   * @param {boolean} [event.ctrlKey] True if 'CTRL' modifer key was pressed during event.
   * @param {boolean} [event.shiftKey] True if 'SHIFT' modifer key was pressed during event.
   * @param {boolean} [event.metaKey] True if 'META' modifer key was pressed during event.
   * @param {number} [event.keyCode] The ASCII keycode of key.
   * @returns {boolean} True only if 'F6' key was pressed with no modifiers.
   */
  F6: function({ ctrlKey, shiftKey, altKey, metaKey, keyCode }){
    return (ctrlKey === false &&
      shiftKey === false &&
      altKey === false &&
      metaKey === false &&
      keyCode === kc('f6'));
  },
  /**
   * Function to determine if key event was the 'CTRL_T' combination.
   * @static
   * @memberOf predicates
   * @param {Object} event The keyboard event.
   * @param {boolean} [event.ctrlKey] True if 'CTRL' modifer key was pressed during event.
   * @param {boolean} [event.metaKey] True if 'META' modifer key was pressed during event.
   * @param {number} [event.keyCode] The ASCII keycode of key.
   * @returns {boolean} True only if 'CTRL' and 'T' keys are pressed together.
   */
  CTRL_T: function({ ctrlKey, metaKey, keyCode }){
    return ((ctrlKey === true || metaKey === true) && keyCode === kc('t'));
  },
  /**
   * Function to determine if key event was the 'F7' combination.
   * @static
   * @memberOf predicates
   * @param {Object} event The keyboard event.
   * @param {boolean} [event.altKey] True if 'ALT' modifer key was pressed during event.
   * @param {boolean} [event.ctrlKey] True if 'CTRL' modifer key was pressed during event.
   * @param {boolean} [event.shiftKey] True if 'SHIFT' modifer key was pressed during event.
   * @param {boolean} [event.metaKey] True if 'META' modifer key was pressed during event.
   * @param {number} [event.keyCode] The ASCII keycode of key.
   * @returns {boolean} True only if 'F7' key was pressed with no modifiers.
   */
  F7: function({ ctrlKey, shiftKey, altKey, metaKey, keyCode }){
    return (ctrlKey === false &&
      shiftKey === false &&
      altKey === false &&
      metaKey === false &&
      keyCode === kc('f7'));
  },
  /**
   * Function to determine if key event was the 'CTRL_M' combination.
   * @static
   * @memberOf predicates
   * @param {Object} event The keyboard event.
   * @param {boolean} [event.ctrlKey] True if 'CTRL' modifer key was pressed during event.
   * @param {boolean} [event.metaKey] True if 'META' modifer key was pressed during event.
   * @param {number} [event.keyCode] The ASCII keycode of key.
   * @returns {boolean} True only if 'CTRL' and 'M' keys are pressed together.
   */
  CTRL_M: function({ ctrlKey, metaKey, keyCode }){
    return ((ctrlKey === true || metaKey === true) && keyCode === kc('m'));
  },
  /**
   * Function to determine if key event was the 'F8' combination.
   * @static
   * @memberOf predicates
   * @param {Object} event The keyboard event.
   * @param {boolean} [event.altKey] True if 'ALT' modifer key was pressed during event.
   * @param {boolean} [event.ctrlKey] True if 'CTRL' modifer key was pressed during event.
   * @param {boolean} [event.shiftKey] True if 'SHIFT' modifer key was pressed during event.
   * @param {boolean} [event.metaKey] True if 'META' modifer key was pressed during event.
   * @param {number} [event.keyCode] The ASCII keycode of key.
   * @returns {boolean} True only if 'F8' key was pressed with no modifiers.
   */
  F8: function({ ctrlKey, shiftKey, altKey, metaKey, keyCode }){
    return (ctrlKey === false &&
      shiftKey === false &&
      altKey === false &&
      metaKey === false &&
      keyCode === kc('f8'));
  },
  /**
   * Function to determine if key event was the 'CTRL_R' combination.
   * @static
   * @memberOf predicates
   * @param {Object} event The keyboard event.
   * @param {boolean} [event.ctrlKey] True if 'CTRL' modifer key was pressed during event.
   * @param {boolean} [event.metaKey] True if 'META' modifer key was pressed during event.
   * @param {number} [event.keyCode] The ASCII keycode of key.
   * @returns {boolean} True only if 'CTRL' and 'R' keys are pressed together.
   */
  CTRL_R: function({ ctrlKey, metaKey, keyCode }){
    return ((ctrlKey === true || metaKey === true) && keyCode === kc('r'));
  },
  /**
   * Function to determine if key event was the 'F9' combination.
   * @static
   * @memberOf predicates
   * @param {Object} event The keyboard event.
   * @param {boolean} [event.altKey] True if 'ALT' modifer key was pressed during event.
   * @param {boolean} [event.ctrlKey] True if 'CTRL' modifer key was pressed during event.
   * @param {boolean} [event.shiftKey] True if 'SHIFT' modifer key was pressed during event.
   * @param {boolean} [event.metaKey] True if 'META' modifer key was pressed during event.
   * @param {number} [event.keyCode] The ASCII keycode of key.
   * @returns {boolean} True only if 'F9' key was pressed with no modifiers.
   */
  F9: function({ ctrlKey, shiftKey, altKey, metaKey, keyCode }){
    return (ctrlKey === false &&
      shiftKey === false &&
      altKey === false &&
      metaKey === false &&
      keyCode === kc('f9'));
  },
  /**
   * Function to determine if key event was the 'ESC' combination.
   * @static
   * @memberOf predicates
   * @param {Object} event The keyboard event.
   * @param {boolean} [event.altKey] True if 'ALT' modifer key was pressed during event.
   * @param {boolean} [event.ctrlKey] True if 'CTRL' modifer key was pressed during event.
   * @param {boolean} [event.shiftKey] True if 'SHIFT' modifer key was pressed during event.
   * @param {boolean} [event.metaKey] True if 'META' modifer key was pressed during event.
   * @param {number} [event.keyCode] The ASCII keycode of key.
   * @returns {boolean} True only if 'ESC' key was pressed with no modifiers.
   */
  ESC: function({ ctrlKey, shiftKey, altKey, metaKey, keyCode }){
    return (ctrlKey === false &&
      shiftKey === false &&
      altKey === false &&
      metaKey === false &&
      keyCode === kc('ESC'));
  },
  /**
   * Function to determine if key event was the 'UP' combination.
   * @static
   * @memberOf predicates
   * @param {Object} event The keyboard event.
   * @param {boolean} [event.altKey] True if 'ALT' modifer key was pressed during event.
   * @param {boolean} [event.ctrlKey] True if 'CTRL' modifer key was pressed during event.
   * @param {boolean} [event.shiftKey] True if 'SHIFT' modifer key was pressed during event.
   * @param {boolean} [event.metaKey] True if 'META' modifer key was pressed during event.
   * @param {number} [event.keyCode] The ASCII keycode of key.
   * @returns {boolean} True only if 'UP' key was pressed with no modifiers.
   */
  UP: function({ ctrlKey, shiftKey, altKey, metaKey, keyCode }){
    return (ctrlKey === false &&
      shiftKey === false &&
      altKey === false &&
      metaKey === false &&
      keyCode === kc('UP'));
  },
  /**
   * Function to determine if key event was the 'DOWN' combination.
   * @static
   * @memberOf predicates
   * @param {Object} event The keyboard event.
   * @param {boolean} [event.altKey] True if 'ALT' modifer key was pressed during event.
   * @param {boolean} [event.ctrlKey] True if 'CTRL' modifer key was pressed during event.
   * @param {boolean} [event.shiftKey] True if 'SHIFT' modifer key was pressed during event.
   * @param {boolean} [event.metaKey] True if 'META' modifer key was pressed during event.
   * @param {number} [event.keyCode] The ASCII keycode of key.
   * @returns {boolean} True only if 'DOWN' key was pressed with no modifiers.
   */
  DOWN: function({ ctrlKey, shiftKey, altKey, metaKey, keyCode }){
    return (ctrlKey === false &&
      shiftKey === false &&
      altKey === false &&
      metaKey === false &&
      keyCode === kc('DOWN'));
  },
  /**
   * Function to determine if key event was the 'LEFT' combination.
   * @static
   * @memberOf predicates
   * @param {Object} event The keyboard event.
   * @param {boolean} [event.altKey] True if 'ALT' modifer key was pressed during event.
   * @param {boolean} [event.ctrlKey] True if 'CTRL' modifer key was pressed during event.
   * @param {boolean} [event.shiftKey] True if 'SHIFT' modifer key was pressed during event.
   * @param {boolean} [event.metaKey] True if 'META' modifer key was pressed during event.
   * @param {number} [event.keyCode] The ASCII keycode of key.
   * @returns {boolean} True only if 'LEFT' key was pressed with no modifiers.
   */
  LEFT: function({ ctrlKey, shiftKey, altKey, metaKey, keyCode }){
    return (ctrlKey === false &&
      shiftKey === false &&
      altKey === false &&
      metaKey === false &&
      keyCode === kc('LEFT'));
  },
  /**
   * Function to determine if key event was the 'RIGHT' combination.
   * @static
   * @memberOf predicates
   * @param {Object} event The keyboard event.
   * @param {boolean} [event.altKey] True if 'ALT' modifer key was pressed during event.
   * @param {boolean} [event.ctrlKey] True if 'CTRL' modifer key was pressed during event.
   * @param {boolean} [event.shiftKey] True if 'SHIFT' modifer key was pressed during event.
   * @param {boolean} [event.metaKey] True if 'META' modifer key was pressed during event.
   * @param {number} [event.keyCode] The ASCII keycode of key.
   * @returns {boolean} True only if 'RIGHT' key was pressed with no modifiers.
   */
  RIGHT: function({ ctrlKey, shiftKey, altKey, metaKey, keyCode }){
    return (ctrlKey === false &&
      shiftKey === false &&
      altKey === false &&
      metaKey === false &&
      keyCode === kc('RIGHT'));
  },
  /**
   * Function to determine if key event was the 'ENTER' combination.
   * @static
   * @memberOf predicates
   * @param {Object} event The keyboard event.
   * @param {boolean} [event.altKey] True if 'ALT' modifer key was pressed during event.
   * @param {boolean} [event.ctrlKey] True if 'CTRL' modifer key was pressed during event.
   * @param {boolean} [event.shiftKey] True if 'SHIFT' modifer key was pressed during event.
   * @param {boolean} [event.metaKey] True if 'META' modifer key was pressed during event.
   * @param {number} [event.keyCode] The ASCII keycode of key.
   * @returns {boolean} True only if 'ENTER' key was pressed with no modifiers.
   */
  ENTER: function({ ctrlKey, shiftKey, altKey, metaKey, keyCode }){
    return (ctrlKey === false &&
      shiftKey === false &&
      altKey === false &&
      metaKey === false &&
      keyCode === kc('ENTER'));
  }
};
