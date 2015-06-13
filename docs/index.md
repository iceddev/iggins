# API documentation / src/index.js

<!-- div class="toc-container" -->

<!-- div -->

## `iggins`
* <a href="#iggins">`iggins`</a>
* <a href="#iggins-keypress">`iggins.keypress`</a>

<!-- /div -->

<!-- div -->

## `options`
* <a href="#options">`options`</a>
* <a href="#options-namespace">`options.namespace`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `iggins`

<!-- div -->

### <a id="iggins"></a>`iggins()`
<a href="#iggins">#</a> [&#x24C8;](https://github.com/iceddev/iggins/blob/master/src/index.js#L24 "View in source") [&#x24C9;][1]

Irken registration function

#### Example
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
```
* * *

<!-- /div -->

<!-- div -->

### <a id="iggins-keypress"></a>`iggins.keypress(predicate, handler)`
<a href="#iggins-keypress">#</a> [&#x24C8;](https://github.com/iceddev/iggins/blob/master/src/index.js#L54 "View in source") [&#x24C9;][1]

Registers a key combination and handler as an application keyboard shortcut.

#### Arguments
1. `predicate` *(Function)*: function returning true/false based on keydown events
2. `handler` *(Function)*: the action to invoke when predicate returns true.

#### Returns
*(Function)*:            A keypress remover function to be called by requestor on DOM unmount.

* * *

<!-- /div -->

<!-- /div -->

<!-- div -->

## `options`

<!-- div -->

### <a id="options"></a>`options`
<a href="#options">#</a> [&#x24C8;](https://github.com/iceddev/iggins/blob/master/src/index.js#L32 "View in source") [&#x24C9;][1]

(Object): Options passed during registration plugin.

* * *

<!-- /div -->

<!-- div -->

### <a id="options-namespace"></a>`options.namespace`
<a href="#options-namespace">#</a> [&#x24C8;](https://github.com/iceddev/iggins/blob/master/src/index.js#L44 "View in source") [&#x24C9;][1]

(string): Namespace to expose

* * *

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #iggins "Jump back to the TOC."
