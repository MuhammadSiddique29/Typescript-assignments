let favPlaces: string[] = ["Tokyo", "Newyork", "Venice", "Paris", "London"]
console.log(favPlaces)


// This method print the array in alphabetical order
console.log("\n", [...favPlaces].sort())


// The original array still exists
console.log("\n", favPlaces)


// It reverse the alphabetical order
console.log("\n", [...favPlaces].sort().reverse())


// The orginal array still exists
console.log("\n", favPlaces)


// Reverse the order of the list
favPlaces.reverse()
console.log("\n", favPlaces)


// Again reverse the order of the list
favPlaces.reverse()
console.log("\n", favPlaces)


// Original array has changed
favPlaces.sort()
console.log("\n", favPlaces)


// Array is changed to reverse alphabetical order
favPlaces.sort().reverse()
console.log("\n", favPlaces)