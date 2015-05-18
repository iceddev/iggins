'use strict';

const _ = require('lodash');

function Iggins(app, opts, done){

  const handlers = [];

  // add keyCombos from the application
  function register(predicate, handler){
    handlers.push({
      predicate: predicate,
      handler: handler
    });
  }

  // remove registered combos and events when components unmount
  function removeCombo(predicate){
    handlers = _.reject(handlers, {'predicate', predicate});
  }

  function match(e){
    _.forEach(handlers, function(handlerObject){
      if(handlerObject.predicate(evt)){
        handlerObject.handler(evt);
      }
    });
  }

  app.expose('keypress', {
    register: register,
    unRegister: removeCombo,
    match: match
  });

  if (window){
    window.addEventListener('keydown', match(evt));
  }

  done();
};

module.exports = Iggins;

app.keypress(app.keypress.CTRL_A, handler);
