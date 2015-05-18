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



  let kp = [];

  function decodeChar(key, charList){
    if (typeof key === 'string'){
      return key.toUpperCase();
    }

    if(charList[key]){
      return charList[key];
    }

    return String.fromCharCode(ch).toUpperCase();
  }

  function joinKeys(ch, evt, collector){
    if(evt.type === 'keydown' && collector.indexOf(ch) === -1){
      collector.push(ch);
      return;
    }

    collector.pop(ch);
  }

  function match(e){
    let chKey = e.key || e.keyCode; 

    decodeChar(chKey, keytrans);
    joinKeys(ch, e, kp);

    const joinedKeypress = kp.join('_');

    if (combo[joinedKeypress]){
      combo[joinedKeypress].action();
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
