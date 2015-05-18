'use strict';

const keycode = require('keycode');

const exclude = [
	keycode('SHIFT'),
	keycode('CTRL'),
	keycode('CMD'),
	keycode('ALT')
];

function Iggins(app, opts, done){

  let combo = {};

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

    if (combo[keyCombo]){
      description = combo[keyCombo].description;
    }

    combo[keyCombo] = {
      description: opts.description || description,
      action: handler
    }
  }

  // remove registered combos and events when components unmount
  function removeCombo(keyCombo){
	    delete combo[keyCombo];
	  }

  function match(e){

    let keystroke = getKeystroke(e);
    callAction(keystroke, combo);
  }

  function getKeystroke(kbEvent){
		if (exclude.indexOf(kbEvent.keyCode) !== -1){
			return;
		}

		let alt = kbEvent.altKey ? 'ALT_' : ''
		let meta = kbEvent.metaKey ? 'META_' : ''
		let ctrl = kbEvent.ctrlKey ? 'CTRL_' : ''
		let shift = kbEvent.shiftKey ? 'SHIFT_' : ''
		let ch = kbEvent.key ? kbEvent.key.toUpperCase() : keycode(kbEvent.keyCode).toUpperCase()

		return `${alt}${meta}${ctrl}${shift}${ch}`
	}

	function callAction(keystroke, directory){
		if(directory[keystroke]){
			directory[keystroke].action();
		}
	}

  app.expose('keypress', {
    register: register,
    unRegister: removeCombo,
    match: match
  });

  if (window){
    window.addEventListener('keydown', match);
  }

  done();
};

module.exports = Iggins;
