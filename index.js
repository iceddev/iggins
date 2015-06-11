'use strict';

var _ = require('lodash');

var predicates = require('./predicates');

function iggins(app, opts, done) {

  var handlers = [];

  /**
   * Registers a key combination and handler as an application keyboard shortcut.
   * @public
   * @memberOf iggins
   * @param  {function} predicate Function returning true/false based on keydown events
   * @param  {function} handler The action to invoke when predicate returns true.
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
   * @private
   * @memberOf iggins
   * @param  {object} evt Browser generated keypress
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