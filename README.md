# throw-if-true

A tiny utility to throw error if given param is truthy.

## Install

```bash
$ yarn add throw-if-true
```

## Examples

```js
const httpErrors = require('http-errors');
const throwIfTrue = require('throw-if-true');

const doc = functionThatReturnsFromDb();

// Throws Error with no message
throwIfTrue(!!doc);

// Throws Error with message 'Doc is not set'
throwIfTrue(!!doc, 'Doc is not set');

// Throws NotFoundError with message 'Doc not set'
throwIfTrue(!!doc, httpErrors.NotFound, 'Doc not set');
```
