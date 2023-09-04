# JavaScript Objects, Serialization, Proxy, Closure, Polyfilling, and More on Class Prototype

## Objects

JavaScript allows you to work with objects for various purposes:

### Data Objects

You can create data objects using object literal notation. For example:

```javascript
const student = {
  "fname": "Ole",
  "lname": "Olsen",
  "phone": ["11223344", "12345678", "87654321"],
  "courses": {
    "DAT152": "Advanced Web Applications",
    "DAT151": "Database and Unix System Administration"
  }
};
```

These data objects typically contain properties with data but no functions.

### Syntax for Object Properties

Object property names do not necessarily need to be quoted. For example:

```javascript
const o = {
  "propertyA": "some value",
  propertyB: "another value",
  "functionA": function (args) {...},
  functionB: function (args) {...},
  functionC(args) {}
};
```

However, in JSON, property names must be quoted.

## Using Objects

You can use objects in JavaScript in various ways:

### Using Object Literal

```javascript
const o = {
  _course: "DAT152",
  init: function () {
    document.getElementById("bt").addEventListener("click", this._sayHello.bind(this));
  },
  _sayHello: function () {
    window.alert(`Welcome to ${this._course}`);
  }
};
o.init();
```

### Using Classes

```javascript
class Controller {
  #course = "DAT152";
  constructor() {
    document.getElementById("bt").addEventListener("click", this.#sayHello.bind(this));
  }
  #sayHello() {
    window.alert(`Welcome to ${this.#course}`);
  }
}
new Controller();
```

Objects are easier to serialize using `JSON.stringify`, while classes offer additional features like private fields and decorators.

## Object Properties

Properties of objects in JavaScript have attributes such as writable, enumerable, and configurable. You can define properties using `Object.defineProperty`. For example:

```javascript
const student = {};
Object.defineProperty(student, "fname", {
  value: "Ole",
  writable: true,
  enumerable: true,
  configurable: false
});
```

You can also define multiple properties at once using `Object.defineProperties`, seal an object with `Object.seal`, freeze an object with `Object.freeze`, and copy an object with `Object.create`.

## Getters and Setters

JavaScript allows you to create data objects with getters and setters. For example:

```javascript
const student = {
  _fname: null,
  _reg: /\p{Lu}\p{Ll}+/u,
  get fname() { return this._fname },
  set fname(fname) {
    if (!this._reg.test(fname)) {
      throw new Error("Wrong format on first name");
    }
    this._fname = fname;
  }
};
```

You can also define getters and setters as properties using `Object.defineProperties`.

## Serialization

Serialization in JavaScript is commonly used for communication between client and server using JSON. When serializing objects with `JSON.stringify`, only data properties and getters are included. Functions are ignored or replaced with null.

To ensure correct serialization, you can use methods like `toJSON`, manipulate the `enumerable` property, or utilize the Proxy class or private properties through closure.

## Proxy (Not Exam Topic)

Proxies in JavaScript allow you to intercept various operations, such as accessing properties, using the "new" operator, making function calls, iterating through objects, and configuring object properties. Proxies can also extend objects and work alongside Reflect, which provides methods like `Reflect.get` and `Reflect.ownKeys` for working with objects.

## Closure

Closure is a technique for creating private data in objects and classes. It involves using local function variables as private properties, which are only accessible within the function body. Functions created with closure retain access to these variables even after the function has run.

## Polyfilling

Polyfilling is used to implement newer JavaScript features in older browsers. You can use libraries like core-js or transcompilers like Babel to bridge the gap between modern JavaScript and older browsers. Polyfilling allows you to utilize newer language features not supported by older browsers.

## Class Prototype (Not Exam Topic)

Class instances in JavaScript are objects with a prototype chain. You can use Object methods to manipulate class fields and methods. Class fields become properties of instances, and class methods are properties of the prototype object. The prototype chain allows for inheritance and method lookup.

### Static Fields and Methods (Not Exam Topic)

Static fields and methods are properties and methods of the constructor function. Static fields are accessible on the class itself and can be set as read-only. Static fields and methods are defined using the `static` keyword.

### Decorators (Not Exam Topic)

Decorators are functions attached to classes and class members. They allow you to modify or replace code. Decorated code is evaluated once when the program first runs, and decorators receive details about the decorated item. Class decorators are currently in stage 3 of proposal and are not yet supported by browsers but can be used through polyfilling.

### Class Instances as Objects (Not Exam Topic)

Class instances can be treated as objects and manipulated using Object methods. The prototype chain is used to search for properties and methods in class instances. Class constructors are also functions, and class fields become properties of instances.

# Objects, Serialization, Proxy, Closure, Polyfilling, and More on Class Prototype

## Working with Objects

Objects in JavaScript serve various purposes, including packaging related functions and variables, as well as packaging data for communication.

## Data Objects

You can create data objects using object literal notation:

```javascript
const student = {
  "fname": "Ole",
  "lname": "Olsen",
  "phone": ["11223344", "12345678", "87654321"],
  "courses": {
    "DAT152": "Advanced Web Applications",
    "DAT151": "Database and Unix System Administration"
  }
};
```

Additionally, you can use getters and setters for data objects.

## Syntaxes for Object Properties

Object property names do not always need to be quoted, except in JSON text where they must be quoted using double quotes.

```javascript
const o = {
  "propertyA": "some value",
  propertyB: "another value",
  "functionA": function (args) {...},
  functionB: function (args) {...},
  functionC(args) {...}
};

