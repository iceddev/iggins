# API documentation / src/predicates.js

<!-- div class="toc-container" -->

<!-- div -->

## `predicates`
* <a href="#predicates-ALT_CTRL_F">`predicates.ALT_CTRL_F`</a>
* <a href="#predicates-ALT_CTRL_G">`predicates.ALT_CTRL_G`</a>
* <a href="#predicates-ALT_SHIFT_TAB">`predicates.ALT_SHIFT_TAB`</a>
* <a href="#predicates-ALT_TAB">`predicates.ALT_TAB`</a>
* <a href="#predicates-BACSPACE">`predicates.BACSPACE`</a>
* <a href="#predicates-CTRL_A">`predicates.CTRL_A`</a>
* <a href="#predicates-CTRL_C">`predicates.CTRL_C`</a>
* <a href="#predicates-CTRL_DOWN">`predicates.CTRL_DOWN`</a>
* <a href="#predicates-CTRL_END">`predicates.CTRL_END`</a>
* <a href="#predicates-CTRL_EQUALS">`predicates.CTRL_EQUALS`</a>
* <a href="#predicates-CTRL_F">`predicates.CTRL_F`</a>
* <a href="#predicates-CTRL_F4">`predicates.CTRL_F4`</a>
* <a href="#predicates-CTRL_G">`predicates.CTRL_G`</a>
* <a href="#predicates-CTRL_HOME">`predicates.CTRL_HOME`</a>
* <a href="#predicates-CTRL_I">`predicates.CTRL_I`</a>
* <a href="#predicates-CTRL_M">`predicates.CTRL_M`</a>
* <a href="#predicates-CTRL_META_LEFT">`predicates.CTRL_META_LEFT`</a>
* <a href="#predicates-CTRL_META_RIGHT">`predicates.CTRL_META_RIGHT`</a>
* <a href="#predicates-CTRL_MINUS">`predicates.CTRL_MINUS`</a>
* <a href="#predicates-CTRL_O">`predicates.CTRL_O`</a>
* <a href="#predicates-CTRL_P">`predicates.CTRL_P`</a>
* <a href="#predicates-CTRL_R">`predicates.CTRL_R`</a>
* <a href="#predicates-CTRL_S">`predicates.CTRL_S`</a>
* <a href="#predicates-CTRL_SHIFT_G">`predicates.CTRL_SHIFT_G`</a>
* <a href="#predicates-CTRL_SHIFT_TAB">`predicates.CTRL_SHIFT_TAB`</a>
* <a href="#predicates-CTRL_SHIFT_Z">`predicates.CTRL_SHIFT_Z`</a>
* <a href="#predicates-CTRL_T">`predicates.CTRL_T`</a>
* <a href="#predicates-CTRL_TAB">`predicates.CTRL_TAB`</a>
* <a href="#predicates-CTRL_UP">`predicates.CTRL_UP`</a>
* <a href="#predicates-CTRL_V">`predicates.CTRL_V`</a>
* <a href="#predicates-CTRL_W">`predicates.CTRL_W`</a>
* <a href="#predicates-CTRL_X">`predicates.CTRL_X`</a>
* <a href="#predicates-CTRL_Z">`predicates.CTRL_Z`</a>
* <a href="#predicates-DOWN">`predicates.DOWN`</a>
* <a href="#predicates-ENTER">`predicates.ENTER`</a>
* <a href="#predicates-ESC">`predicates.ESC`</a>
* <a href="#predicates-F3">`predicates.F3`</a>
* <a href="#predicates-F4">`predicates.F4`</a>
* <a href="#predicates-F6">`predicates.F6`</a>
* <a href="#predicates-F7">`predicates.F7`</a>
* <a href="#predicates-F8">`predicates.F8`</a>
* <a href="#predicates-F9">`predicates.F9`</a>
* <a href="#predicates-LEFT">`predicates.LEFT`</a>
* <a href="#predicates-RIGHT">`predicates.RIGHT`</a>
* <a href="#predicates-SHIFT_F3">`predicates.SHIFT_F3`</a>
* <a href="#predicates-SHIFT_TAB">`predicates.SHIFT_TAB`</a>
* <a href="#predicates-TAB">`predicates.TAB`</a>
* <a href="#predicates-UP">`predicates.UP`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `predicates`

<!-- div -->

### <a id="predicates-ALT_CTRL_F"></a>`predicates.ALT_CTRL_F(event)`
<a href="#predicates-ALT_CTRL_F">#</a> [&#x24C8;](https://github.com/iceddev/iggins/blob/master/src/predicates.js#L205 "View in source") [&#x24C9;][1]

Function to determine if key event was the 'ALT_CTRL_F' combination.

#### Arguments
1. `event` *(Object)*: The keyboard event.
2. `[event.altKey]` *(boolean)*: True if 'ALT' modifer key was pressed during event.
3. `[event.ctrlKey]` *(boolean)*: True if 'CTRL' modifer key was pressed during event.
4. `[event.metaKey]` *(boolean)*: True if 'META' modifer key was pressed during event.
5. `[event.keyCode]` *(number)*: The ASCII keycode of key.

#### Returns
*(boolean)*:  True only if 'ALT', 'CTRL' and 'F' keys are pressed together.

* * *

<!-- /div -->

<!-- div -->

### <a id="predicates-ALT_CTRL_G"></a>`predicates.ALT_CTRL_G(event)`
<a href="#predicates-ALT_CTRL_G">#</a> [&#x24C8;](https://github.com/iceddev/iggins/blob/master/src/predicates.js#L219 "View in source") [&#x24C9;][1]

Function to determine if key event was the 'ALT_CTRL_G' combination.

#### Arguments
1. `event` *(Object)*: The keyboard event.
2. `[event.altKey]` *(boolean)*: True if 'ALT' modifer key was pressed during event.
3. `[event.ctrlKey]` *(boolean)*: True if 'CTRL' modifer key was pressed during event.
4. `[event.metaKey]` *(boolean)*: True if 'META' modifer key was pressed during event.
5. `[event.keyCode]` *(number)*: The ASCII keycode of key.

