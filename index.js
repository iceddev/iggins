'use strict';

var _ = require('lodash');

var predicates = require('./predicates');

/**
 * A plugin for Irken applications that exposes keyboard shortcut functionality.
 * @param  {object}   app  Instance of Irken application
 * @param  {object}  opts Options to be passed to Iggins plugin.
 * @param  {Function} done Noop function
 * @return {undefined}        No return value.
 * @example
 *
 * // Relies on having a Irken application.
 * var Irken = require('irken');
 * var app = new Irken();
 *
 * var plugins = [
 *   {
 *     register: require('iggins')
 *   }
 * ];
 *
 * // Is registered on an Irken applicaion as a plugin.
 * // This exposes the keypress functionality.
 * app.register(plugins, function(err){
 *  console.log('registered', err, app);
 *  app.render(function(err){
 *    console.log('rendered', err);
 *  });
 * });
 *
 * //For debugging
 * window.app = app;
 *
 * //Verify that the keypress function is exposed on the Irken application.
 * console.log(typeof app.keypress);
 * // => 'function'
 */
function iggins(app, opts, done) {

  var handlers = [];

  /**
   * Registers a key combination and handler as an application keyboard shortcut.
   * @public
   * @param  {string} predicate Has the form 'CTRL_L' or 'ALT_SHIFT_U'
   * @param  {function} handler The action to invoke when keypress is detected.
   * @return {function}           A keypress remover function to be called by requestor on DOM unmount.
   * @example
   *
   * var kp = iggins.keypress('ALT_K', function(){
   *   console.log("Hello World!");
   * });
   *
   * console.log(iggins.keypress.ALT_K);
   * // => function ALT_K(evt)
   *
   * console.log(typeof kp);
   * // => 'function'
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