let order = (call_production) => {
    console.log("Product Order have been placed !!! Continue to Production")
    call_production();
}

let production = () => {
    console.log("Production Line have Been started ! Ice-Creams on their Way .......");
}

order(production);