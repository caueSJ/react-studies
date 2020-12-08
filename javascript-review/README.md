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

### Classes
**Property** --> Like variables, attached to classes/objects.

ES6
```javascript
constructor() {
    this.myProperty = 'value';
}
```

ES7
```javascript
myProperty = 'value';
```

**Methods** --> Like functions, attached to classes/objects.

ES6
```javascript
myMethod() { ... }
```

ES7
```javascript
myMethod = () => { ... }
```

### Spread and Rest Operator
**Spread** -> Split up array elements OR objects properties
```javascript
const newArray = [ ...oldArray, 1, 2 ]
```
This code "attached" values 1 and 2 to values into oldArray, and put into newArray.

```javascript
const newObject = { ...oldObject, newProp: 5 }
```
Add new property "5" into newObject, together old properties.

**Rest** -> Merge a list of function arguments into an array.
```javascript
const discount50 = (...prices) => {
    return prices.map(price => price * 0.5 );
}

let halfPrice = discount50(10, 20, 30, 50, 150);
// halfPrice = [5, 10, 15, 25, 75]
```

### Destructuring
Extract array elements or object properties to store them in variables

Array Destructuring
```javascript
let a, b, rest;

[a, b] = [10, 20];

console.log(a); // 10

console.log(b); // 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest); // [30,40,50]
```

Object Destructuring
```javascript
{name} = {name: 'Caue', age: 23}

console.log(name); // Caue

console.log(age); // undefined
```

### Reference and Primitive Types
**Primitive types**: `integer`, `boolean`, `float`, ...

**Reference**: `array`, `list`, ...

```javascript
const number = 1;  // Primitive type

const secondNumber = number; // Reference (point to memory location for number variable)
```

Reference is very danger on React, because can change a object in a chain effect, modifying components should not be modified.
Therefore, is used **Spread Operator** for "copy" a object without changing it.

```javascript
const person = {
    name: 'Chloe'
};

const otherPerson = { ...person };
```