// const resolved = true;

// const myPromise = new Promise((resolve , reject) => {
//     if(resolved){
//         resolve('yahoo! resolved')
//     }else{
//         reject('opps! rejected')
//     }

// });

// console.log(myPromise);

// const promiserReturn = new Promise((resolved,reject) =>{
//     setTimeout(() => {
//         resolved('resolved')
//     }, 1000)
// })

// console.log(promiserReturn);// shows Promise { <pending> }
// //.than is a success handler
// //our code to stop pending we should use 
// promiserReturn.then();
// //.catch is a error handler





const numPromise = new Promise((resolve,reject)=> {
    let num = Math.random()
    if(num > 0.5){
        resolve('my cup is half full')
    }else{
        reject('noting in my cup')
    }

})
// const success = (res) =>{
//     console.log(res)
// }

const success =(res) => {
    Object.keys(res).forEach(e => console.log(e))
}
numPromise.than(success).catch(err => console.log(err));