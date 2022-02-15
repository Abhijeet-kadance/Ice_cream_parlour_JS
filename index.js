// Async and Await

const stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["Cone", "Cup", "Stick"],
    toppings : ["chocolate", "peanuts"],
 };

// async function kitchen(){

//     let abc = "hey";
//     try{
//         await console.log(abc);
//     }
//     catch(error){
//         console.log("Not woking.....",error)
//     }
//     finally{
//         console.log("GoodBye...")
//     }
// }

function topping_choice(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(console.log(`You have selected ${stocks.toppings[0]} as your topping..`))
        },2000)
    })
}

async function kitchen(){
    console.log('A');
    console.log('B');
    console.log('C');

    await topping_choice();

    console.log('D');
    console.log('E');
}
kitchen()
console.log("doing the dishes")
console.log("cleaning the tables")
console.log("taking orders")
