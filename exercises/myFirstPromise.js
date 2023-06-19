/*

We’re going to create a promise representing ordering sunglasses from an online store. 

1. First, create a variable `orderSunglasses` that will construct a new promise.

new Promise() should:

- Have two parameters: resolve and reject
- Check if the sunglasses property on the inventory object has a value greater than zero
- If it does, invoke resolve() with the string 'Sunglasses order processed.'
- If it does not, invoke reject() with the string 'That item is sold out.'


2. At the bottom of your app.js file, log orderSunglasses to the console.

3. Run your code in the bash terminal using the command `node ./exercises/myFirstPromise.js`

4. When you'r done, paste the final code in chatGPT and try to understand the full process you have created.

*/

const inventory = {
  sunglasses: 1900,
  pants: 1088,
  bags: 1344
};

// Write your code below:
const orderSunglasses = true
const myPromise = new Promise((resolve, reject) => {
	if (inventory.orderSunglasses>0) {
		resolve('Sunglasses order processed.')
	} else {
		reject('That item is sold out.')
	}
	console.log(orderSunglasses)
})