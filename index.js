function receivesAFunction (cbF) {
    return cbF();
}



function returnsANamedFunction () {
    return function named () {
        return "Hello"
    }
}

function returnsAnAnonymousFunction () {
    return function () {
        return "hello!"
    }
}