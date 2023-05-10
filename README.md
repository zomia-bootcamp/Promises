# Promises

## Objectives:
- Understand the anatomy of a Promise
- Use Promises to manage asynchronous operations
- Correctly use a Promise chain
- Handle errors while working with Promises

## Preparation

1. Fork and clone this repository.
1. Create a new branch, `training`, for your work.
1. Install dependencies with `npm install`.

## Introduction
In web development, asynchronous programming is often considered a challenging topic.

## Asynchronous Operations

### Self Study

**Asynchronous** operations let the computer do other tasks while waiting for one task to finish. It helps prevent the whole program from getting blocked by time-consuming tasks.

Asynchronicity is like when we clean a house. We can use a dishwasher or a washing machine, which work asynchronously. While they're doing their job, we can do other tasks.

In web development, we use asynchronicity to make network requests or query databases. JavaScript lets us do other things while waiting for these operations to finish.

This lesson will teach you how modern JavaScript handles asynchronicity using the `Promise` object, introduced in ES6. Let's get started!


Watch this [video](https://www.youtube.com/watch?v=8aGhZQkoFbQ) for more clarity.


## What is a Promise?
Promises are objects that represent what will happen when an asynchronous operation finishes. A `Promise` object can be in three states:

- **Pending:** The operation is still going on and hasn't finished yet.
- **Fulfilled:** The operation completed successfully, and the promise now has a result. For example, a promise from a request might have a JSON object as its result.
- **Rejected:** The operation failed, and the promise has a reason for the failure. This reason is usually an `Error`.

We refer to a promise as *settled8 if it is no longer pending— it is either fulfilled or rejected. Let’s think of a dishwasher as having the states of a promise:

![dishwasher diagram](https://content.codecademy.com/courses/learn-javascript-promises/Art-346-01.svg)

* **Pending:** The dishwasher is running but has not completed the washing cycle.
* **Fulfilled:** The dishwasher has completed the washing cycle and is full of clean dishes.
* **Rejected:** The dishwasher encountered a problem (it didn’t receive soap!) and returns unclean dishes.

If our dishwashing promise is fulfilled, we’ll be able to perform related tasks, such as unloading the clean dishes from the dishwasher. If it’s rejected, we can take alternate steps, such as running it again with soap or washing the dishes by hand.

All promises eventually settle, enabling us to write logic for what to do if the promise fulfills or if it rejects.

## Constructing a Promise Object
Let’s construct a promise! To create a new `Promise` object, we use the new keyword and the `Promise` constructor method:

```js
const executorFunction = (resolve, reject) => { };
const myFirstPromise = new Promise(executorFunction);
```

The `Promise` constructor method takes a function parameter called the *executor function* which runs automatically when the constructor is called. The executor function generally starts an asynchronous operation and dictates how the promise should be settled.

The executor function has two function parameters, usually referred to as the `resolve()` and `reject()` functions. The `resolve()` and `reject()` functions aren’t defined by the programmer. When the Promise constructor runs, JavaScript will pass its own `resolve()` and `reject()` functions into the executor function.

* `resolve` is a function with one argument. Under the hood, if invoked, `resolve()` will change the promise’s status from `pending` to `fulfilled`, and the promise’s resolved value will be set to the argument passed into `resolve()`.
* `reject`  is a function that takes a reason or error as an argument. Under the hood, if invoked, `reject()` will change the promise’s status from `pending` to `rejected`, and the promise’s rejection reason will be set to the argument passed into `reject()`.

Let’s look at an example executor function in a Promise constructor:

```js
const executorFunction = (resolve, reject) => {
  if (someCondition) {
      resolve('I resolved!');
  } else {
      reject('I rejected!'); 
  }
}
const myFirstPromise = new Promise(executorFunction);
```

Let’s break down what’s happening above:

* We declare a variable `myFirstPromise`
* `myFirstPromise` is constructed using `new Promise()` which is the `Promise` constructor method.
* `executorFunction()` is passed to the constructor and has two functions as parameters: `resolve` and `reject`.
* If `someCondition` evaluates to true, we invoke `resolve()` with the string `'I resolved!'`
* If not, we invoke `reject()` with the string `'I rejected!'`

In our example, `myFirstPromise` resolves or rejects based on a simple condition, but, in practice, promises settle based on the results of asynchronous operations. For example, a database request may fulfill with the data from a query or reject with an error thrown. In this exercise, we’ll construct promises which resolve synchronously to more easily understand how they work.

## Exercises

Follow the instructions in [myFirstPromise.js](./exercises/myFirstPromise.js)