#### Returns
*(boolean)*:  True only if 'ALT', 'CTRL' and 'G' keys are pressed together.

* * *

<!-- /div -->

<!-- div -->

### <a id="predicates-ALT_SHIFT_TAB"></a>`predicates.ALT_SHIFT_TAB(event)`
<a href="#predicates-ALT_SHIFT_TAB">#</a> [&#x24C8;](https://github.com/iceddev/iggins/blob/master/src/predicates.js#L179 "View in source") [&#x24C9;][1]

Function to determine if key event was the 'ALT_SHIFT_TAB' combination.

#### Arguments
1. `event` *(Object)*: The keyboard event.
2. `[event.altKey]` *(boolean)*: True if 'ALT' modifer key was pressed during event.
3. `[event.shiftKey]` *(boolean)*: True if 'SHIFT' modifer key was pressed during event.
4. `[event.keyCode]` *(number)*: The ASCII keycode of key.

#### Returns
*(boolean)*:  True only if 'ALT', 'SHIFT' and 'TAB' keys are pressed together.

* * *

<!-- /div -->

<!-- div -->

### <a id="predicates-ALT_TAB"></a>`predicates.ALT_TAB(event)`
<a href="#predicates-ALT_TAB">#</a> [&#x24C8;](https://github.com/iceddev/iggins/blob/master/src/predicates.js#L191 "View in source") [&#x24C9;][1]

Function to determine if key event was the 'ALT_TAB' combination.

#### Arguments
1. `event` *(Object)*: The keyboard event.
2. `[event.altKey]` *(boolean)*: True if 'ALT' modifer key was pressed during event.
3. `[event.keyCode]` *(number)*: The ASCII keycode of key.

#### Returns
*(boolean)*:  True only if 'ALT' and 'TAB' keys are pressed together.

* * *

<!-- /div -->

<!-- div -->

### <a id="predicates-BACSPACE"></a>`predicates.BACSPACE(event)`
<a href="#predicates-BACSPACE">#</a> [&#x24C8;](https://github.com/iceddev/iggins/blob/master/src/predicates.js#L414 "View in source") [&#x24C9;][1]

Function to determine if key event was the 'BACKSPACE' combination.

#### Arguments
1. `event` *(Object)*: The keyboard event.
2. `[event.altKey]` *(boolean)*: True if 'ALT' modifer key was pressed during event.
3. `[event.ctrlKey]` *(boolean)*: True if 'CTRL' modifer key was pressed during event.
4. `[event.shiftKey]` *(boolean)*: True if 'SHIFT' modifer key was pressed during event.
5. `[event.metaKey]` *(boolean)*: True if 'META' modifer key was pressed during event.
6. `[event.keyCode]` *(number)*: The ASCII keycode of key.

#### Returns
*(boolean)*:  True only if 'BACKSPACE' key was pressed with no modifiers.

* * *

<!-- /div -->

<!-- div -->

### <a id="predicates-CTRL_A"></a>`predicates.CTRL_A(event)`
<a href="#predicates-CTRL_A">#</a> [&#x24C8;](https://github.com/iceddev/iggins/blob/master/src/predicates.js#L16 "View in source") [&#x24C9;][1]

Function to determine if key event was the 'CTRL_A' combination.

#### Arguments
1. `event` *(Object)*: The keyboard event.

#### Returns
*(boolean)*:  True only if 'CTRL' and 'A' keys are pressed together.

* * *

<!-- /div -->

<!-- div -->

### <a id="predicates-CTRL_C"></a>`predicates.CTRL_C(event)`
<a href="#predicates-CTRL_C">#</a> [&#x24C8;](https://github.com/iceddev/iggins/blob/master/src/predicates.js#L29 "View in source") [&#x24C9;][1]

Function to determine if key event was the 'CTRL_C' combination.

#### Arguments
1. `event` *(Object)*: The keyboard event.
2. `[event.ctrlKey]` *(boolean)*: True if 'CTRL' modifer key was pressed during event.
3. `[event.metaKey]` *(boolean)*: True if 'META' modifer key was pressed during event.
4. `[event.keyCode]` *(number)*: The ASCII keycode of key.

#### Returns
*(boolean)*:  True only if 'CTRL' and 'C' keys are pressed together.

* * *

<!-- /div -->

<!-- div -->

### <a id="predicates-CTRL_DOWN"></a>`predicates.CTRL_DOWN(event)`
<a href="#predicates-CTRL_DOWN">#</a> [&#x24C8;](https://github.com/iceddev/iggins/blob/master/src/predicates.js#L360 "View in source") [&#x24C9;][1]

Function to determine if key event was the 'CTRL_DOWN' combination.

#### Arguments
1. `event` *(Object)*: The keyboard event.
2. `[event.ctrlKey]` *(boolean)*: True if 'CTRL' modifer key was pressed during event.
3. `[event.metaKey]` *(boolean)*: True if 'META' modifer key was pressed during event.
4. `[event.keyCode]` *(number)*: The ASCII keycode of key.

#### Returns
*(boolean)*:  True only if 'CTRL' and 'DOWN' keys are pressed together.

* * *

<!-- /div -->

<!-- div -->

### <a id="predicates-CTRL_END"></a>`predicates.CTRL_END(event)`
<a href="#predicates-CTRL_END">#</a> [&#x24C8;](https://github.com/iceddev/iggins/blob/master/src/predicates.js#L334 "View in source") [&#x24C9;][1]

Function to determine if key event was the 'CTRL_END' combination.

#### Arguments
1. `event` *(Object)*: The keyboard event.
2. `[event.ctrlKey]` *(boolean)*: True if 'CTRL' modifer key was pressed during event.
3. `[event.metaKey]` *(boolean)*: True if 'META' modifer key was pressed during event.
4. `[event.keyCode]` *(number)*: The ASCII keycode of key.

