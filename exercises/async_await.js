
let stocks = { 
    Fruits : ["strawberry", "grapes", "banana", "apple"], 
    Liquid : ["water", "ice "], 
    Holder : ["cone", "cup", "stick"], 
    Toppings : ["chocolate", "peanuts"]
}

let shopOpen = true; 

    function time(ms) { 
        return new Promise( (resolve, reject) => { 
            if(shopOpen) {
                setTimeout(resolve, ms) 

            }
            else { 
                reject(console.log("shop is closed"))
            }
        });
    }

async function kitchen () { 
    try{

        await time(2000)
        console.log(`${stocks.Fruits[0]}`)

        await time(0)
        console.log("start the production")

        await time(1000)
        console.log("cut the fruit")

        await time (3000)
        console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} was selected`)

        await time (1000)
        console.log("The machine was started")

        await time (2000)
        console.log(`Ice cream was placed on ${stocks.Holder[0]}`)

        await time (3000)
        console.log(`${stocks.Toppings[0]} was added as topping`)
        
        await time (2000)
        console.log("Serve ice cream")

    }
    catch (error){
        console.log("customer left",error)

    }
    finally{
        console.log("day ended, shop is closed")
    }
}


kitchen(); 




// let toppingsChoice = () => { 
//     return new Promise ( ( resolve, reject) => { 
//         setTimeout(() => {

//             resolve(
//                 console.log("Which topping would you love?")
//             )
            
//         }, 3000);
//     })
// }


// async function Kitchen () { 
//     console.log("A")
//     console.log("B")
//     console.log("C")

//     await toppingsChoice()

//     console.log("D")
//     console.log("E")
// }

// Kitchen()

// console.log("Doing the dishes")
// console.log("Cleaning the tables")
// console.log("Taking other orders")
