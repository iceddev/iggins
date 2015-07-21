## iggins
[Irken](https://github.com/iceddev/Irken) plugin for listening for key combinations

### Install:

`$ npm install iggins`

### Usage:
To begin, register iggins on an Irken application. See how [Pak](https://github.com/iceddev/pak) registers plugins on Irken.

Iggins exposes a `keypress` function that is used to register a 'keyAction' on the Irken application. A 'keyAction' object is comprised of:
 * `predicate` - a predicate function that accepts an event and returns true/false, and
 * `handler` - the behavior(function) that should associated with the key event.


Upon successfully registering a keyAction, `keypress()` will return another function, to be used at a later time, that removes the newly registered 'keyAction' from the application.

For example:
```js
function CTRL_F(evt) {
  return (evt.ctrlKey === true || evt.metaKey === true) && evt.keyCode === 70;
}
// => true or false

function handler(){
  console.log("Hello World!");
}

// registers a 'keyAction' on an application
var kp = iggins.keypress(CTRL_F, handler);

// and returns a function
console.log(typeof kp);
  // => 'function'
```

#### Who uses the returned function?
The returned function is particularly important when the newly registered `keyAction.handler' interacts with a DOM element that may at some future time cease to exist.  The returned function can be passed to the caller and invoked when the reference needs to be broken to allow for garbage collection.

#### Exposed Keypresses
Iggins ships with some common key combinations already exposed (i.e., CTRL_S and CTRL_SHIFT_UP) on the object by default.  For a complete listing take a look at [predicates.js](/src/predicates.js).


# API Reference

#### Plugin Registration

* `iggins(app, opts, done)` - register the iggins plugin in an irken application.

#### Options

* `opts.namespace` - select the namespace at registration that the plugin will have on the application. Default value is 'keypress'.

#### Methods

* `keypress(predicate, handler)` - Registers a key combination and handler as an application keyboard shortcut.


# API Documentation

<!-- div -->

## `iggins`

<!-- div -->

### <a id="iggins"></a>`iggins(app, opts, done)`

Iggins plugin

#### Arguments
1. `app` *(Object)*: Instance of Irken application.
2. `opts` *(Object)*: the options object.
3. `[opts.namespace]` *(string)*: the namespace for the plugin on the application
4. `done` *(Function)*: callback when registration completes.

* * *

<!-- /div -->

### <a id="iggins-keypress"></a>`iggins.keypress(predicate, handler)`

Registers a key combination and handler as an application keyboard shortcut.

#### Arguments
1. `predicate` *(function)*: function returning true/false based on keydown events
2. `handler` *(function)*: the action to invoke when predicate returns true.

* * *

<!-- /div -->