#### Returns
*(boolean)*:  True only if 'CTRL' and 'END' keys are pressed together.

* * *

<!-- /div -->

<!-- div -->

### <a id="predicates-CTRL_EQUALS"></a>`predicates.CTRL_EQUALS(event)`
<a href="#predicates-CTRL_EQUALS">#</a> [&#x24C8;](https://github.com/iceddev/iggins/blob/master/src/predicates.js#L386 "View in source") [&#x24C9;][1]

Function to determine if key event was the 'CTRL_EQUALS' combination.

#### Arguments
1. `event` *(Object)*: The keyboard event.
2. `[event.ctrlKey]` *(boolean)*: True if 'CTRL' modifer key was pressed during event.
3. `[event.metaKey]` *(boolean)*: True if 'META' modifer key was pressed during event.
4. `[event.keyCode]` *(number)*: The ASCII keycode of key.

#### Returns
*(boolean)*:  True only if 'CTRL' and 'EQUALS' keys are pressed together.

* * *

<!-- /div -->

<!-- div -->

### <a id="predicates-CTRL_F"></a>`predicates.CTRL_F(event)`
<a href="#predicates-CTRL_F">#</a> [&#x24C8;](https://github.com/iceddev/iggins/blob/master/src/predicates.js#L42 "View in source") [&#x24C9;][1]

Function to determine if key event was the 'CTRL_F' combination.

#### Arguments
1. `event` *(Object)*: The keyboard event.
2. `[event.ctrlKey]` *(boolean)*: True if 'CTRL' modifer key was pressed during event.
3. `[event.metaKey]` *(boolean)*: True if 'META' modifer key was pressed during event.
4. `[event.keyCode]` *(number)*: The ASCII keycode of key.

#### Returns
*(boolean)*:  True only if 'CTRL' and 'F' keys are pressed together.

* * *

<!-- /div -->

<!-- div -->

### <a id="predicates-CTRL_F4"></a>`predicates.CTRL_F4(event)`
<a href="#predicates-CTRL_F4">#</a> [&#x24C8;](https://github.com/iceddev/iggins/blob/master/src/predicates.js#L281 "View in source") [&#x24C9;][1]

Function to determine if key event was the 'CTRL_F4' combination.

#### Arguments
1. `event` *(Object)*: The keyboard event.
2. `[event.ctrlKey]` *(boolean)*: True if 'CTRL' modifer key was pressed during event.
3. `[event.keyCode]` *(number)*: The ASCII keycode of key.

#### Returns
*(boolean)*:  True only if 'CTRL' and 'F4' keys are pressed together.

* * *

<!-- /div -->

<!-- div -->

### <a id="predicates-CTRL_G"></a>`predicates.CTRL_G(event)`
<a href="#predicates-CTRL_G">#</a> [&#x24C8;](https://github.com/iceddev/iggins/blob/master/src/predicates.js#L94 "View in source") [&#x24C9;][1]

Function to determine if key event was the 'CTRL_G' combination.

#### Arguments
1. `event` *(Object)*: The keyboard event.
2. `[event.ctrlKey]` *(boolean)*: True if 'CTRL' modifer key was pressed during event.
3. `[event.metaKey]` *(boolean)*: True if 'META' modifer key was pressed during event.
4. `[event.keyCode]` *(number)*: The ASCII keycode of key.

#### Returns
*(boolean)*:  True only if 'CTRL' and 'G' keys are pressed together.

* * *

<!-- /div -->

<!-- div -->

### <a id="predicates-CTRL_HOME"></a>`predicates.CTRL_HOME(event)`
<a href="#predicates-CTRL_HOME">#</a> [&#x24C8;](https://github.com/iceddev/iggins/blob/master/src/predicates.js#L293 "View in source") [&#x24C9;][1]

Function to determine if key event was the 'CTRL_HOME' combination.

#### Arguments
1. `event` *(Object)*: The keyboard event.
2. `[event.ctrlKey]` *(boolean)*: True if 'CTRL' modifer key was pressed during event.
3. `[event.keyCode]` *(number)*: The ASCII keycode of key.

#### Returns
*(boolean)*:  True only if 'CTRL' and 'HOME' keys are pressed together.

* * *

<!-- /div -->

<!-- div -->

### <a id="predicates-CTRL_I"></a>`predicates.CTRL_I(event)`
<a href="#predicates-CTRL_I">#</a> [&#x24C8;](https://github.com/iceddev/iggins/blob/master/src/predicates.js#L489 "View in source") [&#x24C9;][1]

Function to determine if key event was the 'CTRL_I' combination.

#### Arguments
1. `event` *(Object)*: The keyboard event.
2. `[event.ctrlKey]` *(boolean)*: True if 'CTRL' modifer key was pressed during event.
3. `[event.metaKey]` *(boolean)*: True if 'META' modifer key was pressed during event.
4. `[event.keyCode]` *(number)*: The ASCII keycode of key.

#### Returns
*(boolean)*:  True only if 'CTRL' and 'I' keys are pressed together.

* * *

<!-- /div -->

<!-- div -->

### <a id="predicates-CTRL_M"></a>`predicates.CTRL_M(event)`
<a href="#predicates-CTRL_M">#</a> [&#x24C8;](https://github.com/iceddev/iggins/blob/master/src/predicates.js#L553 "View in source") [&#x24C9;][1]

Function to determine if key event was the 'CTRL_M' combination.

#### Arguments
1. `event` *(Object)*: The keyboard event.
2. `[event.ctrlKey]` *(boolean)*: True if 'CTRL' modifer key was pressed during event.
3. `[event.metaKey]` *(boolean)*: True if 'META' modifer key was pressed during event.
4. `[event.keyCode]` *(number)*: The ASCII keycode of key.

#### Returns
*(boolean)*:  True only if 'CTRL' and 'M' keys are pressed together.

* * *

<!-- /div -->

<!-- div -->

### <a id="predicates-CTRL_META_LEFT"></a>`predicates.CTRL_META_LEFT(event)`
<a href="#predicates-CTRL_META_LEFT">#</a> [&#x24C8;](https://github.com/iceddev/iggins/blob/master/src/predicates.js#L306 "View in source") [&#x24C9;][1]

Function to determine if key event was the 'CTRL_META_LEFT' combination.

#### Arguments
1. `event` *(Object)*: The keyboard event.
2. `[event.ctrlKey]` *(boolean)*: True if 'CTRL' modifer key was pressed during event.
3. `[event.metaKey]` *(boolean)*: True if 'META' modifer key was pressed during event.
4. `[event.keyCode]` *(number)*: The ASCII keycode of key.

#### Returns
*(boolean)*:  True only if 'CTRL', 'META', and 'LEFT' key was pressed with no modifiers.

* * *

<!-- /div -->

<!-- div -->

### <a id="predicates-CTRL_META_RIGHT"></a>`predicates.CTRL_META_RIGHT(event)`
<a href="#predicates-CTRL_META_RIGHT">#</a> [&#x24C8;](https://github.com/iceddev/iggins/blob/master/src/predicates.js#L321 "View in source") [&#x24C9;][1]

Function to determine if key event was the 'CTRL_META_RIGHT' combination.

#### Arguments
1. `event` *(Object)*: The keyboard event.
2. `[event.altKey]` *(boolean)*: True if 'ALT' modifer key was pressed during event.
3. `[event.ctrlKey]` *(boolean)*: True if 'CTRL' modifer key was pressed during event.
4. `[event.shiftKey]` *(boolean)*: True if 'SHIFT' modifer key was pressed during event.
5. `[event.metaKey]` *(boolean)*: True if 'META' modifer key was pressed during event.
6. `[event.keyCode]` *(number)*: The ASCII keycode of key.

#### Returns
*(boolean)*:  True only if 'CTRL', 'META', and 'RIGHT' key was pressed with no modifiers.

* * *

<!-- /div -->

<!-- div -->

### <a id="predicates-CTRL_MINUS"></a>`predicates.CTRL_MINUS(event)`
<a href="#predicates-CTRL_MINUS">#</a> [&#x24C8;](https://github.com/iceddev/iggins/blob/master/src/predicates.js#L373 "View in source") [&#x24C9;][1]

Function to determine if key event was the 'CTRL_MINUS' combination.

#### Arguments
1. `event` *(Object)*: The keyboard event.
2. `[event.ctrlKey]` *(boolean)*: True if 'CTRL' modifer key was pressed during event.
3. `[event.metaKey]` *(boolean)*: True if 'META' modifer key was pressed during event.
4. `[event.keyCode]` *(number)*: The ASCII keycode of key.

#### Returns
*(boolean)*:  True only if 'CTRL' and 'MINUS' keys are pressed together.

* * *

<!-- /div -->

<!-- div -->

### <a id="predicates-CTRL_O"></a>`predicates.CTRL_O(event)`
<a href="#predicates-CTRL_O">#</a> [&#x24C8;](https://github.com/iceddev/iggins/blob/master/src/predicates.js#L399 "View in source") [&#x24C9;][1]

Function to determine if key event was the 'CTRL_O' combination.

#### Arguments
1. `event` *(Object)*: The keyboard event.
2. `[event.ctrlKey]` *(boolean)*: True if 'CTRL' modifer key was pressed during event.
3. `[event.metaKey]` *(boolean)*: True if 'META' modifer key was pressed during event.
4. `[event.keyCode]` *(number)*: The ASCII keycode of key.

#### Returns
*(boolean)*:  True only if 'CTRL' and 'O' keys are pressed together.

* * *

<!-- /div -->

<!-- div -->

### <a id="predicates-CTRL_P"></a>`predicates.CTRL_P(event)`
<a href="#predicates-CTRL_P">#</a> [&#x24C8;](https://github.com/iceddev/iggins/blob/master/src/predicates.js#L444 "View in source") [&#x24C9;][1]

Function to determine if key event was the 'CTRL_P' combination.

#### Arguments
1. `event` *(Object)*: The keyboard event.
2. `[event.ctrlKey]` *(boolean)*: True if 'CTRL' modifer key was pressed during event.
3. `[event.metaKey]` *(boolean)*: True if 'META' modifer key was pressed during event.
4. `[event.keyCode]` *(number)*: The ASCII keycode of key.

#### Returns
*(boolean)*:  True only if 'CTRL' and 'P' keys are pressed together.

* * *

<!-- /div -->

<!-- div -->

### <a id="predicates-CTRL_R"></a>`predicates.CTRL_R(event)`
<a href="#predicates-CTRL_R">#</a> [&#x24C8;](https://github.com/iceddev/iggins/blob/master/src/predicates.js#L585 "View in source") [&#x24C9;][1]

Function to determine if key event was the 'CTRL_R' combination.

#### Arguments
1. `event` *(Object)*: The keyboard event.
2. `[event.ctrlKey]` *(boolean)*: True if 'CTRL' modifer key was pressed during event.
3. `[event.metaKey]` *(boolean)*: True if 'META' modifer key was pressed during event.
4. `[event.keyCode]` *(number)*: The ASCII keycode of key.

#### Returns
*(boolean)*:  True only if 'CTRL' and 'R' keys are pressed together.

* * *

<!-- /div -->

<!-- div -->

### <a id="predicates-CTRL_S"></a>`predicates.CTRL_S(event)`
<a href="#predicates-CTRL_S">#</a> [&#x24C8;](https://github.com/iceddev/iggins/blob/master/src/predicates.js#L431 "View in source") [&#x24C9;][1]

Function to determine if key event was the 'CTRL_S' combination.

#### Arguments
1. `event` *(Object)*: The keyboard event.
2. `[event.ctrlKey]` *(boolean)*: True if 'CTRL' modifer key was pressed during event.
3. `[event.metaKey]` *(boolean)*: True if 'META' modifer key was pressed during event.
4. `[event.keyCode]` *(number)*: The ASCII keycode of key.

