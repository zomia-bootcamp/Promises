// const resolved = false

// const myPromise = new Promise((resolved, rejected)=>{
// if(resolved){
//     resolved('yahoo!')
// }else {
//     rejected('oops!')
//     }
// })
// console.log(myPromise)

const promiseReturn = new Promise((resolve, reject)=> {
setTimeout(() => {
    resolve('resolved')
}, 1000);

})

console.log(promiseReturn)

const meProm = newPromise((resolved, rejected)=> {

    let num = Math.random()
    if(num > 0.5){
        resolved('iam good')
    }else{
        rejected('not fine')
    }
})

meProm.then(res => console.log(res)).catch(err => console.log(err))