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

### Exercises

Follow the instructions in [myFirstPromise.js](./exercises/myFirstPromise.js)

## setTimeout()

### Expirement

Run the code in [setTimeout.js](./Experiment/setTimeout.js), and follow the additional instructions.

##### What does setTimeout() do?
The Node `setTimeout()` function allows you to schedule tasks to be performed after a delay. This is useful for simulating asynchronous operations that return promises.

Instead of constructing promises, you'll primarily be working with promises returned to you as the result of an asynchronous operation. These promises start in a pending state and eventually settle.

For simulation purposes, we'll provide you with functions that return promises that settle after a certain time. To achieve this, we'll use `setTimeout()`, which is a Node API (similar APIs are available in web browsers).

Let’s look at how we’ll be using setTimeout() to construct asynchronous promises:

```js

const returnPromiseFunction = () => {
  return new Promise((resolve, reject) => {
    setTimeout(( ) => {resolve('I resolved!')}, 1000);
  });
};
 
const prom = returnPromiseFunction();

```

In the example code, we called `returnPromiseFunction()`, which returned a promise. We assigned that promise to the variable `prom`. Similar to the asynchronous promises you may encounter in real-world scenarios, `prom` will initially have a status of pending.

Now, let's delve deeper into `setTimeout()`.

### Exercises

Follow the instructions in [setTimeout.js](./exercises/setTimeout.js)

## Consuming Promises (.then() & .catch())

The initial state of an asynchronous promise is pending, but we know it will eventually settle. To specify what should happen when the promise settles, we can use the `.then()` method of Promise objects. It allows us to define the desired actions when the promise resolves or rejects.

![dishwasher example](https://content.codecademy.com/courses/updated_images/Art-347_v1_Updated_1-01.svg)

Using our dishwasher analogy:
- If the promise rejects (dirty dishes), we'll add soap and run the dishwasher again.
- If the promise fulfills (clean dishes), we'll put the dishes away.

`.then()` is a higher-order function that takes two callback functions as arguments, often referred to as handlers. The first handler, called onFulfilled, handles the success case when the promise resolves. The second handler, called onRejected, handles the failure case when the promise rejects.

We can choose to provide one, both, or neither of the handlers, depending on our needs. However, it's essential to be cautious, as omitting the appropriate handler can make debugging challenging. If a handler is not provided, `.then()` will return a new promise with the same settled value as the original promise.

An important aspect of `.then()` is that it always returns a promise. We'll explore this further in a later exercise to understand its significance.

To handle a successful promise, or a promise that has resolved, we use the `.then()` method on the promise. We pass in a success handler callback function as an argument to `.then()`:

```javascript
myPromise.then(successHandler);
```

### Expirement

Open [prom.js](./expirement/prom.js), and follow the instructions.

---

In typical promise consumption, we don't know beforehand if a promise will successfully resolve or encounter an error. Therefore, we need to handle both scenarios by providing logic for each case.

To handle both the success and failure outcomes of a promise, we can use the `.then()` method and pass two separate callback functions: one for success (resolve) and one for failure (reject).



```js
let prom = new Promise((resolve, reject) => {
  let num = Math.random();
  if (num < .5 ){
    resolve('Yay!');
  } else {
    reject('Ohhh noooo!');
  }
});
 
const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};
 
const handleFailure = (rejectionReason) => {
  console.log(rejectionReason);
};
 
prom.then(handleSuccess, handleFailure);
```

Let’s break down what’s happening in the example code:

* `prom` is a promise which will randomly either resolve with `'Yay!'` or reject with `'Ohhh noooo!'`.
* We pass two handler functions to `.then()`. The first will be invoked with `'Yay!'` if the promise resolves, and the second will be invoked with `'Ohhh noooo!'` if the promise rejects.
*Note: The success callback is sometimes called the “success handler function” or the `onFulfilled` function. The failure callback is sometimes called the “failure handler function” or the `onRejected` function.*

Let’s write some success and failure callbacks!

### Exercises

Follow the instructions given in [checkInventory.js](./exercises/checkInventory.js)



