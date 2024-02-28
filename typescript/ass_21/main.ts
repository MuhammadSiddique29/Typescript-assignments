// Object structure for countries
type Country = {
    name: string
    capital: string
    population: number
    language: string
    area: number
};



let Pakistan: Country = {
    name: "Pakistan",
    capital: "Islamabad",
    population: 243_549_101,
    language: "Urdu",
    area: 881_913
}
let America: Country = {
    name: "America",
    capital: "Washington D.C",
    population: 341_183_724,
    language: "English",
    area: 3_796_742
}
let China: Country = {
    name: "China",
    capital: "Beijing",
    population: 1_425_348_764,
    language: "Chinese",
    area: 9_596_960
}
let Russia: Country = {
    name: "Russia",
    capital: "Moscow",
    population: 144_124_753,
    language: "Russian",
    area: 17_098_246
}

let Germany: Country = {
    name: "Germany",
    capital: "Berlin",
    population: 83_267_021,
    language: "German",
    area: 357_592 
}




console.log("Pakistan:", Pakistan)
console.log("America:", America)
console.log("China:", China)
console.log("Russia:", Russia)
console.log("Germany:", Germany)