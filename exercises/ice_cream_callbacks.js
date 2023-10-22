//Get order from customer, fetch ingredients, start production, serve 

let stocks = { 
    Fruits : ["strawberry", "grapes", "banana", "apple"], 
    Liquid : ["water", "ice "], 
    Holder : ["cone", "cup", "stick"], 
    Toppings : ["chocolate", "peanuts"]
}

let order = (Fruit_name, call_production) => {

    setTimeout(() => {
        console.log(`${stocks.Fruits[Fruit_name]} was selected`)

        call_production() 
    }, 2000)
    
    

}

let production = () => { 

    setTimeout(() => { 
        console.log("production has started")

        setTimeout(() => { 
            console.log("the fruit has been chopped")

            setTimeout(() => { 
                console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} was added`)

                setTimeout (() => {
                    console.log("The machine was started.");

                    setTimeout(() => {
                        
                        console.log(`icre cream was placed on ${stocks.Holder[0]}`);

                        setTimeout(() => { 
                            console.log(`${stocks.Toppings[0]} was added as topping`); 

                            setTimeout(() => {
                                console.log("Serve ice cream");

                            }, 2000)

                        }, 3000);

                    }, 2000);

                }, 1000);

            }, 1000); 

        }, 2000);

    }, 0)
    console.log(""); 
}

order(0, production) 

//Store room = Backend 
//Kitchen = Frontend 

