# Week 2 Learning Summary

This week was a big jump for me. I moved from writing basic JavaScript to understanding how real apps handle data, asynchronous behavior, errors, and object behavior under the hood.

## Day 1: Scope, Template Literals, and String Methods

I started by learning how variable scope works in JavaScript.

- I understood the difference between global scope and local scope.
- I learned that inner functions can access outer variables, but outer code cannot access inner function variables (scope chain).
- I practiced template literals and saw how much cleaner they are than string concatenation.
- I revised important string methods like `trim()`, `toLowerCase()`, `toUpperCase()`, `includes()`, `replace()`, `split()`, and `slice()`.

Big practical learning: always clean and normalize user input (especially email strings) before validation.

## Day 2: Destructuring (Arrays and Objects)

Today I learned how to extract values in a cleaner way using destructuring.

- Array destructuring helped me pick values by position in one line.
- I learned skipping elements and using the rest operator (`...rest`) for remaining values.
- Object destructuring helped me extract values by property name.
- I practiced renaming properties while destructuring and setting default values.
- I worked with nested destructuring for API-like objects.
- I also learned object-to-map conversion using `Object.entries()` and `Object.fromEntries()` for easy iteration with `for...of`.

Big practical learning: destructuring makes API response handling cleaner and less error-prone.

## Day 3: Promises Basics

This day was about asynchronous programming foundations.

- I understood that a Promise has three states: pending, fulfilled, and rejected.
- I learned how to create promises with `new Promise((resolve, reject) => {})`.
- I practiced handling success and failure using `.then()` and `.catch()`.
- I learned `.finally()` for cleanup logic that should run in both success and failure.
- I practiced promise chaining and understood how data passes from one `.then()` to the next.

Big practical learning: one `.catch()` at the end can handle errors from the full chain.

## Day 4: Async/Await

I learned a cleaner way to work with promises.

- I understood that `async` functions always return a promise.
- I used `await` to pause execution until a promise resolves.
- I practiced `try...catch...finally` for readable async error handling.
- I compared `.then()` chains vs async/await and found async/await easier to read for step-by-step operations.
- I learned where `Promise.all()` is useful to run independent async tasks in parallel.

Big practical learning: async/await improves readability, but it is still promise-based under the hood.

## Day 5: Global Error Handling (`window.onerror`)

This day helped me understand production-level error strategy.

- I revised built-in error types like `ReferenceError`, `TypeError`, and `SyntaxError`.
- I learned the limitation of local `try...catch` (it only catches errors inside its own block).
- I studied `window.onerror` as a last-resort global error reporting hook.
- I understood the parameters passed to `window.onerror`: message, file URL, line, column, and error object.
- I learned that global handlers are for reporting/observability, not true recovery.

Big practical learning: good error handling has layers.

1. Local handling with `try...catch`
2. Escalation with `throw`
3. Final global capture with `window.onerror`

## Day 6: Prototypes and Class Internals

Today I learned what JavaScript classes actually are behind the scenes.

- I understood prototypes and the prototype chain lookup process.
- I learned that `class` is syntactic sugar over constructor functions + prototype methods.
- I saw why methods are placed on the prototype: memory efficiency and shared behavior.
- I understood method lookup flow when calling something like `user1.sayHi()`.
- I learned key differences between regular constructor functions and classes:
  - Classes must be called with `new`
  - Class methods are non-enumerable
  - Class bodies run in strict mode automatically

Big practical learning: JavaScript OOP is fundamentally prototype-based, even when using `class` syntax.

## My Overall Week 2 Growth

By the end of Week 2, I became much more confident with core JavaScript concepts that are directly useful in QA automation and test scripting.

- I can clean and validate input data more reliably.
- I can read and reshape structured data using destructuring.
- I can handle asynchronous flows with both promises and async/await.
- I can design better error handling, including fallback global reporting.
- I now understand how object behavior and method sharing work internally through prototypes.

## What This Means for QA Automation

These concepts are directly useful for real automation work:

- Better test data handling and string normalization
- Cleaner parsing of API responses
- Stronger handling of async test steps and API calls
- More robust error capture and debugging in browser-based test flows
- Better understanding of JS internals for writing scalable, maintainable automation code

## Final Reflection

Week 2 was not just about syntax. It changed how I think about JavaScript execution flow, async behavior, and error reliability. I now feel more prepared to write professional-level automation scripts with cleaner structure and better debugging support.
