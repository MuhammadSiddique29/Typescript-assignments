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



// Exercise 17
console.log("Sorry for the inconvenience but I can only invite two peoples\n")

guestList2.pop()
console.log(guestList2)
console.log("Sorry Danial, I can't invite you for dinner\n")

guestList2.pop()
console.log(guestList2)
console.log("Sorry Ammar, I can't invite you for dinner\n")

guestList2.pop()
console.log(guestList2)
console.log("Sorry Hanzala, I can't invite you for dinner\n")

guestList2.pop()
console.log(guestList2)
console.log("Sorry Kamran, I can't invite you for dinner\n")


console.log(guestList2[0],",", "you are still invited")
console.log(guestList2[1],",", "you are still invited")