#### Returns
*(boolean)*:  True only if 'CTRL' and 'S' keys are pressed together.

* * *

<!-- /div -->

<!-- div -->

### <a id="predicates-CTRL_SHIFT_G"></a>`predicates.CTRL_SHIFT_G(event)`
<a href="#predicates-CTRL_SHIFT_G">#</a> [&#x24C8;](https://github.com/iceddev/iggins/blob/master/src/predicates.js#L135 "View in source") [&#x24C9;][1]

Function to determine if key event was the 'CTRL_SHIFT_G' combination.

#### Arguments
1. `event` *(Object)*: The keyboard event.
2. `[event.ctrlKey]` *(boolean)*: True if 'CTRL' modifer key was pressed during event.
3. `[event.shiftKey]` *(boolean)*: True if 'SHIFT' modifer key was pressed during event.
4. `[event.metaKey]` *(boolean)*: True if 'META' modifer key was pressed during event.
5. `[event.keyCode]` *(number)*: The ASCII keycode of key.

#### Returns
*(boolean)*:  True only if 'CTRL', 'SHIFT' and 'G' keys are pressed together.

* * *

<!-- /div -->

<!-- div -->

### <a id="predicates-CTRL_SHIFT_TAB"></a>`predicates.CTRL_SHIFT_TAB(event)`
<a href="#predicates-CTRL_SHIFT_TAB">#</a> [&#x24C8;](https://github.com/iceddev/iggins/blob/master/src/predicates.js#L474 "View in source") [&#x24C9;][1]

Function to determine if key event was the 'CTRL_SHIFT_TAB' combination.

#### Arguments
1. `event` *(Object)*: The keyboard event.
2. `[event.ctrlKey]` *(boolean)*: True if 'CTRL' modifer key was pressed during event.
3. `[event.shiftKey]` *(boolean)*: True if 'SHIFT' modifer key was pressed during event.
4. `[event.metaKey]` *(boolean)*: True if 'META' modifer key was pressed during event.
5. `[event.keyCode]` *(number)*: The ASCII keycode of key.

#### Returns
*(boolean)*:  True only if 'CTRL', 'SHIFT' and 'TAB' keys are pressed together.

* * *

<!-- /div -->

<!-- div -->

### <a id="predicates-CTRL_SHIFT_Z"></a>`predicates.CTRL_SHIFT_Z(event)`
<a href="#predicates-CTRL_SHIFT_Z">#</a> [&#x24C8;](https://github.com/iceddev/iggins/blob/master/src/predicates.js#L121 "View in source") [&#x24C9;][1]

Function to determine if key event was the 'CTRL_SHIFT_Z' combination.

#### Arguments
1. `event` *(Object)*: The keyboard event.
2. `[event.ctrlKey]` *(boolean)*: True if 'CTRL' modifer key was pressed during event.
3. `[event.shiftKey]` *(boolean)*: True if 'SHIFT' modifer key was pressed during event.
4. `[event.metaKey]` *(boolean)*: True if 'META' modifer key was pressed during event.
5. `[event.keyCode]` *(number)*: The ASCII keycode of key.

#### Returns
*(boolean)*:  True only if 'CTRL', 'SHIFT' and 'Z' keys are pressed together.

* * *

<!-- /div -->

<!-- div -->

### <a id="predicates-CTRL_T"></a>`predicates.CTRL_T(event)`
<a href="#predicates-CTRL_T">#</a> [&#x24C8;](https://github.com/iceddev/iggins/blob/master/src/predicates.js#L521 "View in source") [&#x24C9;][1]

Function to determine if key event was the 'CTRL_T' combination.

#### Arguments
1. `event` *(Object)*: The keyboard event.
2. `[event.ctrlKey]` *(boolean)*: True if 'CTRL' modifer key was pressed during event.
3. `[event.metaKey]` *(boolean)*: True if 'META' modifer key was pressed during event.
4. `[event.keyCode]` *(number)*: The ASCII keycode of key.

#### Returns
*(boolean)*:  True only if 'CTRL' and 'T' keys are pressed together.

* * *

<!-- /div -->

<!-- div -->

### <a id="predicates-CTRL_TAB"></a>`predicates.CTRL_TAB(event)`
<a href="#predicates-CTRL_TAB">#</a> [&#x24C8;](https://github.com/iceddev/iggins/blob/master/src/predicates.js#L458 "View in source") [&#x24C9;][1]

Function to determine if key event was the 'CTRL_TAB' combination.

#### Arguments
1. `event` *(Object)*: The keyboard event.
2. `[event.ctrlKey]` *(boolean)*: True if 'CTRL' modifer key was pressed during event.
3. `[event.shiftKey]` *(boolean)*: True if 'SHIFT' modifer key was pressed during event.
4. `[event.metaKey]` *(boolean)*: True if 'META' modifer key was pressed during event.
5. `[event.keyCode]` *(number)*: The ASCII keycode of key.

#### Returns
*(boolean)*:  True only if 'CTRL' and 'TAB' keys are pressed together.

* * *

<!-- /div -->

<!-- div -->

### <a id="predicates-CTRL_UP"></a>`predicates.CTRL_UP(event)`
<a href="#predicates-CTRL_UP">#</a> [&#x24C8;](https://github.com/iceddev/iggins/blob/master/src/predicates.js#L347 "View in source") [&#x24C9;][1]

Function to determine if key event was the 'CTRL_UP' combination.

#### Arguments
1. `event` *(Object)*: The keyboard event.
2. `[event.ctrlKey]` *(boolean)*: True if 'CTRL' modifer key was pressed during event.
3. `[event.metaKey]` *(boolean)*: True if 'META' modifer key was pressed during event.
4. `[event.keyCode]` *(number)*: The ASCII keycode of key.

#### Returns
*(boolean)*:  True only if 'CTRL' and 'UP' keys are pressed together.

* * *

<!-- /div -->

<!-- div -->

