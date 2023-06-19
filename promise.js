// const resolved = !true

// const myPromise = new Promise((resolve, reject)=>{
//     if(resolved){
//         resolve('yohoo! resolved')
//     }else {
//         reject('opps! rejected')
//     }
// })

// console.log(myPromise)

// const promiseReturn = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve('resolved')
        
//     }, 3000)
// })


// promiseReturn.then(/*success handlers*/)


const numPromise = new Promise((resolve,reject)=> {
    let num = Math.random()
    if (num < 0.5) {
        resolve('my cup is half full')
    } else {
        reject('cup is empty')
    }
})

numPromise.then(res => console.log(res)).catch(err => console.log(err))