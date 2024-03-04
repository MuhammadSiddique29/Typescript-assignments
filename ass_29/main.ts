let favoriteFruits: string[] = ["apple", "orange", "banana"];

if(favoriteFruits.indexOf("apple") !== -1){
    console.log("You really like apple!")
}


if(favoriteFruits.indexOf("orange") !== -1){
    console.log("You really like orange!")
}


if(favoriteFruits.indexOf("banana") !== -1){
    console.log("You really like banana!")
}


// These are not present in the array so it will not print anything
if(favoriteFruits.indexOf("grape") !== -1){
    console.log("You really like grape!")
}


if(favoriteFruits.indexOf("mango") !== -1){
    console.log("You really like mango!")
}