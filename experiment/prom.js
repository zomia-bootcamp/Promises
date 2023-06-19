
const prom = new Promise((resolve, reject) => {
  resolve('Yay!');
});
 
 
prom.then(res => console.log(res)); // Prints: 'Yay!'



/*
Run the code above and try to break down what's happening to get a better understanding of success handlers.
Use chatGPT for help.
*/
const numPromise = new Promise((resolve, reject) => {
let num=Math.random()
if(num>0.5){
  resolve('my cup is half fall ')
}else{
  reject('nothing')
}
})
numPromise.then(res =>console,log(res)).catch(err =>console.log(err))