const JSONText = `{
  "propertyA": "some value",
  "propertyB": "another value"
}`;
```

## Using Objects

You can use objects in JavaScript both directly and through classes. For example:

Using Object:

```javascript
const o = {
  _course: "DAT152",
  init: function () {
    document.getElementById("bt").addEventListener("click", this._sayHello.bind(this));
  },
  _sayHello: function () {
    window.alert(`Welcome to ${this._course}`);
  }
};

o.init();
```

Using a single instance of Class:

```javascript
class Controller {
  #course = "DAT152";
  constructor() {
    document.getElementById("bt").addEventListener("click", this.#sayHello.bind(this));
  }
  #sayHello() {
    window.alert(`Welcome to ${this.#course}`);
  }
}

new Controller();
```

## Object or Class for Single Instance

If you need a single instance, it's probably best to use an object literal, as objects are easier to serialize with `JSON.stringify`. However, many new features are only available with classes, such as private fields and decorators.

## Properties of Object Properties

Object properties can have various attributes:

- Writable property: The value of the property can change by assignment.
- Enumerable property: It's visible when looping through the object.
- Configurable property: It can be deleted or have its type changed.
- Get property: A getter function for the property.
- Set property: A setter function for the property.

## Adding a Property with `Object.defineProperty`

You can create or modify properties using `Object.defineProperty`:

```javascript
const student = {};
Object.defineProperty(student, "fname", {
  value: "Ole",
  writable: true,
  enumerable: true,
  configurable: false
});
```

The defaults for property attributes depend on how the property is created.

## Managing Objects

You can define several properties at once using `Object.defineProperties`, prevent new properties from being added or arrays from being extended with `Object.seal` and `Object.freeze`, copy objects with `Object.create`, and use other Object methods for various operations.

## Data Objects with Getters and Setters

Getters and setters are functions that can be accessed as data properties:

```javascript
const student = {
  _fname: null,
  _reg: /\p{Lu}\p{Ll}+/u,
  get fname() { return this._fname },
  set fname(fname) {
    if (!this._reg.test(fname)) {
      throw new Error("Wrong format on first name");
    }
    this._fname = fname;
  }
};
```

You can also define getters and setters as properties using `Object.defineProperties`.

## Serialization of Objects

JSON is a common format for communication between client and server. Objects can be serialized to JSON text using `JSON.stringify`. Functions will be ignored or replaced with `null`.

## Approaches to Correctly Serialize Objects

To ensure correct object serialization, you can use various approaches, including:

1. Creating a `toJSON` method.
2. Managing the `enumerable` property for each property.
3. Using the Proxy class (details not covered).
4. Handling private properties through closure (details not covered).

## Method `toJSON`

If a `toJSON` method exists, it will be used to serialize the object:

```javascript
const student = {
  _name: "Ole Olsen",
  getName() { return this._name },
  setName(name) { this._name = name },
  toJSON() {
    return {
      "name": this.getName()
    }
  }
};
```

## Enumerable Property and Serializing Object

JSON.stringify will serialize properties only if they are enumerable. You can manage what to serialize by controlling the `enumerable` property of each property:

```javascript
const student = {
  _fname: null,
  _reg: /\p{Lu}\p{Ll}+/u,
  get fname() { return this._fname },
  set fname(fname) {
    if (!this._reg.test(fname)) {
      throw new Error("Wrong format on first name");
    }
    this._fname = fname;
  }
};

// Only serialize 'fname', not '_fname' and '_reg'
Object.defineProperties(student, {
  "_fname": { "enumerable": false },
  "_reg": { "enumerable": false }
});
```

## Serialize Instance of Class

JSON.stringify will only serialize public data fields. Getters are not serialized, and class methods do not belong to instances but to classes. JSON.stringify only serializes an object's own properties.

## Approaches to Correctly Serialize Instances of Class

To ensure correct serialization of class instances, you can use these approaches:

1. Create a `toJSON` method.
2. Use private class fields (supported only by newer browsers).

## Proxy (Not Subject for the Exam)

Proxies allow you to intercept various operations, including accessing properties of objects, creating new objects, making function calls, and more. Proxies can extend objects with new properties and support multiple proxies on the same object.

## Reflect (Not Subject for the Exam)

Reflect provides methods for working with objects, including getting properties from an object and more. It has similarities to methods of the Object class but is better suited for use with proxies.

## Closure Background

Closure is an approach for implementing private data in objects and classes. It