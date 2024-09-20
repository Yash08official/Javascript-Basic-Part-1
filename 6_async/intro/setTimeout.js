// Javascript is a single threaded synchronous language but use of callbacks, promises, event loop, it can behave asynchronously



//setTimeout is a web api , this is provided to us by browser WHICH allows us to execute some code after some delay





// set time out takes a callback function in it and also takes a timer at the end 
// a function which is passed as an argument

setTimeout(() => {
    console.log("Python");
}, 1000);

setTimeout(() => {
    console.log("javascript");
}, 2000);

setTimeout(() => {
    console.log("Java");
}, 3000);

// It means that you are adding a delay and a piece of code adding in some time