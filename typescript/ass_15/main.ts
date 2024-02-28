const guestList1: string[] = ["Shahmeer", "Hanzala", "Danish"]

console.log("Dear", guestList1[0], "I would like to invite you to dinner.")
console.log("Dear", guestList1[1], "I would like to invite you to dinner.")
console.log("Dear", guestList1[2], "I would like to invite you to dinner.")

console.log("\nUnfortunately", guestList1[2], "wouldn't be able to attend the dinner")


guestList1[2] = "Ammar"

console.log("\nDear", guestList1[0], "I would like to invite you to dinner.")
console.log("Dear", guestList1[1], "I would like to invite you to dinner.")
console.log("Dear", guestList1[2], "I would like to invite you to dinner.")