### <a id="predicates-CTRL_V"></a>`predicates.CTRL_V(event)`
<a href="#predicates-CTRL_V">#</a> [&#x24C8;](https://github.com/iceddev/iggins/blob/master/src/predicates.js#L55 "View in source") [&#x24C9;][1]

Function to determine if key event was the 'CTRL_V' combination.

#### Arguments
1. `event` *(Object)*: The keyboard event.
2. `[event.ctrlKey]` *(boolean)*: True if 'CTRL' modifer key was pressed during event.
3. `[event.metaKey]` *(boolean)*: True if 'META' modifer key was pressed during event.
4. `[event.keyCode]` *(number)*: The ASCII keycode of key.

#### Returns
*(boolean)*:  True only if 'CTRL' and 'V' keys are pressed together.

* * *

<!-- /div -->

<!-- div -->

### <a id="predicates-CTRL_W"></a>`predicates.CTRL_W(event)`
<a href="#predicates-CTRL_W">#</a> [&#x24C8;](https://github.com/iceddev/iggins/blob/master/src/predicates.js#L107 "View in source") [&#x24C9;][1]

Function to determine if key event was the 'CTRL_W' combination.

#### Arguments
1. `event` *(Object)*: The keyboard event.
2. `[event.ctrlKey]` *(boolean)*: True if 'CTRL' modifer key was pressed during event.
3. `[event.metaKey]` *(boolean)*: True if 'META' modifer key was pressed during event.
4. `[event.keyCode]` *(number)*: The ASCII keycode of key.

#### Returns
*(boolean)*:  True only if 'CTRL' and 'W' keys are pressed together.

* * *

<!-- /div -->

<!-- div -->

### <a id="predicates-CTRL_X"></a>`predicates.CTRL_X(event)`
<a href="#predicates-CTRL_X">#</a> [&#x24C8;](https://github.com/iceddev/iggins/blob/master/src/predicates.js#L68 "View in source") [&#x24C9;][1]

Function to determine if key event was the 'CTRL_X' combination.

#### Arguments
1. `event` *(Object)*: The keyboard event.
2. `[event.ctrlKey]` *(boolean)*: True if 'CTRL' modifer key was pressed during event.
3. `[event.metaKey]` *(boolean)*: True if 'META' modifer key was pressed during event.
4. `[event.keyCode]` *(number)*: The ASCII keycode of key.

#### Returns
*(boolean)*:  True only if 'CTRL' and 'X' keys are pressed together.

* * *

<!-- /div -->

<!-- div -->

### <a id="predicates-CTRL_Z"></a>`predicates.CTRL_Z(event)`
<a href="#predicates-CTRL_Z">#</a> [&#x24C8;](https://github.com/iceddev/iggins/blob/master/src/predicates.js#L81 "View in source") [&#x24C9;][1]

Function to determine if key event was the 'CTRL_Z' combination.

#### Arguments
1. `event` *(Object)*: The keyboard event.
2. `[event.ctrlKey]` *(boolean)*: True if 'CTRL' modifer key was pressed during event.
3. `[event.metaKey]` *(boolean)*: True if 'META' modifer key was pressed during event.
4. `[event.keyCode]` *(number)*: The ASCII keycode of key.

#### Returns
*(boolean)*:  True only if 'CTRL' and 'Z' keys are pressed together.

* * *

<!-- /div -->

<!-- div -->

### <a id="predicates-DOWN"></a>`predicates.DOWN(event)`
<a href="#predicates-DOWN">#</a> [&#x24C8;](https://github.com/iceddev/iggins/blob/master/src/predicates.js#L657 "View in source") [&#x24C9;][1]

Function to determine if key event was the 'DOWN' combination.

#### Arguments
1. `event` *(Object)*: The keyboard event.
2. `[event.altKey]` *(boolean)*: True if 'ALT' modifer key was pressed during event.
3. `[event.ctrlKey]` *(boolean)*: True if 'CTRL' modifer key was pressed during event.
4. `[event.shiftKey]` *(boolean)*: True if 'SHIFT' modifer key was pressed during event.
5. `[event.metaKey]` *(boolean)*: True if 'META' modifer key was pressed during event.
6. `[event.keyCode]` *(number)*: The ASCII keycode of key.

#### Returns
*(boolean)*:  True only if 'DOWN' key was pressed with no modifiers.

* * *

<!-- /div -->

<!-- div -->

### <a id="predicates-ENTER"></a>`predicates.ENTER(event)`
<a href="#predicates-ENTER">#</a> [&#x24C8;](https://github.com/iceddev/iggins/blob/master/src/predicates.js#L714 "View in source") [&#x24C9;][1]

Function to determine if key event was the 'ENTER' combination.

#### Arguments
1. `event` *(Object)*: The keyboard event.
2. `[event.altKey]` *(boolean)*: True if 'ALT' modifer key was pressed during event.
3. `[event.ctrlKey]` *(boolean)*: True if 'CTRL' modifer key was pressed during event.
4. `[event.shiftKey]` *(boolean)*: True if 'SHIFT' modifer key was pressed during event.
5. `[event.metaKey]` *(boolean)*: True if 'META' modifer key was pressed during event.
6. `[event.keyCode]` *(number)*: The ASCII keycode of key.

#### Returns
*(boolean)*:  True only if 'ENTER' key was pressed with no modifiers.

* * *

<!-- /div -->

<!-- div -->

### <a id="predicates-ESC"></a>`predicates.ESC(event)`
<a href="#predicates-ESC">#</a> [&#x24C8;](https://github.com/iceddev/iggins/blob/master/src/predicates.js#L619 "View in source") [&#x24C9;][1]

Function to determine if key event was the 'ESC' combination.

#### Arguments
1. `event` *(Object)*: The keyboard event.
2. `[event.altKey]` *(boolean)*: True if 'ALT' modifer key was pressed during event.
3. `[event.ctrlKey]` *(boolean)*: True if 'CTRL' modifer key was pressed during event.
4. `[event.shiftKey]` *(boolean)*: True if 'SHIFT' modifer key was pressed during event.
5. `[event.metaKey]` *(boolean)*: True if 'META' modifer key was pressed during event.
6. `[event.keyCode]` *(number)*: The ASCII keycode of key.

