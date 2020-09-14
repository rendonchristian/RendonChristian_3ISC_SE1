class Rectangle{
    
}

function rectangle(length, height) {
    this.length = length;
    this.height = height;

    rectangle.prototype.calculatearea = function() {
        return this.length * this.height;
    };
}
let rect = new rectangle(5, 9);

console.log(rect.height);
console.log(rect.length);
console.log(rect.calculatearea());