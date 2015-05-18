'use strict';

const _ = require('lodash');

const predicates = require('./predicates');

function Iggins(app, opts, done){

  const handlers = [];

  function keypress(predicate, handler){
    let keyAction = {
      predicate: predicate,
      handler: handler
    };

    handlers.push(keyAction);

    return _.partial(_.remove, handlers, keyAction);
  }

  function match(evt){
    _.forEach(handlers, function(handlerObject){
      if(handlerObject.predicate(evt)){
        handlerObject.handler(evt);
      }
    });
  }

  app.expose('keypress', keypress);

  if (window){
    window.addEventListener('keydown', match(evt));
  }

  done();
};

module.exports = _.assign(Iggins, predicates);
