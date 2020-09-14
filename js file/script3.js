function min() {
    if(arguments[0] instanceof Array)
    arguments = arguments[0];

    return Math.min.apply( Math, arguments);
}

var min = min(1, 2, 3, 4, 5);

console.log("the smallest element is " + min);