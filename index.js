let is_shop_open = true;

const stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["Cone", "Cup", "Stick"],
    toppings : ["chocolate", "peanuts"],
 };


// let order = (time,work) => {

//     return new Promise((resolve,reject)=>{
//         if(is_shop_open){
//             resolve()
//         }else{
//             reject(console.log("Order is rejected"))
//         }
//     })
// }

const order = (time,work) => {
    console.log("Test....")
    return new Promise((resolve,reject)=>{
        if(is_shop_open){
            setTimeout(()=>{
                resolve(work())
            },time)
        }else{
            reject(console.log("Shop Is Closed ....."))
        }
    })
}

order(2000,
    ()=>console.log(`${stocks.Fruits[0]} was selected`)
)