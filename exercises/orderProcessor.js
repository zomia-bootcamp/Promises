/*

1. Take a look at the provided code.
We use `import` to include the function `checkInventory()` from library.js. It builds on the logic of the `orderSunglasses()` function you wrote in a previous exercise.

`checkInventory()` takes in an array representing an order and returns a promise.
If every item in the order is in stock, that promise resolves with the value "Thank you. Your order was successful."
Otherwise, the promise rejects with the value "We're sorry. Your order could not be completed because some items are sold out".
We used `setTimeout()` to ensure that the `checkInventory()` promise settles asynchronously.

Look at the lib/inventory.js file to see how it works. 

2. Write a function, handleSuccess(). 
It should have one parameter, representing a resolved value. 
Inside the body of handleSuccess(), log the parameter to the console.

3. Write a function, handleFailure().
It should have one parameter, representing a rejection reason. 
Inside the body of handleFailure(), log the parameter to the console.

4. Invoke checkInventory() with order. 
This will return a promise. Attach a .then() function to this. 
Pass into .then() the two handlers you wrote as callback functions.

5. Run your code

*/


import {checkInventory} from './lib/inventory.js'

const order = [['sunglasses', 1], ['bags', 2]];

// Write your code below:


