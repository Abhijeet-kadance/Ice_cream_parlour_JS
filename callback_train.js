// Process start as Production of ice creame from Getting the items from the store room to add to the production Line
// 1. Get Sticks , cone and cup from the store room and Bring them to Production Line 
// 2. Bring Ice and Water from the Fredge
// 3. Bring Flavour and toppins to add
// 4. Add Ice , water to the Proction machine
// 5. Add Flour to the Production machine
// 6. Create Ice-Cream 
// 7. Add topping 
// 8. Serve




/* Creating a stocks array */

// const Stock = {
//     holders = ["Cup","Stick","cone"],
//     fridge = ["ice","water"],
//     flavours = ["mango","vanilla","strawberry"],
//     toppings = ["sprinklers","chocolate-syrup"]
// }

/* Chhosing a Holder and getting it from the Store Room */

let holder_selection = (call_getting_liquid_to_machine) => {
    console.log("Please choose a Ice-Cream holder to Continue");
    console.log("Choose Stick holder")
    call_getting_liquid_to_machine();
}

let getting_liquid_to_machine = (call_add_Flavour_to_ice_cream) => {
    console.log("Adding Water and Ice to Machine ...");
    add_Flavour_to_ice_cream(add_toppings);
   
}
let add_Flavour_to_ice_cream = (call_add_toppings) => {
   console.log("Added mango Flavour to Machine ......");
   call_add_toppings(); 
}

let add_toppings = (call_serve_ice_cream) =>{
    console.log("Added Sprinkler to the Ice-ream .....")
    serve_ice_cream();
   
}

let serve_ice_cream = () => {
    console.log("Here is the Ice-Cream you asked for .....")
}

holder_selection(getting_liquid_to_machine);