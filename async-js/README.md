# Async JavaScript

## What is the call stack?
Mechanism for an interpreter to keep track of its place in a script that calls multiple functions.
A stack is basic data structure which implements LIFO method - last in first out - e.g. think about stack of pancakes.

JS is single threaded, which means it can run line of code at a time.

### What is a callback? 
Function passed into another function as an argument, which is invoked inside the outer function.

## What is a promise? 
Represents the eventual completion (or failure) of an asynchronous operation, and its resulting value

## What is the async keyword?
- Async functions return a promise
- if function returns a value, promise will be resolved with that value 
- if function throws exception, promise will be rejected