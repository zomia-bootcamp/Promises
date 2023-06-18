```js
const prom = new Promise((resolve, reject) => {
  resolve('Yay!');
});
 
const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};
 
prom.then(handleSuccess); // Prints: 'Yay!'
```


/*
Run the code above and try to break down what's happening to get a better understanding of success handlers.
Use chatGPT for help.
*/
