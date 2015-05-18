'use strict';

const _ = require('lodash');

const predicates = require('./predicates');

function iggins(app, opts, done){

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

  _.assign(keypress, predicates);

  app.expose('keypress', keypress);

  if (typeof window !== 'undefined'){
    window.addEventListener('keydown', match);
  }

  done();
};

module.exports = iggins;
