// let c1 = {name: "cinema 1", location: "north edsa", capacity: 500 };
// function show()
// {
//     console.log(${this.name} isSh);
// }
// let newFunction = courses.bind(symbol);

let symbol = {name: "UST", Location: "Manila", Population: 500 };
function courses(){
    console.log(`${this.name} offers`);
}
let newFunction = courses.bind(symbol);