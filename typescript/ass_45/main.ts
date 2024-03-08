
interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any;
}

function makeCar(manufacturer: string, model: string, moreOptions: {[key: string]: any}): Car {
    const car: Car = {manufacturer, model, ...moreOptions}
    return car
}

let myCar = makeCar("Honda", "Civic", {color: "Black", condition: "modified"} )
console.log(myCar)

console.log("\n")

let myNewCar = makeCar("Toyota", "Corolla", {color: "White", condition: "genuine"} )
console.log(myNewCar)