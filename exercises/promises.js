//promise is made >> pending >> resolve OR reject >> .then OR catch >> .finally 

let stocks = { 
    Fruits : ["strawberry", "grapes", "banana", "apple"], 
    Liquid : ["water", "ice "], 
    Holder : ["cone", "cup", "stick"], 
    Toppings : ["chocolate", "peanuts"]
}

let shopOpen = false; 

let order = (time, work) => { 

    return new Promise( (resolve, reject) => {
        
        if(shopOpen) { 

            setTimeout(() => { 
                
                resolve(work() )
            }, time)
        }
        else { 
            reject(console.log("our shop is closed."))
        }

    } )

}

order(2000, () => console.log(`${stocks.Fruits[0]} was selected`))

//promise chaining 
.then(() => { 
    return order(0, () => console.log("Production has started"))
})
.then(() => { 
    return order(2000, () => console.log("The fruit was chopped."))
})
.then(() => { 
    return order(1000, () => console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} was selected`))
})
.then(() => { 
    return order(1000, () => console.log("The machine was started"))
})
.then(() => { 
    return order(2000, () => console.log(`Ice cream was placed on ${stocks.Holder[0]}`))
})
.then(() => { 
    return order(3000, () => console.log(`${stocks.Toppings[0]} was added as topping`))
})
.then(() => { 
    return order(2000, () =>  console.log("Serve ice cream"))
})

.catch(() => console.log("customer left"))

.finally(() => { 
    console.log("day ended, shop is closed")
})