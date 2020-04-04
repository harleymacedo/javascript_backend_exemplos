function doSomethingAsync() {
    return new Promise(resolve => {
        setTimeout(() => resolve('I did something'), 3000)
    })
}

async function doSomething() {   
    console.log('Before')
    console.log(await doSomethingAsync())
    console.log('After')
}

doSomething()
