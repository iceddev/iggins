'use strict';

var _ = require('lodash');

var predicates = require('./predicates');

/**
 * Irken application plugin enabling keyboard shortcuts
 * @param  {obj}   app  Instance of Irken application
 * @param  {obj}  opts Options to be passed to Iggins plugin.
 * @param  {Function} done Noop function
 * @return {undefined}        No return value.
 */
function iggins(app, opts, done) {

  var handlers = [];

  /**
   * Registers a key combination and handler as an application keyboard shortcut.
   * @param  {string} predicate Has the form 'CTRL_L' or 'ALT_SHIFT_U'
   * @param  {function} handler The action to invoke when keypress is detected.
   * @return {function}           A keypress remover function to be called by requestor on DOM unmount.
   */
  function keypress(predicate, handler) {
    var keyAction = {
      predicate: predicate,
      handler: handler
    };

    handlers.push(keyAction);

    return _.partial(_.remove, handlers, keyAction);
  }

  /**
   * Matches kepress events to registered keypresses and invokes handlers.
   * @param  {obj} evt Browser generated keypress
   * @return {undefined}     Side effect only.
   */
  function match(evt) {
    _.forEach(handlers, function (handlerObject) {
      if (handlerObject.predicate(evt)) {
        handlerObject.handler(evt);
      }
    });
  }

  _.assign(keypress, predicates);

  app.expose('keypress', keypress);

  if (typeof window !== 'undefined') {
    window.addEventListener('keydown', match);
  }

  done();
}

module.exports = iggins;