#### Returns
*(boolean)*:  True only if 'ESC' key was pressed with no modifiers.

* * *

<!-- /div -->

<!-- div -->

### <a id="predicates-F3"></a>`predicates.F3(event)`
<a href="#predicates-F3">#</a> [&#x24C8;](https://github.com/iceddev/iggins/blob/master/src/predicates.js#L234 "View in source") [&#x24C9;][1]

Function to determine if key event was the 'F3' combination.

#### Arguments
1. `event` *(Object)*: The keyboard event.
2. `[event.altKey]` *(boolean)*: True if 'ALT' modifer key was pressed during event.
3. `[event.ctrlKey]` *(boolean)*: True if 'CTRL' modifer key was pressed during event.
4. `[event.shiftKey]` *(boolean)*: True if 'SHIFT' modifer key was pressed during event.
5. `[event.metaKey]` *(boolean)*: True if 'META' modifer key was pressed during event.
6. `[event.keyCode]` *(number)*: The ASCII keycode of key.

#### Returns
*(boolean)*:  True only if 'F3' key was pressed with no modifiers.

* * *

<!-- /div -->

<!-- div -->

### <a id="predicates-F4"></a>`predicates.F4(event)`
<a href="#predicates-F4">#</a> [&#x24C8;](https://github.com/iceddev/iggins/blob/master/src/predicates.js#L265 "View in source") [&#x24C9;][1]

Function to determine if key event was the 'F4' combination.

#### Arguments
1. `event` *(Object)*: The keyboard event.
2. `[event.altKey]` *(boolean)*: True if 'ALT' modifer key was pressed during event.
3. `[event.ctrlKey]` *(boolean)*: True if 'CTRL' modifer key was pressed during event.
4. `[event.shiftKey]` *(boolean)*: True if 'SHIFT' modifer key was pressed during event.
5. `[event.metaKey]` *(boolean)*: True if 'META' modifer key was pressed during event.
6. `[event.keyCode]` *(number)*: The ASCII keycode of key.

#### Returns
*(boolean)*:  True only if 'F4' key was pressed with no modifiers.

* * *

<!-- /div -->

<!-- div -->

### <a id="predicates-F6"></a>`predicates.F6(event)`
<a href="#predicates-F6">#</a> [&#x24C8;](https://github.com/iceddev/iggins/blob/master/src/predicates.js#L504 "View in source") [&#x24C9;][1]

Function to determine if key event was the 'F6' combination.

#### Arguments
1. `event` *(Object)*: The keyboard event.
2. `[event.altKey]` *(boolean)*: True if 'ALT' modifer key was pressed during event.
3. `[event.ctrlKey]` *(boolean)*: True if 'CTRL' modifer key was pressed during event.
4. `[event.shiftKey]` *(boolean)*: True if 'SHIFT' modifer key was pressed during event.
5. `[event.metaKey]` *(boolean)*: True if 'META' modifer key was pressed during event.
6. `[event.keyCode]` *(number)*: The ASCII keycode of key.

#### Returns
*(boolean)*:  True only if 'F6' key was pressed with no modifiers.

* * *

<!-- /div -->

<!-- div -->

### <a id="predicates-F7"></a>`predicates.F7(event)`
<a href="#predicates-F7">#</a> [&#x24C8;](https://github.com/iceddev/iggins/blob/master/src/predicates.js#L536 "View in source") [&#x24C9;][1]

Function to determine if key event was the 'F7' combination.

#### Arguments
1. `event` *(Object)*: The keyboard event.
2. `[event.altKey]` *(boolean)*: True if 'ALT' modifer key was pressed during event.
3. `[event.ctrlKey]` *(boolean)*: True if 'CTRL' modifer key was pressed during event.
4. `[event.shiftKey]` *(boolean)*: True if 'SHIFT' modifer key was pressed during event.
5. `[event.metaKey]` *(boolean)*: True if 'META' modifer key was pressed during event.
6. `[event.keyCode]` *(number)*: The ASCII keycode of key.

#### Returns
*(boolean)*:  True only if 'F7' key was pressed with no modifiers.

* * *

<!-- /div -->

<!-- div -->

### <a id="predicates-F8"></a>`predicates.F8(event)`
<a href="#predicates-F8">#</a> [&#x24C8;](https://github.com/iceddev/iggins/blob/master/src/predicates.js#L568 "View in source") [&#x24C9;][1]

Function to determine if key event was the 'F8' combination.

#### Arguments
1. `event` *(Object)*: The keyboard event.
2. `[event.altKey]` *(boolean)*: True if 'ALT' modifer key was pressed during event.
3. `[event.ctrlKey]` *(boolean)*: True if 'CTRL' modifer key was pressed during event.
4. `[event.shiftKey]` *(boolean)*: True if 'SHIFT' modifer key was pressed during event.
5. `[event.metaKey]` *(boolean)*: True if 'META' modifer key was pressed during event.
6. `[event.keyCode]` *(number)*: The ASCII keycode of key.

#### Returns
*(boolean)*:  True only if 'F8' key was pressed with no modifiers.

* * *

<!-- /div -->

<!-- div -->

### <a id="predicates-F9"></a>`predicates.F9(event)`
<a href="#predicates-F9">#</a> [&#x24C8;](https://github.com/iceddev/iggins/blob/master/src/predicates.js#L600 "View in source") [&#x24C9;][1]

Function to determine if key event was the 'F9' combination.

#### Arguments
1. `event` *(Object)*: The keyboard event.
2. `[event.altKey]` *(boolean)*: True if 'ALT' modifer key was pressed during event.
3. `[event.ctrlKey]` *(boolean)*: True if 'CTRL' modifer key was pressed during event.
4. `[event.shiftKey]` *(boolean)*: True if 'SHIFT' modifer key was pressed during event.
5. `[event.metaKey]` *(boolean)*: True if 'META' modifer key was pressed during event.
6. `[event.keyCode]` *(number)*: The ASCII keycode of key.

