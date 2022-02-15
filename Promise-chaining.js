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
    // console.log("Test....")
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

.then(()=>{
    return order(2000,()=>console.log("Production has Started"))
})

.then(()=>{
    return order(3000,()=>console.log("Fruits have been chopped....."))
})


.then(()=>{
    return order(1000,()=>  console.log(`Added ${stocks.liquid[0]} and ${stocks.liquid[1]} to the Machine.....`))
})

.then(()=>{
    return order(1000,()=>console.log("Started the machine......."))
})

.then(()=>{
    return order(2000,()=>console.log(`Seleceted ${stocks.holder[1]} as a container.....`))
})

.then(()=>{
    return order(2000,()=> console.log(`Selected ${stocks.toppings[1]} as toppings.....`))
})

.then(()=>{
    return order(1000,()=>{console.log("Your Ice-Cream is ready.. Here You Go.............")})
})