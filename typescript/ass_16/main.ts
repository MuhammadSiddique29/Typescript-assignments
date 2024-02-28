
// Exercise 15
let guestList2: string[] = ["Shahmeer", "Hanzala", "Danish"]

console.log("Dear", guestList2[0], "I would like to invite you to dinner.")
console.log("Dear", guestList2[1], "I would like to invite you to dinner.")
console.log("Dear", guestList2[2], "I would like to invite you to dinner.")

console.log("\nUnfortunately", guestList2[2], "wouldn't be able to attend the dinner")

guestList2[2] = "Ammar"

console.log("\nDear", guestList2[0], "I would like to invite you to dinner.")
console.log("Dear", guestList2[1], "I would like to invite you to dinner.")
console.log("Dear", guestList2[2], "I would like to invite you to dinner.")

console.log("\nThis is a message to inform you that I have found a bigger dinner table\n")


// Exercise 16
guestList2.unshift("Ali")
console.log(guestList2)

guestList2.splice(2,0,"Kamran")
console.log(guestList2)

guestList2.push("Danial")
console.log(guestList2)