#### Returns
*(boolean)*:  True only if 'F9' key was pressed with no modifiers.

* * *

<!-- /div -->

<!-- div -->

### <a id="predicates-LEFT"></a>`predicates.LEFT(event)`
<a href="#predicates-LEFT">#</a> [&#x24C8;](https://github.com/iceddev/iggins/blob/master/src/predicates.js#L676 "View in source") [&#x24C9;][1]

Function to determine if key event was the 'LEFT' combination.

#### Arguments
1. `event` *(Object)*: The keyboard event.
2. `[event.altKey]` *(boolean)*: True if 'ALT' modifer key was pressed during event.
3. `[event.ctrlKey]` *(boolean)*: True if 'CTRL' modifer key was pressed during event.
4. `[event.shiftKey]` *(boolean)*: True if 'SHIFT' modifer key was pressed during event.
5. `[event.metaKey]` *(boolean)*: True if 'META' modifer key was pressed during event.
6. `[event.keyCode]` *(number)*: The ASCII keycode of key.

#### Returns
*(boolean)*:  True only if 'LEFT' key was pressed with no modifiers.

* * *

<!-- /div -->

<!-- div -->

### <a id="predicates-RIGHT"></a>`predicates.RIGHT(event)`
<a href="#predicates-RIGHT">#</a> [&#x24C8;](https://github.com/iceddev/iggins/blob/master/src/predicates.js#L695 "View in source") [&#x24C9;][1]

Function to determine if key event was the 'RIGHT' combination.

#### Arguments
1. `event` *(Object)*: The keyboard event.
2. `[event.altKey]` *(boolean)*: True if 'ALT' modifer key was pressed during event.
3. `[event.ctrlKey]` *(boolean)*: True if 'CTRL' modifer key was pressed during event.
4. `[event.shiftKey]` *(boolean)*: True if 'SHIFT' modifer key was pressed during event.
5. `[event.metaKey]` *(boolean)*: True if 'META' modifer key was pressed during event.
6. `[event.keyCode]` *(number)*: The ASCII keycode of key.

#### Returns
*(boolean)*:  True only if 'RIGHT' key was pressed with no modifiers.

* * *

<!-- /div -->

<!-- div -->

### <a id="predicates-SHIFT_F3"></a>`predicates.SHIFT_F3(event)`
<a href="#predicates-SHIFT_F3">#</a> [&#x24C8;](https://github.com/iceddev/iggins/blob/master/src/predicates.js#L250 "View in source") [&#x24C9;][1]

Function to determine if key event was the 'SHIFT_F3' combination.

#### Arguments
1. `event` *(Object)*: The keyboard event.
2. `[event.shiftKey]` *(boolean)*: True if 'SHIFT' modifer key was pressed during event.
3. `[event.keyCode]` *(number)*: The ASCII keycode of key.

#### Returns
*(boolean)*:  True only if 'SHIFT' and 'F3' keys are pressed together.

* * *

<!-- /div -->

<!-- div -->

### <a id="predicates-SHIFT_TAB"></a>`predicates.SHIFT_TAB(event)`
<a href="#predicates-SHIFT_TAB">#</a> [&#x24C8;](https://github.com/iceddev/iggins/blob/master/src/predicates.js#L166 "View in source") [&#x24C9;][1]

Function to determine if key event was the 'SHIFT_TAB' combination.

#### Arguments
1. `event` *(Object)*: The keyboard event.
2. `[event.shiftKey]` *(boolean)*: True if 'SHIFT' modifer key was pressed during event.
3. `[event.keyCode]` *(number)*: The ASCII keycode of key.

#### Returns
*(boolean)*:  True only if 'SHIFT' and 'TAB' keys are pressed together.

* * *

<!-- /div -->

<!-- div -->

### <a id="predicates-TAB"></a>`predicates.TAB(event)`
<a href="#predicates-TAB">#</a> [&#x24C8;](https://github.com/iceddev/iggins/blob/master/src/predicates.js#L150 "View in source") [&#x24C9;][1]

Function to determine if key event was the 'TAB' combination.

#### Arguments
1. `event` *(Object)*: The keyboard event.
2. `[event.altKey]` *(boolean)*: True if 'ALT' modifer key was pressed during event.
3. `[event.ctrlKey]` *(boolean)*: True if 'CTRL' modifer key was pressed during event.
4. `[event.shiftKey]` *(boolean)*: True if 'SHIFT' modifer key was pressed during event.
5. `[event.metaKey]` *(boolean)*: True if 'META' modifer key was pressed during event.
6. `[event.keyCode]` *(number)*: The ASCII keycode of key.

#### Returns
*(boolean)*:  True only if 'TAB' key was pressed with no modifiers.

* * *

<!-- /div -->

<!-- div -->

### <a id="predicates-UP"></a>`predicates.UP(event)`
<a href="#predicates-UP">#</a> [&#x24C8;](https://github.com/iceddev/iggins/blob/master/src/predicates.js#L638 "View in source") [&#x24C9;][1]

Function to determine if key event was the 'UP' combination.

#### Arguments
1. `event` *(Object)*: The keyboard event.
2. `[event.altKey]` *(boolean)*: True if 'ALT' modifer key was pressed during event.
3. `[event.ctrlKey]` *(boolean)*: True if 'CTRL' modifer key was pressed during event.
4. `[event.shiftKey]` *(boolean)*: True if 'SHIFT' modifer key was pressed during event.
5. `[event.metaKey]` *(boolean)*: True if 'META' modifer key was pressed during event.
6. `[event.keyCode]` *(number)*: The ASCII keycode of key.

#### Returns
*(boolean)*:  True only if 'UP' key was pressed with no modifiers.

* * *

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #predicates "Jump back to the TOC."
