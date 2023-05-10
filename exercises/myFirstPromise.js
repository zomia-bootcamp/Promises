/*

We’re going to create a promise representing ordering sunglasses from an online store. 

1. First, create the function, myExecutor(). Later on, you’ll pass this function into the Promise constructor.

myExecutor() should:

- Have two parameters: resolve and reject
- Check if the sunglasses property on the inventory object has a value greater than zero
- If it does, myExecutor() should invoke resolve() with the string 'Sunglasses order processed.'
- If it does not, myExecutor() should invoke reject() with the string 'That item is sold out.'

2. Create a function, orderSunglasses(). 
- This function should have no parameters. 
- It should return a new promise constructed by passing your myExecutor() function into the Promise constructor.

3. Create a variable orderPromise assigned to the returned value of your orderSunglasses() function.

4. At the bottom of your app.js file, log orderPromise to the console.

5. Run your code in the bash terminal using the command `node ./exercises/myFirstPromise.js`

6. When you'r done, paste the final code in chatGPT and try to understant the full process you have created.

*/

const inventory = {
  sunglasses: 1900,
  pants: 1088,
  bags: 1344
};

// Write your code below:
