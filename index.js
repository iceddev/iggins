/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var vkey = __webpack_require__(1);

	var codes = {
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
	};

	function Iggins(app, opts, done) {

	  var combo = {
	    CTRL_A: {
	      description: 'Select all text in current source code',
	      action: ''
	    },
	    CTRL_C: {
	      description: 'Copy selected text to the clipboard',
	      action: ''
	    },
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
	  function register(name, opt, fn) {
	    var keyCombo = name;
	    var opts = opt;
	    var handler = fn;
	    if (typeof opts === 'function') {
	      handler = opts;
	      opts = {};
	    }

	    var description = combo[keyCombo].description;

	    combo[keyCombo] = {
	      description: opts.description || description || '',
	      action: handler
	    };
	  }

	  // remove registered combos and events when components unmount
	  function removeCombo(keyCombo) {
	    delete combo[keyCombo];
	  }

	  function match(e) {
	    var kp = '';
	    var chName = e.key || e.keyCode || e.charCode;

	    if (e.altKey) {
	      kp.concat('ALT_');
	    }
	    if (e.ctrlKey) {
	      kp.concat('CTRL_');
	    }
	    if (e.shiftKey) {
	      kp.concat('SHIFT_');
	    }

	    kp.concat(normalizeChar(chName));
	    if (combo[kp]) {
	      combo[kp].action();
	    }
	  }

	  function normalizeChar(charCode) {
	    if (typeof charCode === 'string') {
	      return charCode.toUpperCase();
	    }
	    var output = vkey(charCode);
	    return codes[output] || output;
	  }

	  app.expose('keypress', {
	    register: register,
	    unRegister: removeCombo,
	    match: match
	  });

	  if (window) {
	    window.addEventListener('keyCapture', this.match);
	  }

	  done();
	};

	module.exports = Iggins;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var ua = typeof window !== 'undefined' ? window.navigator.userAgent : ''
	  , isOSX = /OS X/.test(ua)
	  , isOpera = /Opera/.test(ua)
	  , maybeFirefox = !/like Gecko/.test(ua) && !isOpera

	var i, output = module.exports = {
	  0:  isOSX ? '<menu>' : '<UNK>'
	, 1:  '<mouse 1>'
	, 2:  '<mouse 2>'
	, 3:  '<break>'
	, 4:  '<mouse 3>'
	, 5:  '<mouse 4>'
	, 6:  '<mouse 5>'
	, 8:  '<backspace>'
	, 9:  '<tab>'
	, 12: '<clear>'
	, 13: '<enter>'
	, 16: '<shift>'
	, 17: '<control>'
	, 18: '<alt>'
	, 19: '<pause>'
	, 20: '<caps-lock>'
	, 21: '<ime-hangul>'
	, 23: '<ime-junja>'
	, 24: '<ime-final>'
	, 25: '<ime-kanji>'
	, 27: '<escape>'
	, 28: '<ime-convert>'
	, 29: '<ime-nonconvert>'
	, 30: '<ime-accept>'
	, 31: '<ime-mode-change>'
	, 27: '<escape>'
	, 32: '<space>'
	, 33: '<page-up>'
	, 34: '<page-down>'
	, 35: '<end>'
	, 36: '<home>'
	, 37: '<left>'
	, 38: '<up>'
	, 39: '<right>'
	, 40: '<down>'
	, 41: '<select>'
	, 42: '<print>'
	, 43: '<execute>'
	, 44: '<snapshot>'
	, 45: '<insert>'
	, 46: '<delete>'
	, 47: '<help>'
	, 91: '<meta>'  // meta-left -- no one handles left and right properly, so we coerce into one.
	, 92: '<meta>'  // meta-right
	, 93: isOSX ? '<meta>' : '<menu>'      // chrome,opera,safari all report this for meta-right (osx mbp).
	, 95: '<sleep>'
	, 106: '<num-*>'
	, 107: '<num-+>'
	, 108: '<num-enter>'
	, 109: '<num-->'
	, 110: '<num-.>'
	, 111: '<num-/>'
	, 144: '<num-lock>'
	, 145: '<scroll-lock>'
	, 160: '<shift-left>'
	, 161: '<shift-right>'
	, 162: '<control-left>'
	, 163: '<control-right>'
	, 164: '<alt-left>'
	, 165: '<alt-right>'
	, 166: '<browser-back>'
	, 167: '<browser-forward>'
	, 168: '<browser-refresh>'
	, 169: '<browser-stop>'
	, 170: '<browser-search>'
	, 171: '<browser-favorites>'
	, 172: '<browser-home>'

	  // ff/osx reports '<volume-mute>' for '-'
	, 173: isOSX && maybeFirefox ? '-' : '<volume-mute>'
	, 174: '<volume-down>'
	, 175: '<volume-up>'
	, 176: '<next-track>'
	, 177: '<prev-track>'
	, 178: '<stop>'
	, 179: '<play-pause>'
	, 180: '<launch-mail>'
	, 181: '<launch-media-select>'
	, 182: '<launch-app 1>'
	, 183: '<launch-app 2>'
	, 186: ';'
	, 187: '='
	, 188: ','
	, 189: '-'
	, 190: '.'
	, 191: '/'
	, 192: '`'
	, 219: '['
	, 220: '\\'
	, 221: ']'
	, 222: "'"
	, 223: '<meta>'
	, 224: '<meta>'       // firefox reports meta here.
	, 226: '<alt-gr>'
	, 229: '<ime-process>'
	, 231: isOpera ? '`' : '<unicode>'
	, 246: '<attention>'
	, 247: '<crsel>'
	, 248: '<exsel>'
	, 249: '<erase-eof>'
	, 250: '<play>'
	, 251: '<zoom>'
	, 252: '<no-name>'
	, 253: '<pa-1>'
	, 254: '<clear>'
	}

	for(i = 58; i < 65; ++i) {
	  output[i] = String.fromCharCode(i)
	}

	// 0-9
	for(i = 48; i < 58; ++i) {
	  output[i] = (i - 48)+''
	}

	// A-Z
	for(i = 65; i < 91; ++i) {
	  output[i] = String.fromCharCode(i)
	}

	// num0-9
	for(i = 96; i < 106; ++i) {
	  output[i] = '<num-'+(i - 96)+'>'
	}

	// F1-F24
	for(i = 112; i < 136; ++i) {
	  output[i] = 'F'+(i-111)
	}


/***/ }
/******/ ]);