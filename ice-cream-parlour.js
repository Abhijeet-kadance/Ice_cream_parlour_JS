const stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["Cone", "Cup", "Stick"],
    toppings : ["chocolate", "peanuts"],
 };

 let welcome = () => {
    console.log(`Please Select a Fruit to continue : 
    [0].Strawberry
    [1].Greapes
    [2].Banana
    [3].Apple`);
 }
 let order = (Stock_item,call_production) => {
     setTimeout(()=>{
        console.log(`You have selected : ${stocks.Fruits[Stock_item]}`);
        call_production();
     },2000)

 }

 let production = () => {
     setTimeout(()=>{
        console.log("Icream Poduction Line is ON.........")
        setTimeout(()=>{
            console.log("Fruits have been chopped.....")
            setTimeout(()=>{
                console.log(`Added ${stocks.liquid[0]} and ${stocks.liquid[1]} to the Machine.....`)
                setTimeout(()=>{
                    console.log("Started the machine.......")
                    setTimeout(()=>{
                        console.log(`Seleceted ${stocks.holder[1]} as a container.....`)
                        setTimeout(()=>{
                            console.log(`Selected ${stocks.toppings[1]} as toppings.....`)
                            setTimeout(()=>{
                                console.log("Hurray Your Icream is Ready. Here you go.....")
                            },2000)
                        },3000)
                    },2000)
                },1000)
            },1000)
        },2000)
    },2000)
  
 }
 welcome();
 order(0,production)