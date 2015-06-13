'use strict';

const _ = require('lodash');

const predicates = require('./predicates');

/**
 * Irken registration function
 * @static
 * @example
 *
 * function CTRL_F(evt) {
 *   return (evt.ctrlKey === true || evt.metaKey === true) && evt.keyCode === 70;
 * }
 * // => true or false
 *
 * function handler(){
 *   console.log("Hello World!");
 * }
 *
 * // registers a 'keyAction' on an application
 * var kp = iggins.keypress(CTRL_F, handler);
 */
function iggins(app, opts, done){
  /**
   * Options passed during registration plugin.
   *
   * @type Object
   * @name  options
   */

  /**
   * Used to store registered functions.
   * @type Array
   */
  const handlers = [];

  /**
   * Namespace to expose
   * @type string
   * @memberOf options
   * @name namespace
   */
  const namespace = opts.namespace || 'keypress';

  /**
   * Registers a key combination and handler as an application keyboard shortcut.
   * @static
   * @memberOf iggins
   * @param  {Function} predicate function returning true/false based on keydown events
   * @param  {Function} handler the action to invoke when predicate returns true.
   * @returns {Function}           A keypress remover function to be called by requestor on DOM unmount.
   */
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

  app.expose(namespace, keypress);

  if (typeof window !== 'undefined'){
    window.addEventListener('keydown', match);
  }

  done();
}

module.exports = iggins;
