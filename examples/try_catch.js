
let order = () => { 
    return new Promise((resolve, reject) => {
        if(true) {
            resolve()
        } 
        else {
            reject()
        }

    })
}

order() 

//resolve
.then()
.then()
.then()

//reject
.catch()

//finally
.finally()


async function order() { 
    try { 
        await abc
    }
    catch(error) { 
        console.log("abc doesn't exist", error)
    }

    finally { 
        console.log("runs code anyway")
    }
}

order()

.then(() => { 
    console.log("sdfhsdjfs")
})