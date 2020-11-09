# react-studies

## Refreshing Next Generation Javascript

### Variables

**`const`** --> Constant values

**`let`** --> Variable values

### Arrow Functions

List of arguments + Arrow + Function body
```javascript
const myFunction = (argument1, argument2, ...) => {
    return 'function body...';
}
```

If have only one argument, parentheses can be omited from the argument list.

**Examples**
```javascript
const printName = name => {
    console.log(name);
}
```

If the function has only one return line, the function can be written as follows:
```javascript
const multiply = number => number * 2;
```

### Export & Imports (Modules)

**`person.js`**
```javascript
const person = {
    name: 'Caue'
}

export default person;
```

**`utility.js`**
```javascript
export const clear = () => {...};

export const baseFont = 16;
```

**`app.js`**

Default export
```javascript
import person from ./person.js;
import prs from ./person.js;
```

Named export
```javascript
import { clear } from ./utility.js;
import { baseFont } from ./utility.js;
```
