'use strict';

const vkey = require('vkey');

const codes = {
  '<shift>': '',
  '<backspace>': 'BACKSPACE',
  '<tab>': 'TAB',
  '<control>': '',
  '<escape>': 'ESC',
  '<alt>': '',
  '<home>': 'HOME',
  '<end>': 'END',
  '<meta>': 'META',
  '<space>': 'SPACE'
}


function Iggins(app, opts, done){

  let combo = {
    CTRL_A: {
      description: 'Select all text in current source code',
      action: ''
    },
    CTRL_C: {
      description: 'Copy selected text to the clipboard',
      action: ''
    },
    //CTRL_E: {
      //description: 'Copy selected text to the clipboard',
      //action: ''
    //},
    CTRL_F: {
      description: 'Find or replace text',
      action: ''
    },
    CTRL_V: {
      description: 'Paste text from clipboard to selected area',
      action: ''
    },
    CTRL_X: {
      description: 'Cut selected text to the clipboard',
      action: ''
    },
    CTRL_Z: {
      description: 'Undo last action (unlimited)',
      action: ''
    },
    CTRL_SHIFT_Z: {
      description: 'Redo last action (unlimited)',
      action: ''
    },
    TAB: {
      description: 'Indent block (Inserts space characters)',
      action: ''
    },
    SHIFT_TAB: {
      description: 'Outdent block (Deletes space characters)',
      action: ''
    },
    F3: {
      description: 'Find text again',
      action: ''
    },
    Shift_F3: {
      description: 'Find text again (opposite direction)',
      action: ''
    },
    F4: {
      description: 'Replace current found selection',
      action: ''
    },
    CTRL_F4: {
      description: 'Perform replace and find next',
      action: ''
    },
    CTRL_HOME: {
      description: 'Jump to top of file',
      action: ''
    },
    CTRL_END: {
      description: 'Jump to end of file',
      action: ''
    },
    // CTRL_UPARROW: {
    //   description: 'Move source view up one line without moving cursor',
    //   action: ''
    // },
    // CTRL_DOWNARROW: {
    //   description: 'Move source view down one line without moving cursor',
    //   action: ''
    // },
    CTRL_MINUS: {
      description: 'decrease font size',
      action: ''
    },
    CTRL_EQUALS: {
      description: 'increase font size',
      action: ''
    },
    // File Management

    CTRL_O: {
      description: 'Open source; may just focus file explorer',
      action: ''
    },
    // CURSOR_ENTER: {
    //   description: 'keys navigate and select files',
    //   action: ''
    // },
    BACKSPACE: {
      description: 'exits file view (project) (to project view)',
      action: ''
    },
    CTRL_S: {
      description: 'Save current source code file to its current location on disk',
      action: ''
    },
    CTRL_P: {
      description: 'Print current source',
      action: ''
    },
    CTRL_TAB: {
      description: 'Switch to next open source',
      action: ''
    },
    CTRL_SHIFT_TAB: {
      description: 'Switch to previous open source',
      action: ''
    },

    // Code
    CTRL_I: {
      description: 'Identify BASIC Stamp firmware.',
      action: ''
    },
    F6: {
      description: 'Identify BASIC Stamp firmware.',
      action: ''
    },
    CTRL_T: {
      description: 'Perform a syntax check on the code.',
      action: ''
    },
    F7: {
      description: 'Perform a syntax check on the code.',
      action: ''
    },
    CTRL_M: {
      description: 'Tokenize and open Memory Map display.',
      action: ''
    },
    F8: {
      description: 'Tokenize and open Memory Map display.',
      action: ''
    },
    CTRL_R: {
      description: 'Tokenize, download to BASIC Stamp, and open Debug display if necessary.',
      action: ''
    },
    F9: {
      description: 'Tokenize, download to BASIC Stamp, and open Debug display if necessary.',
      action: ''
    },
    ESC: {
      description: 'Close current dialog.',
      action: ''
    }
  };

  // add keyCombos from the application
  function register(name, opt, fn){
    let keyCombo = name;
    let opts = opt;
    let handler = fn;
    let description = '';
    if(typeof opts === 'function'){
      handler = opts;
      opts = {};
    }

    console.log('combo: ', keyCombo);
    if (combo[keyCombo]){
      description = combo[keyCombo].description;
    }

    combo[keyCombo] = {
      description: opts.description || description,
      action: handler
    }
    console.log(combo);
  }

  // remove registered combos and events when components unmount
  function removeCombo(keyCombo){
    delete combo[keyCombo];
  }

  var keytrans = {
    16: 'SHIFT',
    17: 'CTRL',
    18: 'ALT'
  }

  let kp = [];
  function match(e){
    let chUpper;
    let chChar;
    let chKey = e.key || e.keyCode; 
    if (keytrans[chKey]){
      chUpper = keytrans[chKey];
    }
    else {
      chChar = String.fromCharCode(chKey);
      chUpper = chChar.toUpperCase();
    }
    if(e.type = 'keydown' && (kp.indexOf(chUpper) === -1)){
      kp.push(chUpper);
    }
    else {
      kp.pop(chUpper);
    }

    const joinedKP = kp.join('_');

    if (combo[joinedKP]){
      combo[joinedKP].action();
    }
  }

  app.expose('keypress', {
    register: register,
    unRegister: removeCombo,
    match: match
  });

  if (window){
    window.addEventListener('keydown', match);
    window.addEventListener('keyup', match);
  }

  done();
};

module.exports = Iggins;
