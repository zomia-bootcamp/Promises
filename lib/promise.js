// const resolved = true;

// const myPromise = new Promise((resolve, reject) => {
//     if(resolved) {
//         resolve('yahoo! resolved');
//     } else {
//         reject('oops! rejected');
//     }
// });

// console.log(myPromise);

// const promiseReturn = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('resolved');
//     }, 2000);
// });


const numPromise = new Promise((resolve, reject) => {
    let num = Math.random();
    if (num < 0.5) {
        resolve('My cup is half full');
    } else {
        reject('Nothing in my cup');
    }
});

numPromise.then(res => console.log(res)).catch(err => console.log(err));