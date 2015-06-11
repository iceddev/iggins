# Documentation to use iggins

<!-- div class="toc-container" -->

<!-- div -->

## `iggins`
* <a href="#iggins">`iggins`</a>
* <a href="#iggins-keypress">`iggins.keypress`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `iggins`

<!-- div -->

### <a id="iggins"></a>`iggins(app, opts, done)`
<a href="#iggins">#</a> [&#x24C8;](https://github.com/iceddev/iggins/blob/master/src/index.js#L42 "View in source") [&#x24C9;][1]

A plugin for Irken applications that exposes keyboard shortcut functionality.

#### Arguments
1. `app` *(object)*: Instance of Irken application
2. `opts` *(object)*: Options to be passed to Iggins plugin.
3. `done` *(Function)*: Noop function

#### Example
```js
// Relies on having a Irken application.
var Irken = require('irken');
var app = new Irken();

var plugins = [
  {
    register: require('iggins')
  }
];

// Is registered on an Irken applicaion as a plugin.
// This exposes the keypress functionality.
app.register(plugins, function(err){
 console.log('registered', err, app);
 app.render(function(err){
   console.log('rendered', err);
 });
});

//For debugging
window.app = app;

//Verify that the keypress function is exposed on the Irken application.
console.log(typeof app.keypress);
// => 'function'
```
* * *

<!-- /div -->

<!-- div -->

### <a id="iggins-keypress"></a>`iggins.keypress(predicate, handler)`
<a href="#iggins-keypress">#</a> [&#x24C8;](https://github.com/iceddev/iggins/blob/master/src/index.js#L65 "View in source") [&#x24C9;][1]

Registers a key combination and handler as an application keyboard shortcut.

#### Arguments
1. `predicate` *(string)*: Has the form 'CTRL_L' or 'ALT_SHIFT_U'
2. `handler` *(function)*: The action to invoke when keypress is detected.

#### Example
```js
var kp = iggins.keypress('ALT_K', function(){
  console.log("Hello World!");
});

console.log(iggins.keypress.ALT_K);
// => function ALT_K(evt)

console.log(typeof kp);
// => 'function'
```
* * *

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #iggins "Jump back to the TOC."
